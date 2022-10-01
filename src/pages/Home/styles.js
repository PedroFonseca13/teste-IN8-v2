import styled from 'styled-components'
import backgroundMobile from '../../assets/img/index-image-mobile.jpg'

export const BodyBackground = styled.body`
  background-image: url(${backgroundMobile});
  background-position: center;
  background-size: cover;

`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  flex-direction: column;
  padding-top: 40px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3.2rem;
  font-weight: 100;
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-size: 1.4rem;
`
