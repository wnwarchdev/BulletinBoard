import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { toggle_login } from '../../../redux/loginRedux';

import styles from './Header.module.scss';

const loginButton = (event) => {
  toggle_login('login');
  console.log('login pressed');
  console.log(toggle_login('login'));
};

const Component = ({className, children, logged}) => (

  <div className={clsx(className, styles.root)}>
    {console.log('logged: ', logged)}
    
    <Button className={clsx(styles.logo)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'> <FontAwesomeIcon icon={faThumbtack} />_CORKBOARD.IO</Button>
    <div>
      {logged ? 
        <div>
          <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>MY POSTS</Button>
          <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>LOG OUT</Button>
        </div>
        :
        <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' onClick={() => { loginButton(); }}>LOG IN</Button>
      }
      
      
    </div>

    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
};

const mapStateToProps = state => ({
  logged: state.logged,
});

const mapDispatchToProps = dispatch => ({
  toggle_login: log => dispatch(toggle_login(log)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
