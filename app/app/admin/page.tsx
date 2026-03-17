'use client';
import { products } from '@/lib/products';

const stats = [
    { label: 'Total Products', value: products.length.toString(), sub: 'In catalogue', icon: '📦', color: '#4CAF50', bg: '#E8F5E9' },
    { label: 'New Inquiries', value: '12', sub: 'Pending review', icon: '📋', color: '#1565C0', bg: '#E3F2FD' },
    { label: 'Total Customers', value: '248', sub: 'Registered leads', icon: '👥', color: '#6A1B9A', bg: '#F3E5F5' },
    { label: 'Monthly Visits', value: '4,872', sub: '+18% vs last month', icon: '📈', color: '#E65100', bg: '#FBE9E7' },
];

const recentInquiries = [
    { id: '#INQ-001', customer: 'Rajesh Patel', product: 'OLL-340', model: 'Tea Picking Machine', state: 'Gujarat', qty: 5, status: 'New', time: '10 min ago' },
    { id: '#INQ-002', customer: 'Priya Sharma', product: 'OLL-600B', model: 'Double Blade Trimmer', state: 'Maharashtra', qty: 2, status: 'Contacted', time: '45 min ago' },
    { id: '#INQ-003', customer: 'Arun Kumar', product: 'OLL-GH02', model: 'Backpack Hedge Trimmer', state: 'Karnataka', qty: 10, status: 'New', time: '2h ago' },
    { id: '#INQ-004', customer: 'Suresh Verma', product: 'OLL-ST5002', model: 'Pole Multi-Tool', state: 'Uttar Pradesh', qty: 3, status: 'Closed', time: '1d ago' },
    { id: '#INQ-005', customer: 'Meera Joshi', product: 'OLL-GL02', model: 'Backpack Mower', state: 'Rajasthan', qty: 1, status: 'Contacted', time: '2d ago' },
];

const quickActions = [
    { label: 'Add Product', href: '/admin/products', icon: '➕', color: '#4CAF50' },
    { label: 'View Inquiries', href: '/admin/inquiries', icon: '📋', color: '#1565C0' },
    { label: 'Add Customer', href: '/admin/customers', icon: '👤', color: '#6A1B9A' },
    { label: 'View Analytics', href: '/admin/analytics', icon: '📊', color: '#E65100' },
];

const statusColor = (s: string) => ({ New: { bg: '#E3F2FD', text: '#1565C0' }, Contacted: { bg: '#E8F5E9', text: '#2E7D32' }, Closed: { bg: '#EEEEEE', text: '#616161' } }[s] ?? { bg: '#fff', text: '#333' });

export default function AdminDashboard() {
    return (
        <div>
            {/* Page Title */}
            <div style={{ marginBottom: 28 }}>
                <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 4 }}>Dashboard</h1>
                <p style={{ color: '#888', fontSize: '0.88rem' }}>Welcome back, Admin. Here&apos;s what&apos;s happening.</p>
            </div>

            {/* Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 28 }}>
                {stats.map((stat, i) => (
                    <div key={i} style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{ width: 48, height: 48, background: stat.bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                            {stat.icon}
                        </div>
                        <div>
                            <p style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1B1B1B', lineHeight: 1.2 }}>{stat.value}</p>
                            <p style={{ fontSize: '0.8rem', color: '#888', marginTop: 2 }}>{stat.label}</p>
                            <p style={{ fontSize: '0.72rem', color: stat.color, fontWeight: 600, marginTop: 2 }}>{stat.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
                {/* Recent Inquiries Table */}
                <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ padding: '18px 22px', borderBottom: '1px solid #e8eaed', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B' }}>Recent Inquiries</h2>
                        <a href="/admin/inquiries" style={{ fontSize: '0.82rem', color: '#4CAF50', textDecoration: 'none', fontWeight: 600 }}>View All →</a>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#fafafa' }}>
                                {['ID', 'Customer', 'Product', 'State', 'Qty', 'Status', 'Time'].map(h => (
                                    <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e8eaed' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {recentInquiries.map((inq, i) => {
                                const sc = statusColor(inq.status);
                                return (
                                    <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#fafafa'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'white'}>
                                        <td style={{ padding: '12px 16px', fontSize: '0.82rem', fontFamily: 'monospace', color: '#4CAF50', fontWeight: 600 }}>{inq.id}</td>
                                        <td style={{ padding: '12px 16px', fontSize: '0.85rem', fontWeight: 600, color: '#1B1B1B' }}>{inq.customer}</td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#333' }}>{inq.product}</p>
                                            <p style={{ fontSize: '0.72rem', color: '#888' }}>{inq.model}</p>
                                        </td>
                                        <td style={{ padding: '12px 16px', fontSize: '0.82rem', color: '#555' }}>{inq.state}</td>
                                        <td style={{ padding: '12px 16px', fontSize: '0.85rem', fontWeight: 600, color: '#333' }}>{inq.qty}</td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <span style={{ background: sc.bg, color: sc.text, fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{inq.status}</span>
                                        </td>
                                        <td style={{ padding: '12px 16px', fontSize: '0.78rem', color: '#aaa' }}>{inq.time}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Right column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* Quick Actions */}
                    <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '18px 20px' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 14 }}>Quick Actions</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {quickActions.map((qa, i) => (
                                <a key={i} href={qa.href} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#fafafa', borderRadius: 8, textDecoration: 'none', border: '1px solid #ebebeb', transition: 'all 0.2s' }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = qa.color; (e.currentTarget as HTMLElement).style.background = 'white'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#ebebeb'; (e.currentTarget as HTMLElement).style.background = '#fafafa'; }}>
                                    <span style={{ fontSize: '1rem' }}>{qa.icon}</span>
                                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1B1B1B' }}>{qa.label}</span>
                                    <span style={{ marginLeft: 'auto', color: qa.color, fontSize: '0.9rem' }}>→</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Inventory Snapshot */}
                    <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '18px 20px' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 14 }}>Inventory Snapshot</h2>
                        {[
                            { label: 'Tea Picking', count: products.filter(p => p.category === 'Tea Picking').length, color: '#4CAF50' },
                            { label: 'Hedge Trimmers', count: products.filter(p => p.category === 'Hedge Trimmer').length, color: '#1565C0' },
                            { label: 'Pole Multi-Tools', count: products.filter(p => p.category === 'Pole Multi-Tool').length, color: '#6A1B9A' },
                            { label: 'Mowers / Scarifiers', count: products.filter(p => p.category === 'Lawn Mower' || p.category === 'Scarifier').length, color: '#E65100' },
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                                <span style={{ fontSize: '0.82rem', color: '#555', flex: 1 }}>{item.label}</span>
                                <div style={{ flex: 2, height: 6, background: '#f0f0f0', borderRadius: 3, overflow: 'hidden' }}>
                                    <div style={{ width: `${(item.count / products.length) * 100}%`, height: '100%', background: item.color, borderRadius: 3 }} />
                                </div>
                                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: item.color, minWidth: 20, textAlign: 'right' }}>{item.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
