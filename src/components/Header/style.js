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

  @media screen and (min-width:1440px){
    > section:first-child {
      display: none;
    }
    > section {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      width: 100%;
      justify-content: space-between;
    }
    > section>nav {
      display: flex;
    }
    > section>nav>ul {
      display: flex;
      gap: 40px;
      color: white;
      flex-direction: row-reverse;
    }
    .list-link {
      list-style: none;
    }
    .nav-link {
      color: #fff;
      text-decoration: none;
      font-size: 1.4rem;
    }
    .nav-link:hover{
      text-decoration: underline;
    }
  }
`

export const Menu = styled.img`
  width: 30px;

  @media screen and (min-width:1440px){
    display: none;
  }

`

export const Logo = styled.img`
  width: 100px;

  @media screen and (min-width:1024px){
    width: 150px;
  }
`
