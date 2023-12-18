import React from 'react';
import SignIn from '../../components/signin/signin';
import './sign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SignPage() {
  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
        <div>
        <FontAwesomeIcon className="iconCircle" icon="fa-solid fa-circle-user" />
              <h1>Sign In</h1>
              <SignIn />
            </div>
        </section>
      </main>
    </div>
  );
}

export default SignPage;