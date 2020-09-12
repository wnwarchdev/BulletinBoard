import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';

import styles from './PostIt.module.scss';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

const Component = ({ title, created, author, _id }) => {

  return (
    <Link to={`${process.env.PUBLIC_URL}/post/${_id}`} className={styles.root}>
      <Card className={styles.card}>
        <p>{created.slice(0, 10)}</p>
        <h2>{title}</h2>
        <p>By: {author}</p>
      </Card>
    </Link>
  );
};


Component.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  created: PropTypes.string,
  _id: PropTypes.any,
};

const mapStateToProps = state => ({
  post: getAll(state),
});

const Container = connect(mapStateToProps)(Component);



export {
  Container as PostIt,
  //Component as PostIt,
};