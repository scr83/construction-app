'use client';
import React from 'react';
import { ChevronLeft, Calendar, Download, TrendingUp, TrendingDown, Clock, CheckCircle2, AlertCircle, XCircle, BarChart3, PieChart, Share2, ArrowRight, Filter } from 'lucide-react';

export default function KPIDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header Fijo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="ml-2">
              <h1 className="text-lg font-bold">Indicadores</h1>
              <p className="text-sm text-gray-500">Torre Norte</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="px-3 py-2 bg-gray-50 border rounded-lg text-sm">
              <option>Últimos 30 días</option>
              <option>Este mes</option>
              <option>Este año</option>
            </select>
            <button className="p-2 bg-gray-50 border rounded-lg">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 px-4">
        {/* KPIs Principales - Scroll Horizontal */}
        <div className="py-4 overflow-x-auto -mx-4">
          <div className="flex space-x-4 px-4 min-w-max">
            <div className="bg-white rounded-xl border shadow-sm p-4 w-48">
              <span className="text-sm text-gray-500">Avance General</span>
              <div className="mt-2">
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold">75.4%</span>
                  <span className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +5.2%
                  </span>
                </div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-blue-600 rounded-full" style={{width: '75.4%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border shadow-sm p-4 w-48">
              <span className="text-sm text-gray-500">Cumplimiento</span>
              <div className="mt-2">
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold">92.3%</span>
                  <span className="flex items-center text-red-600 text-sm">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    -2.1%
                  </span>
                </div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-green-600 rounded-full" style={{width: '92.3%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border shadow-sm p-4 w-48">
              <span className="text-sm text-gray-500">Control Calidad</span>
              <div className="mt-2">
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold">96.7%</span>
                  <span className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +3.8%
                  </span>
                </div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-yellow-600 rounded-full" style={{width: '96.7%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gráficos y Métricas */}
        <div className="space-y-6">
          {/* Estado de Partidas */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-semibold">Estado de Partidas</h2>
              <button className="text-blue-600 text-sm">Ver Detalles</button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Completadas</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium">45</span>
                    <div className="w-24 h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-yellow-500" />
                    <span>En Progreso</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium">12</span>
                    <div className="w-24 h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-yellow-500 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span>Con Retraso</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium">3</span>
                    <div className="w-24 h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-red-500 rounded-full" style={{width: '5%'}}></div>
                    </div>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Control de Calidad */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-semibold">Control de Calidad</h2>
              <button className="text-blue-600 text-sm">Ver Detalles</button>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-green-700">Aprobadas</span>
                    <span className="text-2xl font-bold text-green-700">92.5%</span>
                  </div>
                  <div className="mt-2 text-sm text-green-600">37 partidas</div>
                </div>

                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-red-700">Rechazadas</span>
                    <span className="text-2xl font-bold text-red-700">7.5%</span>
                  </div>
                  <div className="mt-2 text-sm text-red-600">3 partidas</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium text-yellow-900">Hormigonado Muros P12</p>
                      <p className="text-xs text-yellow-700">Revisión pendiente</p>
                    </div>
                  </div>
                  <button className="text-yellow-600 text-sm hover:text-yellow-700">
                    Ver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <BarChart3 className="h-6 w-6" />
            <span className="text-xs mt-1">KPIs</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <PieChart className="h-6 w-6" />
            <span className="text-xs mt-1">Gráficos</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Share2 className="h-6 w-6" />
            <span className="text-xs mt-1">Compartir</span>
          </button>
        </div>
      </div>
    </div>
  );
}
