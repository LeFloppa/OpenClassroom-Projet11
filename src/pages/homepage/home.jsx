import React from 'react';
import Banner from '../../components/banner/banner';
import Features from '../../components/feature/feature';
import './home.css';

function HomePage() {
  return (
    <div>
      <main className="main">
        <Banner />
        <Features />
      </main>
    </div>
  );
}

export default HomePage;