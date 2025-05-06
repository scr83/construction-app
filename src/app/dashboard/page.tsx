'use client';
import { useEffect, useState } from 'react';
import { Home, Files, Settings, Bell, User, Building2, TrendingUp, TrendingDown, AlertCircle, Search, Filter } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar autenticación al cargar la página
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const name = localStorage.getItem('userName');
      const role = localStorage.getItem('userRole');
      
      if (!isLoggedIn) {
        // No autenticado, redirigir al login
        window.location.href = '/auth/login';
        return;
      }
      
      // Usuario autenticado, mostrar dashboard
      setUserName(name || 'Usuario');
      setUserRole(role || '');
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    window.location.href = '/auth/login';
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  // Mostrar dashboards diferentes según el rol
  if (userRole === 'gerencia') {
    return <DashboardGerencial userName={userName} handleLogout={handleLogout} />;
  }
  
  // Dashboard operativo por defecto
  return <DashboardOperativo userName={userName} handleLogout={handleLogout} />;
}

// Dashboard para usuarios de Gerencia
function DashboardGerencial({ userName, handleLogout }) {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Top Header - Fixed */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold">Dashboard</h1>
              <p className="text-sm text-gray-500">Vista General (Gerencia)</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative group">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <User className="h-6 w-6 text-gray-600" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30 hidden group-hover:block">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    <p className="font-medium">{userName}</p>
                    <p className="text-gray-500">Rol: Gerencia</p>
                  </div>
                  <hr />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - With top padding for header */}
      <div className="pt-20 px-4">
        {/* KPIs Scroll Horizontal */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex space-x-4 pb-4 w-max">
            {/* KPI Card */}
            <div className="bg-white rounded-xl border p-4 w-48">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Avance General</span>
                <span className="flex items-center text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +5.2%
                </span>
              </div>
              <div className="text-2xl font-bold">75.4%</div>
              <div className="text-sm text-gray-500 mt-1">vs. 70.2% prev.</div>
            </div>

            {/* KPI Card */}
            <div className="bg-white rounded-xl border p-4 w-48">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Proyectos Activos</span>
                <span className="flex items-center text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +2
                </span>
              </div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-gray-500 mt-1">2 nuevos este mes</div>
            </div>

            {/* KPI Card */}
            <div className="bg-white rounded-xl border p-4 w-48">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Alertas</span>
                <span className="flex items-center text-red-600 text-sm">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  3
                </span>
              </div>
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-gray-500 mt-1">Requieren atención</div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Proyectos</h2>
            <button className="text-sm text-blue-600">Ver todos</button>
          </div>

          {/* Search and Filter */}
          <div className="flex space-x-2 mb-4">
            <div className="flex-1 relative">
              <input 
                type="text"
                placeholder="Buscar proyecto..."
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="p-3 border rounded-xl">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Project Cards */}
          <div className="space-y-4">
            {/* Project Card */}
            <div className="bg-white rounded-xl border p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Torre Norte</h3>
                    <p className="text-sm text-gray-500">Proyecto Residencial</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  En Progreso
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Avance</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <span>Actualizado hace 2h</span>
                  </div>
                  <button className="text-blue-600 font-medium">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>

            {/* Alertas */}
            <div className="bg-red-50 rounded-xl border border-red-200 p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-red-800">Alertas Pendientes</h3>
                  <p className="text-sm text-red-700 mt-1">3 proyectos requieren tu atención</p>
                  <button className="mt-2 text-sm text-red-800 font-medium">
                    Ver Alertas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-blue-600">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Inicio</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Files className="h-6 w-6" />
            <span className="text-xs mt-1">Proyectos</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Settings className="h-6 w
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">Config</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Dashboard para usuarios Operativos
function DashboardOperativo({ userName, handleLogout }) {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Top Header - Fixed */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold">Dashboard</h1>
              <p className="text-sm text-gray-500">Vista Operativa</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <div className="relative group">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <User className="h-6 w-6 text-gray-600" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30 hidden group-hover:block">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    <p className="font-medium">{userName}</p>
                    <p className="text-gray-500">Rol: Operativo</p>
                  </div>
                  <hr />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - With top padding for header */}
      <div className="pt-20 px-4">
        {/* Tareas Pendientes */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-lg font-semibold mb-4">Mis Tareas Pendientes</h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center">
                <input type="checkbox" className="h-5 w-5 rounded text-blue-600 mr-3" />
                <span>Revisión de planos - Torre Norte</span>
              </div>
              <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Vence hoy</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center">
                <input type="checkbox" className="h-5 w-5 rounded text-blue-600 mr-3" />
                <span>Informe de avance - Proyecto Central</span>
              </div>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">3 días</span>
            </div>
          </div>
          
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg">
            + Nueva Tarea
          </button>
        </div>
        
        {/* Proyectos Asignados */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Mis Proyectos</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Torre Norte</h3>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  En progreso
                </span>
              </div>
              
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avance:</span>
                  <span>75%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <button className="text-sm text-blue-600">Ver detalles</button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Proyecto Central</h3>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  Retrasado
                </span>
              </div>
              
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avance:</span>
                  <span>45%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              
              <button className="text-sm text-blue-600">Ver detalles</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-blue-600">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Inicio</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Files className="h-6 w-6" />
            <span className="text-xs mt-1">Tareas</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">Config</span>
          </button>
        </div>
      </div>
    </div>
  );
}