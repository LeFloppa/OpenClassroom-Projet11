import React from "react";
import "./account.css";

function Account({ title, accountNumber, balance, description, buttonText }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {title} ({accountNumber})
        </h3>
        <p className="account-amount">{balance}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">{buttonText}</button>
      </div>
    </section>
  );
}

export default Account;
