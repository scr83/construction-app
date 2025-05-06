'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Verificar autenticación al cargar la página
    const checkAuthAndRedirect = () => {
      try {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        
        if (!isLoggedIn) {
          // No autenticado, redirigir al login
          router.push('/auth/login');
          return;
        }
        
        // Redirigir según el rol
        const userRole = localStorage.getItem('userRole');
        if (userRole === 'gerencia') {
          router.push('/dashboard/gerencia');
        } else {
          // Por defecto, redirigir a vista operativa
          router.push('/dashboard/operativo');
        }
      } catch (error) {
        console.error('Error accediendo a localStorage:', error);
        // En caso de error, redirigir al login
        router.push('/auth/login');
      }
    };
    
    checkAuthAndRedirect();
  }, [router]);

  // Mientras se realiza la redirección, mostrar pantalla de carga
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg font-medium">Cargando dashboard...</p>
        <p className="text-sm text-gray-500 mt-2">Redirigiendo al panel correspondiente</p>
      </div>
    </div>
  );
}