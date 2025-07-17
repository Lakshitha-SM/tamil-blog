'use client';
import { useRouter } from 'next/navigation';
import './globals.css';

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: 'url("/images/songs.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        padding: '0',
        margin: '0',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: 'center',
          paddingTop: '70px',
          paddingBottom: '50px',
          background: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            background: 'linear-gradient(to right, #FFD54F, #FFA000)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px #FFA000',
            marginBottom: '12px',
            animation: 'fadeInUp 1.2s ease forwards',
            opacity: 0,
          }}
        >
          PaadalPicks
        </h1>
        <p
          style={{
            fontSize: '1.3rem',
            color: '#fff7e6',
            fontStyle: 'italic',
            marginBottom: '30px',
            textShadow: '0 0 6px #FFECB3',
            animation: 'fadeInUp 1.6s ease forwards',
            opacity: 0,
          }}
        >
          Discover Tamil music’s soul – from Ilaiyaraaja’s poetry to Anirudh’s madness.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '20px',
            animation: 'fadeInUp 2s ease forwards',
            opacity: 0,
          }}
        >
          {['User', 'Admin'].map((type) => (
            <button
              key={type}
              onClick={() => router.push(`/${type.toLowerCase()}/login`)}
              style={{
                padding: '16px 36px',
                borderRadius: '40px',
                border: '2px solid #FFA000',
                background: 'linear-gradient(135deg, #FF6F00, #FFA000)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                cursor: 'pointer',
                letterSpacing: '1px',
                boxShadow: '0 0 15px #FFA000',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.boxShadow =
                  '0 0 25px #FFB300, 0 0 40px #FFA000';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 15px #FFA000';
              }}
            >
              {type} Login
            </button>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '40px auto',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '16px',
          padding: '30px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
          animation: 'fadeInUp 2.5s ease forwards',
          opacity: 0,
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            color: '#FFC107',
            marginBottom: '20px',
            textShadow: '0 0 10px #FFC107',
          }}
        >
          About the Project
        </h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
          <strong>PaadalPicks</strong> opens the doors to Tamil music — from nostalgic melodies to trending beats. Rediscover the emotion behind golden hits and explore modern masterpieces in one soulful space.
        </p>
        <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
          With detailed write-ups, moods, and film-based categories, every song becomes an experience. Whether it's the lyrical depth of Ilaiyaraaja or the mass energy of DSP and Anirudh, there's something for everyone.
        </p>
        <p style={{ lineHeight: '1.7' }}>
          Admins can curate content, users can create song vaults, and everyone can fall in love with Tamil music again — visually, emotionally, and melodically.
        </p>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '25px 0',
          fontSize: '1rem',
          color: '#fff',
          background: 'linear-gradient(to right, #02010eff, #02000cff, #24243e)',
          boxShadow: '0px -2px 10px rgba(255, 0, 150, 0.4)',
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          letterSpacing: '1px',
          animation: 'pulse 3s infinite ease-in-out',
          textShadow: '0 0 5px #f0f, 0 0 10px #0ff, 0 0 20px #f0f',
        }}
      >
        © 2025 <span style={{ fontWeight: 'bold', color: '#f093fb' }}>PaadalPicks</span> — Crafted with 🎧 for Tamil music lovers.
        <style>
          {`
            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(30px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes pulse {
              0% {
                text-shadow: 0 0 5px #f0f, 0 0 10px #0ff, 0 0 20px #f0f;
              }
              50% {
                text-shadow: 0 0 15px #0ff, 0 0 25px #f0f, 0 0 35px #0ff;
              }
              100% {
                text-shadow: 0 0 5px #f0f, 0 0 10px #0ff, 0 0 20px #f0f;
              }
            }
          `}
        </style>
      </footer>
    </div>
  );
}
