import React, { Component } from 'react';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import promise from 'redux-promise';
import { Container } from 'reactstrap';

//import reducers from './reducers';
import TopNavbar from './components/navbar';
import HomeLayout from './templates/homelayout';
import AboutLayout from './templates/aboutlayout';
import ProficienciesLayout from './templates/proficiencieslayout';
//import PostsLayout from './templates/postslayout';
//import PostsNew from './components/posts_new';
//import PostsShow from './components/posts_show';

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomeLayout} />
            <Route exact path='/about' component={AboutLayout} />
            <Route exact path='/proficiencies' component={ProficienciesLayout} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
