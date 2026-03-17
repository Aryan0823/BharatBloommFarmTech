'use client';
import { useEffect, useRef } from 'react';

const cards = [
    {
        icon: '🔋',
        title: 'Battery-Powered Tools',
        desc: 'Our advanced lithium battery technology ensures long-lasting performance with zero emissions. Perfect for sustainable farming practices and reducing carbon footprint across Indian farms.',
    },
    {
        icon: '⚙️',
        title: 'Multipurpose Equipment',
        desc: 'Designed for versatility, our tools serve multiple farming needs — from tilling and cultivation to planting and harvesting. One investment, countless applications for your farm.',
    },
    {
        icon: '💡',
        title: 'Innovative Technology',
        desc: 'Combining cutting-edge engineering with practical farming wisdom. Our equipment is built to handle the diverse challenges of modern Indian agriculture with smart, efficient solutions.',
    },
];

export default function FarmTypes() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.querySelectorAll('.about-card').forEach(card => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) card.classList.add('visible');
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }, []);

    return (
        <section id="about" ref={ref} style={{ padding: '100px 0', background: '#fff' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Smart Farming Support for All Types of Farms</h2>
                    <p>Revolutionizing agriculture with innovative lithium battery-powered solutions</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
                    {/* Left: Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {cards.map((card, i) => (
                            <div key={i} className="about-card slide-up" style={{
                                background: 'rgba(255,255,255,0.6)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(10px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 48px rgba(0,0,0,0.12)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'; }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{card.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{card.title}</h3>
                                <p style={{ color: '#555', lineHeight: 1.7 }}>{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Image */}
                    <div style={{
                        background: 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255,255,255,0.4)',
                        borderRadius: '20px',
                        padding: '16px',
                        boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
                    }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://sspark.genspark.ai/cfimages?u1=dbpFBs3E6zhXuVKZx3dEl0aJU1koHzsEvl2S8SrP4iSkz3d9b2PgxmTx5C8szG7N%2F1lZmj93WUFlgyxacqFaxbjyaNmtV5iqMFc86AsV%2FqmFLe1teULp47zZTNQVR0%2FC2LSDldWb%2FL756673I3Zp5xQ5&u2=5JpT1RqvDA0tgQNr&width=2560"
                            alt="Electric Farm Tractor"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          #about .container > div > div:last-child { display: none; }
          #about .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
