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
        
        // Fix: Check if routes exist before redirecting
        if (userRole === 'gerencia') {
          // For safety, redirect to operativo if gerencia doesn't exist
          // You should create the gerencia route later
          router.push('/dashboard/operativo');
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
    
    // Fix: Add a small delay to ensure localStorage is accessible
    // Sometimes in Next.js with SSR there are timing issues
    setTimeout(checkAuthAndRedirect, 100);
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