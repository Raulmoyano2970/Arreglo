import { useContext } from "react"
import "./navbar.css"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/authContext"

const Navbar = () => {

  const { user } = useContext(AuthContext)

  return (
    <div className='navbar'>
        <div className='navContainer'>
          <div className="navLogo">
            <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
              <span className='logo'>lamabooking</span>
            </Link>
          </div> 
          <div className="navSection">
            <ul className="navUl">
              <li className="navLi">
              Mendoza
              </li>
              <li className="navLi">
                Argentina
              </li>
              <li className="navLi">
                Mundo
              </li>
              <li className="navLi">
                Blog
              </li>
              <li className="navLi">
                Contacto
              </li>
            </ul>
          </div>
          <div className="navRegister">
            {user ? user.username : (
                <div className='navItems'>
                  <button className='navButton'>Register</button>
                  <button className='navButton'>Login</button>
                </div>
              )}
          </div>
        </div>
    </div>
  )
}

export default Navbar