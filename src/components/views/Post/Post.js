import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


import styles from './Post.module.scss';

import { connect } from 'react-redux';
//import { getAll } from '../../../redux/postsRedux';
import { getPost, fetchPost } from '../../../redux/postsRedux';

class Component extends React.Component {

  componentDidMount() {
    const { match, fetchPost } = this.props;
    fetchPost(match.params._id);
  }


  render() {
    const { post } = this.props;
    console.log ('object: ',this.props);
    const { title, created, author, price, phone, email, text } = post; // text, price, email, phone, author, created 
    console.log ('prop: ', post);
    return (
      <div className={styles.root}>
        
        <Card className={styles.card} key={post._id}>
          <Button className={styles.goback} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'><h3>&#8617;</h3></Button>
          <p>{created}</p>
          <h2>{title}</h2>
          <p>Posted by: {author}</p>

          <p className={styles.text}>{text} </p>
          <p>Price: ${price}</p>
          <p>Phone: {phone}</p>
          <p>Contact: {email}</p>
          <Button className={styles.edit} component={NavLink} to={`/post/${post._id}/edit`} activeClassName='active'><h3>↝</h3></Button>
        </Card>

      </div>
      
    );
  }
}

Component.propTypes = {
  post: PropTypes.object,
  match: PropTypes.object,
  fetchPost: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  post: getPost(state),
  //posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
});


// const Container = connect(mapStateToProps)(Component);

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
