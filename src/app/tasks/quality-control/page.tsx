'use client';
import { ChevronLeft, Building2, Camera, MapPin, Clock, User, CheckCircle2, XCircle, AlertCircle, Image, Plus, WifiOff, ChevronRight, FileText, Save } from 'lucide-react';

export default function QualityControlCheck() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Fijo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-2">
            <WifiOff className="h-5 w-5 text-yellow-500" />
            <span className="text-sm text-yellow-600">Modo Offline</span>
          </div>
        </div>
      </div>

      {/* Info de Partida a Revisar - Sticky */}
      <div className="fixed top-14 left-0 right-0 bg-white border-b z-10">
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="font-semibold text-lg">Hormigonado Muros</h2>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Piso 12 - Depto 1201</span>
              </div>
            </div>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-lg">
              Pendiente QC
            </span>
          </div>
          
          <div className="flex items-center justify-between text-sm mt-2">
            <div className="flex items-center text-gray-500">
              <User className="h-4 w-4 mr-1" />
              <span>Juan Pérez</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>Hace 2 horas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-44 px-4 pb-32">
        <form className="space-y-6">
          {/* Checklist de Revisión */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b">
              <h3 className="font-medium">Checklist de Control</h3>
            </div>
            <div className="p-4 space-y-4">
              <label className="block p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <input type="checkbox" className="h-5 w-5 text-green-600 rounded border-green-400 focus:ring-green-500" />
                  <div className="ml-3">
                    <span className="block font-medium">Alineación correcta</span>
                    <span className="block text-sm text-gray-500 mt-1">Verificar verticalidad y horizontalidad</span>
                  </div>
                </div>
              </label>

              <label className="block p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <input type="checkbox" className="h-5 w-5 text-red-600 rounded border-red-400 focus:ring-red-500" />
                  <div className="ml-3">
                    <span className="block font-medium">Acabado superficial</span>
                    <span className="block text-sm text-gray-500 mt-1">Revisar textura y terminación</span>
                  </div>
                </div>
              </label>

              <label className="block p-4 border rounded-lg">
                <div className="flex items-center">
                  <input type="checkbox" className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <div className="ml-3">
                    <span className="block font-medium">Dimensiones según plano</span>
                    <span className="block text-sm text-gray-500 mt-1">Verificar medidas y espesores</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Estado de Revisión */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Estado de Revisión
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="p-4 border-2 border-green-200 bg-green-50 rounded-lg flex flex-col items-center">
                <CheckCircle2 className="h-6 w-6 text-green-600 mb-1" />
                <span className="font-medium text-green-700">Aprobado</span>
              </button>
              <button type="button" className="p-4 border-2 border-yellow-200 rounded-lg flex flex-col items-center">
                <AlertCircle className="h-6 w-6 text-yellow-600 mb-1" />
                <span className="font-medium text-yellow-700">Obs.</span>
              </button>
              <button type="button" className="p-4 border-2 border-red-200 rounded-lg flex flex-col items-center">
                <XCircle className="h-6 w-6 text-red-600 mb-1" />
                <span className="font-medium text-red-700">Rechazado</span>
              </button>
            </div>
          </div>

          {/* Fotos de Revisión */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Registro Fotográfico
              </label>
              <button type="button" className="text-blue-600 text-sm font-medium">
                Ver Fotos Original
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Preview Fotos Originales */}
              <div className="aspect-square bg-gray-100 rounded-lg relative">
                <Image className="h-8 w-8 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-1.5 py-0.5 rounded">
                  Original
                </div>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg relative">
                <Image className="h-8 w-8 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-1.5 py-0.5 rounded">
                  Original
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Fotos de QC
              </label>
              <button type="button" className="text-blue-600 text-sm font-medium">
                Abrir Cámara
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {/* Fotos QC */}
              <div className="aspect-square bg-gray-100 rounded-lg relative">
                <Image className="h-8 w-8 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <button type="button" className="aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center">
                <Plus className="h-6 w-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Agregar</span>
              </button>
            </div>
          </div>

          {/* Observaciones */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Observaciones
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Detallar observaciones de la revisión..."
            ></textarea>
          </div>
        </form>
      </div>

      {/* Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 right-0">
        {/* Warning Offline */}
        <div className="bg-yellow-50 border-t border-yellow-200 p-2">
          <div className="flex items-center justify-center space-x-2">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <span className="text-sm text-yellow-700">Se guardará localmente hasta tener conexión</span>
          </div>
        </div>

        {/* Botón Guardar */}
        <div className="bg-white border-t p-4">
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center font-medium text-lg">
            Completar Revisión
          </button>
        </div>
      </div>
    </div>
  );
}
