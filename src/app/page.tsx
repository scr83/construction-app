'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleRegister = () => {
    router.push('/auth/register');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header con logo */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">ConstructionApp</h1>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleLogin}
              className="py-2 px-4 bg-white text-blue-600 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-sm font-medium"
            >
              Iniciar sesión
            </button>
            <button
              onClick={handleRegister}
              className="py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 text-sm font-medium"
            >
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Control de obras en tiempo real
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Gestiona tus proyectos de construcción de manera eficiente,
              monitoreando avances y optimizando recursos directamente desde tu
              dispositivo.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleLogin}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Comenzar ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Características principales
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Seguimiento de avances</h3>
                <p className="text-gray-600">
                  Mantén un registro detallado del progreso de cada fase de tu proyecto con actualizaciones en tiempo real.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Documentación fotográfica</h3>
                <p className="text-gray-600">
                  Captura y organiza imágenes de cada etapa de construcción para tener un registro visual completo.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Alertas en tiempo real</h3>
                <p className="text-gray-600">
                  Recibe notificaciones instantáneas sobre urgencias, retrasos o cualquier incidencia que requiera atención inmediata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">
              ¿Listo para optimizar la gestión de tus proyectos?
            </h2>
            <div className="mt-4">
              <button
                onClick={handleRegister}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100"
              >
                Registrarse gratis
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 ConstructionApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}