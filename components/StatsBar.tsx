'use client';
import { useEffect, useRef } from 'react';

const stats = [
    { icon: '🔧', value: '15', label: 'Premium Products' },
    { icon: '👥', value: '36,000+', label: 'Satisfied Customers' },
    { icon: '🚜', value: '6,428', label: 'Farms Equipped' },
    { icon: '😊', value: '92K', label: 'Happy Users' },
];

export default function StatsBar() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.querySelectorAll('.stat-item').forEach(card => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) card.classList.add('visible');
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }, []);

    return (
        <section ref={ref} style={{
            background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            padding: '48px 0',
        }}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item slide-up" style={{
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '20px',
                            padding: '32px 24px',
                            textAlign: 'center',
                            color: 'white',
                            transition: 'all 0.3s ease',
                            cursor: 'default',
                        }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = 'translateY(-6px)';
                                el.style.background = 'rgba(255,255,255,0.8)';
                                el.style.color = '#2E7D32';
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = 'translateY(0)';
                                el.style.background = 'rgba(255,255,255,0.15)';
                                el.style.color = 'white';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{stat.icon}</div>
                            <h3 style={{
                                fontSize: '2.2rem', marginBottom: '8px',
                                color: 'inherit', fontFamily: "'Playfair Display', serif",
                            }}>{stat.value}</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.95 }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
