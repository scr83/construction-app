'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Verificar autenticación al cargar la página
    const checkAuthAndRedirect = () => {
      try {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        
        if (!isLoggedIn) {
          // No autenticado, redirigir al login
          console.log('No autenticado, redirigiendo al login');
          router.push('/auth/login');
          return;
        }
        
        // Redirigir según el rol
        const userRole = localStorage.getItem('userRole');
        console.log('Usuario autenticado con rol:', userRole);
        
        // Importante: primero comprobar si la ruta existe para evitar errores 404
        if (userRole === 'gerencia') {
          router.push('/dashboard/gerencia');
        } else if (userRole === 'operativo') {
          router.push('/dashboard/operativo');
        } else {
          // Si el rol no está definido correctamente, redirigir a operativo por defecto
          console.log('Rol no reconocido, redirigiendo a operativo');
          router.push('/dashboard/operativo');
        }
      } catch (error) {
        console.error('Error accediendo a localStorage:', error);
        setError('Error al verificar sesión. Redirigiendo al login...');
        // En caso de error, redirigir al login
        setTimeout(() => {
          router.push('/auth/login');
        }, 2000);
      }
    };
    
    // Pequeño retraso para asegurar que localStorage esté disponible
    const timer = setTimeout(() => {
      checkAuthAndRedirect();
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        {isLoading ? (
          <div>
            <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-lg font-medium text-gray-900">Cargando dashboard...</p>
            <p className="text-sm text-gray-500 mt-2">Redirigiendo al panel correspondiente</p>
          </div>
        ) : error ? (
          <div>
            <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
              <p>{error}</p>
            </div>
            <button 
              onClick={() => router.push('/auth/login')}
              className="btn btn-primary mt-4"
            >
              Ir al inicio de sesión
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}