import React from 'react'
import {Container, Menu, MenuList} from './styles'
import menuHamburger from '../../assets/icons/hamburguer-aberto0.svg'

const MenuMobile = ({menuIsVisible, setMenuIsVisible}) => {
  return (
    <Container isVisible={menuIsVisible}>
      <Menu src={menuHamburger} onClick={() => setMenuIsVisible(false)}/>
      <MenuList>
        <a href="#">lista</a>
        <a href="#">sobre mim</a>
        <a href="#">cadastro</a>
      </MenuList>
    </Container>
  )
}

export default MenuMobile
