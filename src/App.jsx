import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

import './App.scss';
import './assets/sass/main.scss';
import classes from './App.module.scss';
import { GlobalStyle } from './App.theme';

import NavBar from './components/NavBar/NavBar';
import PageLoader from './components/PageLoader/PageLoader';

import Home from './views/Home/Home';
import Chat from './views/Chat/Chat';
import Error404 from './views/Error404/Error404';
import List from './views/List/List';

import perticlesConfig from './perticles';

function App(props) {
  const { appState } = props;

  return (
    <Router>
      <Particles className={classes.Particle} width="100vw" height="100vh" params={perticlesConfig} />
      <ThemeProvider theme={{ mode: appState.appTheme }}>
        <GlobalStyle />
        {appState.isPageLoading ? (
          <PageLoader />
        ) : (
          <Container maxWidth="md">
            <div className={['App', classes.App].join(' ')}>
              <NavBar />
              <div className={classes.Content}>
                <Switch>
                  <Route exact path="/" component={() => <Home />} />
                  <Route path="/chat" component={() => <Chat />} />
                  <Route path="/list" component={({ location }) => <List {...location.state} />} />
                  <Route component={() => <Error404 />} />
                </Switch>
              </div>
            </div>
          </Container>
        )}
      </ThemeProvider>
    </Router>
  );
}

const mapStateToProps = state => ({ appState: state.appReducer });

export default connect(mapStateToProps, null)(App);
