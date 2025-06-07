'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Building2, Plus, FileText, Edit, BarChart2, Clock, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  progress: number;
  units: number;
  completedUnits: number;
  lastUpdate?: string;
}

export default function GerenciaDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [projects, setProjects] = useState<Project[]>([
    { 
      id: 1, 
      name: 'Torre Norte', 
      progress: 75, 
      units: 45, 
      completedUnits: 32,
      lastUpdate: '2024-03-15'
    },
    { 
      id: 2, 
      name: 'Edificio Central', 
      progress: 40, 
      units: 60, 
      completedUnits: 24,
      lastUpdate: '2024-03-14'
    },
    { 
      id: 3, 
      name: 'Residencial Sur', 
      progress: 90, 
      units: 30, 
      completedUnits: 27,
      lastUpdate: '2024-03-13'
    }
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
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Panel de Gerencia</h1>
                <p className="text-sm text-gray-500">v1.0.0</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">Bienvenido, {userName}</span>
              <button 
                onClick={handleLogout}
                className="px-3 py-1.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg text-sm shadow-sm transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          {/* Stats Overview */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Resumen General</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Proyectos Activos</p>
                <p className="text-3xl font-bold text-gray-900">{projects.length}</p>
              </div>
              <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Unidades Totales</p>
                <p className="text-3xl font-bold text-gray-900">{projects.reduce((acc, p) => acc + p.units, 0)}</p>
              </div>
              <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Unidades Completadas</p>
                <p className="text-3xl font-bold text-gray-900">{projects.reduce((acc, p) => acc + p.completedUnits, 0)}</p>
              </div>
            </div>
          </div>
          
          {/* Projects List */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Proyectos</h2>
              <Link href="/projects/new">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm shadow-sm transition-colors flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Nuevo Proyecto
                </button>
              </Link>
            </div>
            <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100">
              <ul className="divide-y divide-gray-100">
                {projects.map(project => (
                  <li key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{project.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {project.completedUnits} de {project.units} unidades completadas
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          Última actualización: {project.lastUpdate}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2 text-gray-700">{project.progress}%</span>
                        <div className="w-24 bg-gray-100 rounded-full h-2.5">
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
                    <div className="mt-4 flex space-x-2">
                      <Link href={`/projects/${project.id}`}>
                        <button className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          Ver Detalles
                        </button>
                      </Link>
                      <Link href={`/projects/${project.id}/edit`}>
                        <button className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1">
                          <Edit className="h-4 w-4" />
                          Editar
                        </button>
                      </Link>
                      <Link href={`/projects/${project.id}/reports`}>
                        <button className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-lg hover:bg-green-100 transition-colors flex items-center gap-1">
                          <BarChart2 className="h-4 w-4" />
                          Ver Reportes
                        </button>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Actividad Reciente</h2>
              <Link href="/activity">
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  Ver todo
                  <ChevronRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100">
              <div className="p-6 text-center text-gray-500">
                <p>No hay actividad reciente para mostrar</p>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}