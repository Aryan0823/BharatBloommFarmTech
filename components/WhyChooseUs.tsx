'use client';
import { useEffect, useRef } from 'react';

const features = [
    {
        icon: '⚡',
        title: 'Long-lasting Lithium Battery',
        desc: 'Up to 8 hours of continuous operation on a single charge. Fast recharge capability ensures minimal downtime and maximum productivity throughout your work day.',
    },
    {
        icon: '🌿',
        title: 'Eco-Friendly Operations',
        desc: 'Zero emissions and minimal environmental impact. Contribute to green farming practices while reducing operational costs and promoting sustainable agriculture.',
    },
    {
        icon: '🔧',
        title: 'Multipurpose Tools',
        desc: 'One tool serves many uses across different crops and farming activities. Maximize your investment with versatile equipment designed for diverse agricultural needs.',
    },
    {
        icon: '🇮🇳',
        title: 'Made for Indian Farms',
        desc: 'Specifically engineered for diverse Indian terrains, climates, and crop varieties. Understanding local farming challenges to deliver optimal performance nationwide.',
    },
];

export default function WhyChooseUs() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.querySelectorAll('.feature-card').forEach(card => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) card.classList.add('visible');
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }, []);

    return (
        <section id="why-us" ref={ref} style={{ padding: '100px 0', background: '#fff' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Why BharatBloomm?</h2>
                    <p>Key benefits that make us India&apos;s leading AgriTech company</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    {/* Left: Feature Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {features.map((f, i) => (
                            <div key={i} className="feature-card slide-up" style={{
                                background: 'rgba(255,255,255,0.6)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                borderRadius: '20px',
                                padding: '28px',
                                display: 'flex',
                                gap: '20px',
                                alignItems: 'flex-start',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(10px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 48px rgba(0,0,0,0.12)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'; }}
                            >
                                <div style={{ fontSize: '2rem', color: '#4CAF50', minWidth: 50 }}>{f.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{f.title}</h3>
                                    <p style={{ color: '#555', lineHeight: 1.6 }}>{f.desc}</p>
                                </div>
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
                            src="https://sspark.genspark.ai/cfimages?u1=1sQxCdyr3Duhy%2BjlShcY3IohltN0UaSE9uMlupGQm65dIb5k2BBIVaHQBptYIhwAGJFut5beI%2B%2FYjF5fawLlY%2BxpGA52R6488B9nXvauHmjy7WNwpg%3D%3D&u2=gQNxcW7bFvGj5jHw&width=2560"
                            alt="AgriTech Ecosystem"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          #why-us .container > div > div:last-child { display: none; }
          #why-us .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
