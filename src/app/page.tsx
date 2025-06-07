'use client';
import React from 'react';
import { Building2, ArrowRight, User, Files, Settings, Bell, Camera, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  [key: string]: any;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface NavLinkProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

// Define button components based on the design system
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

// Cards with different visual treatments
const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const NavLink = ({ icon: Icon, label, active }: NavLinkProps) => (
  <div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-700'}`}>
    <Icon className="h-5 w-5" />
    <span className="font-medium">{label}</span>
    {active && <div className="ml-auto"><ArrowRight className="h-4 w-4" /></div>}
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">ConstructionApp</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Control de obras en tiempo real para equipos de construcción</p>
          <div className="flex items-center justify-center space-x-4">
            <PrimaryButton href="/auth/register" className="px-6">Comenzar Ahora</PrimaryButton>
            <SecondaryButton href="/auth/login" className="px-6">Ver Demo</SecondaryButton>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Funcionalidades Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Files} 
              title="Gestión de Proyectos" 
              description="Administre todos sus proyectos de construcción en un solo lugar." 
            />
            <FeatureCard 
              icon={User} 
              title="Control de Personal" 
              description="Asigne tareas y haga seguimiento del rendimiento del equipo." 
            />
            <FeatureCard 
              icon={Camera} 
              title="Documentación Visual" 
              description="Capture fotos y documente el progreso en tiempo real." 
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-xl p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">¿Listo para optimizar su operación?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Únase a las empresas líderes que ya están utilizando ConstructionApp para mejorar su eficiencia.</p>
          <Link href="/auth/register">
            <button 
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:shadow-lg transition"
            >
              Comenzar Prueba Gratuita
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="font-bold text-xl">ConstructionApp</h2>
          </div>
          <div className="text-center text-gray-500 text-sm">
            © 2025 ConstructionApp. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;