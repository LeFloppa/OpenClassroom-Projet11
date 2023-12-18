import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';
import Welcome from '../../components/welcome/welcome';
import EditUserInfo from '../../components/EditUserInfo/edituserinfo';
import EditUserAccount from '../../components/EditUserAccount/edituseraccount';
import './editpage.css';

function EditPage() {
  const token = useSelector(selectToken);
  return (
    <div>
    {token ? (
      <section className="edit-user-content">
        <EditUserInfo />
        <EditUserAccount
          title="Argent Bank Checking"
          accountNumber="x3448"
          balance="$48,098.43"
          description="Available Balance"
        />
        <EditUserAccount
          title="Argent Bank Checking"
          accountNumber="x3448"
          balance="$48,098.43"
          description="Available Balance"
        />
        <EditUserAccount
          title="Argent Bank Checking"
          accountNumber="x3448"
          balance="$48,098.43"
          description="Available Balance"
        />
      </section>
      ) : (
        <main className="main bg-dark">
        <Welcome />
      </main>
    )}
  </div>
  );
}

export default EditPage;