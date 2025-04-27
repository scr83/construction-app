'use client';
import { ChevronLeft, Calendar, Filter, Building2, TrendingUp, TrendingDown, Clock, Users, CheckCircle2, AlertCircle, ChevronRight, Share2, Download, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';

import React from 'react';

export default function ProgressStatus() {
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
              <h1 className="text-lg font-bold">Estado de Avance</h1>
              <p className="text-sm text-gray-500">Torre Norte</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="px-3 py-2 bg-gray-50 border rounded-lg text-sm">
              <option>Este Mes</option>
              <option>Último Trimestre</option>
              <option>Este Año</option>
            </select>
            <button className="p-2 border rounded-lg">
              <Share2 className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-4 pb-32">
        {/* Resumen General Card */}
        <div className="bg-white rounded-xl border shadow-sm p-4 mb-6 mt-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-sm text-gray-500">Avance General</span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-bold">75.4%</span>
                <span className="text-sm text-green-600">+5.2%</span>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Días Restantes</span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-bold">45</span>
                <span className="text-sm text-gray-500">días</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Progreso General</span>
                <span className="font-medium">75.4%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{width: '75.4%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Planificado</span>
                <span className="font-medium">80%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-gray-400 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Avance por Piso - Scroll Horizontal */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Avance por Piso</h2>
            <button className="text-blue-600 text-sm">Ver Todo</button>
          </div>

          <div className="overflow-x-auto -mx-4">
            <div className="flex space-x-4 px-4 min-w-max">
              {/* Piso Card */}
              <div className="bg-white rounded-xl border shadow-sm p-4 w-48">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Piso 24</span>
                  </div>
                  <span className="text-green-600 text-sm">+8%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Avance</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>

              {/* Piso Card - En Progreso */}
              <div className="bg-white rounded-xl border shadow-sm p-4 w-48">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Piso 23</span>
                  </div>
                  <span className="text-green-600 text-sm">+12%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Avance</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partidas Críticas */}
        <div className="bg-white rounded-xl border shadow-sm mb-6">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-semibold">Partidas Críticas</h2>
            <span className="text-sm text-gray-500">3 pendientes</span>
          </div>
          <div className="p-4 space-y-4">
            {/* Partida Retrasada */}
            <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium">Hormigonado Muros</h3>
                    <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">
                      2 días retraso
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Piso 22 - Depto 2201</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>4 personas asignadas</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-red-500" />
              </div>
            </div>

            {/* Partida Próxima */}
            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium">Instalación Ventanas</h3>
                    <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Inicia mañana
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Piso 23 - Depto 2302</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Programado 8:00 AM</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Tendencias */}
        <div className="bg-white rounded-xl border shadow-sm">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Tendencias</h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Productividad</span>
                    <div className="flex items-center mt-1">
                      <span className="text-xl font-bold">94%</span>
                      <ArrowUp className="h-4 w-4 text-green-500 ml-1" />
                    </div>
                  </div>
                  <span className="text-sm text-green-600">+2.4%</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Calidad</span>
                    <div className="flex items-center mt-1">
                      <span className="text-xl font-bold">96%</span>
                      <ArrowUp className="h-4 w-4 text-green-500 ml-1" />
                    </div>
                  </div>
                  <span className="text-sm text-green-600">+1.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-xl">
          <Download className="h-5 w-5" />
          <span>Descargar Reporte</span>
        </button>
      </div>
    </div>
  );
}
