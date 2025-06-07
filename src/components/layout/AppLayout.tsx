'use client';

import React, { useState, ReactNode } from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import styles from './AppLayout.module.css';

// Definimos los iconos que usaremos en la navegación
const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const ProjectsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
    <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
    <path d="M15 2v5h5" />
  </svg>
);

const UnitsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const DocumentationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

const TasksIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const PhotosIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 8h.01" />
    <rect width="16" height="16" x="4" y="4" rx="3" />
    <path d="m4 15 4-4a3 5 0 0 1 3 0l5 5" />
    <path d="m14 14 1-1a3 5 0 0 1 3 0l2 2" />
  </svg>
);

const ReportsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M5 11V2a1 1 0 0 1 1-1h7l5 5v11a1 1 0 0 1-1 1h-7" />
    <path d="M5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Z" />
  </svg>
);

const KpiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
  userInfo?: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
}

export const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  title,
  userInfo = {
    name: 'Usuario Demo',
    role: 'Gerencia',
  }
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Elementos de navegación para el sidebar
  const navigationItems = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />,
      children: [
        {
          label: 'Gerencia',
          href: '/dashboard/gerencia',
          icon: <span>G</span>,
        },
        {
          label: 'Operativo',
          href: '/dashboard/operativo',
          icon: <span>O</span>,
        },
      ],
    },
    {
      label: 'Proyectos',
      href: '/projects',
      icon: <ProjectsIcon />,
    },
    {
      label: 'Unidades',
      href: '/construction-units',
      icon: <UnitsIcon />,
    },
    {
      label: 'Documentación',
      href: '/documentation',
      icon: <DocumentationIcon />,
    },
    {
      label: 'Tareas',
      href: '/tasks',
      icon: <TasksIcon />,
    },
    {
      label: 'Galería',
      href: '/photos',
      icon: <PhotosIcon />,
    },
    {
      label: 'Reportes',
      href: '/reports',
      icon: <ReportsIcon />,
      children: [
        {
          label: 'Generador',
          href: '/reports/generator',
          icon: <span>G</span>,
        },
        {
          label: 'Progreso',
          href: '/reports/progress',
          icon: <span>P</span>,
        },
        {
          label: 'KPI',
          href: '/reports/kpi',
          icon: <span>K</span>,
        },
      ],
    },
  ];

  return (
    <div className={styles.layout}>
      {/* Sidebar - sólo visible en desktop por defecto */}
      <div className={`${styles.sidebarContainer} ${mobileMenuOpen ? styles.sidebarMobileOpen : ''}`}>
        <Sidebar 
          items={navigationItems} 
          userInfo={userInfo}
        />
        
        {/* Overlay para cerrar menú en mobile */}
        <div 
          className={`${styles.overlay} ${mobileMenuOpen ? styles.overlayVisible : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      </div>
      
      {/* Contenido principal */}
      <main className={styles.main}>
        {/* Header de la página */}
        <header className={styles.header}>
          <button 
            className={styles.menuButton}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
          
          {title && <h1 className={styles.title}>{title}</h1>}
          
          {/* Botones de acción */}
          <div className={styles.actions}>
            {/* Botón de notificaciones */}
            <button className={styles.actionButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            
            {/* Botón de ayuda */}
            <button className={styles.actionButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </button>
          </div>
        </header>
        
        {/* Contenido de la página */}
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
};