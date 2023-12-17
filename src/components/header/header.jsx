import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, logout } from '../../features/auth/authSlice';
import './header.css';

import logo from '../../img/argentBankLogo.png';

function Header() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <Link to="/" className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;