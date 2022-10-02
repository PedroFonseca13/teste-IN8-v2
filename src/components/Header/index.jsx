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

          <Link to="/users">lista</Link>
          <Link to="/">Sobre mim</Link>
          <Link to="/registration">Cadastro</Link>
        </nav>

        <div>
          <Logo src={LogoIN8} />
        </div>
      </section>
    </Navigation>
  )
}

export default Header
