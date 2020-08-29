import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { PostIt } from '../../common/PostIt/PostIt';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>

    <Container className={clsx(className, styles.hero)} maxWidth="sm">
      <Button className={clsx(className, styles.login)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'><h3>LOG IN</h3></Button>
      <h1>Welcome to Corkboard!</h1>
      <h4>Gather attention of your local community!<br/>Pin anything from sales, item exchange, job or tutoring offers...<br/>See what your neighbours are posting:</h4>
    </Container>

    <Container className={clsx(className, styles.corkboard)} maxWidth="md">
      <PostIt />
      <PostIt />
      <PostIt />
      <PostIt />
      <PostIt />
    </Container>

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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
