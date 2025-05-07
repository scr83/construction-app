'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GerenciaDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
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
      
      if (!isLoggedIn || userRole !== 'gerencia') {
        router.push('/auth/login');
        return;
      }
      
      setUserName(name);
      setLoading(false);
    } catch (error) {
      console.error('Error accediendo a localStorage:', error);
      router.push('/auth/login');
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
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium">Cargando...</p>
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
            <span className="text-sm">Bienvenido, {userName}</span>
            <button 
              onClick={handleLogout}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          
          {/* Stats Overview */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Resumen General</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-sm text-gray-500">Proyectos Activos</p>
                <p className="text-3xl font-bold">{projects.length}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-sm text-gray-500">Unidades Totales</p>
                <p className="text-3xl font-bold">{projects.reduce((acc, p) => acc + p.units, 0)}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-sm text-gray-500">Unidades Completadas</p>
                <p className="text-3xl font-bold">{projects.reduce((acc, p) => acc + p.completedUnits, 0)}</p>
              </div>
            </div>
          </div>
          
          {/* Projects List */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Proyectos</h2>
            <div className="bg-white shadow rounded-lg">
              <ul className="divide-y divide-gray-200">
                {projects.map(project => (
                  <li key={project.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-medium">{project.name}</h3>
                        <p className="text-sm text-gray-500">
                          {project.completedUnits} de {project.units} unidades completadas
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">{project.progress}%</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}