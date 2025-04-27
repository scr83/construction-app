'use client';
import { Home, Files, Settings, Search, Filter, Plus, Building2, MapPin, Users, Calendar, ChevronRight, TrendingUp, MoreVertical, CheckCircle2, Clock } from 'lucide-react';

export default function ProjectList() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header Fijo */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-xl font-bold">Proyectos</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Nuevo</span>
            </button>
          </div>
          
          {/* Search and Filter */}
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <input 
                type="text"
                placeholder="Buscar proyecto..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <button className="px-3 py-2.5 bg-gray-50 border rounded-lg">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content con padding para header y nav */}
      <div className="pt-28 px-4">
        {/* Grid de Proyectos */}
        <div className="space-y-4">
          {/* Proyecto Card - En Progreso */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Torre Norte</h3>
                    <p className="text-sm text-gray-500">Proyecto Residencial</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Santiago Centro, RM
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Avance General</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>8 personas</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Ene 2025</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    En Progreso
                  </span>
                </div>
              </div>
            </div>
            
            <div className="px-4 py-3 border-t flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white">+5</span>
                  </div>
                </div>
              </div>
              <button className="text-blue-600 font-medium flex items-center">
                Ver Proyecto
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Proyecto Card - Por Iniciar */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Building2 className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Edificio Comercial</h3>
                    <p className="text-sm text-gray-500">Proyecto Comercial</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Las Condes, RM
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Avance General</span>
                    <span className="font-medium">0%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-gray-300 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Feb 2025</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Por Iniciar
                  </span>
                </div>
              </div>
            </div>
            
            <div className="px-4 py-3 border-t flex justify-end items-center">
              <button className="text-blue-600 font-medium flex items-center">
                Ver Proyecto
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Inicio</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-blue-600">
            <Files className="h-6 w-6" />
            <span className="text-xs mt-1">Proyectos</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-3 px-5 text-gray-500">
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">Config</span>
          </button>
        </div>
      </div>
    </div>
  );
}
