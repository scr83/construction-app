\'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GerenciaDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [projects, setProjects] = useState([
    { id: 1, name: 'Torre Norte', progress: 75, units: 45, completedUnits: 32 },
    { id: 2, name: 'Edificio Central', progress: 40, units: 60, completedUnits: 24 },
    { id: 3, name: 'Residencial Sur', progress: 90, units: 30, completedUnits: 27 }
  ]);

  useEffect(() => {
    // Verificar autenticación
    try {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const userRole = localStorage.getItem('userRole');
      const name = localStorage.getItem('userName') || 'Usuario';
      
      if (!isLoggedIn) {
        router.push('/auth/login');
        return;
      }
      
      // Si es usuario operativo, redirigir
      if (userRole !== 'gerencia') {
        router.push('/dashboard/operativo');
        return;
      }
      
      setUserName(name);
      setLoading(false);
    } catch (error) {
      console.error('Error accediendo a localStorage:', error);
      setError('Error al cargar el dashboard. Intenta nuevamente.');
      
      // En caso de error grave, redirigir al login
      setTimeout(() => {
        router.push('/auth/login');
      }, 3000);
    }
  }, [router]);

  const handleLogout = () => {
    try {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userName');
      router.push('/auth/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      setError('Error al cerrar sesión. Intenta nuevamente.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-lg font-medium text-gray-900">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Panel de Gerencia</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Bienvenido, {userName}</span>
            <button 
              onClick={handleLogout}
              className="px-3 py-1.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-md text-sm shadow-sm"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          {/* Stats Overview */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Resumen General</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-sm text-gray-500">Proyectos Activos</p>
                <p className="text-3xl font-bold text-gray-900">{projects.length}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-sm text-gray-500">Unidades Totales</p>
                <p className="text-3xl font-bold text-gray-900">{projects.reduce((acc, p) => acc + p.units, 0)}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-sm text-gray-500">Unidades Completadas</p>
                <p className="text-3xl font-bold text-gray-900">{projects.reduce((acc, p) => acc + p.completedUnits, 0)}</p>
              </div>
            </div>
          </div>
          
          {/* Projects List */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Proyectos</h2>
              <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm shadow-sm">
                Nuevo Proyecto
              </button>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {projects.map(project => (
                  <li key={project.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                        <p className="text-sm text-gray-500">
                          {project.completedUnits} de {project.units} unidades completadas
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2 text-gray-700">{project.progress}%</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${
                              project.progress > 80 ? 'bg-green-600' : 
                              project.progress > 40 ? 'bg-blue-600' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md hover:bg-blue-100">
                        Ver Detalles
                      </button>
                      <button className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded-md hover:bg-gray-100">
                        Editar
                      </button>
                      <button className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md hover:bg-green-100">
                        Ver Reportes
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Actividad Reciente</h2>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-4 text-center text-gray-500">
                <p>No hay actividad reciente para mostrar</p>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}