import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    
    <Button className={clsx(styles.logo)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'> <FontAwesomeIcon icon={faThumbtack} />_CORKBOARD.IO</Button>
    <div>
      <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>LOG IN</Button>
      <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>MY POSTS</Button>
      <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>LOG OUT</Button>
    </div>

    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
