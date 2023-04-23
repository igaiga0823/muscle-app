import React from 'react';

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#4A00E0',
      background: 'linear-gradient(to bottom, #4A00E0, #8E2DE2)',
      backgroundSize: 'cover',
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textShadow: '2px 2px #8200FF',
      }}>ようこそ</h1>
      <p style={{
        color: 'white',
        fontSize: '2rem',
        textShadow: '2px 2px #8200FF',
      }}>あなたのライフスタイルに合わせた<br/>筋トレを始めましょう！</p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3rem',
      }}>
        <a href="." style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          backgroundColor: '#FF0181',
          padding: '1rem 2rem',
          borderRadius: '2rem',
          boxShadow: '2px 2px #8200FF',
          transition: 'all 0.2s ease-in-out',
        }}>
          スタートする
          <span style={{
            marginLeft: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFD500',
            borderRadius: '70%',
            width: '2rem',
            height: '2rem',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            boxShadow: '2px 2px #8200FF',
            transition: 'all 0.2s ease-in-out',
          }}>
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default Home;
