'use client';
import { ChevronLeft, Users, UserPlus, Search, Shield, User, Settings, Mail, X, ChevronRight, AlertCircle, CheckCircle2, Clock, Lock } from 'lucide-react';

export default function UserPermissions() {
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
              <h1 className="text-lg font-bold">Usuarios y Permisos</h1>
              <p className="text-sm text-gray-500">Torre Norte</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <UserPlus className="h-5 w-5" />
            <span>Invitar</span>
          </button>
        </div>

        {/* Búsqueda */}
        <div className="px-4 pb-3">
          <div className="relative">
            <input 
              type="text"
              placeholder="Buscar usuario..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-36 px-4 pb-32">
        <div className="space-y-6">
          {/* Roles y Perfiles */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-gray-400" />
                <h2 className="font-semibold">Roles y Perfiles</h2>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {/* Gerencia */}
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <span className="font-medium">Gerencia</span>
                      <p className="text-sm text-gray-500">2 usuarios asignados</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>

                {/* Control de Calidad */}
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="text-left">
                      <span className="font-medium">Control de Calidad</span>
                      <p className="text-sm text-gray-500">3 usuarios asignados</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>

                {/* Personal de Obra */}
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="text-left">
                      <span className="font-medium">Personal de Obra</span>
                      <p className="text-sm text-gray-500">8 usuarios asignados</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Usuarios */}
          <div className="space-y-4">
            {/* Usuario Activo */}
            <div className="bg-white rounded-xl border shadow-sm p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Juan Pérez</h3>
                    <p className="text-sm text-gray-500">juan.perez@mail.com</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Activo
                  </span>
                  <span className="text-sm text-gray-500 mt-1">Jefe de Terreno</span>
                </div>
              </div>
              <button className="w-full mt-4 text-blue-600 text-sm font-medium text-center">
                Editar Permisos
              </button>
            </div>

            {/* Usuario Pendiente */}
            <div className="bg-white rounded-xl border shadow-sm p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">María González</h3>
                    <p className="text-sm text-gray-500">maria.g@mail.com</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    <Clock className="h-3 w-3 mr-1" />
                    Pendiente
                  </span>
                  <span className="text-sm text-gray-500 mt-1">Control de Calidad</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <button className="flex-1 text-red-600 text-sm font-medium text-center">
                  Cancelar Invitación
                </button>
                <button className="flex-1 text-blue-600 text-sm font-medium text-center">
                  Reenviar
                </button>
              </div>
            </div>

            {/* Usuario Inactivo */}
            <div className="bg-white rounded-xl border shadow-sm p-4 opacity-60">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Carlos Soto</h3>
                    <p className="text-sm text-gray-500">carlos.s@mail.com</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Inactivo
                  </span>
                  <span className="text-sm text-gray-500 mt-1">Oficina Técnica</span>
                </div>
              </div>
              <button className="w-full mt-4 text-blue-600 text-sm font-medium text-center">
                Reactivar Usuario
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-xl">
          <UserPlus className="h-5 w-5" />
          <span>Invitar Nuevo Usuario</span>
        </button>
      </div>
    </div>
  );
}
