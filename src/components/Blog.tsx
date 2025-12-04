import React from 'react';
import '../assets/styles/Blog.scss';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Comprendiendo Fusiones y Adquisiciones Corporativas',
      excerpt: 'Guía completa para entender el mundo complejo de fusiones, adquisiciones y aspectos legales...',
      category: 'Derecho Corporativo',
      date: '15 Oct, 2024',
      author: 'Michael Shaffer',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Derecho Familiar: Protegiendo tus Derechos en el Divorcio',
      excerpt: 'Información esencial sobre procesos de divorcio, división de bienes y custodia de hijos...',
      category: 'Derecho Familiar',
      date: '10 Oct, 2024',
      author: 'Sarah Johnson',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Estrategias para la Protección de la Propiedad Intelectual',
      excerpt: 'Aprende a proteger tus innovaciones, marcas y obras creativas en la era digital...',
      category: 'Propiedad Intelectual',
      date: '5 Oct, 2024',
      author: 'Emily Chen',
      readTime: '6 min'
    },
    
  ];

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <div className="section-header">
          <span className="section-label">CONOCIMIENTO</span>
          <h2 className="section-title">Últimas Publicaciones de Nuestro <span className="highlight">Blog</span></h2>
          <p className="section-description">
            Mantente informado con consejos legales y actualizaciones del sector
          </p>
        </div>

        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {post.date}
                  </span>
                  <span className="blog-read-time">{post.readTime} lectura</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-author">Por {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <button className="view-all-btn">Ver Todos los Artículos</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
