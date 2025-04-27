'use client';
import { ChevronLeft, Building2, MapPin, Calendar, Users, Upload, File, Plus, X, ChevronRight, Save, AlertCircle } from 'lucide-react';

export default function NewProjectForm() {
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
              <h1 className="text-lg font-bold">Nuevo Proyecto</h1>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
            <Save className="h-5 w-5 mr-2" />
            Guardar
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex-1 h-1 bg-blue-600 rounded-full"></div>
            <div className="flex-1 h-1 bg-gray-200 rounded-full ml-1"></div>
            <div className="flex-1 h-1 bg-gray-200 rounded-full ml-1"></div>
            <div className="flex-1 h-1 bg-gray-200 rounded-full ml-1"></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-blue-600 font-medium">General</span>
            <span className="text-gray-400">Estructura</span>
            <span className="text-gray-400">Planos</span>
            <span className="text-gray-400">Equipo</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-28 px-4 pb-4">
        <form className="space-y-6">
          {/* Info Básica */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre del Proyecto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ej: Torre Norte"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Proyecto
                  </label>
                  <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Descripción breve del proyecto..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Ubicación y Fechas */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ubicación
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Dirección del proyecto"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha Inicio
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <Calendar className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha Término
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <Calendar className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón Siguiente */}
          <div className="fixed bottom-4 left-4 right-4">
            <button 
              type="button"
              className="w-full bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center font-medium"
            >
              Siguiente
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </form>
      </div>

      {/* Warning Bottom Sheet */}
      <div className="fixed bottom-20 left-4 right-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-lg">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Los cambios se guardarán automáticamente como borrador. Podrás continuar más tarde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
