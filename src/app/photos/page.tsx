'use client';
import { ChevronLeft, Search, Filter, Camera, Grid, List, Calendar, MapPin, User, Image, Plus, MoreVertical, Clock, Download, Share2, Tag, WifiOff } from 'lucide-react';

export default function PhotoGallery() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header Fijo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold">Registro Fotográfico</h1>
          <button className="bg-blue-600 text-white p-2 rounded-lg">
            <Camera className="h-5 w-5" />
          </button>
        </div>

        {/* Búsqueda y Filtros */}
        <div className="px-4 pb-3">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <input 
                type="text"
                placeholder="Buscar fotos..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <button className="px-3 py-2.5 bg-gray-50 border rounded-lg">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Filtros activos - Scroll horizontal */}
        <div className="px-4 pb-3 flex space-x-2 overflow-x-auto scrollbar-hide">
          <button className="flex items-center space-x-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm whitespace-nowrap">
            <Tag className="h-4 w-4" />
            <span>Hormigonado</span>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="flex items-center space-x-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm whitespace-nowrap">
            <MapPin className="h-4 w-4" />
            <span>Piso 12</span>
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-36 px-4">
        {/* Sección de Hoy */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Hoy</h2>
            <span className="text-sm text-gray-500">24 fotos</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Foto Card con Preview */}
            <div className="aspect-square bg-gray-100 rounded-lg relative group">
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 rounded-lg"></div>
              <Image className="h-8 w-8 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Hormigonado Muros
                </div>
              </div>
            </div>

            {/* Nueva Foto */}
            <button className="aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-white">
              <Plus className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-500 mt-1">Nueva</span>
            </button>
          </div>
        </div>

        {/* Sección Esta Semana */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Esta Semana</h2>
            <span className="text-sm text-gray-500">86 fotos</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Grupo de Fotos */}
            <div className="aspect-square bg-white rounded-lg border shadow-sm p-2">
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <Image className="h-8 w-8 text-gray-400 mx-auto mt-4" />
                </div>
                <div className="text-center pb-2">
                  <span className="text-sm font-medium">Piso 12</span>
                  <span className="text-xs text-gray-500 block">32 fotos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Grid className="h-6 w-6" />
            <span className="text-xs mt-1">Todos</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-blue-600">
            <Camera className="h-6 w-6" />
            <span className="text-xs mt-1">Fotos</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <MapPin className="h-6 w-6" />
            <span className="text-xs mt-1">Ubicación</span>
          </button>
        </div>
      </div>

      {/* Floating Sync Status */}
      <div className="fixed bottom-20 right-4">
        <div className="bg-yellow-50 shadow-lg border border-yellow-200 rounded-xl p-3 flex items-center space-x-2">
          <WifiOff className="h-4 w-4 text-yellow-500" />
          <span className="text-sm text-yellow-700">3 fotos pendientes de sync</span>
        </div>
      </div>
    </div>
  );
}