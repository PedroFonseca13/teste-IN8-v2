import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Users from './pages/Users';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/registration" component={ Registration } />
          <Route path="/users" component={ Users } />
        </Switch>
      </BrowserRouter>
    </>
  )
}

// function Home() {
//   return <h2>Home</h2>
// }

export default App
