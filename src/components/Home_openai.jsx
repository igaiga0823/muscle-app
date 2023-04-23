import React from 'react';

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#FCE38A',
      background: 'linear-gradient(to bottom, #F38181, #FCE38A)',
      backgroundSize: 'cover',
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textShadow: '2px 2px #3D405B',
      }}>ようこそ</h1>
      <p style={{
        color: 'white',
        fontSize: '2rem',
        textShadow: '2px 2px #3D405B',
      }}>あなたのライフスタイルに合わせた<br/>筋トレを始めましょう！</p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3rem',
      }}>
        <a href="." style={{
          color: '#3D405B',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          backgroundColor: 'white',
          padding: '1rem 2rem',
          borderRadius: '2rem',
          boxShadow: '2px 2px #3D405B',
          transition: 'all 0.2s ease-in-out',
        }}>
          スタートする
          <span style={{
            marginLeft: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E07A5F',
            borderRadius: '50%',
            width: '2rem',
            height: '2rem',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            boxShadow: '2px 2px #3D405B',
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
