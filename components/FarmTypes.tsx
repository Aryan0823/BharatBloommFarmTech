'use client';
import Link from 'next/link';

const farmTypes = [
    {
        title: 'Agricultural Solutions',
        subtitle: 'for Grain Farmers',
        emoji: '🌾',
        gradient: 'linear-gradient(135deg, #1a4d24, #2d7a3a)',
        tags: ['Wheat', 'Rice', 'Maize'],
    },
    {
        title: 'Smart Horticulture',
        subtitle: 'for Fruit & Veggie Farms',
        emoji: '🥦',
        gradient: 'linear-gradient(135deg, #2d7a3a, #4caf62)',
        tags: ['Fruits', 'Vegetables', 'Herbs'],
    },
    {
        title: 'Precision Dairy',
        subtitle: 'for Livestock Farmers',
        emoji: '🐄',
        gradient: 'linear-gradient(135deg, #4caf62, #8cc63f)',
        tags: ['Dairy', 'Poultry', 'Livestock'],
    },
    {
        title: 'AquaTech Farming',
        subtitle: 'for Water-based Farming',
        emoji: '🐟',
        gradient: 'linear-gradient(135deg, #1e6b6b, #2d9696)',
        tags: ['Fish', 'Shrimp', 'Algae'],
    },
];

export default function FarmTypes() {
    return (
        <section id="products" style={{ padding: '80px 24px', background: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <div className="farm-intro-grid">
                    <div>
                        <div className="section-label" style={{ marginBottom: '12px' }}>Farm Types</div>
                        <h2 className="section-heading">
                            Smart Farming Support<br />for All Types of Farms
                        </h2>
                    </div>
                    <div>
                        <p style={{ color: '#4a5568', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            From small-scale family operations to large commercial farms, our technology solutions are built for every type of Indian farmer — delivering actionable insights that drive real results.
                        </p>
                        <Link href="#contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-flex' }}>
                            Start Free Trial →
                        </Link>
                    </div>
                </div>

                {/* Farm Type Cards */}
                <div className="farm-types-grid">
                    {farmTypes.map((farm, index) => (
                        <div
                            key={farm.title}
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                position: 'relative',
                                minHeight: '300px',
                                background: farm.gradient,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                padding: '28px 24px',
                            }}
                            className="card"
                        >
                            {/* Decorative circles */}
                            <div style={{
                                position: 'absolute',
                                top: '-30px',
                                right: '-30px',
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.08)',
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                left: '-20px',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.06)',
                            }} />

                            {/* Emoji icon */}
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                background: 'rgba(255,255,255,0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem',
                                marginBottom: '16px',
                            }}>
                                {farm.emoji}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '4px', lineHeight: 1.3 }}>
                                    {farm.title}
                                </h3>
                                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                                    {farm.subtitle}
                                </p>

                                {/* Tags */}
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {farm.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            style={{
                                                fontSize: '0.7rem',
                                                color: 'rgba(255,255,255,0.85)',
                                                background: 'rgba(255,255,255,0.15)',
                                                padding: '3px 10px',
                                                borderRadius: '20px',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Arrow */}
                            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Learn More</span>
                                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
