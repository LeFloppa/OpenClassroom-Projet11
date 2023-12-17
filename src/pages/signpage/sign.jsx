import React from 'react';
import SignIn from '../../components/signin/signin';
import './sign.css';

function SignPage() {
  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
        <div>
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <SignIn />
            </div>
        </section>
      </main>
    </div>
  );
}

export default SignPage;