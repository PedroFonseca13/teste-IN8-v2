import React, { useState } from 'react'
import { Container, BodyBackground, Title, Text } from './styles'
import Header from '../../components/Header'
import GlobalStyle from '../../styles/global'
import MenuMobile from '../../components/MenuMobile'

const Home = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <>
      <GlobalStyle />
      <BodyBackground>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header
        setMenuIsVisible={setMenuIsVisible}
      />
      <Container>
        <Title>estágio</Title>
        <Text>
          prova de seleção
        </Text>
      </Container>
      </BodyBackground>
    </>
  )
}

export default Home
