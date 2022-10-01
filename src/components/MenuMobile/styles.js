import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: absolute;
  width: 60%;
  height: 50%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #29abe2;

  opacity: 0;
  pointer-events: none;
  transform: translateY(-50px);

  transition: .5s;

  > img {
    position: absolute;
    top: 15px;
    left: 25px;
    transform: rotate(45deg);
    transition: .7s;
  }

  > nav {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    transform: scale(.7);
    transition: .7s;
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > img {
      transform: rotate(0deg);
    }
    > nav {
      transform: scale(1);
    }
  `}
`;

export const MenuList = styled.nav`
  margin-top: 50px;
  text-align: left;
  color: #fff;
  > a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
  }

  > a::after {
    content: '';
    position: absolute;
    /* top: 30px; */
    /* bottom: -10px; */
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #ccc;
    transform: scaleX(0);
    transform-origin: bottom left;

    transition: transform 0.3s;
  }

  > a:hover::after{
    transform: scaleX(1);
  }
`

export const Menu = styled.img`
  width: 30px;
`
