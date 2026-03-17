'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Product } from '@/lib/products';

export default function ProductDetailClient({ product: p, related }: { product: Product; related: Product[] }) {
    const [qty, setQty] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', state: 'Gujarat' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%', padding: '10px 12px', border: '1.5px solid #ddd',
        borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'Inter, sans-serif',
        outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
    };

    return (
        <>
            <Navbar />
            <div style={{ background: 'white', minHeight: '100vh', paddingTop: '80px' }}>
                {/* Breadcrumb */}
                <div style={{ borderBottom: '1px solid #ebebeb', padding: '14px 0' }}>
                    <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: '#666' }}>
                        <Link href="/" style={{ color: '#4CAF50', textDecoration: 'none' }}>Home</Link>
                        <span>›</span>
                        <Link href="/products" style={{ color: '#4CAF50', textDecoration: 'none' }}>Products</Link>
                        <span>›</span>
                        <span style={{ color: '#888' }}>{p.category}</span>
                        <span>›</span>
                        <span style={{ color: '#1B1B1B', fontWeight: 500 }}>{p.model}</span>
                    </div>
                </div>

                <div className="container" style={{ padding: '48px 20px' }}>
                    {/* ── Main 2-column product layout ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginBottom: '64px' }}>
                        {/* Left: Product Image */}
                        <div>
                            <div style={{ border: '1px solid #ebebeb', borderRadius: '8px', overflow: 'hidden', background: '#f9f9f9' }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={p.image} alt={p.name}
                                    style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
                            </div>
                            {/* Badge row */}
                            <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
                                {p.isNew && <span style={{ background: '#E3F2FD', color: '#1565C0', fontSize: '0.78rem', fontWeight: 700, padding: '4px 10px', borderRadius: 4 }}>🆕 New Arrival</span>}
                                {p.isBestseller && <span style={{ background: '#FFF3E0', color: '#E65100', fontSize: '0.78rem', fontWeight: 700, padding: '4px 10px', borderRadius: 4 }}>⭐ Bestseller</span>}
                                <span style={{ background: p.powerType === 'Lithium Battery' ? '#E8F5E9' : '#FBE9E7', color: p.powerType === 'Lithium Battery' ? '#2E7D32' : '#BF360C', fontSize: '0.78rem', fontWeight: 600, padding: '4px 10px', borderRadius: 4 }}>
                                    {p.powerType === 'Lithium Battery' ? '🔋 Lithium Battery' : '⛽ Gasoline Powered'}
                                </span>
                            </div>
                        </div>

                        {/* Right: Product Info */}
                        <div>
                            {/* SKU + Category */}
                            <div style={{ display: 'flex', gap: 20, marginBottom: '14px', fontSize: '0.85rem', color: '#888' }}>
                                <span><strong style={{ color: '#555' }}>SKU:</strong> {p.model}</span>
                                <span><strong style={{ color: '#555' }}>Category:</strong> {p.category}</span>
                            </div>

                            {/* Product Name */}
                            <h1 style={{ fontSize: '2rem', lineHeight: 1.25, marginBottom: '16px', fontFamily: "'Playfair Display', serif", color: '#1B1B1B' }}>
                                {p.name}
                            </h1>

                            {/* Stock badge */}
                            <div style={{ marginBottom: '20px' }}>
                                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: p.inStock ? '#2E7D32' : '#c62828', background: p.inStock ? '#E8F5E9' : '#ffebee', padding: '4px 12px', borderRadius: 20 }}>
                                    {p.inStock ? '● In Stock' : '○ Out of Stock'}
                                </span>
                            </div>

                            {/* Description */}
                            <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '24px', borderBottom: '1px solid #ebebeb', paddingBottom: '24px' }}>
                                {p.shortDesc}
                            </p>

                            {/* Key specs preview */}
                            <div style={{ marginBottom: '24px' }}>
                                {p.specs.slice(0, 3).map((s, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 8, padding: '8px 0', borderBottom: '1px solid #f5f5f5', fontSize: '0.9rem' }}>
                                        <span style={{ color: '#888', minWidth: 140 }}>{s.label}</span>
                                        <span style={{ fontWeight: 600, color: '#1B1B1B' }}>{s.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* ── Inquiry Form / CTA ── */}
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '32px', background: '#E8F5E9', borderRadius: '8px', border: '1px solid #A5D6A7' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>✅</div>
                                    <h3 style={{ color: '#2E7D32', marginBottom: 6 }}>Inquiry Sent!</h3>
                                    <p style={{ color: '#555', fontSize: '0.9rem' }}>Our team will contact you about the <strong>{p.model}</strong> within 24 hours.</p>
                                    <Link href="/products" style={{ display: 'inline-block', marginTop: 14, color: '#4CAF50', fontWeight: 600, fontSize: '0.9rem' }}>← Continue Shopping</Link>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    {/* Quantity */}
                                    <div style={{ marginBottom: '14px' }}>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#444', marginBottom: 8 }}>
                                            Quantity <span style={{ color: '#c62828' }}>*</span>
                                        </label>
                                        <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #ddd', borderRadius: '6px', width: 'fit-content', overflow: 'hidden' }}>
                                            <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))}
                                                style={{ padding: '10px 18px', background: '#f5f5f5', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif' }}>−</button>
                                            <input type="number" value={qty} readOnly
                                                style={{ width: '60px', textAlign: 'center', padding: '10px 0', border: 'none', fontSize: '1rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', outline: 'none' }} />
                                            <button type="button" onClick={() => setQty(q => q + 1)}
                                                style={{ padding: '10px 18px', background: '#f5f5f5', border: 'none', cursor: 'pointer', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif' }}>+</button>
                                        </div>
                                    </div>

                                    {/* Name + Phone */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#444', marginBottom: 6 }}>Your Name <span style={{ color: '#c62828' }}>*</span></label>
                                            <input required placeholder="Full name" value={formData.name} onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} style={inputStyle}
                                                onFocus={e => e.target.style.borderColor = '#4CAF50'} onBlur={e => e.target.style.borderColor = '#ddd'} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#444', marginBottom: 6 }}>Phone / WhatsApp <span style={{ color: '#c62828' }}>*</span></label>
                                            <input required placeholder="+91 98765 43210" value={formData.phone} onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} style={inputStyle}
                                                onFocus={e => e.target.style.borderColor = '#4CAF50'} onBlur={e => e.target.style.borderColor = '#ddd'} />
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#444', marginBottom: 6 }}>State</label>
                                        <select value={formData.state} onChange={e => setFormData(f => ({ ...f, state: e.target.value }))} style={{ ...inputStyle, background: 'white' }}>
                                            {['Gujarat', 'Maharashtra', 'Punjab', 'Karnataka', 'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh', 'Tamil Nadu', 'Other'].map(s => <option key={s}>{s}</option>)}
                                        </select>
                                    </div>

                                    {/* ADD TO QUOTE — full width black button like Evershop */}
                                    <button type="submit" style={{
                                        width: '100%', padding: '16px',
                                        background: '#1B1B1B', color: 'white',
                                        border: 'none', borderRadius: '6px',
                                        fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
                                        fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase',
                                        transition: 'background 0.2s',
                                    }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#4CAF50'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#1B1B1B'}
                                    >
                                        Request Quote for {qty} Unit{qty > 1 ? 's' : ''}
                                    </button>

                                    {/* Reassurance row */}
                                    <div style={{ display: 'flex', gap: 20, marginTop: 14, flexWrap: 'wrap' }}>
                                        {['🔒 Secure Inquiry', '📦 Pan-India Shipping', '✅ Genuine Product'].map(t => (
                                            <span key={t} style={{ fontSize: '0.78rem', color: '#888' }}>{t}</span>
                                        ))}
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* ── Product Description (below fold) ── */}
                    <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '48px', marginBottom: '48px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', fontFamily: "'Playfair Display', serif" }}>Product Description</h2>
                        <p style={{ color: '#555', lineHeight: 1.9, fontSize: '1rem', maxWidth: '80ch' }}>{p.longDesc}</p>

                        {/* Key features list */}
                        <div style={{ marginTop: '24px' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', color: '#1B1B1B', fontFamily: 'Inter, sans-serif' }}>Key Features</h3>
                            <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {p.features.map((f, i) => (
                                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: '0.95rem', color: '#555' }}>
                                        <span style={{ color: '#4CAF50', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── Full Specifications Table ── */}
                    <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '48px', marginBottom: '48px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', fontFamily: "'Playfair Display', serif" }}>Technical Specifications</h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', maxWidth: '768px' }}>
                            <tbody>
                                {p.specs.map((s, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#fafafa' : 'white' }}>
                                        <td style={{ padding: '12px 16px', fontSize: '0.9rem', color: '#666', borderBottom: '1px solid #ebebeb', width: '40%' }}>{s.label}</td>
                                        <td style={{ padding: '12px 16px', fontSize: '0.9rem', color: '#1B1B1B', fontWeight: 600, borderBottom: '1px solid #ebebeb' }}>{s.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* ── Related Products ── */}
                    {related.length > 0 && (
                        <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '48px' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '28px', fontFamily: "'Playfair Display', serif" }}>You May Also Like</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                                {related.map(rp => (
                                    <Link key={rp.id} href={`/products/${rp.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div style={{ border: '1px solid #ebebeb', borderRadius: '8px', overflow: 'hidden', transition: 'box-shadow 0.25s', cursor: 'pointer' }}
                                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(0,0,0,0.1)'}
                                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={rp.image} alt={rp.name} loading="lazy" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block', background: '#f5f5f5' }} />
                                            <div style={{ padding: '14px 16px' }}>
                                                <p style={{ color: '#4CAF50', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{rp.model}</p>
                                                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1B1B1B', lineHeight: 1.4 }}>{rp.name}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />

            <style>{`
        @media (max-width: 968px) {
          .container > div[style*="gridTemplateColumns: '1fr 1fr'"] { grid-template-columns: 1fr !important; gap: 32px !important; }
          .container > div[style*="repeat(3, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </>
    );
}
