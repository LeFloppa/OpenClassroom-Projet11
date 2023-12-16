import React from 'react';
import Header from '../../components/header/header';
import SignIn from '../../components/signin/signin';
import Footer from '../../components/footer/footer';
import './sign.css';

function SignPage() {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignIn />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignPage;