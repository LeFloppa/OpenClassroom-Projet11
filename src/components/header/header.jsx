import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, logout, selectUserName } from '../../features/auth/authSlice';
import './header.css';
import logo from '../../img/argentBankLogo-min.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);


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
      <div className="nav-holder">
      {token ? (
          <div>
          <Link to="/profile" className="main-nav-item">
            <FontAwesomeIcon className="iconCircle" icon="fa-solid fa-circle-user" />
            {userName}
          </Link>
          <Link to="/edit-username" className="main-nav-item">
            <FontAwesomeIcon icon="fa-solid fa-gear" />
          </Link>
        </div>
          ) : (
            <FontAwesomeIcon className="iconCircle" icon="fa-solid fa-circle-user" />
          )}
        {token ? (
          <Link to="/home" className="main-nav-item" onClick={handleLogout}>
            <FontAwesomeIcon className="iconLogout" icon="fa-solid fa-right-from-bracket" />
            Sign Out
          </Link>
        ) : (
          <Link to="/login" className="main-nav-item">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;