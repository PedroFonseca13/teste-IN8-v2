import React from 'react'
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
          <a href="#">lista</a>
          <a href="#">Sobre mim</a>
          <a href="#">Cadastro</a>
        </nav>

        <div>
          <Logo src={LogoIN8} />
        </div>
      </section>
    </Navigation>
  )
}

export default Header
