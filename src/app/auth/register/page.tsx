'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulamos registro exitoso para demo
      console.log('Registro simulado:', { email, password, name, role });
      
      // Guardar información de usuario en localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
      localStorage.setItem('userRole', role);
      localStorage.setItem('userPassword', password); // Solo para demo, nunca hacer esto en producción
      
      // Simulamos un delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mostrar pantalla de éxito
      setSuccess(true);
      
    } catch (err) {
      setError('Error al registrar usuario');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Si el registro fue exitoso, mostrar mensaje de verificación
  if (success) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">¡Registro exitoso!</h2>
              <p className="mt-2 text-gray-600">Tu cuenta ha sido creada correctamente.</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-center">
                En una aplicación real, enviaríamos un correo de verificación a <strong>{email}</strong>.
              </p>
              
              <div className="mt-6">
                <button 
                  onClick={() => {
                    // Para demo, iniciamos sesión inmediatamente
                    localStorage.setItem('isLoggedIn', 'true');
                    window.location.href = '/dashboard';
                  }}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Ir al Dashboard (Demo)
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <Link href="/auth/login" className="text-sm text-blue-600 hover:text-blue-500">
                  Ir a la página de inicio de sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="py-4 text-center text-sm text-gray-500">
          <p>Versión 1.0.0</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Image 
              src="/construction-icon.svg" 
              alt="ConstructionApp Logo" 
              width={60} 
              height={60}
              className="mx-auto"
            />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">ConstructionApp</h2>
            <p className="mt-2 text-sm text-gray-600">Control de obras en tiempo real</p>
          </div>
          
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="text-xl font-semibold mb-6">Crear una cuenta</h2>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Rol
                </label>
                <div className="mt-1">
                  <select
                    id="role"
                    name="role"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Seleccionar rol</option>
                    <option value="gerencia">Gerencia</option>
                    <option value="operativo">Operativo</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirmar contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
                >
                  {isLoading ? 'Registrando...' : 'Registrarse'}
                </button>
              </div>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    ¿Ya tienes una cuenta?
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link
                  href="/auth/login"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="py-4 text-center text-sm text-gray-500">
        <p>Versión 1.0.0</p>
      </footer>
    </div>
  );
}