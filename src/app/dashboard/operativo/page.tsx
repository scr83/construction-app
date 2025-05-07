'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OperativoDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [location, setLocation] = useState('Torre Norte');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncPending, setSyncPending] = useState(2);
  const [activeTab, setActiveTab] = useState('inicio');
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

  const handleTaskAction = (taskId, action) => {
    if (action === 'register') {
      // Simulación de registro de tarea
      alert('Esta funcionalidad estaría conectada al registro de la tarea ' + taskId);
      
      // Marcar como completada para demostración
      const updatedTasks = tasks.map(task => 
        task.id === taskId 
          ? {...task, status: 'completed', action: 'view'} 
          : task
      );
      setTasks(updatedTasks);
      localStorage.setItem('userTasks', JSON.stringify(updatedTasks));
      
      // En una implementación real redirigir a:
      // router.push(`/dashboard/task/${taskId}/register`);
    } else {
      // Ver detalles
      alert('Aquí se mostrarían los detalles de la tarea ' + taskId);
      // En una implementación real redirigir a:
      // router.push(`/dashboard/task/${taskId}/details`);
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Simulación de navegación entre pestañas
    if (tab === 'inicio') {
      // Ya estamos en inicio, no hacer nada
    } else if (tab === 'registros') {
      alert('Esta acción cargaría la vista de registros');
    } else if (tab === 'fotos') {
      alert('Esta acción cargaría la galería de fotos');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
      <header className="bg-white shadow-sm">
        <div className="px-4 py-3">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-900">Jefe de Terreno</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-700">{location}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                <span className="h-2 w-2 mr-1 rounded-full bg-green-500"></span>
                Online
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="relative">
              <button className="relative p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
            <div>
              <button onClick={handleLogout} className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
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
            <button
              onClick={handleNewRegistration}
              className="flex-1 bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md active:shadow-inner hover:bg-blue-700 active:bg-blue-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Nuevo Registro
            </button>
            
            <button
              onClick={handleTakePhoto}
              className="flex-1 bg-white text-gray-800 font-medium py-3 px-4 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md active:shadow-inner border border-gray-200 hover:bg-gray-50 active:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Tomar Foto
            </button>
          </div>
          
          {/* Tasks Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Tareas del Día</h2>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600 font-medium text-sm">13 Enero</span>
              </div>
            </div>
            
            {/* Task List */}
            <div className="space-y-4">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className={`rounded-lg shadow p-4 border-l-4 ${
                    task.status === 'urgent' ? 'border-red-500 bg-red-50' : 
                    task.status === 'completed' ? 'border-green-500 bg-green-50' :
                    'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`flex items-center justify-center p-2 rounded-full ${
                      task.status === 'urgent' ? 'bg-red-100 text-red-600' : 
                      task.status === 'completed' ? 'bg-green-100 text-green-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {task.status === 'urgent' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      ) : task.status === 'completed' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-base font-semibold text-gray-900">{task.title}</h3>
                        {task.status === 'urgent' ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                            Urgente
                            {task.deadline && (
                              <span className="ml-1 font-bold">{task.deadline} restantes</span>
                            )}
                          </span>
                        ) : task.status === 'completed' ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Completado
                          </span>
                        ) : (
                          <span className="text-sm text-gray-500 font-medium">{task.time}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{task.location}</p>
                      <div className="mt-3">
                        <button
                          onClick={() => handleTaskAction(task.id, task.action)}
                          className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md shadow-sm ${
                            task.status === 'completed' 
                              ? 'bg-green-600 text-white hover:bg-green-700' :
                            task.action === 'register'
                              ? 'bg-red-600 text-white hover:bg-red-700'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {task.status === 'completed' 
                            ? 'Ver Registro' : 
                          task.action === 'register' 
                            ? 'Registrar Ahora' 
                            : 'Ver Detalles'
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {tasks.length === 0 && (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <p className="text-gray-500">No hay tareas asignadas para hoy</p>
              </div>
            )}
          </div>
          
          {/* Recent Registrations */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Últimos Registros</h2>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">Ver todos</button>
            </div>
            
            {/* Pending Sync Notice */}
            {syncPending > 0 && (
              <div className="mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center text-yellow-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">{syncPending} registros pendientes de sync</span>
              </div>
            )}
            
            {/* Sample completed task */}
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
              <div className="flex items-center">
                <div className="flex items-center justify-center p-2 rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold text-gray-900">Terminaciones Piso 12</h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      Aprobado
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">Piso 12 - Depto 1205</p>
                </div>
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