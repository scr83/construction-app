'use client';
import { ChevronLeft, Tag, Plus, Search, Clock, CheckCircle2, Camera, FileText, AlertCircle, Edit, ChevronRight, MoreVertical, Building2, X } from 'lucide-react';

export default function TasksConfiguration() {
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
              <h1 className="text-lg font-bold">Partidas</h1>
              <p className="text-sm text-gray-500">Torre Norte</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Nueva</span>
          </button>
        </div>

        {/* Búsqueda */}
        <div className="px-4 pb-3">
          <div className="relative">
            <input 
              type="text"
              placeholder="Buscar partida..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-36 px-4 pb-32">
        <div className="space-y-6">
          {/* Obra Gruesa */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-gray-400" />
                <h2 className="font-semibold">Obra Gruesa</h2>
              </div>
              <span className="text-sm text-gray-500">6 partidas</span>
            </div>
            <div className="divide-y">
              {/* Partida Item */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Hormigonado Muros</h3>
                    <div className="flex items-center mt-1 space-x-4 text-sm text-gray-500">
                      <span>Unidad: m²</span>
                      <span>•</span>
                      <span>QC requerido</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Edit className="h-5 w-5 text-gray-400" />
                  </button>
                </div>

                {/* Requisitos */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Control Calidad
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Camera className="h-3 w-3 mr-1" />
                    Fotos
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    <FileText className="h-3 w-3 mr-1" />
                    Documentos
                  </span>
                </div>
              </div>

              {/* Otra Partida */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Enfierradura</h3>
                    <div className="flex items-center mt-1 space-x-4 text-sm text-gray-500">
                      <span>Unidad: kg</span>
                      <span>•</span>
                      <span>QC requerido</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Edit className="h-5 w-5 text-gray-400" />
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Control Calidad
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Camera className="h-3 w-3 mr-1" />
                    Fotos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminaciones */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-gray-400" />
                <h2 className="font-semibold">Terminaciones</h2>
              </div>
              <span className="text-sm text-gray-500">4 partidas</span>
            </div>
            <div className="divide-y">
              {/* Partida Item */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Instalación Ventanas</h3>
                    <div className="flex items-center mt-1 space-x-4 text-sm text-gray-500">
                      <span>Unidad: un</span>
                      <span>•</span>
                      <span>QC requerido</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Edit className="h-5 w-5 text-gray-400" />
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Control Calidad
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Camera className="h-3 w-3 mr-1" />
                    Fotos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Requisitos Globales */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Requisitos Globales</h2>
            </div>
            <div className="p-4 space-y-4">
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium">Control de Calidad</span>
                  <p className="text-sm text-gray-500 mt-0.5">Requerir aprobación QC</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium">Registro Fotográfico</span>
                  <p className="text-sm text-gray-500 mt-0.5">Requerir fotos por defecto</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </label>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
              <div className="ml-3">
                <p className="text-sm text-yellow-800">
                  Los cambios en los tipos de partida afectarán a todas las unidades constructivas del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Agregar Nueva Partida</span>
        </button>
      </div>
    </div>
  );
}
