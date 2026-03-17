'use client';
export default function AdminCustomersPage() {
    const customers = [
        { name: 'Rajesh Patel', phone: '+91 98765 11111', state: 'Gujarat', inquiries: 3, lastContact: '2026-03-04', tag: 'Hot Lead' },
        { name: 'Priya Sharma', phone: '+91 98765 22222', state: 'Maharashtra', inquiries: 1, lastContact: '2026-03-04', tag: 'Contacted' },
        { name: 'Arun Kumar', phone: '+91 98765 33333', state: 'Karnataka', inquiries: 2, lastContact: '2026-03-03', tag: 'Hot Lead' },
        { name: 'Suresh Verma', phone: '+91 98765 44444', state: 'Uttar Pradesh', inquiries: 1, lastContact: '2026-03-02', tag: 'Closed' },
        { name: 'Meera Joshi', phone: '+91 98765 55555', state: 'Rajasthan', inquiries: 1, lastContact: '2026-03-01', tag: 'Contacted' },
        { name: 'Vikram Desai', phone: '+91 98765 66666', state: 'Gujarat', inquiries: 4, lastContact: '2026-03-04', tag: 'Hot Lead' },
        { name: 'Kavita Nair', phone: '+91 98765 77777', state: 'Kerala', inquiries: 1, lastContact: '2026-03-03', tag: 'Contacted' },
        { name: 'Deepak Rao', phone: '+91 98765 88888', state: 'Andhra Pradesh', inquiries: 2, lastContact: '2026-02-28', tag: 'Closed' },
        { name: 'Sunita Gupta', phone: '+91 98765 99999', state: 'West Bengal', inquiries: 1, lastContact: '2026-03-04', tag: 'New' },
        { name: 'Harish Patel', phone: '+91 98765 10101', state: 'Gujarat', inquiries: 2, lastContact: '2026-03-02', tag: 'Contacted' },
    ];

    const tagColor = (tag: string) => ({ 'Hot Lead': { bg: '#FFF3E0', text: '#E65100' }, Contacted: { bg: '#E8F5E9', text: '#2E7D32' }, Closed: { bg: '#EEEEEE', text: '#616161' }, New: { bg: '#E3F2FD', text: '#1565C0' } }[tag] ?? { bg: '#fff', text: '#333' });

    const stateData = customers.reduce((acc: Record<string, number>, c) => { acc[c.state] = (acc[c.state] || 0) + 1; return acc; }, {});
    const topStates = Object.entries(stateData).sort((a, b) => b[1] - a[1]).slice(0, 5);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                    <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 4 }}>Customers</h1>
                    <p style={{ color: '#888', fontSize: '0.88rem' }}>{customers.length} customers / leads tracked</p>
                </div>
                <button style={{ padding: '10px 22px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                    ➕ Add Customer
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
                {/* Table */}
                <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#fafafa' }}>
                                {['Customer', 'Phone', 'State', 'Inquiries', 'Last Contact', 'Tag', 'Actions'].map(h => (
                                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.73rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e8eaed', whiteSpace: 'nowrap' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((c, i) => {
                                const tc = tagColor(c.tag);
                                const initials = c.name.split(' ').map(n => n[0]).join('').slice(0, 2);
                                return (
                                    <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#fafafe'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'white'}>
                                        <td style={{ padding: '12px 16px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#4CAF50,#2E7D32)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>{initials}</div>
                                                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1B1B1B' }}>{c.name}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '12px 16px', fontSize: '0.82rem', color: '#555' }}>{c.phone}</td>
                                        <td style={{ padding: '12px 16px', fontSize: '0.82rem', color: '#555' }}>{c.state}</td>
                                        <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                                            <span style={{ fontWeight: 700, color: '#4CAF50', fontSize: '1rem' }}>{c.inquiries}</span>
                                        </td>
                                        <td style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#888' }}>{c.lastContact}</td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <span style={{ background: tc.bg, color: tc.text, fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{c.tag}</span>
                                        </td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <div style={{ display: 'flex', gap: 6 }}>
                                                <button style={{ padding: '5px 10px', background: '#f0f7f0', color: '#2E7D32', border: '1px solid #A5D6A7', borderRadius: 5, fontSize: '0.75rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>View</button>
                                                <button style={{ padding: '5px 10px', background: '#f0f4ff', color: '#1565C0', border: '1px solid #BBDEFB', borderRadius: 5, fontSize: '0.75rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>📞</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Right: State Breakdown */}
                <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '20px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 16 }}>Top States</h3>
                    {topStates.map(([state, count], i) => (
                        <div key={i} style={{ marginBottom: 14 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: '0.85rem' }}>
                                <span style={{ color: '#555' }}>{state}</span>
                                <span style={{ fontWeight: 700, color: '#4CAF50' }}>{count}</span>
                            </div>
                            <div style={{ height: 6, background: '#f0f0f0', borderRadius: 3, overflow: 'hidden' }}>
                                <div style={{ width: `${(count / customers.length) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #4CAF50, #2E7D32)', borderRadius: 3 }} />
                            </div>
                        </div>
                    ))}
                    <div style={{ marginTop: 20, padding: '16px', background: '#f8fdf8', borderRadius: 10, border: '1px solid #e8f5e9' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2E7D32', marginBottom: 8 }}>Lead Summary</p>
                        {[{ label: 'Hot Leads', count: customers.filter(c => c.tag === 'Hot Lead').length, color: '#E65100' },
                        { label: 'Contacted', count: customers.filter(c => c.tag === 'Contacted').length, color: '#2E7D32' },
                        { label: 'New', count: customers.filter(c => c.tag === 'New').length, color: '#1565C0' },
                        { label: 'Closed', count: customers.filter(c => c.tag === 'Closed').length, color: '#616161' },
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '4px 0', borderBottom: i < 3 ? '1px solid #f0f0f0' : 'none' }}>
                                <span style={{ color: '#555' }}>{item.label}</span>
                                <span style={{ fontWeight: 700, color: item.color }}>{item.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
