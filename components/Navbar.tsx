'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Technology', href: '#technology' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '12px 0' : '20px 0',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(255,255,255,0.6)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.4)' : 'none',
      boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Link href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <Image src="/logo.svg" alt="BharatBloomm FarmTech Logo" width={48} height={48} priority />
          <span style={{
            fontSize: '1.4rem', fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            BharatBloomm FarmTech Private Limited
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="desktop-nav" style={{ listStyle: 'none', gap: '32px', alignItems: 'center', margin: 0, padding: 0 }}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{
                textDecoration: 'none', color: '#1B1B1B', fontWeight: 500,
                transition: 'color 0.3s ease', fontSize: '0.95rem',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4CAF50')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1B1B1B')}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              padding: '12px 28px',
              background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
              color: 'white', borderRadius: '50px', textDecoration: 'none',
              fontWeight: 600, fontSize: '0.95rem',
              boxShadow: '0 4px 16px rgba(76,175,80,0.3)',
              transition: 'all 0.3s ease', display: 'inline-block',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(76,175,80,0.4)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(76,175,80,0.3)'; }}
            >
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#1B1B1B' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)',
          padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.4)',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', textDecoration: 'none', color: '#1B1B1B', fontWeight: 500, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            display: 'block', marginTop: '16px', padding: '14px', textAlign: 'center',
            background: 'linear-gradient(135deg, #4CAF50, #2E7D32)', color: 'white',
            borderRadius: '50px', textDecoration: 'none', fontWeight: 600,
          }}>Get a Quote</a>
        </div>
      )}
    </nav>
  );
}
