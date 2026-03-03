'use client';
export default function WhyChooseUs() {
    const benefits = [
        {
            icon: '🌿',
            title: 'Smart Farming Technology',
            description: 'Proprietary AI algorithms trained on 10+ years of Indian agricultural data — providing hyper-local insights that generic platforms simply can\'t match.',
        },
        {
            icon: '📈',
            title: 'Improved Crop Yield',
            description: 'Farmers using BharatBloomm FarmTech see an average 34% increase in yield within the first season, backed by real-time monitoring and precision input guidance.',
        },
        {
            icon: '♻️',
            title: 'Resource Optimization',
            description: 'Our smart irrigation and input management systems reduce water consumption by 40% and fertilizer costs by 25%, directly boosting farm profitability.',
        },
        {
            icon: '🤝',
            title: 'Dedicated Farm Advisors',
            description: 'Every farmer gets access to a dedicated agronomy expert — combining human expertise with AI insights for support in local languages, 24/7.',
        },
        {
            icon: '🔒',
            title: 'Data Privacy & Security',
            description: 'Your farm data belongs to you. We use enterprise-grade encryption and never share your information with third parties without explicit consent.',
        },
        {
            icon: '💰',
            title: 'Affordable for Every Farmer',
            description: 'Flexible subscription plans starting at ₹499/month with zero hardware cost for small farms — making precision agriculture accessible to all.',
        },
    ];

    return (
        <section id="about" style={{ padding: '80px 24px', background: '#fafffe' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="why-choose-grid">
                    {/* Left: benefits */}
                    <div>
                        <div className="section-label" style={{ marginBottom: '12px' }}>Benefits</div>
                        <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                            Why Choose Us –<br />Key Benefits
                        </h2>
                        <p style={{ color: '#4a5568', lineHeight: 1.7, marginBottom: '36px', fontSize: '0.95rem' }}>
                            BharatBloomm FarmTech is built exclusively for Indian farmers — developed with deep understanding of local crops, climate patterns, and agricultural challenges.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {benefits.map((benefit) => (
                                <div
                                    key={benefit.title}
                                    style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                                >
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #f0f9f2, #e0f5e8)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.3rem',
                                        flexShrink: 0,
                                        border: '1px solid #c8ecd0',
                                    }}>
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '0.95rem',
                                            fontWeight: 700,
                                            color: '#1a2e1a',
                                            marginBottom: '4px',
                                        }}>
                                            {benefit.title}
                                        </h3>
                                        <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.6 }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div>
                        {/* Main visual card */}
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg, #1a4d24 0%, #2d7a3a 60%, #4caf62 100%)',
                            padding: '48px 36px',
                            color: 'white',
                            position: 'relative',
                            marginBottom: '20px',
                        }}>
                            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(140,198,63,0.1)' }} />
                            <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(76,175,98,0.1)' }} />

                            <div style={{ position: 'relative' }}>
                                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🌱</div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: '12px' }}>
                                    India's Leading<br />AgriTech Platform
                                </h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '28px' }}>
                                    Trusted by 92,000+ farmers across 15+ states, delivering proven results through technology + human expertise.
                                </p>

                                {/* Mini stats */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    {[
                                        { value: '34%', label: 'Avg Yield Boost' },
                                        { value: '40%', label: 'Water Saved' },
                                        { value: '25%', label: 'Input Cost Reduced' },
                                        { value: '24/7', label: 'Expert Support' },
                                    ].map((s) => (
                                        <div key={s.label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 16px' }}>
                                            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#b5e05a' }}>{s.value}</div>
                                            <div style={{ fontSize: '0.75rem', opacity: 0.75 }}>{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Small CTA card */}
                        <div style={{
                            background: 'white',
                            borderRadius: '16px',
                            padding: '24px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                        }}>
                            <div style={{ fontSize: '2.5rem' }}>🏆</div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700, color: '#1a2e1a', fontSize: '0.95rem' }}>
                                    Award-Winning Excellence
                                </div>
                                <div style={{ fontSize: '0.82rem', color: '#4a5568', marginTop: '2px' }}>
                                    Recognized by NASSCOM AgriTech Innovation Awards 2024
                                </div>
                            </div>
                            <div style={{ fontSize: '1.5rem' }}>→</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
