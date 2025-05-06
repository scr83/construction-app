/**
 * Utilidades para manejar aspectos relacionados con la red y la conectividad.
 */

/**
 * Verifica si el dispositivo tiene conexión a Internet.
 * @returns {boolean} true si está conectado, false si no
 */
export const isOnline = (): boolean => {
    return navigator.onLine;
  };
  
  /**
   * Registra callback para cuando la aplicación se conecta/desconecta.
   * @param {() => void} onOnline - Callback cuando se conecta a Internet
   * @param {() => void} onOffline - Callback cuando se pierde la conexión
   * @returns {() => void} Función para remover los listeners
   */
  export const registerConnectivityListeners = (
    onOnline: () => void,
    onOffline: () => void
  ): (() => void) => {
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    
    // Retornar función para limpiar
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  };
  
  /**
   * Retrasa una promesa hasta que haya conexión.
   * Útil para operaciones que requieren conexión.
   * @param {number} timeoutMs - Tiempo máximo de espera en ms
   * @returns {Promise<void>} Promesa que se resuelve cuando hay conexión
   */
  export const waitForConnection = (timeoutMs = 30000): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Si ya hay conexión, resolver inmediatamente
      if (navigator.onLine) {
        resolve();
        return;
      }
      
      // Configurar timeout
      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error('Timeout waiting for connection'));
      }, timeoutMs);
      
      // Configurar evento para cuando haya conexión
      const handleOnline = () => {
        cleanup();
        resolve();
      };
      
      // Función para limpiar
      const cleanup = () => {
        clearTimeout(timeout);
        window.removeEventListener('online', handleOnline);
      };
      
      // Escuchar evento de conexión
      window.addEventListener('online', handleOnline);
    });
  };
  
  /**
   * Detecta la calidad de la conexión a Internet.
   * @returns {'fast' | 'slow' | 'offline'} - Calidad estimada de la conexión
   */
  export const getConnectionQuality = async (): Promise<'fast' | 'slow' | 'offline'> => {
    if (!navigator.onLine) {
      return 'offline';
    }
    
    try {
      // Hacer una petición pequeña para medir el tiempo de respuesta
      const startTime = Date.now();
      await fetch('/api/ping', { method: 'GET', cache: 'no-store' });
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      // Clasificar basado en tiempo de respuesta
      if (responseTime < 300) {
        return 'fast';
      } else {
        return 'slow';
      }
    } catch (error) {
      // Si hay error en la petición, asumir conexión lenta
      return 'slow';
    }
  };
  
  /**
   * Optimiza el tamaño de una imagen para subir en condiciones de baja conectividad.
   * @param {File} imageFile - Archivo de imagen a optimizar
   * @param {Object} options - Opciones de optimización
   * @returns {Promise<Blob>} - Imagen optimizada como Blob
   */
  export const optimizeImageForUpload = async (
    imageFile: File,
    options: { maxWidth?: number; maxHeight?: number; quality?: number } = {}
  ): Promise<Blob> => {
    const { 
      maxWidth = 1200, 
      maxHeight = 1200, 
      quality = 0.8 
    } = options;
    
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(imageFile);
      
      img.onload = () => {
        URL.revokeObjectURL(url);
        
        // Calcular dimensiones manteniendo proporción
        let width = img.width;
        let height = img.height;
        
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
        
        // Crear canvas para la imagen redimensionada
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        
        // Dibujar imagen en el canvas
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('No se pudo obtener el contexto 2D del canvas'));
          return;
        }
        
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convertir a blob con la calidad especificada
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Error al convertir canvas a blob'));
              return;
            }
            resolve(blob);
          },
          'image/jpeg',
          quality
        );
      };
      
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Error al cargar la imagen'));
      };
      
      img.src = url;
    });
  };