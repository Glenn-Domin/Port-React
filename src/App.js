import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { Container } from 'reactstrap';

import reducers from './reducers';
import TopNavbar from './components/navbar';
import HomeLayout from './templates/homelayout';
//import PostsLayout from './templates/postslayout';
//import PostsNew from './components/posts_new';
//import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Container>
        <TopNavbar />
        <Provider store={createStoreWithMiddleware(reducers)}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={HomeLayout} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </Container>
    );
  }
}

export default App;
