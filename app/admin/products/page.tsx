'use client';
import { useState } from 'react';
import { products } from '@/lib/products';

export default function AdminProductsPage() {
    const [search, setSearch] = useState('');
    const [filterPower, setFilterPower] = useState('All');

    const filtered = products.filter(p => {
        const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.model.toLowerCase().includes(search.toLowerCase());
        const matchPower = filterPower === 'All' || p.powerType === filterPower;
        return matchSearch && matchPower;
    });

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                    <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 4 }}>Products</h1>
                    <p style={{ color: '#888', fontSize: '0.88rem' }}>{products.length} products in catalogue</p>
                </div>
                <button style={{ padding: '10px 22px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: 8 }}>
                    ➕ Add Product
                </button>
            </div>

            {/* Filters bar */}
            <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 10, padding: '14px 18px', marginBottom: 20, display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                    <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#aaa' }}>🔍</span>
                    <input placeholder="Search by name or model..." value={search} onChange={e => setSearch(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px 9px 32px', border: '1px solid #e8eaed', borderRadius: 7, fontSize: '0.88rem', fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => e.target.style.borderColor = '#4CAF50'} onBlur={e => e.target.style.borderColor = '#e8eaed'} />
                </div>
                <select value={filterPower} onChange={e => setFilterPower(e.target.value)}
                    style={{ padding: '9px 12px', border: '1px solid #e8eaed', borderRadius: 7, fontSize: '0.88rem', fontFamily: 'Inter, sans-serif', outline: 'none', cursor: 'pointer', background: 'white' }}>
                    <option value="All">All Power Types</option>
                    <option value="Lithium Battery">🔋 Lithium Battery</option>
                    <option value="Gasoline">⛽ Gasoline</option>
                </select>
                <span style={{ fontSize: '0.82rem', color: '#888' }}>{filtered.length} results</span>
            </div>

            {/* Products Table */}
            <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#fafafa' }}>
                            {['Product', 'Model', 'Category', 'Power Type', 'Status', 'Badges', 'Actions'].map(h => (
                                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.73rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e8eaed', whiteSpace: 'nowrap' }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((p, i) => (
                            <tr key={p.id} style={{ borderBottom: '1px solid #f5f5f5' }}
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#fafafe'}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'white'}>
                                {/* Product */}
                                <td style={{ padding: '12px 16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={p.image} alt={p.name} style={{ width: 44, height: 36, objectFit: 'cover', borderRadius: 6, background: '#f0f0f0', flexShrink: 0 }} />
                                        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1B1B1B', maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</span>
                                    </div>
                                </td>
                                {/* Model */}
                                <td style={{ padding: '12px 16px' }}>
                                    <code style={{ fontSize: '0.8rem', background: '#f5f5f5', padding: '3px 8px', borderRadius: 4, color: '#4CAF50', fontWeight: 700 }}>{p.model}</code>
                                </td>
                                {/* Category */}
                                <td style={{ padding: '12px 16px', fontSize: '0.82rem', color: '#555' }}>{p.category}</td>
                                {/* Power */}
                                <td style={{ padding: '12px 16px' }}>
                                    <span style={{ fontSize: '0.78rem', fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: p.powerType === 'Lithium Battery' ? '#E8F5E9' : '#FBE9E7', color: p.powerType === 'Lithium Battery' ? '#2E7D32' : '#BF360C' }}>
                                        {p.powerType === 'Lithium Battery' ? '🔋 Lithium' : '⛽ Gas'}
                                    </span>
                                </td>
                                {/* Stock */}
                                <td style={{ padding: '12px 16px' }}>
                                    <span style={{ fontSize: '0.78rem', fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: p.inStock ? '#E8F5E9' : '#FFEBEE', color: p.inStock ? '#2E7D32' : '#C62828' }}>
                                        {p.inStock ? '● In Stock' : '○ Out of Stock'}
                                    </span>
                                </td>
                                {/* Badges */}
                                <td style={{ padding: '12px 16px' }}>
                                    <div style={{ display: 'flex', gap: 4 }}>
                                        {p.isNew && <span style={{ fontSize: '0.68rem', background: '#E3F2FD', color: '#1565C0', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>NEW</span>}
                                        {p.isBestseller && <span style={{ fontSize: '0.68rem', background: '#FFF3E0', color: '#E65100', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>BEST</span>}
                                    </div>
                                </td>
                                {/* Actions */}
                                <td style={{ padding: '12px 16px' }}>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <button style={{ padding: '6px 12px', background: '#f0f7f0', color: '#2E7D32', border: '1px solid #A5D6A7', borderRadius: 6, fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Edit</button>
                                        <button style={{ padding: '6px 12px', background: '#fff5f5', color: '#C62828', border: '1px solid #FFCDD2', borderRadius: 6, fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#888' }}>
                        <p style={{ fontSize: '2rem', marginBottom: 8 }}>📭</p>
                        <p>No products match your search.</p>
                    </div>
                )}
                {/* Pagination stub */}
                <div style={{ padding: '14px 18px', borderTop: '1px solid #e8eaed', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.82rem', color: '#888' }}>Showing {filtered.length} of {products.length} products</span>
                    <div style={{ display: 'flex', gap: 6 }}>
                        {[1].map(n => (
                            <button key={n} style={{ width: 32, height: 32, background: '#4CAF50', color: 'white', border: 'none', borderRadius: 6, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>{n}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
