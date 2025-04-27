'use client';
import { Building2, User, ChevronRight, AlertCircle, Lock, LogOut } from 'lucide-react';

export default function RoleSelection() {
  // Simular roles asignados
  const userRoles = {
    gerencia: true,
    jefeTerreno: true,
    controlCalidad: false
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header con info del usuario */}
      <div className="bg-white px-6 pt-8 pb-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Juan Pérez</h2>
              <p className="text-sm text-gray-500">juan.perez@mail.com</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <LogOut className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-6 pt-6 pb-4">
        <div className="max-w-sm mx-auto">
          {/* Título */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900">Seleccionar Perfil</h1>
            <p className="text-sm text-gray-500 mt-1">Elige el perfil con el que deseas ingresar</p>
          </div>

          {/* Role buttons - Aumentados para mejor touch */}
          <div className="space-y-4">
            {/* Gerencia - Enabled */}
            <button 
              className={`w-full ${userRoles.gerencia 
                ? 'bg-white hover:bg-blue-50 active:bg-blue-100' 
                : 'bg-gray-50 cursor-not-allowed'} 
                rounded-xl p-4 border shadow-sm transition-colors duration-150 ease-in-out`}
              disabled={!userRoles.gerencia}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`${userRoles.gerencia ? 'bg-blue-100' : 'bg-gray-100'} p-3 rounded-full`}>
                    <Building2 className={`h-6 w-6 ${userRoles.gerencia ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                  <div className="text-left">
                    <h3 className={`font-semibold text-lg ${!userRoles.gerencia && 'text-gray-400'}`}>
                      Gerencia
                    </h3>
                    <p className={`text-sm ${userRoles.gerencia ? 'text-gray-500' : 'text-gray-400'}`}>
                      Vista global de proyectos
                    </p>
                  </div>
                </div>
                {userRoles.gerencia ? (
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                ) : (
                  <Lock className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* Jefe Terreno - Enabled */}
            <button 
              className={`w-full ${userRoles.jefeTerreno 
                ? 'bg-white hover:bg-green-50 active:bg-green-100' 
                : 'bg-gray-50 cursor-not-allowed'} 
                rounded-xl p-4 border shadow-sm transition-colors duration-150 ease-in-out`}
              disabled={!userRoles.jefeTerreno}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`${userRoles.jefeTerreno ? 'bg-green-100' : 'bg-gray-100'} p-3 rounded-full`}>
                    <User className={`h-6 w-6 ${userRoles.jefeTerreno ? 'text-green-600' : 'text-gray-400'}`} />
                  </div>
                  <div className="text-left">
                    <h3 className={`font-semibold text-lg ${!userRoles.jefeTerreno && 'text-gray-400'}`}>
                      Jefe de Terreno
                    </h3>
                    <p className={`text-sm ${userRoles.jefeTerreno ? 'text-gray-500' : 'text-gray-400'}`}>
                      Registro y supervisión
                    </p>
                  </div>
                </div>
                {userRoles.jefeTerreno ? (
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                ) : (
                  <Lock className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* Control Calidad - Disabled */}
            <button 
              className="w-full bg-gray-50 rounded-xl p-4 border shadow-sm cursor-not-allowed"
              disabled={true}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <User className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg text-gray-400">
                      Control de Calidad
                    </h3>
                    <p className="text-sm text-gray-400">
                      Revisión de partidas
                    </p>
                  </div>
                </div>
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
            </button>
          </div>

          {/* Info Message */}
          <div className="mt-6 bg-blue-50 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5" />
              <div>
                <p className="text-sm text-blue-700">
                  Solo puedes acceder a los perfiles asignados a tu cuenta. Contacta al administrador si necesitas acceso adicional.
                </p>
              </div>
            </div>
          </div>

          {/* Versión info */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">v1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}