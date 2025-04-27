'use client';
import { ChevronLeft, Search, Filter, Camera, Grid, X, MapPin, User, Image, Share2, Download, Info, ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';

export default function PhotoGalleryWithInteractions() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Vista Principal de Grid */}
      <div className="pb-16">
        {/* [Header previo se mantiene igual] */}

        {/* Nueva Sección: Grupos de Fechas con Scroll Infinito */}
        <div className="pt-36 px-4 space-y-8">
          {/* Grupo Fecha */}
          <div>
            <div className="sticky top-36 bg-gray-100 py-2 z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Hoy</h2>
                <span className="text-sm text-gray-500">24 fotos</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {/* Fotos con Touch Feedback */}
              <button className="aspect-square bg-gray-200 rounded-lg relative group touch-manipulation">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg"></div>
                <Image className="h-8 w-8 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-1 right-1">
                  <ZoomIn className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
              {/* [Más fotos...] */}
            </div>
          </div>

          {/* Más grupos de fechas... */}
        </div>
      </div>

      {/* Modal de Vista Detallada - Swipe entre fotos */}
      <div className="fixed inset-0 bg-black z-50">
        <div className="h-full flex flex-col">
          {/* Header Modal */}
          <div className="px-4 py-3 flex justify-between items-center">
            <button className="p-2 rounded-full">
              <X className="h-6 w-6 text-white" />
            </button>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full">
                <Share2 className="h-6 w-6 text-white" />
              </button>
              <button className="p-2 rounded-full">
                <Info className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Área de Swipe */}
          <div className="flex-1 relative">
            {/* Foto Actual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image className="h-16 w-16 text-gray-400" />
            </div>

            {/* Botones de Navegación */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50">
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50">
              <ArrowRight className="h-6 w-6 text-white" />
            </button>

            {/* Indicador de Swipe */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-black bg-opacity-50 rounded-full px-4 py-2 text-white text-sm">
                12 de 24
              </div>
            </div>
          </div>

          {/* Info Footer */}
          <div className="bg-black bg-opacity-50 p-4">
            <div className="text-white">
              <h3 className="font-medium">Hormigonado Muros</h3>
              <div className="flex items-center text-sm mt-1 space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Piso 12 - Depto 1201</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>Juan Pérez</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Carga - Para scroll infinito */}
      <div className="py-4 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    </div>
  );
}