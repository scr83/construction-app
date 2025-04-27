'use client';
import { User, Lock, Building2, AlertCircle } from 'lucide-react';

export default function LoginScreen() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header/Logo Area - Ocupa 30vh en móvil */}
      <div className="flex flex-col items-center justify-center h-[30vh] bg-white px-6">
        <div className="bg-blue-100 p-4 rounded-xl mb-4">
          <Building2 className="h-10 w-10 text-blue-600" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">ConstructionApp</h1>
        <p className="text-gray-600 mt-2 text-center">Control de obras en tiempo real</p>
      </div>

      {/* Form Area - Resto del espacio */}
      <div className="flex-1 flex flex-col px-6 pt-8 pb-4">
        <div className="max-w-sm w-full mx-auto">
          <form className="space-y-6">
            {/* Input fields con padding aumentado para touch */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="correo@ejemplo.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Offline Warning si es necesario */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Modo offline disponible después del primer login
                  </p>
                </div>
              </div>
            </div>
            
            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Recordarme</span>
              </label>
              <button 
                type="button"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                ¿Olvidó su contraseña?
              </button>
            </div>
            
            {/* Login button con altura aumentada para touch */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-base font-medium"
            >
              Ingresar
            </button>
          </form>

          {/* Version info */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">Versión 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}