import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { PostIt } from '../../common/PostIt/PostIt';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux';
import { getUser } from '../../../redux/loginRedux';

import styles from './Homepage.module.scss';


class Component extends React.Component {

  componentDidMount() {
    const { fetchPublishedPosts } = this.props;
    fetchPublishedPosts();
  }

  render() {
    const { className, posts, user } = this.props;

    return (
    
      <div className={clsx(className, styles.root)}>

        <Container className={clsx(className, styles.hero)} maxWidth="sm">
          {user.logged ? 
            <Button className={clsx(className, styles.login)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/post/add`} ><h3>ADD</h3></Button>
            :
            <Button className={clsx(className, styles.login)} href={`https://www.google.com`} ><h3>LOG IN</h3></Button>
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
        {console.log('Homepage: ',user.logged)};
      </div>
    ); 
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  user: PropTypes.object,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: getAll(state),
  user: getUser(state),
});


const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: arg => dispatch(fetchPublished(arg)),
});

const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};
