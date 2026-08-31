
import './Nav.css'

import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

const Nav = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
    <nav>
      <ul className="container">
        <li><Link to={'/about'}>About </Link> </li>
       

        {isAuthenticated ? (
          <>
            <li><Link to={'/'}>Home </Link> </li>
            <li><Link to={'/creatuser'}>CreatUser </Link> </li>
            <li><Link to={'/allusers'}>Allusers </Link> </li>
            <li><span style={{ color: '#fff' }}>Hi, {user?.name}</span></li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '1px solid #fff',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to={'/signup'}>Signup </Link> </li>
            <li><Link to={'/login'}>Login </Link> </li>
          </>
        )}

      </ul>
    </nav>


    </>
  )
}

export default Nav
