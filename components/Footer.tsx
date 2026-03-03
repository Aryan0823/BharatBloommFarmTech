'use client';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
    Company: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press & Media', href: '/press' },
        { label: 'Investors', href: '/investors' },
    ],
    Products: [
        { label: 'Crop Monitor', href: '/products/crop-monitor' },
        { label: 'Smart Irrigation', href: '/products/irrigation' },
        { label: 'Soil Analytics', href: '/products/soil' },
        { label: 'Farm Dashboard', href: '/products/dashboard' },
        { label: 'Mobile App', href: '/products/app' },
    ],
    Services: [
        { label: 'On-Farm Consulting', href: '/services/consulting' },
        { label: 'Training Programs', href: '/services/training' },
        { label: 'Data Analytics', href: '/services/analytics' },
        { label: 'Market Linkage', href: '/services/market' },
    ],
    Support: [
        { label: 'Help Center', href: '/help' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Community', href: '/community' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Blog', href: '/blog' },
    ],
};

export default function Footer() {
    return (
        <footer id="contact" style={{ background: '#0f1f12', color: 'white' }}>
            {/* Main footer */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px 48px' }}>
                <div className="footer-grid">
                    {/* Brand column */}
                    <div>
                        {/* ✏️ Logo — replace /logo.svg in public/ to update everywhere */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <Image
                                src="/logo.svg"
                                alt="BharatBloomm FarmTech Logo"
                                width={52}
                                height={52}
                            />
                            <div>
                                <div style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 800,
                                    fontFamily: "'Playfair Display', serif",
                                    lineHeight: 1.2,
                                    color: 'white',
                                }}>
                                    BharatBloomm<br />FarmTech
                                </div>
                                <div style={{ fontSize: '0.6rem', color: '#8cc63f', fontWeight: 500, letterSpacing: '0.05em' }}>
                                    PRIVATE LIMITED
                                </div>
                            </div>
                        </div>

                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.865rem', lineHeight: 1.7, marginBottom: '24px' }}>
                            <em>"Cultivating the Future with Technology"</em><br /><br />
                            India's leading AgriTech platform empowering 92,000+ farmers with AI-powered insights and smart farming solutions.
                        </p>

                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {[
                                { icon: '𝕏', label: 'Twitter' },
                                { icon: 'in', label: 'LinkedIn' },
                                { icon: '▶', label: 'YouTube' },
                                { icon: 'f', label: 'Facebook' },
                                { icon: '📷', label: 'Instagram' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '8px',
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'rgba(255,255,255,0.6)',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 style={{
                                fontWeight: 700,
                                color: 'white',
                                marginBottom: '20px',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                fontSize: '0.78rem',
                            }}>
                                {category}
                            </h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: 'rgba(255,255,255,0.55)',
                                                textDecoration: 'none',
                                                fontSize: '0.86rem',
                                                transition: 'color 0.2s ease',
                                                lineHeight: 1.3,
                                            }}
                                            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#8cc63f'}
                                            onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div style={{
                    marginTop: '48px',
                    padding: '32px',
                    background: 'rgba(45,122,58,0.15)',
                    borderRadius: '16px',
                    border: '1px solid rgba(45,122,58,0.3)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '24px',
                    flexWrap: 'wrap',
                }}>
                    <div>
                        <div style={{ fontWeight: 700, color: 'white', marginBottom: '4px' }}>
                            📧 Subscribe to FarmTech Insights
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                            Get weekly agritech news, crop tips, and market intelligence delivered to your inbox.
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            style={{
                                padding: '12px 20px',
                                borderRadius: '50px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: 'rgba(255,255,255,0.08)',
                                color: 'white',
                                fontSize: '0.9rem',
                                minWidth: '260px',
                                outline: 'none',
                            }}
                        />
                        <button
                            className="btn-primary"
                            style={{ whiteSpace: 'nowrap', padding: '12px 24px' }}
                        >
                            Subscribe →
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                padding: '24px',
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
                        © 2026 BharatBloomm FarmTech Private Limited. All rights reserved. | CIN: U01409MH2024PTC000001
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
                            <Link
                                key={policy}
                                href={`/${policy.toLowerCase().replace(/ /g, '-')}`}
                                style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
                            >
                                {policy}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    );
}
