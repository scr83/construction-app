'use client';
import React from 'react';
import { Building2, ArrowRight, User, Files, Settings, Bell, Camera, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  [key: string]: any;
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

const PrimaryButton = ({ children, className = "", href, ...props }: ButtonProps) => (
  <Link href={href || '#'}>
    <button
      className={`bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:bg-blue-300 disabled:shadow-none disabled:transform-none ${className}`}
      {...props}
    >
      {children}
    </button>
  </Link>
);

const SecondaryButton = ({ children, className = "", href, ...props }: ButtonProps) => (
  <Link href={href || '#'}>
    <button
      className={`bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-900 font-medium border border-gray-200 px-4 py-3 rounded-xl shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:text-gray-400 disabled:bg-gray-50 disabled:shadow-none disabled:transform-none ${className}`}
      {...props}
    >
      {children}
    </button>
  </Link>
);

const FeatureCard = ({ icon: Icon, title, description, href }: FeatureCardProps) => (
  <Link href={href} className="block">
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all group">
      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-blue-600 font-medium">
        <span>Ver más</span>
        <ChevronRight className="h-4 w-4 ml-1" />
      </div>
    </div>
  </Link>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="font-bold text-xl">ConstructionApp</h1>
              <p className="text-sm text-gray-500">v1.0.0</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <SecondaryButton href="/auth/register">Register</SecondaryButton>
            <PrimaryButton href="/auth/login">Login</PrimaryButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Control de Obras en Tiempo Real
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Optimice la gestión de sus proyectos de construcción con nuestra plataforma integral. 
              Monitoree el progreso, gestione equipos y documente cada paso del proceso.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton href="/auth/register" className="w-full sm:w-auto">
                Comenzar Ahora
              </PrimaryButton>
              <SecondaryButton href="/auth/login" className="w-full sm:w-auto">
                Ver Demo
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Funcionalidades Principales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesita para gestionar sus proyectos de construcción de manera eficiente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Files}
              title="Gestión de Proyectos"
              description="Administre todos sus proyectos de construcción en un solo lugar. Monitoree el progreso y gestione recursos."
              href="/projects"
            />
            <FeatureCard 
              icon={User}
              title="Control de Personal"
              description="Asigne tareas y haga seguimiento del rendimiento del equipo. Optimice la productividad."
              href="/tasks"
            />
            <FeatureCard 
              icon={Camera}
              title="Documentación Visual"
              description="Capture fotos y documente el progreso en tiempo real. Mantenga un registro visual completo."
              href="/photos"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para optimizar su operación?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Únase a las empresas líderes que ya están utilizando ConstructionApp para mejorar su eficiencia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register">
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:shadow-lg transition w-full sm:w-auto">
                  Comenzar Prueba Gratuita
                </button>
              </Link>
              <Link href="/auth/login">
                <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-400 transition w-full sm:w-auto">
                  Iniciar Sesión
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="font-bold text-xl">ConstructionApp</h2>
            </div>
            <div className="text-center text-gray-500 text-sm">
              © 2025 ConstructionApp. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;