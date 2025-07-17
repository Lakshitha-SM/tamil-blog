'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './admindashboard.css'; // still valid for fallback styles

export default function AdminDashboard() {
  const router = useRouter();
  const [adminName, setAdminName] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedAdmin = localStorage.getItem('adminUser');
    if (!storedAdmin) {
      router.push('/admin/login');
    } else {
      setAdminName(storedAdmin);
    }

    const storedPosts = JSON.parse(localStorage.getItem('fashionPosts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  const handleChange = (index, field, value) => {
    const updated = [...posts];
    updated[index][field] = value;
    setPosts(updated);
  };

  const handleDelete = (index) => {
    const updated = [...posts];
    updated.splice(index, 1);
    setPosts(updated);
  };

  const handleAddNew = () => {
    const newPost = {
      slug: `new-${Date.now()}`,
      title: '',
      content: '',
      image: '',
      description: '',
    };
    setPosts([...posts, newPost]);
  };

  const handleSave = () => {
    localStorage.setItem('fashionPosts', JSON.stringify(posts));
    alert('Changes saved successfully!');
  };

  const glowShadow = '0 0 12px #ffcc00, 0 0 20px #ffcc00';

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    marginBottom: '12px',
    borderRadius: '10px',
    border: '1px solid #ffcc00',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1rem',
    transition: 'all 0.3s ease-in-out',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '12px 20px',
    margin: '10px 8px',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
  };

  return (
    <div
      style={{
        padding: '30px',
        backgroundImage: 'url("/images/backgroud.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        minHeight: '100vh',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '3.2rem',
            color: '#FFEB3B',
            textShadow: glowShadow,
            animation: 'pulse 3s infinite ease-in-out',
          }}
        >
          Welcome, {adminName}!
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: '#e0e0e0',
            textShadow: '0 0 6px rgba(255, 255, 255, 0.2)',
          }}
        >
          Manage Tamil song posts below 
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '40px',
        }}
      >
        {posts.map((post, index) => (
          <div
            key={post.slug}
            style={{
              background: 'rgba(0, 0, 0, 0.75)',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 0 12px rgba(255,255,255,0.05)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <input
              type="text"
              value={post.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              placeholder="Title"
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = glowShadow)}
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
            />
            <input
              type="text"
              value={post.content}
              onChange={(e) => handleChange(index, 'content', e.target.value)}
              placeholder="Short Info"
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = glowShadow)}
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
            />
            <input
              type="text"
              value={post.image}
              onChange={(e) => handleChange(index, 'image', e.target.value)}
              placeholder="Image URL"
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = glowShadow)}
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
            />
            <textarea
              value={post.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              placeholder="Description"
              style={{
                ...inputStyle,
                height: '90px',
                resize: 'none',
              }}
              onFocus={(e) => (e.target.style.boxShadow = glowShadow)}
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
            />
            <button
              onClick={() => handleDelete(index)}
              style={{
                ...buttonStyle,
                background: '#e53935',
                boxShadow: '0 0 10px #ff5252',
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          style={{
            ...buttonStyle,
            background: 'linear-gradient(135deg, #00e676, #76ff03)',
            boxShadow: '0 0 12px #76ff03',
          }}
          onClick={handleAddNew}
        >
           Add New Post
        </button>
        <button
          style={{
            ...buttonStyle,
            background: 'linear-gradient(135deg, #ffea00, #ffd600)',
            color: '#000',
            boxShadow: '0 0 12px #ffea00',
          }}
          onClick={handleSave}
        >
           Save Changes
        </button>
        <button
          style={{
            ...buttonStyle,
            background: 'linear-gradient(135deg, #ff4081, #f50057)',
            boxShadow: '0 0 12px #f50057',
          }}
          onClick={handleLogout}
        >
           Logout
        </button>
      </div>

      {/* Embedded CSS keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% {
              text-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700;
            }
            50% {
              text-shadow: 0 0 20px #fff176, 0 0 30px #FFD700;
            }
            100% {
              text-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700;
            }
          }
        `}
      </style>
    </div>
  );
}
