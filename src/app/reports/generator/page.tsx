'use client';
import React from 'react';
import { ChevronLeft, Calendar, Download, FileText, BarChart3, Image, ChevronRight, Settings, AlertCircle, Save, Eye, CheckCircle2, ArrowRight, Clock, PlusCircle, X } from 'lucide-react';

import React from 'react';
import { 
  ChevronLeft,
  Calendar,
  Download,
  FileText,
  BarChart3,
  Image,
  ChevronRight,
  Settings,
  AlertCircle,
  Save,
  Eye,
  CheckCircle2,
  ArrowRight,
  Clock,
  PlusCircle,
  X
} from 'lucide-react';

export default function ReportGenerator() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header Fijo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold">Generar Informe</h1>
          <button className="text-blue-600 font-medium text-sm">
            Guardar
          </button>
        </div>

        {/* Steps Progress */}
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1 h-1 bg-blue-600 rounded-full"></div>
            <div className="flex-1 h-1 bg-gray-200 rounded-full ml-1"></div>
            <div className="flex-1 h-1 bg-gray-200 rounded-full ml-1"></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-blue-600 font-medium">Contenido</span>
            <span className="text-gray-400">Periodo</span>
            <span className="text-gray-400">Formato</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-4">
        {/* Plantillas */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Plantillas</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <div className="flex-1 text-left">
                <div className="font-medium">Informe Semanal</div>
                <div className="text-sm text-gray-500">Resumen general del avance</div>
              </div>
              <ChevronRight className="h-5 w-5 text-blue-600" />
            </button>

            <button className="w-full flex items-center p-4 bg-white border rounded-xl">
              <BarChart3 className="h-6 w-6 text-gray-400 mr-3" />
              <div className="flex-1 text-left">
                <div className="font-medium">Avance por Partidas</div>
                <div className="text-sm text-gray-500">Estado detallado de partidas</div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Secciones a Incluir */}
        <div className="bg-white rounded-xl border shadow-sm mb-6">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Secciones a Incluir</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <label className="flex items-center p-3 bg-gray-50 rounded-lg">
                <input 
                  type="checkbox" 
                  className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  defaultChecked
                />
                <span className="ml-3">
                  <span className="block font-medium">Resumen Ejecutivo</span>
                  <span className="block text-sm text-gray-500">KPIs y métricas principales</span>
                </span>
              </label>

              <label className="flex items-center p-3 bg-gray-50 rounded-lg">
                <input 
                  type="checkbox" 
                  className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  defaultChecked
                />
                <span className="ml-3">
                  <span className="block font-medium">Avance por Partidas</span>
                  <span className="block text-sm text-gray-500">Estado detallado de cada partida</span>
                </span>
              </label>

              <label className="flex items-center p-3 bg-gray-50 rounded-lg">
                <input 
                  type="checkbox" 
                  className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-3">
                  <span className="block font-medium">Registro Fotográfico</span>
                  <span className="block text-sm text-gray-500">Fotos del avance</span>
                </span>
              </label>

              <button className="w-full flex items-center justify-center p-3 border border-dashed rounded-lg text-blue-600">
                <PlusCircle className="h-5 w-5 mr-2" />
                <span>Agregar Sección</span>
              </button>
            </div>
          </div>
        </div>

        {/* Vista Previa */}
        <div className="bg-white rounded-xl border shadow-sm mb-6">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-semibold">Vista Previa</h2>
            <button className="text-blue-600 text-sm flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              Ver
            </button>
          </div>
          <div className="p-4 flex justify-center">
            <div className="aspect-[3/4] bg-gray-100 rounded-lg w-48 flex items-center justify-center">
              <FileText className="h-12 w-12 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Información Importante
              </h3>
              <p className="text-sm text-yellow-700 mt-1">
                Asegúrate de tener todos los datos necesarios antes de generar el informe. Los datos no sincronizados no se incluirán.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium flex items-center justify-center">
          Continuar
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
