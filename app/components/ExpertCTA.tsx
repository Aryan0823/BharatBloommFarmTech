'use client';
import { useEffect, useRef } from 'react';

const techCards = [
    {
        icon: '🔋',
        title: 'Lithium-Ion Cells',
        desc: 'High energy density delivers powerful performance. Fast recharge capabilities and extended cycle life ensure long-term reliability and cost-effectiveness.',
    },
    {
        icon: '💻',
        title: 'Smart Power Management',
        desc: 'Intelligent Battery Management System (BMS) optimizes power delivery, ensures safety, and maximizes efficiency across all operating conditions.',
    },
    {
        icon: '📡',
        title: 'IoT-Ready Platforms',
        desc: 'Future-ready connectivity enables smart farm integration. Monitor performance, track usage, and optimize operations with digital farming capabilities.',
    },
];

export default function ExpertCTA() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.querySelectorAll('.tech-card').forEach(card => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) card.classList.add('visible');
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }, []);

    return (
        <section id="technology" ref={ref} style={{
            padding: '100px 0',
            background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Blob */}
            <div style={{
                position: 'absolute', top: '-50%', right: '-20%',
                width: 600, height: 600,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%', filter: 'blur(100px)',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-title">
                    <h2 style={{ color: 'white' }}>Powered by Advanced Lithium Technology</h2>
                    <p style={{ color: 'rgba(255,255,255,0.85)' }}>Next-generation battery systems engineered for agricultural excellence</p>
                </div>

                <div className="tech-grid">
                    {techCards.map((card, i) => (
                        <div key={i} className="tech-card slide-up" style={{
                            background: 'rgba(255,255,255,0.6)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '20px',
                            padding: '40px 32px',
                            textAlign: 'center',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.9)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.15)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{card.icon}</div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: '#1B1B1B' }}>{card.title}</h3>
                            <p style={{ color: '#555', lineHeight: 1.7 }}>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
