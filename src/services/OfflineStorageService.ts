// Tipos para almacenar en IndexedDB
export interface Photo {
    id?: number;
    file: File;
    projectId: string;
    description?: string;
    localUrl?: string;
    createdAt: string;
  }
  
  export interface SyncItem {
    id?: number;
    type: 'photo' | 'task' | 'project';
    action: 'create' | 'update' | 'delete';
    data: any;
    timestamp: string;
  }
  
  export class OfflineStorageService {
    private db: IDBDatabase | null = null;
    
    async init(): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        const request = indexedDB.open('ConstructionAppDB', 1);
        
        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          
          // Crear almacenes de objetos si no existen
          if (!db.objectStoreNames.contains('photos')) {
            db.createObjectStore('photos', { keyPath: 'id', autoIncrement: true });
          }
          
          if (!db.objectStoreNames.contains('syncQueue')) {
            db.createObjectStore('syncQueue', { keyPath: 'id', autoIncrement: true });
          }
        };
        
        request.onsuccess = (event) => {
          this.db = (event.target as IDBOpenDBRequest).result;
          resolve();
        };
        
        request.onerror = (event) => {
          reject('Error opening IndexedDB');
        };
      });
    }
    
    // Método para guardar una foto localmente y añadirla a la cola de sincronización
    async savePhoto(photo: Photo): Promise<number> {
      if (!this.db) await this.init();
      
      return new Promise((resolve, reject) => {
        const transaction = this.db!.transaction(['photos', 'syncQueue'], 'readwrite');
        const photoStore = transaction.objectStore('photos');
        const syncStore = transaction.objectStore('syncQueue');
        
        // Guardar la foto localmente
        const photoRequest = photoStore.add(photo);
        
        photoRequest.onsuccess = (event) => {
          const photoId = (event.target as IDBRequest).result as number;
          
          // Añadir a la cola de sincronización
          syncStore.add({
            type: 'photo',
            action: 'create',
            data: { ...photo, id: photoId },
            timestamp: new Date().toISOString()
          });
          
          resolve(photoId);
        };
        
        photoRequest.onerror = () => reject('Error saving photo');
      });
    }
    
    // Método para obtener fotos por proyecto
    async getPhotos(projectId?: string): Promise<Photo[]> {
      if (!this.db) await this.init();
      
      return new Promise((resolve, reject) => {
        const transaction = this.db!.transaction(['photos'], 'readonly');
        const store = transaction.objectStore('photos');
        const request = store.getAll();
        
        request.onsuccess = (event) => {
          const photos = (event.target as IDBRequest).result as Photo[];
          
          if (projectId) {
            // Filtrar por ID de proyecto si se proporciona
            resolve(photos.filter(photo => photo.projectId === projectId));
          } else {
            resolve(photos);
          }
        };
        
        request.onerror = () => reject('Error getting photos');
      });
    }
    
    // Obtener elementos pendientes de sincronización
    async getPendingSyncItems(): Promise<SyncItem[]> {
      if (!this.db) await this.init();
      
      return new Promise((resolve, reject) => {
        const transaction = this.db!.transaction(['syncQueue'], 'readonly');
        const store = transaction.objectStore('syncQueue');
        const request = store.getAll();
        
        request.onsuccess = (event) => {
          const items = (event.target as IDBRequest).result as SyncItem[];
          resolve(items.sort((a, b) => 
            new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
          ));
        };
        
        request.onerror = () => reject('Error getting sync items');
      });
    }
    
    // Eliminar un elemento de la cola de sincronización
    async removeSyncItem(id: number): Promise<void> {
      if (!this.db) await this.init();
      
      return new Promise((resolve, reject) => {
        const transaction = this.db!.transaction(['syncQueue'], 'readwrite');
        const store = transaction.objectStore('syncQueue');
        const request = store.delete(id);
        
        request.onsuccess = () => resolve();
        request.onerror = () => reject('Error removing sync item');
      });
    }
  }