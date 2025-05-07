'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleRegister = () => {
    router.push('/auth/register');
  };

  const handleGetStarted = () => {
    router.push('/auth/login');
  };

  const handleViewFeatures = () => {
    router.push('#features');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
        <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center mr-4">
          <span className="text-blue-500 text-2xl font-bold">?</span>
        </div>
        <h1 className="text-2xl font-bold">ConstructionApp</h1>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-6 border-b border-gray-800">
        <div className="w-full max-w-2xl mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button
              onClick={handleLogin}
              className="w-full py-4 bg-white text-black rounded-md hover:bg-gray-200 font-medium"
            >
              Iniciar sesión
            </button>
            <button
              onClick={handleRegister}
              className="w-full py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-bold mb-8">Control de obras en tiempo real</h2>
        
        <p className="text-xl mb-12">
          Gestiona tus proyectos de construcción de manera eficiente, monitoreando avances y optimizando recursos directamente desde tu dispositivo.
        </p>
        
        <div className="flex flex-col gap-4 mb-8">
          <button
            onClick={handleGetStarted}
            className="w-full py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
          >
            Comenzar ahora
          </button>
          
          <button
            onClick={handleViewFeatures}
            className="w-full py-4 bg-white text-black rounded-md hover:bg-gray-200 font-medium"
          >
            Ver características
          </button>
        </div>
      </div>
    </div>
  );
}