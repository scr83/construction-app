'use client';
import { useState, useEffect } from 'react';

/**
 * Interface para representar el estado de cualquier operación offline
 */
export interface OfflineOperationState<T> {
  isLoading: boolean;
  error: Error | null;
  data: T | null;
}

/**
 * Hook para manejar almacenamiento offline con sincronización
 * @param {string} key - Llave de almacenamiento
 * @param {any} initialValue - Valor inicial si no hay datos almacenados
 * @returns {Array} [storedValue, setValue, syncStatus, syncData]
 */
export function useOfflineStorage<T>(key: string, initialValue: T) {
  // Estado para el valor actual
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  
  // Estado para los elementos pendientes de sincronización
  const [pendingSync, setPendingSync] = useState<any[]>([]);
  
  // Estado de conexión
  const [isOnline, setIsOnline] = useState<boolean>(true);
  
  // Estado de inicialización
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Cargar datos al iniciar
  useEffect(() => {
    const initialize = async () => {
      try {
        // Detectar estado de conexión
        setIsOnline(navigator.onLine);
        
        // Escuchar cambios de conexión
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        
        // Obtener del localStorage
        if (typeof window !== 'undefined') {
          const item = localStorage.getItem(key);
          const pendingItems = localStorage.getItem(`${key}_pending`);
          
          // Establecer valores iniciales
          setStoredValue(item ? JSON.parse(item) : initialValue);
          setPendingSync(pendingItems ? JSON.parse(pendingItems) : []);
        }
        
        setIsInitialized(true);
        
        return () => {
          window.removeEventListener('online', handleOnline);
          window.removeEventListener('offline', handleOffline);
        };
      } catch (error) {
        console.error('Error inicializando almacenamiento offline:', error);
        return initialValue;
      }
    };
    
    initialize();
  }, [key, initialValue]);
  
  // Función para actualizar valor
  const setValue = (value: T | ((val: T) => T), needsSync = false) => {
    try {
      // Si el valor es una función, ejecutarla con el valor anterior
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Guardar en state y localStorage
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
      
      // Si necesita sincronización y estamos offline, agregarlo a pendientes
      if (needsSync && !isOnline) {
        const newPendingSync = [...pendingSync, { value: valueToStore, timestamp: Date.now() }];
        setPendingSync(newPendingSync);
        localStorage.setItem(`${key}_pending`, JSON.stringify(newPendingSync));
      }
    } catch (error) {
      console.error('Error guardando en localStorage:', error);
    }
  };
  
  // Función para sincronizar datos pendientes
  const syncData = async () => {
    if (!isOnline || pendingSync.length === 0) return;
    
    try {
      // Aquí iría la lógica para enviar datos al servidor
      console.log('Sincronizando datos pendientes:', pendingSync);
      
      // Simulamos una sincronización exitosa
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Limpiar pendientes
      setPendingSync([]);
      localStorage.removeItem(`${key}_pending`);
      
      return true;
    } catch (error) {
      console.error('Error sincronizando datos:', error);
      return false;
    }
  };
  
  // Función para guardar fotos en almacenamiento local
  const savePhoto = async (photo: any) => {
    try {
      // Generar un ID único para la foto
      const photoId = Date.now();
      
      // Guardar la foto en localStorage (en una app real usaríamos IndexedDB)
      const photos = JSON.parse(localStorage.getItem(`${key}_photos`) || '[]');
      photos.push({
        id: photoId,
        data: photo,
        timestamp: Date.now(),
        synced: isOnline
      });
      
      localStorage.setItem(`${key}_photos`, JSON.stringify(photos));
      
      // Si estamos offline, agregar a pendientes de sincronización
      if (!isOnline) {
        const newPendingSync = [...pendingSync, { 
          type: 'photo', 
          id: photoId,
          timestamp: Date.now() 
        }];
        setPendingSync(newPendingSync);
        localStorage.setItem(`${key}_pending`, JSON.stringify(newPendingSync));
      }
      
      return photoId;
    } catch (error) {
      console.error('Error guardando foto:', error);
      throw error;
    }
  };
  
  // Función para obtener fotos del almacenamiento local
  const getPhotos = (projectId?: string) => {
    try {
      const photos = JSON.parse(localStorage.getItem(`${key}_photos`) || '[]');
      
      // Filtrar por proyecto si se especifica
      if (projectId) {
        return photos.filter((photo: any) => photo.projectId === projectId);
      }
      
      return photos;
    } catch (error) {
      console.error('Error obteniendo fotos:', error);
      return [];
    }
  };
  
  // Función para obtener elementos pendientes de sincronización
  const getPendingSyncItems = () => {
    return pendingSync;
  };
  
  // Función para eliminar un elemento pendiente de sincronización
  const removeSyncItem = (id: number) => {
    try {
      const newPendingSync = pendingSync.filter(item => item.id !== id);
      setPendingSync(newPendingSync);
      localStorage.setItem(`${key}_pending`, JSON.stringify(newPendingSync));
      return true;
    } catch (error) {
      console.error('Error eliminando elemento de sincronización:', error);
      return false;
    }
  };
  
  // Intentar sincronizar automáticamente cuando volvemos a estar online
  useEffect(() => {
    if (isOnline && pendingSync.length > 0 && isInitialized) {
      syncData();
    }
  }, [isOnline, pendingSync.length, isInitialized]);
  
  return {
    // Estado básico
    storedValue,
    setValue,
    syncStatus: { 
      pendingCount: pendingSync.length,
      isOnline, 
      lastSync: pendingSync.length > 0 ? pendingSync[pendingSync.length - 1].timestamp : null,
      isInitialized
    },
    syncData,
    
    // Funciones adicionales
    savePhoto,
    getPhotos,
    getPendingSyncItems,
    removeSyncItem
  };
}

