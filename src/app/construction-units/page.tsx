'use client';
import { ChevronLeft, Building2, Search, Filter, ChevronRight, Home, CheckCircle2, Clock, AlertCircle, Plus, MoreVertical, ChevronDown, Layers, FileText } from 'lucide-react';

export default function ConstructionUnits() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header Fijo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="flex items-center px-4 py-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="ml-2">
            <h1 className="text-lg font-bold">Torre Norte</h1>
            <div className="flex items-center text-sm text-gray-500">
              <Building2 className="h-4 w-4 mr-1" />
              24 pisos, 96 unidades
            </div>
          </div>
        </div>

        {/* Búsqueda y Filtros */}
        <div className="px-4 pb-3">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <input 
                type="text"
                placeholder="Buscar unidad..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <button className="px-3 py-2.5 bg-gray-50 border rounded-lg">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-28 px-4">
        {/* Progress Overview */}
        <div className="bg-white rounded-xl border shadow-sm p-4 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="text-sm text-gray-500">Completadas</span>
              <div className="font-bold text-xl mt-1 text-green-600">24</div>
            </div>
            <div>
              <span className="text-sm text-gray-500">En Progreso</span>
              <div className="font-bold text-xl mt-1 text-blue-600">12</div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Pendientes</span>
              <div className="font-bold text-xl mt-1 text-gray-600">60</div>
            </div>
          </div>
        </div>

        {/* Pisos Accordion */}
        <div className="space-y-4">
          {/* Piso Expandido */}
          <div className="bg-white rounded-xl border shadow-sm">
            <button className="w-full flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <Building2 className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Piso 24</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-green-600">100%</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </button>

            <div className="p-4 space-y-3">
              {/* Unidad Card */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">Depto 2401</h3>
                  <span className="text-sm text-gray-500">Tipo A</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Completado
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <h3 className="font-medium">Depto 2402</h3>
                  <span className="text-sm text-gray-500">Tipo B</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <Clock className="h-3 w-3 mr-1" />
                  En Progreso
                </span>
              </div>
            </div>
          </div>

          {/* Piso Colapsado */}
          <div className="bg-white rounded-xl border shadow-sm">
            <button className="w-full flex items-center justify-between p-4">
              <div className="flex items-center">
                <Building2 className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Piso 23</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-blue-600">75%</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </button>
          </div>

          {/* Piso con Alertas */}
          <div className="bg-white rounded-xl border shadow-sm">
            <button className="w-full flex items-center justify-between p-4">
              <div className="flex items-center">
                <Building2 className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="font-medium">Piso 22</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  2 alertas
                </span>
                <span className="text-sm text-yellow-600">45%</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed right-4 bottom-20 bg-blue-600 text-white p-4 rounded-full shadow-lg">
        <Plus className="h-6 w-6" />
      </button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Inicio</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-blue-600">
            <Layers className="h-6 w-6" />
            <span className="text-xs mt-1">Unidades</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <FileText className="h-6 w-6" />
            <span className="text-xs mt-1">Registros</span>
          </button>
        </div>
      </div>
    </div>
  );
}