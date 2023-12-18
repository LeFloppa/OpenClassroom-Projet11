import React from 'react';
import { Link } from 'react-router-dom';
import './edituseraccount.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function EditUserAccount({ title, accountNumber, balance, description}) {
  return (
    <section className="user-account">
      <div className="user-account-content-wrapper">
        <h3 className="user-account-title">{title} ({accountNumber})</h3>
        <p className="user-account-amount">{balance}</p>
        <p className="user-account-amount-description">{description}</p>
      </div>
      <Link to="/transactions" className="account-content-wrapper cta">
        <FontAwesomeIcon className='user-account-arrow' icon="fa-solid fa-chevron-right" />
      </Link>
    </section>
  );
}

export default EditUserAccount;