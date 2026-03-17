'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
    { href: '/admin', icon: '🏠', label: 'Dashboard' },
    { href: '/admin/products', icon: '📦', label: 'Products' },
    { href: '/admin/inquiries', icon: '📋', label: 'Inquiries' },
    { href: '/admin/customers', icon: '👥', label: 'Customers' },
    { href: '/admin/analytics', icon: '📊', label: 'Analytics' },
    { href: '/admin/settings', icon: '⚙️', label: 'Settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6fa', fontFamily: 'Inter, sans-serif' }}>
            {/* ── SIDEBAR ──────────────────────────────────────── */}
            <aside style={{
                width: 240, background: '#1B2A1E', flexShrink: 0,
                display: 'flex', flexDirection: 'column',
                position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 100,
            }}>
                {/* Logo */}
                <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                        <Image src="/logo.svg" alt="BharatBloomm Logo" width={36} height={36} />
                        <div>
                            <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.2 }}>BharatBloomm</p>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 500 }}>Admin Panel</p>
                        </div>
                    </Link>
                </div>

                {/* Nav Links */}
                <nav style={{ flex: 1, padding: '16px 12px', overflow: 'auto' }}>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 8px', marginBottom: 8 }}>Main Menu</p>
                    {navItems.slice(0, 5).map(item => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href} style={{
                                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                                borderRadius: '8px', textDecoration: 'none', marginBottom: 2,
                                background: isActive ? 'rgba(76,175,80,0.2)' : 'transparent',
                                borderLeft: isActive ? '3px solid #4CAF50' : '3px solid transparent',
                                transition: 'all 0.2s',
                            }}
                                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
                                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                            >
                                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                                <span style={{ color: isActive ? '#A5D6A7' : 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
                                {item.label === 'Inquiries' && (
                                    <span style={{ marginLeft: 'auto', background: '#4CAF50', color: 'white', fontSize: '0.65rem', fontWeight: 700, padding: '2px 7px', borderRadius: 10 }}>12</span>
                                )}
                            </Link>
                        );
                    })}

                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 8px', margin: '16px 0 8px' }}>System</p>
                    {navItems.slice(5).map(item => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href} style={{
                                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                                borderRadius: '8px', textDecoration: 'none', marginBottom: 2,
                                background: isActive ? 'rgba(76,175,80,0.2)' : 'transparent',
                                borderLeft: isActive ? '3px solid #4CAF50' : '3px solid transparent',
                                transition: 'all 0.2s',
                            }}>
                                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                                <span style={{ color: isActive ? '#A5D6A7' : 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Admin User */}
                <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#4CAF50,#2E7D32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>A</div>
                    <div style={{ overflow: 'hidden' }}>
                        <p style={{ color: 'white', fontSize: '0.82rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Admin User</p>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem' }}>Super Admin</p>
                    </div>
                    <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', cursor: 'pointer' }} title="Logout">⏻</span>
                </div>
            </aside>

            {/* ── MAIN CONTENT ─────────────────────────────────── */}
            <div style={{ marginLeft: 240, flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {/* Top Header */}
                <header style={{
                    background: 'white', borderBottom: '1px solid #e8eaed',
                    padding: '0 28px', height: 64,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    position: 'sticky', top: 0, zIndex: 50,
                }}>
                    {/* Page breadcrumb / title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: '#888' }}>
                        <span>BharatBloomm</span>
                        <span>›</span>
                        <span style={{ color: '#1B1B1B', fontWeight: 600 }}>Admin</span>
                    </div>
                    {/* Right side */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        {/* Search */}
                        <div style={{ position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '0.85rem' }}>🔍</span>
                            <input placeholder="Search..." style={{ padding: '8px 12px 8px 30px', border: '1px solid #e8eaed', borderRadius: 8, fontSize: '0.85rem', fontFamily: 'Inter, sans-serif', outline: 'none', width: 200, background: '#f8f9fa', color: '#333' }} />
                        </div>
                        {/* Notifications */}
                        <div style={{ position: 'relative', cursor: 'pointer' }}>
                            <span style={{ fontSize: '1.2rem' }}>🔔</span>
                            <span style={{ position: 'absolute', top: -4, right: -4, background: '#4CAF50', color: 'white', borderRadius: '50%', width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 700 }}>3</span>
                        </div>
                        {/* Avatar */}
                        <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#4CAF50,#2E7D32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>A</div>
                    </div>
                </header>

                {/* Page Content */}
                <main style={{ flex: 1, padding: '28px', overflowY: 'auto' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
