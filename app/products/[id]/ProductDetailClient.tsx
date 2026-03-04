'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Product } from '@/lib/products';

export default function ProductDetailClient({ product: p, related }: { product: Product; related: Product[] }) {
    const [inquirySent, setInquirySent] = useState(false);
    const [qty, setQty] = useState(1);

    const handleInquiry = (e: React.FormEvent) => {
        e.preventDefault();
        setInquirySent(true);
    };

    return (
        <>
            <Navbar />
            <main style={{ background: '#f8fdf8', minHeight: '100vh', paddingTop: '80px' }}>
                {/* Breadcrumb */}
                <div style={{ background: 'white', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '14px 0' }}>
                    <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: '#888' }}>
                        <Link href="/" style={{ color: '#4CAF50', textDecoration: 'none' }}>Home</Link>
                        <span>›</span>
                        <Link href="/products" style={{ color: '#4CAF50', textDecoration: 'none' }}>Products</Link>
                        <span>›</span>
                        <span style={{ color: '#333' }}>{p.model}</span>
                    </div>
                </div>

                {/* Main Product Section */}
                <div className="container" style={{ padding: '48px 20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '60px' }}>
                        {/* Left: Image */}
                        <div>
                            <div style={{
                                background: 'rgba(255,255,255,0.9)', borderRadius: '24px',
                                overflow: 'hidden', boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.8)',
                            }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={p.image} alt={p.name} style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
                            </div>
                            {/* Badges below image */}
                            <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                                {p.isNew && <span style={{ background: '#2196F3', color: 'white', padding: '6px 16px', borderRadius: 20, fontSize: '0.85rem', fontWeight: 700 }}>🆕 NEW ARRIVAL</span>}
                                {p.isBestseller && <span style={{ background: '#FF6F00', color: 'white', padding: '6px 16px', borderRadius: 20, fontSize: '0.85rem', fontWeight: 700 }}>⭐ BESTSELLER</span>}
                                <span style={{
                                    background: p.powerType === 'Lithium Battery' ? '#E8F5E9' : '#FBE9E7',
                                    color: p.powerType === 'Lithium Battery' ? '#2E7D32' : '#BF360C',
                                    padding: '6px 16px', borderRadius: 20, fontSize: '0.85rem', fontWeight: 600,
                                }}>
                                    {p.powerType === 'Lithium Battery' ? '🔋 Lithium Battery' : '⛽ Gasoline Powered'}
                                </span>
                                <span style={{ background: '#f1f1f1', color: '#666', padding: '6px 16px', borderRadius: 20, fontSize: '0.85rem' }}>
                                    {p.category}
                                </span>
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div>
                            <p style={{ color: '#4CAF50', fontWeight: 700, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: 8 }}>
                                {p.category} · Model {p.model}
                            </p>
                            <h1 style={{ fontSize: '2.2rem', lineHeight: 1.2, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>{p.name}</h1>
                            <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '28px' }}>{p.longDesc}</p>

                            {/* Key Features */}
                            <div style={{ marginBottom: '28px' }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: '#333', fontFamily: 'Inter, sans-serif' }}>Key Features</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    {p.features.map((f, i) => (
                                        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                            <span style={{ color: '#4CAF50', fontWeight: 700, flexShrink: 0 }}>✓</span>
                                            <span style={{ color: '#555', fontSize: '0.95rem' }}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity + Inquiry */}
                            {inquirySent ? (
                                <div style={{ textAlign: 'center', background: '#E8F5E9', borderRadius: 16, padding: '32px 24px' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: 8 }}>✅</div>
                                    <h3 style={{ color: '#2E7D32', marginBottom: 8 }}>Inquiry Sent!</h3>
                                    <p style={{ color: '#555' }}>Our team will contact you about the <strong>{p.model}</strong> within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleInquiry} style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: '20px', padding: '28px' }}>
                                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', color: '#333', fontFamily: 'Inter, sans-serif' }}>📋 Request a Quote</h4>
                                    <div style={{ marginBottom: 14 }}>
                                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>Your Name *</label>
                                        <input required placeholder="Enter your full name" style={{ width: '100%', padding: '11px 14px', border: '2px solid rgba(0,0,0,0.1)', borderRadius: 10, fontSize: '0.95rem', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box', outline: 'none' }}
                                            onFocus={e => e.target.style.borderColor = '#4CAF50'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.1)'} />
                                    </div>
                                    <div style={{ marginBottom: 14 }}>
                                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>Phone / WhatsApp *</label>
                                        <input required placeholder="+91 98765 43210" style={{ width: '100%', padding: '11px 14px', border: '2px solid rgba(0,0,0,0.1)', borderRadius: 10, fontSize: '0.95rem', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box', outline: 'none' }}
                                            onFocus={e => e.target.style.borderColor = '#4CAF50'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.1)'} />
                                    </div>
                                    <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>Quantity</label>
                                            <div style={{ display: 'flex', alignItems: 'center', border: '2px solid rgba(0,0,0,0.1)', borderRadius: 10, overflow: 'hidden' }}>
                                                <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))}
                                                    style={{ padding: '11px 16px', background: '#f5f5f5', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif' }}>−</button>
                                                <span style={{ flex: 1, textAlign: 'center', fontWeight: 700, fontSize: '1rem' }}>{qty}</span>
                                                <button type="button" onClick={() => setQty(q => q + 1)}
                                                    style={{ padding: '11px 16px', background: '#f5f5f5', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif' }}>+</button>
                                            </div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>State</label>
                                            <select style={{ width: '100%', padding: '11px 14px', border: '2px solid rgba(0,0,0,0.1)', borderRadius: 10, fontSize: '0.95rem', fontFamily: 'Inter, sans-serif', background: 'white', outline: 'none', boxSizing: 'border-box' }}>
                                                {['Gujarat', 'Maharashtra', 'Punjab', 'Karnataka', 'Rajasthan', 'Uttar Pradesh', 'Other'].map(s => <option key={s}>{s}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" style={{
                                        width: '100%', padding: '14px',
                                        background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                                        color: 'white', border: 'none', borderRadius: 12,
                                        fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                                    }}>
                                        Send Inquiry for {p.model}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Full Specifications */}
                    <div style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '28px' }}>Technical Specifications</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                            {p.specs.map((s, i) => (
                                <div key={i} style={{
                                    display: 'flex', justifyContent: 'space-between', padding: '14px 18px',
                                    background: i % 2 === 0 ? 'rgba(76,175,80,0.05)' : 'white',
                                    borderRadius: 10, border: '1px solid rgba(0,0,0,0.05)',
                                }}>
                                    <span style={{ color: '#777', fontSize: '0.9rem' }}>{s.label}</span>
                                    <span style={{ fontWeight: 600, color: '#222', fontSize: '0.9rem', textAlign: 'right', maxWidth: '60%' }}>{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Related Products */}
                    {related.length > 0 && (
                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '28px' }}>Related Products</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                                {related.map(rp => (
                                    <Link key={rp.id} href={`/products/${rp.id}`} style={{ textDecoration: 'none' }}>
                                        <div style={{
                                            background: 'rgba(255,255,255,0.85)', borderRadius: '16px',
                                            overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
                                            transition: 'all 0.3s ease',
                                        }}
                                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.13)'; }}
                                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)'; }}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={rp.image} alt={rp.name} loading="lazy" style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} />
                                            <div style={{ padding: '16px' }}>
                                                <p style={{ color: '#4CAF50', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>{rp.model}</p>
                                                <h4 style={{ fontSize: '1rem', color: '#222', lineHeight: 1.3 }}>{rp.name}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />

            <style>{`
        @media (max-width: 968px) {
          .container > div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; gap: 36px !important; }
          .container > div[style*="repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
          .container > div[style*="repeat(3, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .container > div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </>
    );
}
