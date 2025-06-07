import React from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

// Tipo para el estado del proyecto
export type ProjectStatus = 'planning' | 'in-progress' | 'delayed' | 'completed' | 'on-hold';

// Mapeo de estados a colores y etiquetas
const statusConfig = {
  'planning': { label: 'Planificación', colorClass: styles.statusPlanning },
  'in-progress': { label: 'En progreso', colorClass: styles.statusInProgress },
  'delayed': { label: 'Retrasado', colorClass: styles.statusDelayed },
  'completed': { label: 'Completado', colorClass: styles.statusCompleted },
  'on-hold': { label: 'En pausa', colorClass: styles.statusOnHold },
};

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  status: ProjectStatus;
  progress: number; // 0-100
  dueDate: string;
  thumbnailUrl?: string;
  onClick?: () => void;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  location,
  status,
  progress,
  dueDate,
  thumbnailUrl,
  onClick,
  className = '',
}) => {
  const statusInfo = statusConfig[status];
  
  // Formatear la fecha de entrega para mostrarla de forma amigable
  const formattedDate = new Date(dueDate).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  
  return (
    <div 
      className={`${styles.card} ${className}`}
      onClick={onClick}
    >
      {/* Thumbnail / Imagen del proyecto */}
      <div className={styles.thumbnail}>
        {thumbnailUrl ? (
          <Image 
            src={thumbnailUrl} 
            alt={title} 
            width={120} 
            height={120} 
            className={styles.image}
          />
        ) : (
          <div className={styles.noImage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"/>
              <path d="m22 22-5-5"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M14.526 12.621L6 21h8a4 4 0 0 0 4-4v-1.382l-3.474-2.997Z"/>
            </svg>
          </div>
        )}
      </div>
      
      {/* Contenido principal */}
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={`${styles.status} ${statusInfo.colorClass}`}>
            {statusInfo.label}
          </span>
        </div>
        
        <div className={styles.location}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{location}</span>
        </div>
        
        {/* Barra de progreso */}
        <div className={styles.progressContainer}>
          <div className={styles.progressInfo}>
            <span>Progreso</span>
            <span>{progress}%</span>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Fecha de entrega */}
        <div className={styles.dueDate}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
            <line x1="16" x2="16" y1="2" y2="6"/>
            <line x1="8" x2="8" y1="2" y2="6"/>
            <line x1="3" x2="21" y1="10" y2="10"/>
          </svg>
          <span>Fecha de entrega: {formattedDate}</span>
        </div>
      </div>
    </div>
  );
};