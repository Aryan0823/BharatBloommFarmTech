'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const statBadges = [
        { value: '500+', label: 'Farmers Served' },
        { value: '15+', label: 'Products' },
        { value: '100%', label: 'Battery Powered' },
        { value: '5 States', label: 'Pan India' },
    ];

    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.querySelectorAll('.slide-up').forEach(card => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) card.classList.add('visible');
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }, []);

    return (
        <section id="home" ref={ref} style={{
            padding: '160px 0 100px',
            background: '#fff',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Blob decorations */}
            <div style={{
                position: 'absolute', top: '-50%', right: '-20%',
                width: 600, height: 600,
                background: 'linear-gradient(135deg, rgba(76,175,80,0.1), rgba(46,125,50,0.05))',
                borderRadius: '50%', filter: 'blur(80px)', zIndex: 0,
            }} />
            <div style={{
                position: 'absolute', bottom: '-30%', left: '-15%',
                width: 500, height: 500,
                background: 'linear-gradient(135deg, rgba(165,214,167,0.15), rgba(76,175,80,0.08))',
                borderRadius: '50%', filter: 'blur(100px)', zIndex: 0,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    {/* Left: Text */}
                    <div>
                        <h1 style={{ fontSize: '3.5rem', lineHeight: 1.2, marginBottom: '20px' }}>
                            Cultivating the Future with{' '}
                            <span className="gradient-text">Technology</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '32px', lineHeight: 1.8 }}>
                            Empowering Indian farmers with cutting-edge battery-operated agricultural tools powered by lithium technology. Experience multipurpose, innovative, and eco-friendly farming solutions designed for modern agriculture.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <a href="#products" className="btn-primary">Explore Products</a>
                            <a href="#about" className="btn-outline">Learn More</a>
                        </div>
                    </div>

                    {/* Right: Image + Floating Stats */}
                    <div>
                        {/* Hero Image Card */}
                        <div style={{
                            background: 'rgba(255,255,255,0.6)',
                            backdropFilter: 'blur(16px)',
                            border: '2px solid #4CAF50',
                            borderRadius: '20px',
                            padding: '12px',
                            boxShadow: '0 12px 48px rgba(76,175,80,0.2)',
                        }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://sspark.genspark.ai/cfimages?u1=I6AHtSfsTiMgKXkcNz2D0MdkbAxu61iSF%2BjDaPYPixcNm9pfAm3hmaxv%2FkO19rvCU3wo%2F1u%2BqNFOaosrNNE%2BCFeiiKNeEWVGvzgrmA%3D%3D&u2=Q%2FkD%2F3XvXsnN%2BsH5&width=2560"
                                alt="Modern Farming Technology"
                                loading="lazy"
                                style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
                            />
                        </div>

                        {/* Floating Stat Badges */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '32px' }}>
                            {statBadges.map((badge, i) => (
                                <div key={i} className="slide-up" style={{
                                    background: 'rgba(255,255,255,0.6)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    borderRadius: '16px',
                                    padding: '16px 20px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                                    animation: `float 3s ease-in-out ${i * 0.5}s infinite`,
                                }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#4CAF50', marginBottom: '4px', fontFamily: 'Playfair Display, serif' }}>
                                        {badge.value}
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: '#555' }}>{badge.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 968px) {
          #home > div > div > div:first-child { padding-top: 0; }
          #home { padding: 120px 0 60px; }
        }
        @media (max-width: 768px) {
          #home .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #home h1 { font-size: 2.5rem !important; }
        }
      `}</style>
        </section>
    );
}
