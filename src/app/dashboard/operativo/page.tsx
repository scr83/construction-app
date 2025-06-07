'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Building2, Plus, Camera, Bell, User, Calendar, Clock, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  location: string;
  status: 'urgent' | 'pending' | 'completed';
  deadline?: string;
  time?: string;
  action: 'register' | 'view';
}

type TabType = 'inicio' | 'registros' | 'fotos';

export default function OperativoDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [location, setLocation] = useState('Torre Norte');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncPending, setSyncPending] = useState(2);
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [error, setError] = useState('');

  useEffect(() => {
    // Verificar autenticación
    try {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const userRole = localStorage.getItem('userRole');
      const name = localStorage.getItem('userName') || 'Usuario';
      
      if (!isLoggedIn) {
        console.log('No autenticado, redirigiendo al login');
        router.push('/auth/login');
        return;
      }
      
      // Si es usuario de gerencia, redirigir
      if (userRole === 'gerencia') {
        console.log('Usuario gerencia, redirigiendo al dashboard de gerencia');
        router.push('/dashboard/gerencia');
        return;
      }
      
      setUserName(name);
      
      // Cargar tareas
      const storedTasks = localStorage.getItem('userTasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      } else {
        // Tareas por defecto si no hay almacenadas
        const defaultTasks: Task[] = [
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
        setTasks(defaultTasks);
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error accediendo a localStorage:', error);
      setError('Error al cargar datos. Redirigiendo al login...');
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
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

  const handleTaskAction = (taskId: number, action: 'register' | 'view') => {
    if (action === 'register') {
      router.push(`/tasks/${taskId}/register`);
    } else {
      router.push(`/tasks/${taskId}/details`);
    }
  };

  const handleNewRegistration = () => {
    alert('Funcionalidad de nuevo registro que se conectaría con un formulario');
    // En una implementación real redirigir a:
    // router.push('/dashboard/new-registration');
  };

  const handleTakePhoto = () => {
    // Simulación de apertura de cámara
    alert('Esta función abriría la cámara del dispositivo');
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    
    // Simulación de navegación entre pestañas
    if (tab === 'inicio') {
      // Ya estamos en inicio, no hacer nada
    } else if (tab === 'registros') {
      router.push('/registros');
    } else if (tab === 'fotos') {
      router.push('/fotos');
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
          <p className="text-lg font-medium text-gray-900">Cargando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
            <p>{error}</p>
          </div>
          <button 
            onClick={() => router.push('/auth/login')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
          >
            Ir al inicio de sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Jefe de Terreno</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">{location}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                    <span className="h-2 w-2 mr-1 rounded-full bg-green-500"></span>
                    Online
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Bell className="h-6 w-6" />
                {syncPending > 0 && (
                  <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </button>
              <button 
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        <div className="px-4 py-4">
          
          {/* Action Buttons */}
          <div className="flex mb-6 gap-3">
            <Link href="/tasks/new" className="flex-1">
              <button className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md active:shadow-inner hover:bg-blue-700 active:bg-blue-800 transition-all">
                <Plus className="h-5 w-5 mr-2" />
                Nuevo Registro
              </button>
            </Link>
            
            <Link href="/photos/new" className="flex-1">
              <button className="w-full bg-white text-gray-800 font-medium py-3 px-4 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md active:shadow-inner border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition-all">
                <Camera className="h-5 w-5 mr-2" />
                Tomar Foto
              </button>
            </Link>
          </div>
          
          {/* Tasks Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Tareas del Día</h2>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-1" />
                <span className="font-medium text-sm">13 Enero</span>
              </div>
            </div>
            
            {/* Task List */}
            <div className="space-y-4">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className={`rounded-xl shadow-sm p-4 border-l-4 ${
                    task.status === 'urgent' ? 'border-red-500 bg-red-50' : 
                    task.status === 'completed' ? 'border-green-500 bg-green-50' :
                    'border-blue-500 bg-blue-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{task.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{task.location}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {task.deadline ? `Vence en ${task.deadline}` : `Programado para ${task.time}`}
                      </div>
                    </div>
                    <div className="flex items-center">
                      {task.status === 'urgent' ? (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      ) : task.status === 'completed' ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => handleTaskAction(task.id, task.action)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        task.action === 'register'
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } transition-colors`}
                    >
                      {task.action === 'register' ? 'Registrar' : 'Ver Detalles'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Activity */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Actividad Reciente</h2>
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
      
      {/* Footer Navigation */}
      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center h-16">
          <button 
            className={`flex flex-col items-center justify-center ${activeTab === 'inicio' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('inicio')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1 font-medium">Inicio</span>
          </button>
          
          <button 
            className={`flex flex-col items-center justify-center ${activeTab === 'registros' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('registros')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs mt-1 font-medium">Registros</span>
          </button>
          
          <button 
            className={`flex flex-col items-center justify-center ${activeTab === 'fotos' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('fotos')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs mt-1 font-medium">Fotos</span>
          </button>
        </div>
      </footer>
    </div>
  );
}