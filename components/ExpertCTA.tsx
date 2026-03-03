import Link from 'next/link';

export default function ExpertCTA() {
    return (
        <section
            id="experts"
            style={{
                position: 'relative',
                overflow: 'hidden',
                margin: '0',
                padding: '80px 24px',
                background: 'linear-gradient(135deg, #1a4d24 0%, #2d7a3a 40%, #4caf62 80%, #8cc63f 100%)',
            }}
        >
            {/* Background pattern */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url("/hero-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.12,
            }} />

            {/* Decorative circles */}
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
            <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '50px',
                    padding: '6px 20px',
                    marginBottom: '28px',
                }}>
                    <span style={{ color: '#b5e05a', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em' }}>
                        🤝 EXPERT COLLABORATION
                    </span>
                </div>

                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                    fontWeight: 800,
                    color: 'white',
                    lineHeight: 1.2,
                    marginBottom: '20px',
                }}>
                    Collaborate and learn from<br />
                    industry experts and enthusiasts
                </h2>

                <p style={{
                    fontSize: '1.05rem',
                    color: 'rgba(255,255,255,0.8)',
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                    lineHeight: 1.7,
                }}>
                    Join our network of 500+ agricultural scientists, agronomists, and farming innovators. Access exclusive webinars, field visits, and mentorship programs designed to elevate your farming knowledge.
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
                    <Link
                        href="#contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'white',
                            color: '#2d7a3a',
                            fontWeight: 700,
                            padding: '16px 36px',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        }}
                    >
                        Join Community →
                    </Link>
                    <Link
                        href="#services"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'transparent',
                            color: 'white',
                            fontWeight: 600,
                            padding: '15px 32px',
                            borderRadius: '50px',
                            border: '2px solid rgba(255,255,255,0.5)',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        View Programs
                    </Link>
                </div>

                {/* Expert avatars */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0' }}>
                    {['👨‍🌾', '👩‍🔬', '👨‍💻', '👩‍🌾', '🧑‍🔬'].map((emoji, i) => (
                        <div
                            key={i}
                            style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '50%',
                                border: '3px solid rgba(255,255,255,0.5)',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                marginLeft: i === 0 ? '0' : '-16px',
                                backdropFilter: 'blur(10px)',
                                zIndex: 5 - i,
                                position: 'relative',
                            }}
                        >
                            {emoji}
                        </div>
                    ))}
                    <div style={{
                        marginLeft: '16px',
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                    }}>
                        500+ Expert Members
                    </div>
                </div>
            </div>
        </section>
    );
}
