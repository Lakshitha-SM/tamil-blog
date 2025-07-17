'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function UserLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const existingUser = localStorage.getItem('savedUser');
    if (!existingUser) {
      const defaultUser = {
        username: 'user123',
        password: 'pass123',
      };
      localStorage.setItem('savedUser', JSON.stringify(defaultUser));
    }
  }, []);

  const handleLogin = () => {
    const stored = localStorage.getItem('savedUser');
    if (stored) {
      const savedUser = JSON.parse(stored);
      if (username === savedUser.username && password === savedUser.password) {
        localStorage.setItem('user', username);
        router.push('/user/dashboard');
      } else {
        alert('Invalid username or password');
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("/images/backgroud.jpeg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        fontFamily: "'Bebas Neue', sans-serif",
        padding: '40px',
        textAlign: 'center',
        animation: 'fadeInBG 1.5s ease-in-out',
        transition: 'all 0.5s ease',
        position: 'relative',
      }}
    >
      <style>
        {`
          @keyframes fadeInBG {
            from { opacity: 0; transform: scale(1.05); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 8px rgba(255, 0, 102, 0.5); }
            50% { box-shadow: 0 0 18px rgba(255, 0, 102, 0.9); }
            100% { box-shadow: 0 0 8px rgba(255, 0, 102, 0.5); }
          }
          @keyframes typingFadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <h2
        style={{
          fontSize: '3.5rem',
          marginBottom: '30px',
          animation: 'typingFadeIn 1s ease-out',
          color: '#ffd369',
          textShadow: '2px 2px 6px #ff0066',
        }}
      >
         Welcome to Tamil Vibes 
      </h2>

      <input
        type="text"
        placeholder="🎤 Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '14px 20px',
          margin: '10px 0',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          color: '#fff',
          width: '280px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(3px)',
          outline: 'none',
        }}
        onFocus={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          e.target.style.boxShadow = '0 0 8px #ff5e78';
        }}
        onBlur={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          e.target.style.boxShadow = 'none';
        }}
      />

      <input
        type="password"
        placeholder=" Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: '14px 20px',
          margin: '10px 0 20px',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          color: '#fff',
          width: '280px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(3px)',
          outline: 'none',
        }}
        onFocus={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          e.target.style.boxShadow = '0 0 8px #7a5fff';
        }}
        onBlur={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          e.target.style.boxShadow = 'none';
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: '14px 36px',
          borderRadius: '12px',
          fontSize: '1.2rem',
          background: 'linear-gradient(135deg, #ff0066, #6600ff)',
          color: '#fff',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.4s ease',
          animation: 'pulseGlow 2s infinite ease-in-out',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 0 16px #ff0080';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 0 8px rgba(255, 0, 102, 0.5)';
        }}
      >
         Login
      </button>
    </div>
  );
}
