import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth.js';
import AuthForm from "../components/Auth/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import Home from './Home.js';
import UserDetail from '../components/User/UserDetail';
import School from './School.js';
import Profile from './Profile.js';
import Skill from './Skill.js';
import Coursework from './Coursework.js';
import Experience from './Experience.js';
import Message from './Message';


const Main = (props) => {

  const { authUser, errors, removeError, oneuser } = props;

  return (

    <div className="container" style={{ marginTop: 100 }}>
      <Switch>
        <Route
          exact
          path='/signin'
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back"
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path='/signup'
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Sign me up!"
                heading="Join E-Resume today."
                {...props}
                component={AuthForm}
              />
            )
          }}
        />
        <Route exact path='/' component ={Home} />
        <Route exact path='/user/:id' render ={ props=><UserDetail oneuser={oneuser}/>} />
        <Route path ='/user/:id/message' component = {withAuth(Message)}/>
        <Route path='/user/:id/school' component={withAuth(School)} />
        <Route path='/user/:id/Coursework' component={withAuth(Coursework)} />
        <Route path='/user/:id/skill' component={withAuth(Skill)} />
        <Route path='/user/:id/profile' component={withAuth(Profile)} />
        <Route path='/user/:id/experience' component={withAuth(Experience)} />
      </Switch>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    oneuser: state.oneuser,
    errors: state.errors,
    currentUser :state.currentUser.user
  };
}

export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main)
);

