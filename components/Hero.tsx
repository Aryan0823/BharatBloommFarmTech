'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id="home"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Background Image */}
            <div style={{ position: 'absolute', inset: 0 }}>
                <Image
                    src="/hero-bg.png"
                    alt="Agricultural fields with technology"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                    quality={90}
                />
                {/* Gradient overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(10, 40, 15, 0.88) 0%, rgba(10, 40, 15, 0.65) 55%, rgba(10, 40, 15, 0.25) 100%)',
                }} />
                {/* Bottom fade */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background: 'linear-gradient(to top, #ffffff, transparent)',
                }} />
            </div>

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '120px 24px 80px', width: '100%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }}>
                    {/* Left content */}
                    <div style={{ maxWidth: '600px' }}>
                        {/* Tag */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(140, 198, 63, 0.2)',
                            border: '1px solid rgba(140, 198, 63, 0.4)',
                            borderRadius: '50px',
                            padding: '6px 16px',
                            marginBottom: '24px',
                            animation: 'fadeInUp 0.6s ease forwards',
                        }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8cc63f', display: 'inline-block' }} />
                            <span style={{ color: '#b5e05a', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em' }}>
                                🌱 INDIA'S AGRITECH PIONEER
                            </span>
                        </div>

                        {/* Main headline */}
                        <h1 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: 800,
                            color: 'white',
                            lineHeight: 1.1,
                            marginBottom: '24px',
                            animation: 'fadeInUp 0.6s ease 0.1s forwards',
                            opacity: 0,
                        }}>
                            Smart Solutions<br />
                            <span style={{ color: '#8cc63f' }}>for</span> Farmers
                        </h1>

                        {/* Slogan */}
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.8)',
                            marginBottom: '16px',
                            fontStyle: 'italic',
                            fontWeight: 500,
                            animation: 'fadeInUp 0.6s ease 0.2s forwards',
                            opacity: 0,
                        }}>
                            "Cultivating the Future with Technology"
                        </p>

                        <p style={{
                            fontSize: '1rem',
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.7,
                            marginBottom: '40px',
                            maxWidth: '480px',
                            animation: 'fadeInUp 0.6s ease 0.3s forwards',
                            opacity: 0,
                        }}>
                            Empowering India's farmers with AI-driven insights, precision agriculture tools,
                            and smart farming solutions. Transforming traditional farming into a technology-powered future.
                        </p>

                        {/* CTAs */}
                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            flexWrap: 'wrap',
                            animation: 'fadeInUp 0.6s ease 0.4s forwards',
                            opacity: 0,
                        }}>
                            <Link href="#services" className="btn-primary" style={{ fontSize: '1rem' }}>
                                Explore Solutions →
                            </Link>
                            <Link
                                href="#about"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    padding: '14px 28px',
                                    borderRadius: '50px',
                                    border: '2px solid rgba(255,255,255,0.4)',
                                    backdropFilter: 'blur(10px)',
                                    background: 'rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s ease',
                                    fontSize: '1rem',
                                }}
                            >
                                ▶ Watch Demo
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div style={{
                            display: 'flex',
                            gap: '32px',
                            marginTop: '48px',
                            animation: 'fadeInUp 0.6s ease 0.5s forwards',
                            opacity: 0,
                        }}>
                            {[
                                { value: '92K+', label: 'Farmers Served' },
                                { value: '36K', label: 'Acres Covered' },
                                { value: '15+', label: 'States Active' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#8cc63f' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Feature Card */}
                    <div style={{
                        background: 'rgba(255,255,255,0.12)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '28px',
                        minWidth: '260px',
                        maxWidth: '300px',
                        animation: 'fadeInUp 0.8s ease 0.3s forwards',
                        opacity: 0,
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #2d7a3a, #8cc63f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🔬</div>
                            <div>
                                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#8cc63f', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AgriTech</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'white' }}>BharatBloomm</div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
                            Agricultural Development Initiatives
                        </div>

                        {[
                            { label: 'Crop Health Monitor', progress: 92 },
                            { label: 'Smart Irrigation', progress: 78 },
                            { label: 'Soil Analysis AI', progress: 85 },
                        ].map((item) => (
                            <div key={item.label} style={{ marginBottom: '14px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)' }}>{item.label}</span>
                                    <span style={{ fontSize: '0.78rem', color: '#8cc63f', fontWeight: 600 }}>{item.progress}%</span>
                                </div>
                                <div style={{ height: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: `${item.progress}%`, background: 'linear-gradient(to right, #4caf62, #8cc63f)', borderRadius: '3px' }} />
                                </div>
                            </div>
                        ))}

                        <div style={{ marginTop: '20px', padding: '14px', background: 'rgba(140,198,63,0.15)', borderRadius: '12px', border: '1px solid rgba(140,198,63,0.3)' }}>
                            <div style={{ fontSize: '0.75rem', color: '#b5e05a', fontWeight: 600 }}>📈 SEASONAL IMPACT</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', marginTop: '4px' }}>+34% Yield</div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>Avg improvement across farms</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                animation: 'fadeIn 1s ease 1s forwards',
                opacity: 0,
            }}>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
                <div style={{ width: '24px', height: '36px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
                    <div style={{ width: '3px', height: '8px', background: '#8cc63f', borderRadius: '2px', animation: 'fadeInUp 1.5s ease infinite' }} />
                </div>
            </div>
        </section>
    );
}
