import styled from 'styled-components'

export const Navigation = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;

  @media screen and (min-width:1024px){
   padding: 40px 25px;
  }

  > section>nav {
    display: none;
  }
`

export const Menu = styled.img`
  width: 30px;

`

export const Logo = styled.img`
  width: 100px;

  @media screen and (min-width:1024px){
    width: 150px;
  }
`
