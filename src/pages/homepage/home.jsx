import React from 'react';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Features from '../../components/feature/feature';
import Footer from '../../components/footer/footer';
import './home.css';

function HomePage() {
  return (
    <div>
      <Header />
      <main className="main">
        <Banner />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;