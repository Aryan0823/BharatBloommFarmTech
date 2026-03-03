'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          {/* ✏️ Logo icon — replace /logo.svg in public/ to update everywhere */}
          <Image
            src="/logo.svg"
            alt="BharatBloomm FarmTech Logo"
            width={48}
            height={48}
            style={{
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              transition: 'filter 0.3s ease',
            }}
            priority
          />
          <div>
            <div style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              lineHeight: 1.1,
              color: scrolled ? '#1a4d24' : 'white',
              fontFamily: "'Playfair Display', serif",
              textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.3)',
            }}>
              BharatBloomm<br />FarmTech
            </div>
            <div style={{ fontSize: '0.55rem', color: scrolled ? '#4caf62' : '#b5e05a', fontWeight: 500, letterSpacing: '0.05em' }}>
              PRIVATE LIMITED
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                color: scrolled ? '#2d7a3a' : 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.875rem',
                padding: '8px 14px',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = 'rgba(45,122,58,0.1)';
                (e.target as HTMLElement).style.color = '#2d7a3a';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'transparent';
                (e.target as HTMLElement).style.color = scrolled ? '#2d7a3a' : 'rgba(255,255,255,0.9)';
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary" style={{ marginLeft: '8px', padding: '10px 24px', fontSize: '0.875rem' }}>
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: '24px', height: '2px', background: scrolled ? '#2d7a3a' : 'white', marginBottom: '5px', transition: 'all 0.3s' }} />
          <div style={{ width: '24px', height: '2px', background: scrolled ? '#2d7a3a' : 'white', marginBottom: '5px', transition: 'all 0.3s' }} />
          <div style={{ width: '24px', height: '2px', background: scrolled ? '#2d7a3a' : 'white', transition: 'all 0.3s' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'white',
          padding: '16px 24px',
          borderTop: '1px solid #e2e8f0',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: '#2d7a3a',
                textDecoration: 'none',
                fontWeight: 500,
                padding: '12px 0',
                borderBottom: '1px solid #f0f0f0',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
            Get Started
          </Link>
        </div>
      )}

    </nav>
  );
}
