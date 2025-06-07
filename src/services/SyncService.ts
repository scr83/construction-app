import { OfflineStorageService, SyncItem } from './OfflineStorageService';

export class SyncService {
  private offlineStorage: OfflineStorageService;
  private isSyncing = false;
  private syncInterval: NodeJS.Timeout | null = null;
  
  constructor(offlineStorage: OfflineStorageService) {
    this.offlineStorage = offlineStorage;
    
    // Intentar sincronizar cuando haya conexión
    window.addEventListener('online', () => {
      this.syncPendingItems();
    });
    
    // Configurar sincronización periódica
    this.startPeriodicSync();
  }
  
  private startPeriodicSync(intervalMs = 60000) {
    // Verificar cada minuto si hay elementos para sincronizar
    this.syncInterval = setInterval(() => {
      if (navigator.onLine) {
        this.syncPendingItems();
      }
    }, intervalMs);
  }
  
  private stopPeriodicSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
  }
  
  async syncPendingItems(): Promise<void> {
    if (this.isSyncing || !navigator.onLine) return;
    
    this.isSyncing = true;
    
    try {
      const pendingItems = await this.offlineStorage.getPendingSyncItems();
      
      if (pendingItems.length === 0) {
        this.isSyncing = false;
        return;
      }
      
      console.log(`Syncing ${pendingItems.length} pending items...`);
      
      // Procesar en orden FIFO
      for (const item of pendingItems) {
        try {
          await this.processSyncItem(item);
          await this.offlineStorage.removeSyncItem(item.id!);
        } catch (error) {
          console.error(`Error syncing item ${item.id}:`, error);
          // Continuar con el siguiente item en caso de error
        }
      }
    } catch (error) {
      console.error('Error during sync:', error);
    } finally {
      this.isSyncing = false;
    }
  }
  
  private async processSyncItem(item: SyncItem): Promise<void> {
    switch (item.type) {
      case 'photo':
        return this.syncPhoto(item.data, item.action);
      // Añadir más tipos según sea necesario
      default:
        throw new Error(`Unknown sync item type: ${item.type}`);
    }
  }
  
  private async syncPhoto(photoData: any, action: string): Promise<void> {
    // Configurar los datos para subir al servidor
    const formData = new FormData();
    
    // Si es un objeto File real, usarlo; si no, podría ser un blob serializado
    if (photoData.file instanceof File) {
      formData.append('file', photoData.file);
    } else if (photoData.localUrl) {
      // Convertir dataURL a blob si es necesario
      try {
        const response = await fetch(photoData.localUrl);
        const blob = await response.blob();
        formData.append('file', blob, 'photo.jpg');
      } catch (error) {
        console.error('Error processing photo data:', error);
        throw error;
      }
    } else {
      throw new Error('No valid photo data found');
    }
    
    // Añadir los metadatos
    formData.append('projectId', photoData.projectId);
    if (photoData.description) {
      formData.append('description', photoData.description);
    }
    formData.append('createdAt', photoData.createdAt);
    
    // Determinar la URL y método según la acción
    let url = '/api/photos';
    let method = 'POST';
    
    if (action === 'update' && photoData.id) {
      url = `/api/photos/${photoData.id}`;
      method = 'PUT';
    } else if (action === 'delete' && photoData.id) {
      url = `/api/photos/${photoData.id}`;
      method = 'DELETE';
    }
    
    // Enviar al servidor
    const response = await fetch(url, {
      method,
      body: action === 'delete' ? undefined : formData,
    });
    
    if (!response.ok) {
      throw new Error(`Failed to sync photo: ${response.statusText}`);
    }
  }
}