'use client';
import Image from 'next/image';
import Link from 'next/link';

const footerColumns = [
    {
        title: 'Products',
        links: [
            { label: 'Cordless Tillers', href: '#products' },
            { label: 'Electric Tractors', href: '#products' },
            { label: 'Farming Robots', href: '#products' },
            { label: 'Power Tools', href: '#products' },
            { label: 'All Products', href: '#products' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '#about' },
            { label: 'Technology', href: '#technology' },
            { label: 'Testimonials', href: '#testimonials' },
            { label: 'Careers', href: '#contact' },
            { label: 'Contact', href: '#contact' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'User Manuals', href: '#' },
            { label: 'FAQs', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Support', href: '#' },
            { label: 'Privacy Policy', href: '#' },
        ],
    },
];

const socialIcons = [
    { label: 'LinkedIn', icon: 'in' },
    { label: 'Twitter', icon: '𝕏' },
    { label: 'Instagram', icon: '⬡' },
    { label: 'YouTube', icon: '▶' },
];

export default function Footer() {
    return (
        <footer id="contact-footer" style={{ background: '#1B4332', color: 'white', padding: '60px 0 0' }}>
            <div className="container">
                {/* Main Footer Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {/* Brand Column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            {/* ✏️ Logo — replace /logo.svg in public/ to update everywhere */}
                            <Image src="/logo.svg" alt="BharatBloomm FarmTech Logo" width={60} height={60} />
                            <h3 style={{ fontSize: '1.5rem', color: 'white', fontFamily: "'Playfair Display', serif" }}>
                                BharatBloomm FarmTech
                            </h3>
                        </div>
                        <p style={{ lineHeight: 1.7, opacity: 0.9, marginBottom: '20px', color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                            Cultivating the Future with Technology. Leading India&apos;s agricultural revolution with innovative battery-operated tools powered by lithium technology.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {socialIcons.map((s, i) => (
                                <a key={i} href="#" aria-label={s.label} style={{
                                    width: 40, height: 40,
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', textDecoration: 'none', fontSize: '0.95rem',
                                    transition: 'all 0.3s ease',
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#A5D6A7'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                                >{s.icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerColumns.map((col, i) => (
                        <div key={i}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white', fontFamily: "'Playfair Display', serif" }}>{col.title}</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href={link.href} style={{
                                            color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                                            transition: 'all 0.3s ease', display: 'inline-block', fontSize: '0.95rem',
                                        }}
                                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#A5D6A7'; (e.currentTarget as HTMLElement).style.transform = 'translateX(5px)'; }}
                                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'; }}
                                        >{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div style={{ padding: '24px 0', textAlign: 'center', opacity: 0.8, fontSize: '0.9rem' }}>
                    <p>© 2025 BharatBloomm FarmTech Private Limited. All Rights Reserved.</p>
                </div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
        </footer>
    );
}
