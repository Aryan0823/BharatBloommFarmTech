'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products, categories, powerTypes } from '@/lib/products';
import type { Product } from '@/lib/products';

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [activePower, setActivePower] = useState<string>('All');
    const [search, setSearch] = useState('');

    const filtered = useMemo(() => {
        return products.filter(p => {
            const matchCat = activeCategory === 'All' || p.category === activeCategory;
            const matchPower = activePower === 'All' || p.powerType === activePower;
            const matchSearch = !search ||
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.model.toLowerCase().includes(search.toLowerCase()) ||
                p.shortDesc.toLowerCase().includes(search.toLowerCase());
            return matchCat && matchPower && matchSearch;
        });
    }, [activeCategory, activePower, search]);

    const pillStyle = (active: boolean): React.CSSProperties => ({
        padding: '8px 20px',
        borderRadius: '50px',
        border: active ? 'none' : '2px solid rgba(76,175,80,0.3)',
        background: active ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' : 'rgba(255,255,255,0.7)',
        color: active ? 'white' : '#2E7D32',
        fontWeight: 600,
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        backdropFilter: 'blur(8px)',
        fontFamily: 'Inter, sans-serif',
    });

    return (
        <>
            <Navbar />
            <main style={{ background: '#f8fdf8', minHeight: '100vh' }}>
                {/* Hero Banner */}
                <div style={{
                    background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 60%, #66BB6A 100%)',
                    padding: '140px 0 80px',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    <div style={{
                        position: 'absolute', top: '-30%', right: '-10%',
                        width: 500, height: 500,
                        background: 'rgba(255,255,255,0.08)', borderRadius: '50%', filter: 'blur(60px)',
                    }} />
                    <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <p style={{ color: '#A5D6A7', fontWeight: 600, letterSpacing: 2, marginBottom: 12, fontSize: '0.9rem', textTransform: 'uppercase' }}>
                            Olelon × BharatBloomm
                        </p>
                        <h1 style={{ color: 'white', fontSize: '3.2rem', marginBottom: '16px', lineHeight: 1.2, fontFamily: "'Playfair Display', serif" }}>
                            Premium Battery-Operated<br />Agricultural Tools
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', maxWidth: 600, margin: '0 auto 40px' }}>
                            Explore our complete range of lithium-powered & gasoline agricultural tools — engineered for Indian farms
                        </p>
                        {/* Search */}
                        <div style={{ maxWidth: 480, margin: '0 auto', position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Search by name or model (e.g. OLL-340, hedge trimmer)..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                style={{
                                    width: '100%', padding: '16px 24px 16px 52px',
                                    borderRadius: '50px', border: 'none',
                                    fontSize: '1rem', fontFamily: 'Inter, sans-serif',
                                    background: 'rgba(255,255,255,0.95)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                    outline: 'none', boxSizing: 'border-box',
                                }}
                            />
                            <span style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem' }}>🔍</span>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ padding: '48px 20px' }}>
                    {/* Filters */}
                    <div style={{
                        background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255,255,255,0.6)', borderRadius: '20px',
                        padding: '28px 32px', marginBottom: '40px',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
                            {/* Category Filter */}
                            <div>
                                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Category</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {categories.map(c => (
                                        <button key={c} style={pillStyle(activeCategory === c)} onClick={() => setActiveCategory(c)}>{c}</button>
                                    ))}
                                </div>
                            </div>
                            {/* Power Type Filter */}
                            <div>
                                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Power Type</p>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    {powerTypes.map(p => (
                                        <button key={p} style={pillStyle(activePower === p)} onClick={() => setActivePower(p)}>{p}</button>
                                    ))}
                                </div>
                            </div>
                            {/* Results count */}
                            <div style={{ marginLeft: 'auto', alignSelf: 'flex-end' }}>
                                <p style={{ color: '#666', fontSize: '0.95rem' }}>
                                    Showing <strong style={{ color: '#4CAF50' }}>{filtered.length}</strong> of {products.length} products
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    {filtered.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '80px 0' }}>
                            <div style={{ fontSize: '4rem', marginBottom: 16 }}>🔍</div>
                            <h3 style={{ color: '#555' }}>No products found</h3>
                            <p style={{ color: '#888' }}>Try adjusting your filters or search term</p>
                            <button onClick={() => { setActiveCategory('All'); setActivePower('All'); setSearch(''); }}
                                style={{ marginTop: 20, padding: '12px 28px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: 50, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                                Clear Filters
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
                            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
                        </div>
                    )}
                </div>

                {/* CTA Banner */}
                <div style={{
                    background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                    padding: '60px 0', textAlign: 'center',
                }}>
                    <div className="container">
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: 12 }}>Need a Custom Quote?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 28 }}>Contact our team for bulk orders, dealer pricing, and custom configurations</p>
                        <Link href="/#contact" style={{
                            padding: '16px 44px', background: 'white', color: '#2E7D32',
                            borderRadius: '50px', fontWeight: 700, textDecoration: 'none',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)', fontSize: '1rem',
                        }}>
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />

            <style>{`
        @media (max-width: 968px) {
          .container > div[style*="repeat(3"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .container > div[style*="repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </>
    );
}

function ProductCard({ product: p }: { product: Product }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.6)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.15)' : '0 4px 24px rgba(0,0,0,0.07)',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
                display: 'flex', flexDirection: 'column',
            }}
        >
            {/* Image */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} loading="lazy"
                    style={{
                        width: '100%', height: '220px', objectFit: 'cover', display: 'block',
                        transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.4s ease'
                    }} />
                {/* Badges */}
                <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                    {p.isNew && (
                        <span style={{ background: '#2196F3', color: 'white', padding: '4px 10px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700 }}>NEW</span>
                    )}
                    {p.isBestseller && (
                        <span style={{ background: '#FF6F00', color: 'white', padding: '4px 10px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700 }}>⭐ BESTSELLER</span>
                    )}
                </div>
                {/* Power type badge */}
                <div style={{ position: 'absolute', top: 12, right: 12 }}>
                    <span style={{
                        background: p.powerType === 'Lithium Battery' ? 'rgba(76,175,80,0.9)' : 'rgba(255,87,34,0.9)',
                        color: 'white', padding: '4px 12px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600,
                        backdropFilter: 'blur(8px)',
                    }}>
                        {p.powerType === 'Lithium Battery' ? '🔋 Lithium' : '⛽ Gasoline'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#4CAF50', fontSize: '0.8rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
                    {p.category} · {p.model}
                </p>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', lineHeight: 1.3 }}>{p.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, flex: 1, marginBottom: '16px' }}>{p.shortDesc}</p>

                {/* Quick Specs */}
                <div style={{ background: 'rgba(76,175,80,0.06)', borderRadius: 12, padding: '10px 14px', marginBottom: '16px' }}>
                    {p.specs.slice(0, 2).map((s, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '3px 0', borderBottom: i < 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                            <span style={{ color: '#888' }}>{s.label}</span>
                            <span style={{ fontWeight: 600, color: '#333' }}>{s.value}</span>
                        </div>
                    ))}
                </div>

                <Link href={`/products/${p.id}`} style={{
                    display: 'block', textAlign: 'center',
                    padding: '12px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                    color: 'white', textDecoration: 'none', fontWeight: 700,
                    fontSize: '0.95rem', transition: 'all 0.2s ease',
                }}>
                    View Details →
                </Link>
            </div>
        </div>
    );
}
