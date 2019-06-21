import React, { Fragment, } from 'react';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import Profiles from './components/profiles/Profiles';
import MyProfile from './components/profiles/MyProfile';

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/profiles" component={Profiles} />
        {/* <ProtectedRoute exact path="/profiles/new" component={ProfileForm} /> */}
        {/* <ProtectedRoute exact path="/profiles/:id/edit" component={ProfileForm} /> */}
        {/* <ProtectedRoute exact path="/my_friends" component={MyFriends} /> */}
        <ProtectedRoute exact path="/my_profile" component={MyProfile} />
        {/* <Route exact path="/profiles/:id" component={Profile} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/posts/new" component={PostForm} /> */}
        {/* <Route exact path="/posts/:id" component={Post} /> */}
        {/* <Route exact path="/posts/:id/edit" component={PostForm} /> */}
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </Fragment>
)

export default App;