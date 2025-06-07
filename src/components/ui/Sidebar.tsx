'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Sidebar.module.css';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

interface SidebarProps {
  items: NavItem[];
  userInfo?: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  userInfo,
  className = '',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubMenu = (label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''} ${className}`}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image 
            src="/construction-icon.svg" 
            alt="ConstructionApp Logo" 
            width={32} 
            height={32}
          />
          {!isCollapsed && <span className={styles.appName}>ConstructionApp</span>}
        </div>
        <button className={styles.collapseBtn} onClick={toggleCollapse}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isCollapsed ? (
              <>
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </>
            ) : (
              <>
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* User info if provided */}
      {userInfo && (
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            {userInfo.avatarUrl ? (
              <Image 
                src={userInfo.avatarUrl} 
                alt={userInfo.name} 
                width={40} 
                height={40} 
                className={styles.avatarImg}
              />
            ) : (
              <div className={styles.avatarPlaceholder}>
                {userInfo.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div className={styles.userDetails}>
              <div className={styles.userName}>{userInfo.name}</div>
              <div className={styles.userRole}>{userInfo.role}</div>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {items.map((item) => (
            <li key={item.label} className={styles.navItem}>
              {item.children ? (
                <>
                  <button 
                    className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                    onClick={() => toggleSubMenu(item.label)}
                  >
                    <span className={styles.navIcon}>{item.icon}</span>
                    {!isCollapsed && (
                      <>
                        <span className={styles.navLabel}>{item.label}</span>
                        <span className={styles.expandIcon}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points={expandedItems[item.label] ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
                          </svg>
                        </span>
                      </>
                    )}
                  </button>
                  {expandedItems[item.label] && !isCollapsed && (
                    <ul className={styles.subNav}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link 
                            href={child.href}
                            className={`${styles.subNavLink} ${isActive(child.href) ? styles.active : ''}`}
                          >
                            <span className={styles.subNavIcon}>{child.icon}</span>
                            <span className={styles.subNavLabel}>{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link 
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  {!isCollapsed && <span className={styles.navLabel}>{item.label}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className={styles.footer}>
        <Link href="/settings" className={styles.footerLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {!isCollapsed && <span>Configuración</span>}
        </Link>
        <Link href="/auth/logout" className={styles.footerLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          {!isCollapsed && <span>Cerrar sesión</span>}
        </Link>
      </div>
    </aside>
  );
};