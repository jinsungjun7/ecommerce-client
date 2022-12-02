import React from 'react';
import astronaut from '../images/core/astronaut.jpg';
import MainPage from '../components/MainPage';

function Home() {
  return (
    <div style={
        {backgroundImage: `url(${astronaut})`,
        backgroundRepeat: "no-repeat",
        minHeight:"100vh",
        backgroundSize:"cover",
        backgroundPosition:"0 25%",
    }}>
        <MainPage />
    </div>
  )
}

export default Home