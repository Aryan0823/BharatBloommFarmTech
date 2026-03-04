'use client';
import { useState } from 'react';

const allInquiries = [
    { id: '#INQ-001', customer: 'Rajesh Patel', phone: '+91 98765 11111', product: 'OLL-340', model: 'Tea Picking Machine', state: 'Gujarat', qty: 5, status: 'New', date: '2026-03-04' },
    { id: '#INQ-002', customer: 'Priya Sharma', phone: '+91 98765 22222', product: 'OLL-600B', model: 'Double Blade Trimmer', state: 'Maharashtra', qty: 2, status: 'Contacted', date: '2026-03-04' },
    { id: '#INQ-003', customer: 'Arun Kumar', phone: '+91 98765 33333', product: 'OLL-GH02', model: 'Backpack Hedge Trimmer', state: 'Karnataka', qty: 10, status: 'New', date: '2026-03-03' },
    { id: '#INQ-004', customer: 'Suresh Verma', phone: '+91 98765 44444', product: 'OLL-ST5002', model: 'Pole Multi-Tool', state: 'Uttar Pradesh', qty: 3, status: 'Closed', date: '2026-03-02' },
    { id: '#INQ-005', customer: 'Meera Joshi', phone: '+91 98765 55555', product: 'OLL-GL02', model: 'Backpack Mower', state: 'Rajasthan', qty: 1, status: 'Contacted', date: '2026-03-01' },
    { id: '#INQ-006', customer: 'Vikram Desai', phone: '+91 98765 66666', product: 'OLL-340A', model: 'Tea Picking Curved', state: 'Gujarat', qty: 8, status: 'New', date: '2026-03-04' },
    { id: '#INQ-007', customer: 'Kavita Nair', phone: '+91 98765 77777', product: 'OLL-500M', model: 'Hedge Trimmer Pro', state: 'Kerala', qty: 4, status: 'Contacted', date: '2026-03-03' },
    { id: '#INQ-008', customer: 'Deepak Rao', phone: '+91 98765 88888', product: 'OLL-GT01', model: 'Soil Scarifier', state: 'Andhra Pradesh', qty: 2, status: 'Closed', date: '2026-02-28' },
    { id: '#INQ-009', customer: 'Sunita Gupta', phone: '+91 98765 99999', product: 'OLL-260', model: 'Mini Tea Picker', state: 'West Bengal', qty: 6, status: 'New', date: '2026-03-04' },
    { id: '#INQ-010', customer: 'Harish Patel', phone: '+91 98765 10101', product: 'OLL-360B', model: 'Curved Hedge Trimmer', state: 'Gujarat', qty: 3, status: 'Contacted', date: '2026-03-02' },
    { id: '#INQ-011', customer: 'Lata Singh', phone: '+91 98765 11011', product: 'OLL-GL01', model: 'Side Mount Mower', state: 'Punjab', qty: 1, status: 'New', date: '2026-03-04' },
    { id: '#INQ-012', customer: 'Rohan Mehta', phone: '+91 98765 12012', product: 'OLL-GH03', model: 'Backpack Trimmer 39cc', state: 'Haryana', qty: 5, status: 'Closed', date: '2026-03-01' },
];

const statusColors: Record<string, { bg: string; text: string }> = {
    New: { bg: '#E3F2FD', text: '#1565C0' },
    Contacted: { bg: '#E8F5E9', text: '#2E7D32' },
    Closed: { bg: '#EEEEEE', text: '#616161' },
};

