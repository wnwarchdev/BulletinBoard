import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { PostIt } from '../../common/PostIt/PostIt';
import { NotFound } from '../NotFound/NotFound';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux.js';
import { getUser } from '../../../redux/loginRedux';

import styles from './MyPosts.module.scss';



const Component = ({className, posts, user}) => {

  //const { admin, userID } = user;
  if (user.logged) {
    return (
      <div className={clsx(className, styles.root)}>

        <Container className={clsx(className, styles.hero)} maxWidth="sm">
          {user.logged ? 
            <Button className={clsx(className, styles.login)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/post/add`} ><h3>ADD</h3></Button>
            :
            <Button className={clsx(className, styles.login)} href={`https://www.google.com`} ><h3>LOG IN</h3></Button>
          }
          <h1>Here are your posts</h1>
          <h4>Review &apos;n edit!<br/>Click post for more details...</h4>
        </Container>

        <Container className={clsx(className, styles.corkboard)} maxWidth="md">

          {posts.map((post) => {
            if (user.admin) {
              return (
                <div key={post.id} to={`/post/${post.id}`} ><br/>
                  <PostIt {...post}/>
                </div>);
            } else if (post.userIdStamp === user.userId) {
              return (
                <div key={post.id} to={`/post/${post.id}`} ><br/>
                  <PostIt {...post}/>
                </div>);
            } else {
              return null;
            }
          })}
        </Container>
        {console.log('Homepage: ',user.logged)};
      </div>

    );
  } else {
    return <NotFound />;
  }
};



Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: getAll(state),
  user: getUser(state),
});


// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const MyPostsContainer = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  MyPostsContainer as MyPosts,
  Component as MyPostsComponent,
};
