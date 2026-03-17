'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products, categories } from '@/lib/products';
import type { Product } from '@/lib/products';

type SortKey = 'default' | 'name-asc' | 'name-desc' | 'category';

export default function ProductsPage() {
    const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set());
    const [activePower, setActivePower] = useState<Set<string>>(new Set());
    const [sort, setSort] = useState<SortKey>('default');
    const [search, setSearch] = useState('');
    const [view, setView] = useState<'grid' | 'list'>('grid');

    const toggleSet = (s: Set<string>, val: string) => {
        const n = new Set(s);
        n.has(val) ? n.delete(val) : n.add(val);
        return n;
    };

    const filtered = useMemo(() => {
        let list = products.filter(p => {
            const matchCat = activeCategories.size === 0 || activeCategories.has(p.category);
            const matchPower = activePower.size === 0 || activePower.has(p.powerType);
            const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.model.toLowerCase().includes(search.toLowerCase());
            return matchCat && matchPower && matchSearch;
        });
        if (sort === 'name-asc') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        if (sort === 'name-desc') list = [...list].sort((a, b) => b.name.localeCompare(a.name));
        if (sort === 'category') list = [...list].sort((a, b) => a.category.localeCompare(b.category));
        return list;
    }, [activeCategories, activePower, sort, search]);

    const productCategories = categories.filter(c => c !== 'All');

    return (
        <>
            <Navbar />
            <div style={{ background: 'white', minHeight: '100vh', paddingTop: '80px' }}>
                {/* Breadcrumb */}
                <div style={{ borderBottom: '1px solid #ebebeb', padding: '14px 0' }}>
                    <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: '#666' }}>
                        <Link href="/" style={{ color: '#4CAF50', textDecoration: 'none' }}>Home</Link>
                        <span>›</span>
                        <span style={{ color: '#1B1B1B', fontWeight: 500 }}>All Products</span>
                    </div>
                </div>

                <div className="container" style={{ padding: '40px 20px' }}>
                    {/* Page Header */}
                    <div style={{ marginBottom: '32px' }}>
                        <h1 style={{ fontSize: '2.4rem', marginBottom: '10px', fontFamily: "'Playfair Display', serif" }}>Agricultural Tools</h1>
                        <p style={{ color: '#666', fontSize: '1rem' }}>Premium Olelon battery-powered &amp; gasoline agricultural tools for Indian farmers</p>
                    </div>

                    {/* Search Bar */}
                    <div style={{ position: 'relative', marginBottom: '32px', maxWidth: 500 }}>
                        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#999', fontSize: '1rem' }}>🔍</span>
                        <input type="text" placeholder="Search by name or model..." value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{ width: '100%', padding: '11px 16px 11px 40px', border: '1.5px solid #ddd', borderRadius: '8px', fontSize: '0.95rem', fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                            onFocus={e => e.target.style.borderColor = '#4CAF50'}
                            onBlur={e => e.target.style.borderColor = '#ddd'}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '40px', alignItems: 'start' }}>
                        {/* ── LEFT SIDEBAR ─────────────────────────────────── */}
                        <aside>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '20px', color: '#1B1B1B', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif' }}>
                                Product Filters
                            </h3>

                            {/* Active filters clear */}
                            {(activeCategories.size > 0 || activePower.size > 0) && (
                                <button onClick={() => { setActiveCategories(new Set()); setActivePower(new Set()); }}
                                    style={{ fontSize: '0.82rem', color: '#4CAF50', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '16px', textDecoration: 'underline', fontFamily: 'Inter, sans-serif', padding: 0 }}>
                                    Clear all filters
                                </button>
                            )}

                            {/* Category Filter */}
                            <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '20px', marginBottom: '28px' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '14px', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontFamily: 'Inter, sans-serif', color: '#1B1B1B' }}>
                                    Category <span>›</span>
                                </h4>
                                {productCategories.map(cat => (
                                    <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0', cursor: 'pointer', fontSize: '0.9rem', color: '#444' }}>
                                        <input type="checkbox" checked={activeCategories.has(cat)} onChange={() => setActiveCategories(toggleSet(activeCategories, cat))}
                                            style={{ width: 16, height: 16, accentColor: '#4CAF50', cursor: 'pointer' }} />
                                        <span>{cat}</span>
                                        <span style={{ marginLeft: 'auto', color: '#999', fontSize: '0.8rem' }}>
                                            ({products.filter(p => p.category === cat).length})
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {/* Power Type Filter */}
                            <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '20px', marginBottom: '28px' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '14px', fontFamily: 'Inter, sans-serif', color: '#1B1B1B' }}>
                                    Power Type
                                </h4>
                                {['Lithium Battery', 'Gasoline'].map(type => (
                                    <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0', cursor: 'pointer', fontSize: '0.9rem', color: '#444' }}>
                                        <input type="checkbox" checked={activePower.has(type)} onChange={() => setActivePower(toggleSet(activePower, type))}
                                            style={{ width: 16, height: 16, accentColor: '#4CAF50', cursor: 'pointer' }} />
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                            {type === 'Lithium Battery' ? '🔋' : '⛽'} {type}
                                        </span>
                                        <span style={{ marginLeft: 'auto', color: '#999', fontSize: '0.8rem' }}>
                                            ({products.filter(p => p.powerType === type).length})
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {/* Featured Flags */}
                            <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '20px' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '14px', fontFamily: 'Inter, sans-serif', color: '#1B1B1B' }}>Featured</h4>
                                {[{ label: '⭐ Bestsellers', count: products.filter(p => p.isBestseller).length },
                                { label: '🆕 New Arrivals', count: products.filter(p => p.isNew).length }].map(f => (
                                    <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '0.9rem', color: '#444', cursor: 'pointer' }}
                                        onClick={() => { }}>
                                        <span>{f.label}</span>
                                        <span style={{ color: '#999', fontSize: '0.8rem' }}>({f.count})</span>
                                    </div>
                                ))}
                            </div>

                            {/* Trust Box */}
                            <div style={{ marginTop: '32px', padding: '20px', background: '#f8fdf8', borderRadius: '12px', border: '1px solid #e8f5e9' }}>
                                <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#2E7D32', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Why BharatBloomm?</p>
                                {['✓ Genuine Olelon Products', '✓ Pan-India Delivery', '✓ Warranty Support', '✓ Bulk Order Pricing'].map(t => (
                                    <p key={t} style={{ fontSize: '0.82rem', color: '#555', marginBottom: 6 }}>{t}</p>
                                ))}
                            </div>
                        </aside>

                        {/* ── PRODUCT GRID ─────────────────────────────────── */}
                        <div>
                            {/* Toolbar */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #ebebeb', marginBottom: '24px' }}>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                    <strong style={{ color: '#1B1B1B' }}>{filtered.length}</strong> Products
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    {/* Sort */}
                                    <select value={sort} onChange={e => setSort(e.target.value as SortKey)}
                                        style={{ padding: '8px 32px 8px 12px', border: '1.5px solid #ddd', borderRadius: '6px', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif', cursor: 'pointer', outline: 'none', background: 'white', color: '#333', appearance: 'auto' }}>
                                        <option value="default">Default</option>
                                        <option value="name-asc">Name A→Z</option>
                                        <option value="name-desc">Name Z→A</option>
                                        <option value="category">By Category</option>
                                    </select>
                                    {/* View Toggle */}
                                    <div style={{ display: 'flex', border: '1.5px solid #ddd', borderRadius: '6px', overflow: 'hidden' }}>
                                        {(['grid', 'list'] as const).map(v => (
                                            <button key={v} onClick={() => setView(v)} style={{
                                                padding: '8px 12px', background: view === v ? '#4CAF50' : 'white',
                                                color: view === v ? 'white' : '#666', border: 'none', cursor: 'pointer', fontSize: '1rem',
                                                transition: 'all 0.2s',
                                            }}>
                                                {v === 'grid' ? '▦' : '☰'}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Products */}
                            {filtered.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '80px 0', color: '#666' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: 12 }}>📭</div>
                                    <h3 style={{ marginBottom: 8 }}>No products found</h3>
                                    <p>Try adjusting filters or your search term</p>
                                    <button onClick={() => { setActiveCategories(new Set()); setActivePower(new Set()); setSearch(''); }}
                                        style={{ marginTop: 16, padding: '10px 24px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                                        Clear Filters
                                    </button>
                                </div>
                            ) : view === 'grid' ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                                    {filtered.map(p => <GridCard key={p.id} product={p} />)}
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {filtered.map(p => <ListCard key={p.id} product={p} />)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <style>{`
        @media (max-width: 968px) {
          .container > div[style*="260px"] { grid-template-columns: 1fr !important; }
          .grid-cols-3 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .grid-cols-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </>
    );
}

function GridCard({ product: p }: { product: Product }) {
    const [hovered, setHovered] = useState(false);
    return (
        <Link href={`/products/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                style={{ border: '1px solid #ebebeb', borderRadius: '8px', overflow: 'hidden', background: 'white', transition: 'box-shadow 0.25s ease', boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.12)' : '0 1px 4px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
                <div style={{ position: 'relative', overflow: 'hidden', background: '#f7f7f7' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.name} loading="lazy"
                        style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
                    {/* Badges */}
                    <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {p.isNew && <span style={{ background: '#1565C0', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>NEW</span>}
                        {p.isBestseller && <span style={{ background: '#E65100', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>BESTSELLER</span>}
                    </div>
                    {/* Power badge */}
                    <span style={{
                        position: 'absolute', top: 10, right: 10,
                        background: p.powerType === 'Lithium Battery' ? '#E8F5E9' : '#FBE9E7',
                        color: p.powerType === 'Lithium Battery' ? '#2E7D32' : '#BF360C',
                        fontSize: '0.7rem', fontWeight: 600, padding: '3px 8px', borderRadius: 4,
                    }}>
                        {p.powerType === 'Lithium Battery' ? '🔋 Battery' : '⛽ Gasoline'}
                    </span>
                </div>
                <div style={{ padding: '16px' }}>
                    <p style={{ color: '#4CAF50', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{p.model}</p>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1B1B1B', marginBottom: '8px', lineHeight: 1.4, fontFamily: 'Inter, sans-serif' }}>{p.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#888', lineHeight: 1.5, marginBottom: '12px' }}>{p.category}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: p.inStock ? '#2E7D32' : '#999' }}>
                            {p.inStock ? '● In Stock' : '○ Out of Stock'}
                        </span>
                        <span style={{ fontSize: '0.82rem', color: '#4CAF50', fontWeight: 700 }}>Get Quote →</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function ListCard({ product: p }: { product: Product }) {
    return (
        <Link href={`/products/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'flex', border: '1px solid #ebebeb', borderRadius: '8px', overflow: 'hidden', background: 'white', transition: 'box-shadow 0.25s', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} loading="lazy"
                    style={{ width: '180px', height: '140px', objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ padding: '16px 20px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                    <div style={{ flex: 1 }}>
                        <p style={{ color: '#4CAF50', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{p.model} · {p.category}</p>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '6px', fontFamily: 'Inter, sans-serif' }}>{p.name}</h3>
                        <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>{p.shortDesc}</p>
                    </div>
                    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                        <span style={{ fontSize: '0.78rem', color: p.powerType === 'Lithium Battery' ? '#2E7D32' : '#BF360C', fontWeight: 600, background: p.powerType === 'Lithium Battery' ? '#E8F5E9' : '#FBE9E7', padding: '3px 8px', borderRadius: 4 }}>
                            {p.powerType === 'Lithium Battery' ? '🔋 Battery' : '⛽ Gas'}
                        </span>
                        <span style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', borderRadius: 6, fontWeight: 700, fontSize: '0.88rem' }}>View Details</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
