'use client';

export default function StatsBar() {
    const stats = [
        { value: '15+', label: 'States with Active Farmers', icon: '📍' },
        { value: '36K', label: 'Acres of Land Monitored', icon: '🌾' },
        { value: '6,428', label: 'Hours of Saved Farm Work', icon: '⏱️' },
        { value: '92K+', label: 'Crop Yield Improvements', icon: '📈' },
    ];

    return (
        <section
            id="stats"
            style={{
                background: 'linear-gradient(135deg, #1a4d24 0%, #2d7a3a 50%, #3d9d4e 100%)',
                padding: '60px 24px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(140,198,63,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(140,198,63,0.1) 0%, transparent 50%)',
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            style={{
                                padding: '24px 16px',
                                textAlign: 'center',
                                borderRight: index < stats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                            }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
                            <div style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: 900,
                                lineHeight: 1,
                                marginBottom: '8px',
                                background: 'linear-gradient(135deg, #ffffff, #b5e05a)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                {stat.value}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.4 }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
