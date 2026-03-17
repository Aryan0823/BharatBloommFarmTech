'use client';
const monthlyInquiries = [
    { month: 'Oct', value: 18 }, { month: 'Nov', value: 24 }, { month: 'Dec', value: 31 },
    { month: 'Jan', value: 28 }, { month: 'Feb', value: 42 }, { month: 'Mar', value: 12 },
];

const topProducts = [
    { name: 'OLL-340 Tea Picker', model: 'OLL-340', inquiries: 28, pct: 88 },
    { name: 'Double Blade Trimmer', model: 'OLL-600B', inquiries: 22, pct: 69 },
    { name: 'Backpack Hedge Trimmer', model: 'OLL-GH02', inquiries: 18, pct: 56 },
    { name: 'Pole Multi-Tool', model: 'OLL-ST5002', inquiries: 14, pct: 44 },
    { name: 'Backpack Mower', model: 'OLL-GL02', inquiries: 11, pct: 34 },
];

const stateData = [
    { state: 'Gujarat', value: 42, pct: 84 },
    { state: 'Maharashtra', value: 38, pct: 76 },
    { state: 'Punjab', value: 27, pct: 54 },
    { state: 'Karnataka', value: 23, pct: 46 },
    { state: 'Rajasthan', value: 18, pct: 36 },
];

const max = Math.max(...monthlyInquiries.map(m => m.value));

export default function AdminAnalyticsPage() {
    return (
        <div>
            <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 4 }}>Analytics</h1>
                <p style={{ color: '#888', fontSize: '0.88rem' }}>Site performance and inquiry trends overview. (Live data integration coming soon)</p>
            </div>

            {/* KPI Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
                {[
                    { label: 'Total Inquiries', value: '155', trend: '+18%', icon: '📋', color: '#4CAF50' },
                    { label: 'Page Views', value: '4,872', trend: '+12%', icon: '👁️', color: '#1565C0' },
                    { label: 'Conversion Rate', value: '3.2%', trend: '+0.4%', icon: '🎯', color: '#6A1B9A' },
                    { label: 'Avg. Session', value: '2m 34s', trend: '+8%', icon: '⏱️', color: '#E65100' },
                ].map((kpi, i) => (
                    <div key={i} style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '18px 20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                            <span style={{ fontSize: '1.2rem' }}>{kpi.icon}</span>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2E7D32', background: '#E8F5E9', padding: '2px 8px', borderRadius: 12 }}>{kpi.trend}</span>
                        </div>
                        <p style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1B1B1B', lineHeight: 1 }}>{kpi.value}</p>
                        <p style={{ fontSize: '0.78rem', color: '#888', marginTop: 4 }}>{kpi.label}</p>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                {/* Monthly Inquiries Bar Chart */}
                <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '20px 22px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 6 }}>Monthly Inquiries</h3>
                    <p style={{ fontSize: '0.78rem', color: '#888', marginBottom: 24 }}>Oct 2025 – Mar 2026</p>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 160 }}>
                        {monthlyInquiries.map((m, i) => (
                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4CAF50' }}>{m.value}</span>
                                <div style={{ width: '100%', height: `${(m.value / max) * 120}px`, background: i === monthlyInquiries.length - 1 ? '#A5D6A7' : 'linear-gradient(180deg, #4CAF50, #2E7D32)', borderRadius: '4px 4px 0 0', minHeight: 4, transition: 'height 0.3s' }} />
                                <span style={{ fontSize: '0.72rem', color: '#888' }}>{m.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Power Type Donut (CSS) */}
                <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '20px 22px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 6 }}>Inquiries by Power Type</h3>
                    <p style={{ fontSize: '0.78rem', color: '#888', marginBottom: 24 }}>Lithium vs Gasoline</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
                        {/* Donut simulation */}
                        <div style={{ position: 'relative', width: 120, height: 120 }}>
                            <svg viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#E8F5E9" strokeWidth="4" />
                                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#4CAF50" strokeWidth="4"
                                    strokeDasharray="63 37" strokeDashoffset="0" />
                                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#E65100" strokeWidth="4"
                                    strokeDasharray="37 63" strokeDashoffset="-63" />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <p style={{ fontSize: '0.65rem', color: '#888', lineHeight: 1 }}>Total</p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1B1B1B' }}>155</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <div style={{ width: 12, height: 12, borderRadius: 3, background: '#4CAF50' }} />
                                <div>
                                    <p style={{ fontSize: '0.88rem', fontWeight: 700 }}>63%</p>
                                    <p style={{ fontSize: '0.75rem', color: '#888' }}>🔋 Lithium Battery</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <div style={{ width: 12, height: 12, borderRadius: 3, background: '#E65100' }} />
                                <div>
                                    <p style={{ fontSize: '0.88rem', fontWeight: 700 }}>37%</p>
                                    <p style={{ fontSize: '0.75rem', color: '#888' }}>⛽ Gasoline</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {/* Top Products */}
                <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '20px 22px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 16 }}>Top Products by Inquiry</h3>
                    {topProducts.map((p, i) => (
                        <div key={i} style={{ marginBottom: 14 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: '0.85rem' }}>
                                <span style={{ color: '#333', fontWeight: 600 }}>{p.model}</span>
                                <span style={{ color: '#4CAF50', fontWeight: 700 }}>{p.inquiries}</span>
                            </div>
                            <div style={{ height: 6, background: '#f0f0f0', borderRadius: 3, overflow: 'hidden' }}>
                                <div style={{ width: `${p.pct}%`, height: '100%', background: `linear-gradient(90deg, #4CAF50, ${i === 0 ? '#2E7D32' : '#66BB6A'})`, borderRadius: 3 }} />
                            </div>
                            <p style={{ fontSize: '0.72rem', color: '#888', marginTop: 3 }}>{p.name}</p>
                        </div>
                    ))}
                </div>

                {/* Top States */}
                <div style={{ background: 'white', border: '1px solid #e8eaed', borderRadius: 12, padding: '20px 22px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B1B1B', marginBottom: 16 }}>Top States by Lead Volume</h3>
                    {stateData.map((s, i) => (
                        <div key={i} style={{ marginBottom: 14 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: '0.85rem' }}>
                                <span style={{ color: '#333', fontWeight: 600 }}>{s.state}</span>
                                <span style={{ color: '#1565C0', fontWeight: 700 }}>{s.value}</span>
                            </div>
                            <div style={{ height: 6, background: '#f0f0f0', borderRadius: 3, overflow: 'hidden' }}>
                                <div style={{ width: `${s.pct}%`, height: '100%', background: 'linear-gradient(90deg, #1565C0, #42A5F5)', borderRadius: 3 }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