export default function AdminInquiriesPage() {
    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    const filtered = allInquiries.filter(inq => {
        const matchSearch = !search || inq.customer.toLowerCase().includes(search.toLowerCase()) || inq.product.toLowerCase().includes(search.toLowerCase());
        const matchStatus = filterStatus === 'All' || inq.status === filterStatus;
        return matchSearch && matchStatus;
    });

    const counts = { All: allInquiries.length, New: allInquiries.filter(i => i.status === 'New').length, Contacted: allInquiries.filter(i => i.status === 'Contacted').length, Closed: allInquiries.filter(i => i.status === 'Closed').length };

    return (
        <div>
            <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 4 }}>Inquiries</h1>
                <p style={{ color: '#888', fontSize: '0.88rem' }}>Manage product quote requests from customers.</p>
            </div>

            {/* Status Tabs */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                {(['All', 'New', 'Contacted', 'Closed'] as const).map(status => (
                    <button key={status} onClick={() => setFilterStatus(status)} style={{
                        padding: '8px 18px', borderRadius: 8, border: '1.5px solid', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                        borderColor: filterStatus === status ? '#4CAF50' : '#e8eaed',
                        background: filterStatus === status ? '#4CAF50' : 'white',
                        color: filterStatus === status ? 'white' : '#555',
                    }}>
                        {status} <span style={{ marginLeft: 4, fontSize: '0.75rem', opacity: 0.8 }}>({counts[status]})</span>
                    </button>
                ))}
            </div>

            {/* Search */}
            <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 10, padding: '12px 16px', marginBottom: 20, display: 'flex', gap: 12 }}>
                <div style={{ position: 'relative', flex: 1 }}>
                    <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#aaa' }}>🔍</span>
                    <input placeholder="Search by customer or product..." value={search} onChange={e => setSearch(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px 9px 32px', border: '1px solid #e8eaed', borderRadius: 7, fontSize: '0.88rem', fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => e.target.style.borderColor = '#4CAF50'} onBlur={e => e.target.style.borderColor = '#e8eaed'} />
                </div>
            </div>

            {/* Table */}
            <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#fafafa' }}>
                            {['ID', 'Customer', 'Phone', 'Product', 'State', 'Qty', 'Date', 'Status', 'Actions'].map(h => (
                                <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontSize: '0.73rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e8eaed', whiteSpace: 'nowrap' }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((inq, i) => {
                            const sc = statusColors[inq.status];
                            return (
                                <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#fafafe'}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'white'}>
                                    <td style={{ padding: '12px 14px', fontSize: '0.8rem', fontFamily: 'monospace', color: '#4CAF50', fontWeight: 700 }}>{inq.id}</td>
                                    <td style={{ padding: '12px 14px', fontSize: '0.88rem', fontWeight: 600, color: '#1B1B1B', whiteSpace: 'nowrap' }}>{inq.customer}</td>
                                    <td style={{ padding: '12px 14px', fontSize: '0.8rem', color: '#555' }}>{inq.phone}</td>
                                    <td style={{ padding: '12px 14px' }}>
                                        <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#4CAF50' }}>{inq.product}</p>
                                        <p style={{ fontSize: '0.72rem', color: '#888' }}>{inq.model}</p>
                                    </td>
                                    <td style={{ padding: '12px 14px', fontSize: '0.8rem', color: '#555' }}>{inq.state}</td>
                                    <td style={{ padding: '12px 14px', fontSize: '0.88rem', fontWeight: 700, color: '#333', textAlign: 'center' }}>{inq.qty}</td>
                                    <td style={{ padding: '12px 14px', fontSize: '0.78rem', color: '#888', whiteSpace: 'nowrap' }}>{inq.date}</td>
                                    <td style={{ padding: '12px 14px' }}>
                                        <select defaultValue={inq.status} style={{ padding: '5px 8px', borderRadius: 6, border: `1.5px solid ${sc.text}`, fontSize: '0.78rem', color: sc.text, background: sc.bg, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif', outline: 'none' }}>
                                            <option value="New">New</option>
                                            <option value="Contacted">Contacted</option>
                                            <option value="Closed">Closed</option>
                                        </select>
                                    </td>
                                    <td style={{ padding: '12px 14px' }}>
                                        <button style={{ padding: '6px 12px', background: '#f0f7f0', color: '#2E7D32', border: '1px solid #A5D6A7', borderRadius: 6, fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>View</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div style={{ padding: '14px 16px', borderTop: '1px solid #e8eaed', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.82rem', color: '#888' }}>Showing {filtered.length} of {allInquiries.length} inquiries</span>
                    <div style={{ display: 'flex', gap: 6 }}>
                        {[1, 2].map(n => (
                            <button key={n} style={{ width: 32, height: 32, background: n === 1 ? '#4CAF50' : 'white', color: n === 1 ? 'white' : '#555', border: '1px solid #e8eaed', borderRadius: 6, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>{n}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