/**
 * Hook de nivel superior que proporciona funcionalidades más específicas de almacenamiento offline
 */
export const useOfflineStorageService = () => {
  const [isServiceInitialized, setIsServiceInitialized] = useState(false);
  
  // Inicializar el servicio cuando se monta el componente
  useEffect(() => {
    const initialize = async () => {
      try {
        // Aquí se podría inicializar IndexedDB u otras configuraciones
        setIsServiceInitialized(true);
      } catch (error) {
        console.error('Error inicializando servicio de almacenamiento offline:', error);
      }
    };
    
    initialize();
  }, []);
  
  // Hook para guardar fotos en almacenamiento local
  const useSavePhoto = () => {
    const [state, setState] = useState<OfflineOperationState<number>>({
      isLoading: false,
      error: null,
      data: null
    });
    
    const { savePhoto } = useOfflineStorage<any[]>('photos', []);
    
    const savePhotoWithState = async (photo: any) => {
      setState({ isLoading: true, error: null, data: null });
      
      try {
        const photoId = await savePhoto(photo);
        setState({ isLoading: false, error: null, data: photoId });
        return photoId;
      } catch (error) {
        setState({ isLoading: false, error: error as Error, data: null });
        throw error;
      }
    };
    
    return { ...state, savePhoto: savePhotoWithState };
  };
  
  // Hook para obtener fotos del almacenamiento local
  const useGetPhotos = (projectId?: string) => {
    const [state, setState] = useState<OfflineOperationState<any[]>>({
      isLoading: false,
      error: null,
      data: null
    });
    
    const { getPhotos, syncStatus } = useOfflineStorage<any[]>('photos', []);
    
    const getPhotosWithState = async () => {
      if (!isServiceInitialized) return [];
      
      setState({ isLoading: true, error: null, data: null });
      
      try {
        const photos = getPhotos(projectId);
        setState({ isLoading: false, error: null, data: photos });
        return photos;
      } catch (error) {
        setState({ isLoading: false, error: error as Error, data: null });
        throw error;
      }
    };
    
    // Cargar fotos automáticamente cuando el hook se monta
    useEffect(() => {
      if (isServiceInitialized && syncStatus.isInitialized) {
        getPhotosWithState();
      }
    }, [isServiceInitialized, syncStatus.isInitialized, projectId]);
    
    return { ...state, getPhotos: getPhotosWithState };
  };
  
  return {
    isInitialized: isServiceInitialized,
    useSavePhoto,
    useGetPhotos
  };
};

export default useOfflineStorage;