'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterSuccess() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Obtener el correo desde sessionStorage si existe
    try {
      const userEmail = sessionStorage.getItem('registeredEmail') || 'tu cuenta';
      setEmail(userEmail);
    } catch (error) {
      console.error('Error accediendo a sessionStorage:', error);
    }
  }, []);

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  const handleGoToLogin = () => {
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Registro exitoso!</h2>
        <p className="text-gray-600 mb-6">
          Tu cuenta ha sido creada correctamente.
          <br />
          En una aplicación real, enviaríamos un correo de verificación a{' '}
          <span className="font-medium text-gray-900">{email}</span>
        </p>
        
        <div className="space-y-3">
          <button
            onClick={handleGoToDashboard}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md shadow-sm"
          >
            Ir al Dashboard (Demo)
          </button>
          
          <button
            onClick={handleGoToLogin}
            className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-2.5 px-4 rounded-md shadow-sm border border-gray-300"
          >
            Ir a la página de inicio de sesión
          </button>
        </div>
      </div>
    </div>
  );
}