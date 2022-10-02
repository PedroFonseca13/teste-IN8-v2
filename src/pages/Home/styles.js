import styled from 'styled-components'
import backgroundMobile from '../../assets/img/index-image-mobile.jpg'
import backgroundOriginal from '../../assets/img/index-image.jpg'

export const BodyBackground = styled.body`
  background-image: url(${backgroundMobile});
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 1024px){
    background-image: url(${backgroundOriginal});
    margin: 0 auto;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* min-width: 100vw; */
  flex-direction: column;
  padding-top: 40px;

  @media screen and (min-width:1024px){
    align-items: flex-start;
    margin-top: 190px;
    margin-left: 160px;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3.2rem;
  font-weight: 100;
  color: #fff;

  @media screen and (min-width:1024px){
    font-size: 4rem;
  }
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #fff;

  @media screen and (min-width:1024px){
    font-size: 1.7rem;
  }
`
