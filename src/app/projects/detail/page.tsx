'use client';
import { ChevronLeft, Building2, MapPin, Calendar, Users, Clock, TrendingUp, AlertCircle, CheckCircle2, File, Camera, FileText, Plus, Settings, ArrowRight, Layers, Home } from 'lucide-react';


import React from 'react';


export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header Sticky con degradado sutil */}
      <div className="sticky top-0 bg-white border-b z-20">
        {/* Back button y título */}
        <div className="flex items-center px-4 py-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="ml-2">
            <h1 className="text-lg font-bold">Torre Norte</h1>
            <p className="text-sm text-gray-500">Proyecto Residencial</p>
          </div>
        </div>

        {/* Tabs de navegación */}
        <div className="px-4 flex space-x-6 overflow-x-auto pb-3 scrollbar-hide">
          <button className="flex flex-col items-center border-b-2 border-blue-600 pb-1 px-1">
            <span className="text-sm font-medium text-blue-600">General</span>
          </button>
          <button className="flex flex-col items-center border-b-2 border-transparent pb-1 px-1">
            <span className="text-sm font-medium text-gray-500">Unidades</span>
          </button>
          <button className="flex flex-col items-center border-b-2 border-transparent pb-1 px-1">
            <span className="text-sm font-medium text-gray-500">Registros</span>
          </button>
          <button className="flex flex-col items-center border-b-2 border-transparent pb-1 px-1">
            <span className="text-sm font-medium text-gray-500">Fotos</span>
          </button>
          <button className="flex flex-col items-center border-b-2 border-transparent pb-1 px-1">
            <span className="text-sm font-medium text-gray-500">Informes</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Estado General Card */}
        <div className="bg-white rounded-xl border shadow-sm p-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>Santiago Centro, RM</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="text-sm text-gray-500">Avance</span>
                <div className="font-bold text-xl mt-1">75%</div>
              </div>
              <div>
                <span className="text-sm text-gray-500">Días Rest.</span>
                <div className="font-bold text-xl mt-1">45</div>
              </div>
              <div>
                <span className="text-sm text-gray-500">Personal</span>
                <div className="font-bold text-xl mt-1">8</div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Progreso General</span>
                <span className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +5.2%
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones Rápidas Scroll Horizontal */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex space-x-4 w-max">
            <button className="bg-white border rounded-xl p-4 w-28 flex flex-col items-center">
              <div className="bg-blue-100 p-2 rounded-lg mb-2">
                <Plus className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium">Registro</span>
            </button>
            
            <button className="bg-white border rounded-xl p-4 w-28 flex flex-col items-center">
              <div className="bg-green-100 p-2 rounded-lg mb-2">
                <Camera className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-sm font-medium">Fotos</span>
            </button>
            
            <button className="bg-white border rounded-xl p-4 w-28 flex flex-col items-center">
              <div className="bg-purple-100 p-2 rounded-lg mb-2">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-sm font-medium">Informe</span>
            </button>
            
            <button className="bg-white border rounded-xl p-4 w-28 flex flex-col items-center">
              <div className="bg-gray-100 p-2 rounded-lg mb-2">
                <Settings className="h-5 w-5 text-gray-600" />
              </div>
              <span className="text-sm font-medium">Config</span>
            </button>
          </div>
        </div>

        {/* Alertas */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <h3 className="font-medium text-red-800">3 Alertas Pendientes</h3>
              <p className="text-sm text-red-700 mt-1">2 partidas con retraso, 1 revisión pendiente</p>
              <button className="mt-2 text-sm font-medium text-red-800">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>

        {/* Últimas Actividades */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Última Actividad</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Hormigonado Completado</h3>
                  <p className="text-sm text-gray-500 mt-1">Piso 12 - Depto 1201</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Hace 2 horas</span>
                    <span className="mx-2">•</span>
                    <span>Juan Pérez</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full text-center text-sm text-blue-600 font-medium py-2">
              Ver Todo el Historial
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Inicio</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-blue-600">
            <Building2 className="h-6 w-6" />
            <span className="text-xs mt-1">Proyecto</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Layers className="h-6 w-6" />
            <span className="text-xs mt-1">Unidades</span>
          </button>
        </div>
      </div>
    </div>
  );
}
