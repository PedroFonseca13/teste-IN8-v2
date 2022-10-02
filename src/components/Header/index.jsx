import React from 'react'
import { Link } from 'react-router-dom'
import MenuHamburger from '../../assets/icons/hamburguer.svg'
import LogoIN8 from '../../assets/icons/logo-in8-dev.svg'
import { Menu, Logo, Navigation } from './style'

const Header = ({setMenuIsVisible}) => {
  return (
    <Navigation>
      <section>
        <Menu src={MenuHamburger} onClick={() => setMenuIsVisible(true)}/>
      </section>
      <section>
        <nav>
          <ul>
            <li>
              <Link to="/users" className="nav-link">lista</Link>
            </li>
            <li>
              <Link to="/" className="nav-link">sobre mim</Link>
            </li>
            <li className="list-link">
              <Link to="/registration" className="nav-link">cadastro</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Logo src={LogoIN8} />
        </div>
      </section>
    </Navigation>
  )
}

export default Header
