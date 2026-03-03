'use client';
import { useRef, useState } from 'react';

const infoCards = [
    { icon: '📍', title: 'Visit Us', lines: ['BharatBloomm FarmTech Pvt Ltd', 'Innovation Hub, Bangalore', 'Karnataka, India'] },
    { icon: '✉️', title: 'Email Us', lines: ['info@bharatbloomm.com', 'sales@bharatbloomm.com'] },
    { icon: '📞', title: 'Call Us', lines: ['+91 98765 43210', '+91 98765 43211'] },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        formRef.current?.reset();
        setTimeout(() => setSubmitted(false), 4000);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%', padding: '14px 16px',
        border: '2px solid rgba(0,0,0,0.1)',
        borderRadius: '12px', fontFamily: 'Inter, sans-serif',
        fontSize: '1rem', background: 'rgba(255,255,255,0.8)',
        outline: 'none', transition: 'border-color 0.3s',
        boxSizing: 'border-box',
    };

    return (
        <section id="contact" style={{ padding: '100px 0', background: '#fff' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Get in Touch</h2>
                    <p>Ready to transform your farm? Contact us today</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px' }}>
                    {/* Contact Form */}
                    <div style={{
                        background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255,255,255,0.4)', borderRadius: '20px',
                        padding: '40px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                    }}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                                <h3 style={{ color: '#4CAF50', marginBottom: '8px' }}>Message Sent!</h3>
                                <p style={{ color: '#555' }}>Thank you! We will get back to you soon.</p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit}>
                                {[
                                    { label: 'Full Name', id: 'name', type: 'text', placeholder: 'Enter your name' },
                                    { label: 'Email Address', id: 'email', type: 'email', placeholder: 'your.email@example.com' },
                                    { label: 'Phone Number', id: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                                ].map(f => (
                                    <div key={f.id} style={{ marginBottom: '24px' }}>
                                        <label htmlFor={f.id} style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#1B1B1B' }}>{f.label}</label>
                                        <input id={f.id} name={f.id} type={f.type} required placeholder={f.placeholder} style={inputStyle}
                                            onFocus={e => (e.target.style.borderColor = '#4CAF50')}
                                            onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.1)')}
                                        />
                                    </div>
                                ))}
                                <div style={{ marginBottom: '24px' }}>
                                    <label htmlFor="message" style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#1B1B1B' }}>Message</label>
                                    <textarea id="message" name="message" required placeholder="Tell us about your farming needs..."
                                        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                                        onFocus={e => (e.target.style.borderColor = '#4CAF50')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.1)')}
                                    />
                                </div>
                                <button type="submit" style={{
                                    width: '100%', padding: '16px',
                                    background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                                    color: 'white', border: 'none', borderRadius: '12px',
                                    fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer',
                                    transition: 'all 0.3s ease', fontFamily: 'Inter, sans-serif',
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(76,175,80,0.3)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Info Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {infoCards.map((card, i) => (
                            <div key={i} style={{
                                background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(255,255,255,0.4)', borderRadius: '20px',
                                padding: '28px', display: 'flex', alignItems: 'flex-start', gap: '20px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(10px)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'; }}
                            >
                                <div style={{
                                    width: 50, height: 50, background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                                    borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.3rem', flexShrink: 0,
                                }}>{card.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{card.title}</h3>
                                    {card.lines.map((line, j) => (
                                        <p key={j} style={{ color: '#555', lineHeight: 1.6 }}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {/* Map placeholder */}
                        <div style={{
                            background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.4)', borderRadius: '20px',
                            padding: '40px', textAlign: 'center',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                        }}>
                            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🗺️</div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Serving All India</h3>
                            <p style={{ color: '#555' }}>Available across multiple states with dedicated support teams</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          #contact .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
