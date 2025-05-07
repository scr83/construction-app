'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

    // Simulando validación
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Aplicación de Gestión de Construcción
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? 'Iniciando...' : 'Iniciar Sesión'}
            </button>
          </div>
          
          <div className="text-center text-xs text-gray-500">
            <p>Usuarios de prueba:</p>
            <p>demo@example.com / demo123 (Gerencia)</p>
            <p>operativo@example.com / demo123 (Operativo)</p>
          </div>
        </form>
      </div>
    </div>
  );
}