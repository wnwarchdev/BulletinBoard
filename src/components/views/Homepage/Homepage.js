import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { PostIt } from '../../common/PostIt/PostIt';
//import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux.js';
//import { toggle_login } from '../../../redux/loginRedux';

import styles from './Homepage.module.scss';

const Component = ({className, children, posts, logged}) => (
  <div className={clsx(className, styles.root)}>

    <Container className={clsx(className, styles.hero)} maxWidth="sm">
      {logged ? 
        <Button className={clsx(className, styles.login)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/post/add`} activeClassName='active'><h3>ADD</h3></Button>
        :
        <Button className={clsx(className, styles.login)} href={`https://www.google.com`} activeClassName='active'><h3>LOG IN</h3></Button>
      }
      <h1>Welcome to Corkboard!</h1>
      <h4>Gather attention of your local community!<br/>Pin anything from sales, item exchange, job or tutoring offers...<br/>See what your neighbours are posting:</h4>
    </Container>

    <Container className={clsx(className, styles.corkboard)} maxWidth="md">

      {posts.map((post) => (
        <div key={post.id} to={`/post/${post.id}`} ><br/>
          <PostIt {...post}/>
        </div>
      ))}
    </Container>

    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  logged: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  posts: getAll(state),
  logged: state.logged,
});


// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const HomepageContainer = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};
