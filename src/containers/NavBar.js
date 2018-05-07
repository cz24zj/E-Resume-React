import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import { ResumeList } from '../components/ResumeList';

class NavBar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }
  render() {

    const { currentUser } = this.props;
    const isAuthenticated = currentUser.isAuthenticated;
    const NavBar =
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <span className="navbar-brand h1"><i className='fa fa-address-book'>E-Resume</i></span>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
        </ul>
        {isAuthenticated ? (
          <ul className="navbar-nav mt-2 mt-lg-0 justify-content-end">
            {ResumeList.map(type => (
              <li key={`${type}+${currentUser.user.id}`} className='nav-item'>
                <Link key={`link+${type}+${currentUser.user.id}`} className='nav-link text-uppercase' to={`/user/${currentUser.user.id}/${type}`}>{type}
                </Link>
              </li>
            ))}
            <li className='nav-item '>
              <a className='nav-link'><i className='fa fa-user'>{currentUser.user.username}</i></a>
            </li>
            <li className = 'nav-item'>
            <Link className ='nav-link'to = {`/user/${currentUser.user.id}/message`}><i className='fa fa-envelope'>Message</i></Link>
            </li>
            <li className='nav-item '>
              <a className='nav-link' onClick={this.logout}>Log out</a>
            </li>
          </ul>
        ) : (
            <ul className="navbar-nav  mt-2 mt-lg-0 justify-content-end">
              <li className='nav-item'>
                <Link className='nav-link' to="/signup">Sign up</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/signin">Sign in</Link>
              </li>
            </ul>
          )
        }
      </div>

    return (
      <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {NavBar}
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { logout })(NavBar);
