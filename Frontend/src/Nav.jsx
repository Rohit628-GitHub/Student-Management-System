
import './Nav.css'

import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
      <ul className="container">
        <li><Link to={'/'}>Home </Link> </li> 
         <li><Link to={'/about'}>About </Link> </li>
         <li><Link to={'/creatuser'}>CreatUser </Link> </li>
           
           <li><Link to={'/allusers'}>Allusers </Link> </li>
           <li><Link to={'/signup'}>Signup </Link> </li>
             <li><Link to={'/login'}>Login </Link> </li>
             
      </ul>
    </nav>

     
    
    </>
  )
}

export default Nav
