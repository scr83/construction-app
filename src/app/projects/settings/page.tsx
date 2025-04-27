'use client';
import { ChevronLeft, Building2, Users, Settings, Bell, Layers, FileText, ChevronRight, AlertCircle, Save, Tag, Lock, Workflow, Shield } from 'lucide-react';

export default function ProjectSettings() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header Fijo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="ml-2">
              <h1 className="text-lg font-bold">Configuración</h1>
              <p className="text-sm text-gray-500">Torre Norte</p>
            </div>
          </div>
          <button className="text-blue-600 font-medium">
            Guardar
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-4 pb-32">
        {/* Grupos de Configuración */}
        <div className="space-y-6 pt-4">
          {/* Información General */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-gray-400" />
                <h2 className="font-semibold">Información General</h2>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre del Proyecto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="Torre Norte"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estado
                  </label>
                  <select className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>En Progreso</option>
                    <option>Planificación</option>
                    <option>Completado</option>
                    <option>En Pausa</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos - Secciones Principales */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white p-4 rounded-xl border shadow-sm flex flex-col items-center justify-center space-y-2">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-medium">Equipo</span>
            </button>

            <button className="bg-white p-4 rounded-xl border shadow-sm flex flex-col items-center justify-center space-y-2">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Layers className="h-6 w-6 text-purple-600" />
              </div>
              <span className="font-medium">Estructura</span>
            </button>

            <button className="bg-white p-4 rounded-xl border shadow-sm flex flex-col items-center justify-center space-y-2">
              <div className="bg-green-100 p-3 rounded-lg">
                <Tag className="h-6 w-6 text-green-600" />
              </div>
              <span className="font-medium">Partidas</span>
            </button>

            <button className="bg-white p-4 rounded-xl border shadow-sm flex flex-col items-center justify-center space-y-2">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Workflow className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="font-medium">Flujos</span>
            </button>
          </div>

          {/* Permisos y Seguridad */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-gray-400" />
                <h2 className="font-semibold">Permisos y Seguridad</h2>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Acceso Público</span>
                    <p className="text-sm text-gray-500 mt-0.5">Visible para todos los usuarios</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Registro de Actividad</span>
                    <p className="text-sm text-gray-500 mt-0.5">Historial de cambios</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Notificaciones */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-gray-400" />
                <h2 className="font-semibold">Notificaciones</h2>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Alertas de retraso</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Revisiones pendientes</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 rounded-xl border border-red-200 p-4">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Zona de Peligro
                </h3>
                <div className="mt-2 space-y-3">
                  <button className="w-full bg-white border border-red-300 text-red-700 px-4 py-2 rounded-lg hover:bg-red-50">
                    Archivar Proyecto
                  </button>
                  <button className="w-full bg-white border border-red-300 text-red-700 px-4 py-2 rounded-lg hover:bg-red-50">
                    Eliminar Proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium">
          Guardar Cambios
        </button>
      </div>
    </div>
  );
}
