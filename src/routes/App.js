import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AddPost from '../pages/AddPost'
// import Login from '../containers/Login';
// import Register from '../containers/Register';
// import NotFound from '../containers/NotFound';
// import Layout from '../components/Layout';
// import Player from '../containers/Player'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/addpost' component={AddPost} />
      {/* <Route exact path="/login" component = {Login} />
            <Route exact path="/register" component = {Register} />
            <Route exact path="/player/:id" component = {Player} />
            <Route component = {NotFound} /> */}
    </Switch>

  </BrowserRouter>
);

export default App;
