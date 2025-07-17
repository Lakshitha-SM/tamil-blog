'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const existingAdmin = localStorage.getItem('savedAdmin');
    if (!existingAdmin) {
      const defaultAdmin = {
        username: 'admin',
        password: 'admin123',
      };
      localStorage.setItem('savedAdmin', JSON.stringify(defaultAdmin));
    }
  }, []);

  const handleLogin = () => {
    const stored = localStorage.getItem('savedAdmin');
    if (stored) {
      const savedAdmin = JSON.parse(stored);
      if (username === savedAdmin.username && password === savedAdmin.password) {
        localStorage.setItem('adminUser', username);
        router.push('/admin/dashboard');
      } else {
        alert('Invalid admin credentials');
      }
    } else {
      alert('No admin exists in localStorage.');
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
      <h2
        style={{
          fontSize: '3rem',
          marginBottom: '20px',
          textShadow: '0 0 10px #ff00cc, 0 0 20px #ff00cc',
          animation: 'flicker 1.5s infinite alternate',
        }}
      >
         Admin Login 
      </h2>

      <input
        type="text"
        placeholder="Admin Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '12px 20px',
          borderRadius: '10px',
          border: 'none',
          outline: 'none',
          marginBottom: '15px',
          width: '250px',
          fontSize: '1rem',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />

      <input
        type="password"
        placeholder="Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: '12px 20px',
          borderRadius: '10px',
          border: 'none',
          outline: 'none',
          marginBottom: '20px',
          width: '250px',
          fontSize: '1rem',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: '12px 25px',
          border: 'none',
          borderRadius: '8px',
          background: 'linear-gradient(45deg, #ff00cc, #3333ff)',
          color: '#fff',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 0 20px #ff00cc',
          transition: 'transform 0.3s ease, background 0.4s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.background = 'linear-gradient(45deg, #ff33cc, #0000ff)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.background = 'linear-gradient(45deg, #ff00cc, #3333ff)';
        }}
      >
         Login
      </button>

      {/* Keyframes added in a style tag below */}
      <style jsx>{`
        @keyframes pulseBg {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes flicker {
          0% {
            opacity: 0.8;
            text-shadow: 0 0 5px #ff00cc, 0 0 15px #ff00cc, 0 0 20px #ff0080;
          }
          100% {
            opacity: 1;
            text-shadow: 0 0 10px #ff00cc, 0 0 25px #ff00cc, 0 0 35px #ff0080;
          }
        }
      `}</style>
    </div>
  );
}
