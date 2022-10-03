import React from 'react';
import { Container, Menu, MenuList } from './styles';
import menuHamburger from '../../assets/icons/hamburguer-aberto0.svg';
import { Link } from 'react-router-dom';

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  return (
    <Container isVisible={menuIsVisible}>
      <Menu src={menuHamburger} onClick={() => setMenuIsVisible(false)} />
      <MenuList>
        <Link to="/users">lista</Link>
        <Link to="/">Sobre mim</Link>
        <Link to="/registration">Cadastro</Link>
      </MenuList>
    </Container>
  );
};

export default MenuMobile;
