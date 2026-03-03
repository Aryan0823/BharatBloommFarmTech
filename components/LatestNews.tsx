'use client';
import Link from 'next/link';

const news = [
    {
        date: 'Feb 28, 2026',
        category: 'Technology',
        title: 'What Is the Farming Best Practices Initiative?',
        excerpt: 'BharatBloomm FarmTech launches its annual best practices initiative, connecting farmers with cutting-edge research and field-tested techniques for better yields.',
        emoji: '🌿',
        readTime: '5 min read',
        color: '#1a4d24',
    },
    {
        date: 'Feb 22, 2026',
        category: 'Innovation',
        title: 'Artificial Intelligence in Indian Agriculture: 2026 Update',
        excerpt: 'Our AI crop monitoring system now covers 36,000+ acres. Here is what we learned about using machine learning to predict and prevent crop failures at scale.',
        emoji: '🤖',
        readTime: '8 min read',
        color: '#2d7a3a',
    },
    {
        date: 'Feb 15, 2026',
        category: 'Success Story',
        title: 'What is the Farming Best Crop Opportunity for Rabi 2026?',
        excerpt: 'A deep dive into which crops are showing the highest profitability this Rabi season, with expert analysis from our team of agricultural economists and agronomists.',
        emoji: '📊',
        readTime: '6 min read',
        color: '#3d9d4e',
    },
];

export default function LatestNews() {
    return (
        <section id="news" style={{ padding: '80px 24px', background: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
                    <div>
                        <div className="section-label" style={{ marginBottom: '12px' }}>Our Updates</div>
                        <h2 className="section-heading">Check Our Latest News</h2>
                    </div>
                    <Link
                        href="/blog"
                        style={{
                            color: '#2d7a3a',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            border: '2px solid #2d7a3a',
                            padding: '10px 20px',
                            borderRadius: '50px',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        View All Articles →
                    </Link>
                </div>

                {/* News Cards */}
                <div className="news-grid">
                    {news.map((article, index) => (
                        <article
                            key={article.title}
                            className="card"
                            style={{ overflow: 'hidden', cursor: 'pointer' }}
                        >
                            {/* Image placeholder */}
                            <div style={{
                                height: '200px',
                                background: `linear-gradient(135deg, ${article.color}ee, ${article.color}88)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: 'url("/hero-bg.png")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: `center ${index * 20}%`,
                                    opacity: 0.3,
                                }} />
                                <div style={{
                                    position: 'relative',
                                    fontSize: '4rem',
                                }}>
                                    {article.emoji}
                                </div>
                                {/* Category badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '16px',
                                    left: '16px',
                                    background: 'rgba(255,255,255,0.9)',
                                    color: article.color,
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                }}>
                                    {article.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '24px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    marginBottom: '12px',
                                    color: '#718096',
                                    fontSize: '0.8rem',
                                }}>
                                    <span>📅 {article.date}</span>
                                    <span>·</span>
                                    <span>⏱️ {article.readTime}</span>
                                </div>

                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    color: '#1a2e1a',
                                    marginBottom: '12px',
                                    lineHeight: 1.4,
                                }}>
                                    {article.title}
                                </h3>

                                <p style={{
                                    fontSize: '0.85rem',
                                    color: '#4a5568',
                                    lineHeight: 1.6,
                                    marginBottom: '20px',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}>
                                    {article.excerpt}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: '#2d7a3a',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                }}>
                                    Read Article <span>→</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

        </section>
    );
}
