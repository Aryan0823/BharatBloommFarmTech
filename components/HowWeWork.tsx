'use client';
import { useState } from 'react';

const steps = [
    {
        number: '01',
        title: 'Discovery of Agriculture',
        description:
            'We start by understanding your farm — its size, crops, soil type, water access, and unique challenges. Our agronomists and AI systems map out a complete picture of your agricultural situation, identifying priority areas and opportunities for technology integration.',
        icon: '🔍',
    },
    {
        number: '02',
        title: 'Crop-level Planning',
        description:
            'Based on your farm data and market analysis, we design a tailored smart farming roadmap. This covers seasonal planning, recommended crop varieties, irrigation schedules, and technology deployments that align with your goals and resources.',
        icon: '🗺️',
    },
    {
        number: '03',
        title: 'Plan Execution',
        description:
            'Our expert team deploys IoT sensors, connects satellite monitoring, and trains your team on our dashboard tools. Throughout the growing season we provide ongoing support, real-time alerts, and data-driven advice to ensure optimal results.',
        icon: '🚀',
    },
];

export default function HowWeWork() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section id="process" style={{ padding: '80px 24px', background: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="how-work-grid">
                    {/* Left side */}
                    <div>
                        <div className="section-label" style={{ marginBottom: '12px' }}>How We Work</div>
                        <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                            See How We Complete the Work
                        </h2>
                        <p style={{ color: '#4a5568', lineHeight: 1.7, marginBottom: '40px', fontSize: '0.95rem' }}>
                            Our proven 3-step process ensures every farmer gets maximum value from our technology — from first consultation to full harvest.
                        </p>

                        {/* Step accordion */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    onClick={() => setActiveStep(index)}
                                    style={{
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        border: `2px solid ${activeStep === index ? '#2d7a3a' : '#e2e8f0'}`,
                                        transition: 'all 0.3s ease',
                                        marginBottom: '8px',
                                    }}
                                >
                                    {/* Step header */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        padding: '16px 20px',
                                        background: activeStep === index ? '#f0f9f2' : 'white',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: activeStep === index ? 'linear-gradient(135deg, #2d7a3a, #4caf62)' : '#f0f4f0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: activeStep === index ? '1.3rem' : '0.85rem',
                                            fontWeight: 700,
                                            color: activeStep === index ? 'white' : '#4a5568',
                                            flexShrink: 0,
                                            transition: 'all 0.3s ease',
                                        }}>
                                            {activeStep === index ? step.icon : step.number}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{
                                                fontSize: '1rem',
                                                fontWeight: 700,
                                                color: activeStep === index ? '#1a4d24' : '#2d3748',
                                            }}>
                                                {step.title}
                                            </div>
                                        </div>
                                        <div style={{
                                            color: activeStep === index ? '#2d7a3a' : '#a0aec0',
                                            fontSize: '1.2rem',
                                            transition: 'all 0.3s ease',
                                            transform: activeStep === index ? 'rotate(180deg)' : 'none',
                                        }}>
                                            ∨
                                        </div>
                                    </div>

                                    {/* Step description (expanded) */}
                                    {activeStep === index && (
                                        <div style={{
                                            padding: '0 20px 20px 76px',
                                            background: '#f0f9f2',
                                            animation: 'fadeInUp 0.3s ease forwards',
                                        }}>
                                            <p style={{ color: '#4a5568', lineHeight: 1.7, fontSize: '0.9rem' }}>
                                                {step.description}
                                            </p>
                                            <div style={{ marginTop: '16px' }}>
                                                <a href="#contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem', display: 'inline-flex' }}>
                                                    Get Started →
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Visual */}
                    <div style={{ position: 'sticky', top: '100px' }}>
                        <div style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg, #1a4d24, #2d7a3a)',
                            padding: '48px 36px',
                            textAlign: 'center',
                            color: 'white',
                            position: 'relative',
                        }}>
                            <div style={{
                                position: 'absolute', top: '-40px', right: '-40px',
                                width: '160px', height: '160px',
                                borderRadius: '50%',
                                background: 'rgba(140,198,63,0.1)',
                            }} />
                            <div style={{
                                position: 'absolute', bottom: '-30px', left: '-30px',
                                width: '120px', height: '120px',
                                borderRadius: '50%',
                                background: 'rgba(76,175,98,0.1)',
                            }} />

                            <div style={{ fontSize: '5rem', marginBottom: '24px' }}>
                                {steps[activeStep].icon}
                            </div>
                            <div style={{
                                fontSize: '0.75rem', fontWeight: 600,
                                letterSpacing: '0.1em', textTransform: 'uppercase',
                                color: '#b5e05a', marginBottom: '8px',
                            }}>
                                Step {steps[activeStep].number}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem', fontWeight: 800,
                                fontFamily: "'Playfair Display', serif",
                                marginBottom: '16px',
                            }}>
                                {steps[activeStep].title}
                            </h3>

                            {/* Process dots */}
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
                                {steps.map((_, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setActiveStep(i)}
                                        style={{
                                            width: i === activeStep ? '28px' : '8px',
                                            height: '8px',
                                            borderRadius: '4px',
                                            background: i === activeStep ? '#8cc63f' : 'rgba(255,255,255,0.3)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
