'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OperativoDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [location, setLocation] = useState('Torre Norte');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncPending, setSyncPending] = useState(2);

  useEffect(() => {
    // Verificar autenticación
    try {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const userRole = localStorage.getItem('userRole');
      const name = localStorage.getItem('userName') || 'Usuario';
      
      if (!isLoggedIn || userRole !== 'operativo') {
        router.push('/auth/login');
        return;
      }
      
      setUserName(name);
      
      // Cargar tareas
      const storedTasks = localStorage.getItem('userTasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
      
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

  const handleTaskAction = (taskId, action) => {
    if (action === 'register') {
      // Simulación de registro
      router.push(`/dashboard/task/${taskId}/register`);
    } else {
      // Ver detalles
      router.push(`/dashboard/task/${taskId}/details`);
    }
  };

  const handleNewRegistration = () => {
    router.push('/dashboard/new-registration');
  };

  const handleTakePhoto = () => {
    // Simulación de apertura de cámara
    alert('Función de cámara abierta');
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
              className="flex-1 bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Nuevo Registro
            </button>
            
            <button
              onClick={handleTakePhoto}
              className="flex-1 bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-lg flex items-center justify-center"
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
                  className={`bg-white rounded-lg shadow p-4 border-l-4 ${
                    task.status === 'urgent' ? 'border-red-500 bg-red-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`flex items-center justify-center p-2 rounded-full ${
                      task.status === 'urgent' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {task.status === 'urgent' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      )}