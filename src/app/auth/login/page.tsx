'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validación básica
    if (!email || !password) {
      setError('Por favor ingresa email y contraseña');
      setLoading(false);
      return;
    }

    // Validación de usuarios de prueba
    if (email === 'demo@example.com' && password === 'demo123') {
      // Usuario gerencia
      storeAuthData('gerencia', 'Administrador');
      router.push('/dashboard');
    } else if (email === 'operativo@example.com' && password === 'demo123') {
      // Usuario operativo
      storeAuthData('operativo', 'Jefe de Terreno');
      router.push('/dashboard');
    } else {
      setError('Credenciales incorrectas');
      setLoading(false);
    }
  };

  const storeAuthData = (role, name) => {
    try {
      // Guardar datos de sesión
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', role);
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      
      // Simulando datos de proyectos/tareas para el usuario
      if (role === 'operativo') {
        const defaultTasks = [
          {
            id: 1,
            title: 'Hormigonado Muros',
            location: 'Piso 12 - Depto 1201',
            status: 'urgent',
            deadline: '2h',
            action: 'register'
          },
          {
            id: 2,
            title: 'Revisión Instalaciones',
            location: 'Piso 11 - Depto 1102',
            status: 'pending',
            time: '14:30',
            action: 'view'
          }
        ];
        localStorage.setItem('userTasks', JSON.stringify(defaultTasks));
      }
    } catch (error) {
      console.error('Error guardando datos:', error);
      setError('Error al iniciar sesión. Intenta nuevamente.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Aplicación de Gestión de Construcción
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Ingresa tu email"
                />
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
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full py-2.5 px-4 text-sm shadow-sm hover:shadow-md active:shadow-inner"
              >
                {loading ? 'Iniciando...' : 'Iniciar Sesión'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Usuarios de prueba:</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-blue-50 rounded border border-blue-100">
                <p className="font-medium text-blue-800">Gerencia:</p>
                <p className="text-gray-600">demo@example.com</p>
                <p className="text-gray-600">demo123</p>
              </div>
              <div className="p-2 bg-green-50 rounded border border-green-100">
                <p className="font-medium text-green-800">Operativo:</p>
                <p className="text-gray-600">operativo@example.com</p>
                <p className="text-gray-600">demo123</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}