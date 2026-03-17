'use client';

export default function HowItWorksCTA() {
    return (
        <section style={{
            padding: '100px 0',
            background: `linear-gradient(135deg, rgba(76,175,80,0.95), rgba(46,125,50,0.95)),
        url('https://sspark.genspark.ai/cfimages?u1=tHVYUIV2wtlaHrQKVwkOIv2RZvhnWCwpxhEatR5pluqB3GKF7UccqCgox5HTVx9UfqlVldsvqMbzVcmNqyln06JIsa94OsLKaZ8QvYngI3i3996G%2FZLo8rfyhJNjR75I8K%2F5rpivtxE%3D&u2=Q3bGJwDN1G7ndbf1&width=2560')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            textAlign: 'center' as const,
            position: 'relative' as const,
        }}>
            <div className="container">
                <div style={{
                    maxWidth: 800,
                    margin: '0 auto',
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '20px',
                    padding: '60px 40px',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
                }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#1B1B1B' }}>
                        Collaborate and Grow with India&apos;s Leading AgriTech Company
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '32px', color: '#555' }}>
                        Join thousands of farmers transforming their fields with BharatBloomm FarmTech Private Limited
                    </p>
                    <a href="#contact" style={{
                        padding: '18px 48px',
                        background: 'white',
                        color: '#4CAF50',
                        borderRadius: '50px',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        textDecoration: 'none',
                        display: 'inline-block',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease',
                    }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
                    >
                        Get Started Today
                    </a>
                </div>
            </div>
        </section>
    );
}
