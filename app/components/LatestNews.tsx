'use client';
import { useEffect, useRef } from 'react';

const testimonials = [
    {
        quote: "BharatBloomm's cordless tiller transformed my farming operations. The lithium battery lasts all day, and I've reduced my labor costs by 40%. Best investment I've made!",
        name: 'Rajesh Singh',
        state: 'Punjab',
        initials: 'RS',
    },
    {
        quote: "The electric tractor is a game-changer! Zero emissions, no diesel costs, and incredibly powerful. BharatBloomm's technology is truly the future of Indian agriculture.",
        name: 'Priya Deshmukh',
        state: 'Maharashtra',
        initials: 'PD',
    },
    {
        quote: "Multipurpose tools from BharatBloomm work perfectly across my different crops. The battery power is reliable, and the equipment is easy to maintain. Highly recommended!",
        name: 'Arun Kumar',
        state: 'Karnataka',
        initials: 'AK',
    },
];

export default function LatestNews() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.querySelectorAll('.testimonial-card').forEach(card => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) card.classList.add('visible');
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }, []);

    return (
        <section id="testimonials" ref={ref} style={{ padding: '100px 0', background: '#fff' }}>
            <div className="container">
                <div className="section-title">
                    <h2>What Our Farmers Say</h2>
                    <p>Real experiences from farmers across India</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card slide-up" style={{
                            background: 'rgba(255,255,255,0.6)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.4)',
                            borderLeft: '4px solid #4CAF50',
                            borderRadius: '20px',
                            padding: '32px',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 48px rgba(0,0,0,0.12)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'; }}
                        >
                            {/* Stars */}
                            <div style={{ color: '#FFC107', fontSize: '1.1rem', marginBottom: '16px' }}>★★★★★</div>
                            <p style={{ color: '#555', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '20px' }}>
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: 50, height: 50, background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', fontWeight: 700, fontSize: '1.2rem', flexShrink: 0,
                                    fontFamily: 'Playfair Display, serif',
                                }}>{t.initials}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{t.name}</h4>
                                    <span style={{ fontSize: '0.9rem', color: '#555' }}>{t.state}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
