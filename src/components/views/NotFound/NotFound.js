import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Container className={clsx(className, styles.hero)} maxWidth="sm">
      <Button className={clsx(className, styles.login)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'><h3>&#8617;</h3></Button>
      <h1>Sacre bleu! Not found...</h1>
      <h4>It happens to best of us!<br/>Relax, take deep breath, clear your mind...<br/>This is just the way things are.</h4>
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
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
