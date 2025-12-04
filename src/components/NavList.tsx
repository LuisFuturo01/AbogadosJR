import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/NavList.scss';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface NavListProps {
  isOpen: boolean;
}

const NavList: React.FC<NavListProps> = ({ isOpen }) => {
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: 'INICIO', href: '/#home' },
    { label: 'NOSOTROS', href: '/#about' },
    { label: 'SERVICIOS', href: '/#services' },
    { label: 'BLOG', href: '/#blog' },
    { label: 'CONTACTO', href: '/#contact' },
    { label: 'PORTAFOLIO', href: '/portfolio' }
  ];

  const handleClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`nav-list ${isOpen ? 'open' : ''}`}>
      <ul className="nav-items">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
              <Link 
                to={item.href} 
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ) : (
              <a 
                href={item.href} 
                className="nav-link"
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    e.preventDefault();
                    if (location.pathname !== '/') {
                      window.location.href = item.href;
                    } else {
                      handleClick(item.href);
                    }
                  }
                }}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      
    </nav>
  );
};

export default NavList;