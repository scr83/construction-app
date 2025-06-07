import React from 'react';
import styles from './StatCard.module.css';

type TrendDirection = 'up' | 'down' | 'neutral';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    direction: TrendDirection;
    value: string;
  };
  className?: string;
  onClick?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  className = '',
  onClick,
}) => {
  // Determinar la clase de tendencia basada en la dirección
  const getTrendClass = (direction: TrendDirection) => {
    switch (direction) {
      case 'up':
        return styles.trendUp;
      case 'down':
        return styles.trendDown;
      default:
        return styles.trendNeutral;
    }
  };

  return (
    <div 
      className={`${styles.card} ${className}`}
      onClick={onClick}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
      
      <div className={styles.value}>{value}</div>
      
      {trend && (
        <div className={`${styles.trend} ${getTrendClass(trend.direction)}`}>
          {trend.direction === 'up' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          )}
          {trend.direction === 'down' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          )}
          {trend.direction === 'neutral' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
};

// Componente para una fila de tarjetas de estadísticas
interface StatRowProps {
  children: React.ReactNode;
  className?: string;
}

export const StatRow: React.FC<StatRowProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.row} ${className}`}>
      {children}
    </div>
  );
};