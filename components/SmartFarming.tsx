'use client';
import { useEffect, useRef } from 'react';

const products = [
    {
        img: 'https://sspark.genspark.ai/cfimages?u1=dQrEW8LLBM8luaybD%2BhX7aPtFvB8F%2FMmD%2FbBmco8UARxVQvxG8nIMaB0cIbq3HZUJxQpNkqfi7MywEYSt42Zl%2Bbj6xDnYzC%2F%2Fus0lEg2HeUVpyLPcPQGWXFCDsGfpgCld0CPaFRCt7GD2vhdkVUc%2Fkb6wo4EudGxTKw0F0WLld6IAx1NzuKah5oRVuYxOdYT1dwMQm7exYOfE%2FCws5Wd2QQtbwK4g5MBTumSJb4I3jLKeqM1wKyFMpdxLiB8vRWe8fr%2BsGSTPo0%3D&u2=KVsHtfZSEbm568Io&width=2560',
        badge: 'Lithium Powered',
        title: 'Cordless Tiller / Cultivator',
        desc: 'Perfect for soil cultivation, weed removal, and garden tilling. Lightweight design with powerful lithium battery for extended operation hours.',
    },
    {
        img: 'https://sspark.genspark.ai/cfimages?u1=dbpFBs3E6zhXuVKZx3dEl0aJU1koHzsEvl2S8SrP4iSkz3d9b2PgxmTx5C8szG7N%2F1lZmj93WUFlgyxacqFaxbjyaNmtV5iqMFc86AsV%2FqmFLe1teULp47zZTNQVR0%2FC2LSDldWb%2FL756673I3Zp5xQ5&u2=5JpT1RqvDA0tgQNr&width=2560',
        badge: 'Lithium Powered',
        title: 'Electric Farm Tractor',
        desc: 'The future of farming with zero emissions. High-capacity lithium batteries deliver consistent power for all-day field operations.',
    },
    {
        img: 'https://sspark.genspark.ai/cfimages?u1=rBD5hX%2FNJwMKAZePr5VbrOycBnlAJrjZFS%2B5pHYlCN0LaSQ4HmvprG99PnhIB6T%2FpsoWVkR9RXC%2BxPUVne58Zi2MyCn3qQ5266Gd6hpZoApycqp8WPx%2BtZRaJjs8TvzL156d%2FHP9hL9444vYrDNIF4bWJqgdza9A&u2=Ws94fiX6pb%2F15OBA&width=2560',
        badge: 'Lithium Powered',
        title: 'Smart Farming Robots',
        desc: 'AI-powered autonomous farming robots with advanced lithium battery systems. Automate planting, monitoring, and crop management tasks.',
    },
    {
        img: 'https://sspark.genspark.ai/cfimages?u1=F7D08NLe%2BnInqlYz5LIV03%2BaZ%2BBC3HC7CWvE%2BWL0PmdLO42BVukmwgbXmDyzh221u0OgCbAkfSxLWknArMfQEwgCh4QIQwWWlBGTCRQ8kq9eh4WUrZtwlw%3D%3D&u2=CTT2rxq4uAwNC85G&width=2560',
        badge: 'Lithium Powered',
        title: 'Plant Vine Tying Machine',
        desc: 'Efficient battery-operated vine tying solution for vineyards and climbing crops. Reduces manual labor while ensuring precise plant support.',
    },
    {
        img: 'https://sspark.genspark.ai/cfimages?u1=EsYbANrTCpwc2oE3fBmHO8ObYFFivuAmFbsziCEfnTBXgHWShpd3sy7re6shlX4hJNI%2F4NjSdQmyctc7zMk1y5jUuXRi8SCL9s6aJQQQFmFjyuqW5EVb0WlvwNwpQUIgCRlD6146u9XVyDViK%2FxYw%2BNpRA3tqsghu%2FQB07im573gslFNxa8MGd6%2BAz6x&u2=WEC1IhSiFDg%2FIQXI&width=2560',
        badge: 'Lithium Powered',
        title: 'Cordless Power Tools',
        desc: 'Complete range of lithium-ion powered tools for farm maintenance, repairs, and construction. Professional-grade performance without cords.',
    },
    {
        img: 'https://sspark.genspark.ai/cfimages?u1=mdWGRuRu7M9coEOeb4R6j9ABXVktebjsEF%2BYA7dzlWYyIQTH3fnvE3IIcBNZ%2BfxWJGlXz4wiz1BLiwMIzmTRjMosDLAleBPoHHRDCcJDFM2IjluHl%2B8UHRWKsfCcwotTxIZN6OAislEodpqsk5kzM%2F%2FAvN8r5fs0%2B41RVwol8PnzM9TMNOIK%2BpFRrN6SWTuIAO61swmIPFDgsRDOQp2zLte2fyeVOLMD63igTg5VbGGgRBG%2FV%2B%2FigODg8VXJMdf0fp%2FLyaXOsNYgLUFnOx%2FH&u2=5m0OZTQN6PIhyiAl&width=2560',
        badge: 'Lithium Powered',
        title: 'Electric Tiller AT01',
        desc: 'Latest cordless electric tiller with advanced lithium battery technology. Ideal for small to medium farms with efficient soil preparation capabilities.',
    },
];

export default function SmartFarming() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.querySelectorAll('.product-card').forEach(card => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) card.classList.add('visible');
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }, []);

    return (
        <section id="products" ref={ref} style={{ padding: '100px 0', background: '#fff' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Our Premium Battery-Operated Tools</h2>
                    <p>Best quality lithium-powered equipment for modern Indian farming</p>
                </div>

                <div className="products-grid">
                    {products.map((p, i) => (
                        <div key={i} className="product-card slide-up" style={{
                            background: 'rgba(255,255,255,0.6)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.4)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.15)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'; }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={p.img} alt={p.title} loading="lazy"
                                style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
                            <div style={{ padding: '24px' }}>
                                <span style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                                    color: 'white', padding: '6px 16px', borderRadius: '20px',
                                    fontSize: '0.8rem', fontWeight: 600, marginBottom: '12px',
                                }}>{p.badge}</span>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{p.title}</h3>
                                <p style={{ color: '#555', marginBottom: '20px', lineHeight: 1.6 }}>{p.desc}</p>
                                <button style={{
                                    width: '100%', padding: '12px',
                                    background: 'transparent', border: '2px solid #4CAF50',
                                    color: '#4CAF50', borderRadius: '12px', fontWeight: 600, cursor: 'pointer',
                                    transition: 'all 0.3s ease', fontSize: '1rem', fontFamily: 'Inter, sans-serif',
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#4CAF50'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#4CAF50'; }}
                                    onClick={() => alert(`Interested in ${p.title}? Please contact us for more details!`)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
