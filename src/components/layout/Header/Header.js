import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUser, login, logout } from '../../../redux/loginRedux';

import styles from './Header.module.scss';


const Component = ({className, user, login, logout }) => {

  const loginButton = (event) => {
    event.preventDefault();
    user.logged ? logout(user) : login(user);
    console.log('clicked' , user.logged);
  };

  return (
    <div className={clsx(className, styles.root)}>
      
      <Button className={clsx(styles.logo)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'> <FontAwesomeIcon icon={faThumbtack} />_CORKBOARD.IO</Button>
      <div>
        {user.logged ? 
          <div>
            <Button className={clsx(styles.link)} component={NavLink} to={`${process.env.PUBLIC_URL}/MyPosts`} activeClassName='active'>MY POSTS</Button>
            <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' >MAIN PAGE</Button>
            <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' onClick={loginButton} >LOG OUT</Button>
          </div>
          :
          <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' onClick={loginButton} >LOG IN</Button>
        }
        
        
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  login: (payload) => dispatch(login(payload)),
  logout: (payload) => dispatch(logout(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
