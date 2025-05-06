"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
<header className="py-6 px-4 border-b border-border">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center gap-3">
      <Image 
        src="/construction-icon.svg" 
        alt="ConstructionApp Logo" 
        width={36} 
        height={36}
        priority
      />
      <h1 className="text-xl font-bold text-text-primary">ConstructionApp</h1>
    </div>
    <div className="hidden md:flex items-center gap-4">
      <Link 
        href="/auth/login" 
        className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        Iniciar sesión
      </Link>
      <Link 
        href="/auth/register" 
        className="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
      >
        Registrarse
      </Link>
    </div>
  </div>
  
  {/* Añadir botones móviles */}
  <div className="mt-4 flex md:hidden items-center gap-4 justify-center">
    <Link 
      href="/auth/login" 
      className="flex-1 text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white"
    >
      Iniciar sesión
    </Link>
    <Link 
      href="/auth/register" 
      className="flex-1 text-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600"
    >
      Registrarse
    </Link>
  </div>
</header>
      
      {/* Hero Section */}
      <section className="py-12 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Control de obras en tiempo real
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Gestiona tus proyectos de construcción de manera eficiente, 
              monitoreando avances y optimizando recursos directamente desde tu dispositivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/auth/register"
                className="text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"
              >
                Comenzar ahora
              </Link>
              <Link 
                href="#features"
                className="text-center w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3 px-4 rounded-lg"
              >
                Ver características
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/dashboard-preview.png" 
                alt="ConstructionApp Dashboard" 
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Estado Alpha Banner */}
      <section className="bg-primary-light py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-white font-medium">
            🚧 Actualmente en fase Alpha - Acceso por invitación 🚧
          </p>
        </div>
      </section>
      
      {/* Características */}
      <section id="features" className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Funcionalidades principales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-surface rounded-lg p-6 shadow-md">
              <div className="bg-primary-light w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Gestión de proyectos</h3>
              <p className="text-text-secondary">
                Seguimiento de obras y recursos en tiempo real con actualizaciones instantáneas.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-surface rounded-lg p-6 shadow-md">
              <div className="bg-primary-light w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Documentación</h3>
              <p className="text-text-secondary">
                Almacenamiento y gestión de documentos técnicos accesibles desde cualquier dispositivo.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-surface rounded-lg p-6 shadow-md">
              <div className="bg-primary-light w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                  <path d="M6 8 A 2 2 0 0 1 6 4 A 2 2 0 0 1 6 8 z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Analítica avanzada</h3>
              <p className="text-text-secondary">
                KPIs y reportes para la toma de decisiones inteligentes sobre tus proyectos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para optimizar tus proyectos de construcción?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Únete a nuestra fase alpha y sé uno de los primeros en experimentar 
            el futuro de la gestión de proyectos de construcción.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/register"
              className="text-center bg-white text-gray-800 hover:bg-gray-100 font-bold py-3 px-4 rounded-lg"
            >
              Solicitar acceso alpha
            </Link>
            <Link 
              href="/auth/login"
              className="text-center bg-white text-primary hover:bg-gray-100 font-bold py-3 px-4 rounded-lg"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-text-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image 
                src="/construction-icon-white.svg" 
                alt="ConstructionApp Logo" 
                width={28} 
                height={28}
              />
              <span className="text-white font-medium">ConstructionApp</span>
            </div>
            <div className="text-white opacity-80 text-sm">
              © 2025 ConstructionApp. Todos los derechos reservados.
            </div>
            <div className="mt-4 md:mt-0">
              <a href="mailto:info@constructionapp.com" className="text-white opacity-80 hover:opacity-100 text-sm">
                info@constructionapp.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}