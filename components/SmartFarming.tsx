export default function SmartFarming() {
    const features = [
        {
            icon: '🛰️',
            title: 'AI-Powered Crop Monitoring',
            description: 'Satellite imagery and machine learning algorithms analyze your crops in real-time, detecting disease, pest infestations, and nutrient deficiencies before they impact your yield.',
            color: '#1a4d24',
            bg: '#f0f9f2',
        },
        {
            icon: '💧',
            title: 'Smart Irrigation Technology',
            description: 'IoT sensors combined with weather prediction and soil analytics automate water delivery — reducing water usage by up to 40% while maximizing crop health.',
            color: '#2d7a3a',
            bg: '#f7fdf4',
        },
        {
            icon: '📊',
            title: 'Precision Farm Analytics',
            description: 'Comprehensive dashboards provide actionable intelligence — from soil composition to harvest timing forecasts — helping farmers make data-driven decisions at every stage.',
            color: '#3d9d4e',
            bg: '#f0fdf4',
        },
    ];

    return (
        <section id="services" style={{ padding: '80px 24px', background: '#fafffe' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '12px' }}>Our Technology</div>
                    <h2 className="section-heading" style={{ textAlign: 'center' }}>
                        Smart Farming Support<br />for All Types of Farms
                    </h2>
                    <p style={{ color: '#4a5568', maxWidth: '520px', margin: '16px auto 0', lineHeight: 1.7 }}>
                        Our suite of AgriTech tools is designed to work seamlessly together — giving every farmer a complete digital farming partner.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="three-col-grid">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="card"
                            style={{
                                padding: '36px 28px',
                                borderTop: `4px solid ${feature.color}`,
                            }}
                        >
                            {/* Icon bubble */}
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '18px',
                                background: feature.bg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem',
                                marginBottom: '24px',
                            }}>
                                {feature.icon}
                            </div>

                            <h3 style={{
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                color: '#1a2e1a',
                                marginBottom: '12px',
                                lineHeight: 1.3,
                            }}>
                                {feature.title}
                            </h3>

                            <p style={{
                                fontSize: '0.9rem',
                                color: '#4a5568',
                                lineHeight: 1.7,
                                marginBottom: '20px',
                            }}>
                                {feature.description}
                            </p>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: feature.color,
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                            }}>
                                Learn more <span>→</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom visual: field image placeholder with gradient overlay */}
                <div style={{
                    marginTop: '48px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    height: '260px',
                    background: 'linear-gradient(135deg, #1a4d24, #4caf62)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("/hero-bg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center bottom',
                        opacity: 0.4,
                    }} />
                    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🌱</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>
                            Growing India's Agricultural Future
                        </div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '8px' }}>
                            Technology-powered farming for every Indian farmer
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
