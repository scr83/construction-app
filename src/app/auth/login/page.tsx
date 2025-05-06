'use client';
import { useState } from 'react';
import { User, Lock, Building2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Usuarios predefinidos para demo
      if (email === 'demo@example.com' && password === 'demo123') {
        // Guardar info de sesión
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', 'gerencia');
        localStorage.setItem('userName', 'Usuario Demo');
        
        // Redirigir al dashboard
        window.location.href = '/dashboard';
        return;
      } 
      
      if (email === 'operativo@example.com' && password === 'demo123') {
        // Guardar info de sesión
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', 'operativo');
        localStorage.setItem('userName', 'Usuario Operativo');
        
        // Redirigir al dashboard
        window.location.href = '/dashboard';
        return;
      }
      
      // Verificar si es un usuario registrado
      const savedEmail = localStorage.getItem('userEmail');
      const savedPassword = localStorage.getItem('userPassword');
      const savedName = localStorage.getItem('userName');
      const savedRole = localStorage.getItem('userRole');
      
      if (savedEmail === email && savedPassword === password) {
        // Usuario registrado
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirigir al dashboard
        window.location.href = '/dashboard';
        return;
      }
      
      // Si llegamos aquí, las credenciales son incorrectas
      setError('Credenciales incorrectas. Para la demo, usa: demo@example.com / demo123');
    } catch (err) {
      console.error('Error en login:', err);
      setError('Error al iniciar sesión. Intente de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header/Logo Area - Ocupa 30vh en móvil */}
      <div className="flex flex-col items-center justify-center h-[30vh] bg-white px-6">
        <div className="bg-blue-100 p-4 rounded-xl mb-4">
          <Building2 className="h-10 w-10 text-blue-600" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">ConstructionApp</h1>
        <p className="text-gray-600 mt-2 text-center">Control de obras en tiempo real</p>
      </div>

      {/* Form Area - Resto del espacio */}
      <div className="flex-1 flex flex-col px-6 pt-8 pb-4">
        <div className="max-w-sm w-full mx-auto">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input fields con padding aumentado para touch */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base text-gray-900"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base text-gray-900"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Offline Warning si es necesario */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Modo offline disponible después del primer login
                  </p>
                </div>
              </div>
            </div>
            
            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-600">Recordarme</span>
              </label>
              <Link 
                href="/auth/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                ¿Olvidó su contraseña?
              </Link>
            </div>
            
            {/* Credentials for testing */}
            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
              <p><strong>Usuario de prueba:</strong> demo@example.com</p>
              <p><strong>Contraseña:</strong> demo123</p>
            </div>
            
            {/* Login button con altura aumentada para touch */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-base font-medium disabled:bg-blue-400"
              disabled={isLoading}
            >
              {isLoading ? 'Iniciando sesión...' : 'Ingresar'}
            </button>
            
            {/* Register link for mobile */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                ¿No tiene una cuenta?{' '}
                <Link href="/auth/register" className="text-blue-600 font-medium">
                  Registrarse
                </Link>
              </p>
            </div>
          </form>

          {/* Version info */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">Versión 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}