'use client';
import { Home, Files, Camera, Bell, User, Plus, Clock, Calendar, CheckCircle2, AlertCircle, Building2, FileText, ArrowRight, Check, X, ChevronRight, Signal, Wifi } from 'lucide-react';

export default function DashboardOperativo() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Top Header - Fixed */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold">Jefe de Terreno</h1>
              <div className="flex items-center">
                <p className="text-sm text-gray-500">Torre Norte</p>
                <span className="mx-2 text-gray-300">•</span>
                <span className="flex items-center text-xs text-green-600">
                  <Signal className="h-3 w-3 mr-1" />
                  Online
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - With top padding for header */}
      <div className="pt-20 px-4">
        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="bg-blue-600 text-white p-4 rounded-xl flex items-center justify-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Nuevo Registro</span>
          </button>
          <button className="bg-white border p-4 rounded-xl flex items-center justify-center space-x-2">
            <Camera className="h-5 w-5 text-gray-600" />
            <span>Tomar Foto</span>
          </button>
        </div>

        {/* Tareas del Día */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Tareas del Día</h2>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>13 Enero</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Tarea Urgente */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium">Hormigonado Muros</h3>
                      <span className="px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">Urgente</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Piso 12 - Depto 1201</p>
                    <button className="mt-2 text-sm font-medium text-red-700">
                      Registrar Ahora
                    </button>
                  </div>
                </div>
                <span className="text-sm text-red-600">2h restantes</span>
              </div>
            </div>

            {/* Tarea Normal */}
            <div className="bg-white border rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Revisión Instalaciones</h3>
                    <p className="text-sm text-gray-600 mt-1">Piso 11 - Depto 1102</p>
                    <button className="mt-2 text-sm font-medium text-blue-600">
                      Ver Detalles
                    </button>
                  </div>
                </div>
                <span className="text-sm text-gray-500">14:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Últimos Registros */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Últimos Registros</h2>
            <button className="text-sm text-blue-600">Ver todos</button>
          </div>

          <div className="space-y-4">
            {/* Registro con Fotos */}
            <div className="bg-white border rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-medium">Terminaciones Piso 12</h3>
                  <p className="text-sm text-gray-500 mt-0.5">Completado</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <Check className="h-3 w-3 mr-1" />
                  QC Aprobado
                </span>
              </div>
              
              {/* Preview de Fotos */}
              <div className="flex space-x-2 mb-3">
                <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                <div className="w-16 h-16 bg-gray-100 rounded-lg relative">
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center text-white text-sm">
                    +3
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Hace 1 hora</span>
                <button className="text-blue-600 font-medium">Ver Registro</button>
              </div>
            </div>

            {/* Registro Simple */}
            <div className="bg-white border rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-medium">Instalación Ventanas</h3>
                  <p className="text-sm text-gray-500 mt-0.5">En revisión</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pendiente QC
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Hace 3 horas</span>
                <button className="text-blue-600 font-medium">Ver Registro</button>
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
            <span className="text-xs mt-1">Registros</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Camera className="h-6 w-6" />
            <span className="text-xs mt-1">Fotos</span>
          </button>
        </div>
      </div>

      {/* Sync Status - Fixed */}
      <div className="fixed bottom-20 right-4">
        <div className="bg-yellow-50 shadow-lg border border-yellow-200 rounded-xl p-3 flex items-center space-x-2">
          <Clock className="h-4 w-4 text-yellow-500" />
          <span className="text-sm text-yellow-700">2 registros pendientes de sync</span>
        </div>
      </div>
    </div>
  );
}