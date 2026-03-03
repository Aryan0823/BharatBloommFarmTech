'use client';
import { useEffect, useRef } from 'react';

const steps = [
    {
        num: '1',
        title: 'Choose Your Tool',
        desc: "Browse our comprehensive catalogue of lithium-powered equipment. Each tool is designed specifically for Indian farming conditions and crop requirements.",
    },
    {
        num: '2',
        title: 'Easy Setup',
        desc: "Plug-free and ready to operate within minutes. Our battery-operated tools require no complicated installation — just charge and start farming smarter.",
    },
    {
        num: '3',
        title: 'Farm Smarter',
        desc: "Reduce labor costs, save time, and maximize crop yield with efficient, eco-friendly technology. Experience the future of agriculture today.",
    },
];

export default function HowWeWork() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.querySelectorAll('.step-card').forEach(card => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) card.classList.add('visible');
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }, []);

    return (
        <section id="process" ref={ref} style={{
            padding: '100px 0',
            background: 'linear-gradient(to bottom, rgba(76,175,80,0.03), #fff)',
        }}>
            <div className="container">
                <div className="section-title">
                    <h2>See How We Transform Farming</h2>
                    <p>Three simple steps to modernize your agricultural operations</p>
                </div>
                <div className="steps-grid">
                    {steps.map((step, i) => (
                        <div key={i} className="step-card slide-up" style={{
                            background: 'rgba(255,255,255,0.6)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.4)',
                            borderRadius: '20px',
                            padding: '40px 32px',
                            textAlign: 'center',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                        }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'; }}
                        >
                            <div style={{
                                width: 60, height: 60,
                                background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                                color: 'white', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.5rem', fontWeight: 700,
                                margin: '0 auto 24px',
                                boxShadow: '0 4px 16px rgba(76,175,80,0.3)',
                                fontFamily: 'Playfair Display, serif',
                            }}>{step.num}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{step.title}</h3>
                            <p style={{ color: '#555', lineHeight: 1.7 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
