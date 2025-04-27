'use client';
import { ChevronLeft, Building2, DollarSign, Receipt, User, Calendar, CheckCircle2, FileText, Upload, Plus, X, AlertCircle, Calculator, Save } from 'lucide-react';

export default function PaymentRegistration() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Fijo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold">Registro de Pago</h1>
          <div></div>
        </div>
      </div>

      {/* Partida Info - Sticky */}
      <div className="fixed top-14 left-0 right-0 bg-white border-b z-10">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold">Hormigonado Muros</h2>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Building2 className="h-4 w-4 mr-1" />
                <span>Piso 12 - Depto 1201</span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              QC Aprobado
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-40 px-4 pb-32">
        <form className="space-y-6">
          {/* Resumen de Pago */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Cantidad Total</span>
                <span className="font-medium">24.5 m²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Precio Unitario</span>
                <span className="font-medium">$45.000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Subtotal</span>
                <span className="font-medium">$1.102.500</span>
              </div>
              <div className="pt-2 border-t border-blue-200 flex justify-between">
                <span className="font-medium text-blue-900">Total a Pagar</span>
                <span className="font-bold text-blue-900">$1.102.500</span>
              </div>
            </div>
          </div>

          {/* Detalles de Pago */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b">
              <h3 className="font-medium">Detalles del Pago</h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  N° Estado de Pago
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ej: EP-2025-001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Pago
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Calendar className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Documento
                </label>
                <select className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Factura</option>
                  <option>Boleta</option>
                  <option>Estado de Pago</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  N° Documento
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ej: 1234"
                />
              </div>
            </div>
          </div>

          {/* Documentos */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b">
              <h3 className="font-medium">Documentos Adjuntos</h3>
            </div>
            <div className="p-4">
              {/* Upload Area */}
              <button className="w-full border-2 border-dashed rounded-lg p-6 flex flex-col items-center">
                <Receipt className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-sm font-medium text-blue-600">Adjuntar Documentos</span>
                <span className="text-sm text-gray-500 mt-1">PDF o imágenes</span>
              </button>

              {/* Document Preview */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">factura-001.pdf</p>
                      <p className="text-xs text-gray-500">1.2 MB</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Observaciones */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Observaciones
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Agregar observaciones del pago..."
            ></textarea>
          </div>
        </form>
      </div>

      {/* Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 right-0">
        {/* Botones de Acción */}
        <div className="bg-white border-t p-4">
          <div className="flex space-x-4">
            <button className="flex-1 border py-4 rounded-xl font-medium text-gray-600">
              Guardar Borrador
            </button>
            <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-medium">
              Registrar Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
