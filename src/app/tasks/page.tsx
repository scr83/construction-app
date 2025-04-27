'use client';
import { ChevronLeft, Building2, Camera, MapPin, Calendar, Clock, Users, AlertCircle, CheckCircle2, X, Plus, Save, Wifi, WifiOff, Image } from 'lucide-react';

import React from 'react';

export default function TaskRegistration() {
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

      {/* Ubicación Actual */}
      <div className="fixed top-14 left-0 right-0 bg-blue-50 border-b z-10">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Piso 12 - Depto 1201</span>
          </div>
          <button className="text-blue-600 text-sm font-medium">
            Cambiar
          </button>
        </div>
      </div>

      {/* Main Form - Con padding para header y ubicación */}
      <div className="pt-28 px-4 pb-32">
        <form className="space-y-6">
          {/* Selección de Partida */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partida
            </label>
            <select className="w-full px-4 py-3 bg-white border rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Hormigonado Muros</option>
              <option>Instalación Ventanas</option>
              <option>Instalación Cerámicas</option>
            </select>
          </div>

          {/* Estado y Cantidad */}
          <div className="bg-white rounded-xl border shadow-sm p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="p-4 border-2 border-green-200 bg-green-50 rounded-lg flex flex-col items-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mb-1" />
                  <span className="font-medium text-green-700">Completado</span>
                </button>
                <button type="button" className="p-4 border-2 border-gray-200 rounded-lg flex flex-col items-center">
                  <Clock className="h-6 w-6 text-gray-400 mb-1" />
                  <span className="font-medium text-gray-600">Parcial</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cantidad Ejecutada
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="flex-1 px-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                />
                <select className="w-24 px-4 py-3 bg-white border rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>m²</option>
                  <option>ml</option>
                  <option>un</option>
                </select>
              </div>
            </div>
          </div>

          {/* Registro Fotográfico */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Fotos
              </label>
              <button type="button" className="text-blue-600 text-sm font-medium">
                Abrir Cámara
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {/* Fotos Preview */}
              <div className="aspect-square bg-gray-100 rounded-lg relative">
                <Image className="h-8 w-8 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
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
              placeholder="Agregar observaciones..."
            ></textarea>
          </div>
        </form>
      </div>

      {/* Bottom Fixed Bar con Warning */}
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
            Guardar Registro
          </button>
        </div>
      </div>
    </div>
  );
}
