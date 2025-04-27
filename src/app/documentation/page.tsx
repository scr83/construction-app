'use client';
import { ChevronLeft, Search, Filter, Plus, FileText, Download, Clock, ChevronRight, FolderOpen, File, FileCheck, FileClock, MoreVertical, WifiOff, AlertCircle, Eye } from 'lucide-react';

export default function DocumentationView() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header Fijo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold">Documentación</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Nuevo</span>
          </button>
        </div>

        {/* Búsqueda y Filtros */}
        <div className="px-4 pb-3">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <input 
                type="text"
                placeholder="Buscar documentos..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <button className="px-3 py-2.5 bg-gray-50 border rounded-lg">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Navegación de Carpetas */}
        <div className="px-4 pb-3 flex items-center space-x-2 overflow-x-auto scrollbar-hide">
          <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-100 rounded-lg text-sm whitespace-nowrap">
            <FolderOpen className="h-4 w-4 text-gray-500" />
            <span>Documentos</span>
          </button>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-100 rounded-lg text-sm whitespace-nowrap">
            <FolderOpen className="h-4 w-4 text-gray-500" />
            <span>Planos</span>
          </button>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <button className="flex items-center space-x-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm whitespace-nowrap">
            <FolderOpen className="h-4 w-4" />
            <span>Arquitectura</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-40 px-4">
        {/* Lista de Documentos */}
        <div className="space-y-4">
          {/* Documento Reciente */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-white p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Plano General.pdf</h3>
                  <p className="text-sm text-gray-600 mt-0.5">Planta Piso Tipo</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Actualizado hace 2h</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-blue-100 rounded-lg">
                <MoreVertical className="h-5 w-5 text-blue-600" />
              </button>
            </div>
            <div className="flex space-x-3 mt-3">
              <button className="flex-1 bg-white border border-blue-200 py-2 rounded-lg text-sm font-medium text-blue-600">
                Ver
              </button>
              <button className="flex-1 bg-white border border-blue-200 py-2 rounded-lg text-sm font-medium text-blue-600">
                Descargar
              </button>
            </div>
          </div>

          {/* Documento Normal */}
          <div className="bg-white border rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <FileCheck className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium">Memoria Técnica.pdf</h3>
                  <p className="text-sm text-gray-600 mt-0.5">Especificaciones</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Hace 2 días</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Documento en Revisión */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="bg-white p-2 rounded-lg">
                  <FileClock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium">Detalles Rev.2.pdf</h3>
                    <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      En Revisión
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5">Pendiente aprobación</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Hace 1 día</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-yellow-100 rounded-lg">
                <MoreVertical className="h-5 w-5 text-yellow-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sync Status */}
      <div className="fixed bottom-20 right-4">
        <div className="bg-yellow-50 shadow-lg border border-yellow-200 rounded-xl p-3 flex items-center space-x-2">
          <WifiOff className="h-4 w-4 text-yellow-500" />
          <span className="text-sm text-yellow-700">2 docs pendientes de sync</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <FolderOpen className="h-6 w-6" />
            <span className="text-xs mt-1">Archivos</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-blue-600">
            <FileText className="h-6 w-6" />
            <span className="text-xs mt-1">Documentos</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Eye className="h-6 w-6" />
            <span className="text-xs mt-1">Recientes</span>
          </button>
        </div>
      </div>
    </div>
  );
}