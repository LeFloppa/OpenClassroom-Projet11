import React from "react";
import Welcome from "../../components/welcome/welcome";
import User from "../../components/account/account";
import { useSelector } from "react-redux";
import { selectToken, selectUserName } from "../../features/auth/authSlice";
import "./account.css";

function UserPage() {
  const token = useSelector(selectToken);
  const userName = useSelector(selectUserName);
  return (
    <div>
      {token ? (
        <main className="main bg-dark">
          <Welcome username={userName || "User"} />
          <User
            title="Argent Bank Checking"
            accountNumber="x8349"
            balance="$2,082.79"
            description="Available Balance"
            buttonText="View transactions"
          />
          <User
            title="Argent Bank Savings"
            accountNumber="x6712"
            balance="$10,928.42"
            description="Available Balance"
            buttonText="View transactions"
          />
          <User
            title="Argent Bank Credit Card"
            accountNumber="x8349"
            balance="$184.30"
            description="Current Balance"
            buttonText="View transactions"
          />
        </main>
      ) : (
        <div />
      )}
    </div>
  );
}

export default UserPage;
