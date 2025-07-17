'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import fashionDefaults from '../../../data/fashionPosts';

export default function LayoutDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('fashionPosts');
    let allPosts = fashionDefaults;

    if (stored) {
      const customPosts = JSON.parse(stored);
      allPosts = [...fashionDefaults, ...customPosts];
    }

    const matchedPost = allPosts.find((p) => p.slug === slug);
    if (matchedPost) {
      setPost(matchedPost);
    } else {
      router.push('/user/dashboard');
    }
  }, [slug]);

  if (!post) {
    return <p style={{ padding: '2rem', color: '#fff' }}>Loading...</p>;
  }

  return (
    <div
      style={{
        padding: '40px 20px',
        backgroundImage: 'url("/images/backgroud.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        backdropFilter: 'blur(px)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay',
        color: '#fff',
        fontFamily: "'Bebas Neue', sans-serif",
        textAlign: 'center',
        animation: 'fadeInPage 1s ease',
      }}
    >
      <style>{`
        @keyframes fadeInPage {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseText {
          0% { text-shadow: 0 0 6px #ff758c; }
          50% { text-shadow: 0 0 16px #ff758c; }
          100% { text-shadow: 0 0 6px #ff758c; }
        }
      `}</style>

      <button
        onClick={() => router.back()}
        style={{
          marginBottom: '30px',
          padding: '10px 22px',
          fontSize: '17px',
          background: 'linear-gradient(to right, #ff4e50, #f9d423)',
          border: 'none',
          borderRadius: '30px',
          color: '#000',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'transform 0.3s, box-shadow 0.3s',
          boxShadow: '0 4px 12px rgba(255, 105, 135, 0.4)',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 105, 135, 0.6)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 105, 135, 0.4)';
        }}
      >
        ← Back
      </button>

      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '15px',
          color: '#ffd369',
          animation: 'pulseText 2s infinite ease-in-out',
        }}
      >
        🎶 {post.title}
      </h1>

      <Image
        src={post.image}
        alt={post.title}
        width={320}
        height={320}
        unoptimized
        style={{
          borderRadius: '16px',
          marginBottom: '25px',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
      />

      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          padding: '25px',
          borderRadius: '20px',
          backdropFilter: 'blur(3px)',
          boxShadow: '0 0 10px rgba(255, 182, 193, 0.3)',
          transition: 'all 0.3s ease',
        }}
      >
        <p
          style={{
            fontSize: '1.1rem',
            marginBottom: '12px',
            transition: 'all 0.4s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.fontSize = '1.3rem';
            e.currentTarget.style.color = '#ffc0cb';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.fontSize = '1.1rem';
            e.currentTarget.style.color = '#fff';
          }}
        >
          <strong>Short Info:</strong> {post.content}
        </p>

        <p
          style={{
            fontSize: '1rem',
            marginBottom: '12px',
            transition: 'all 0.4s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.fontSize = '1.2rem';
            e.currentTarget.style.color = '#ffaaff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.fontSize = '1rem';
            e.currentTarget.style.color = '#fff';
          }}
        >
          <strong>Description:</strong>{' '}
          {post.description || 'No detailed description provided.'}
        </p>

       
      </div>
    </div>
  );
}
