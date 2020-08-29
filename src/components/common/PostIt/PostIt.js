import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';

import styles from './PostIt.module.scss';

const Component = ({ post }) => {
  //const { title, photo, id, price } = post;
  
  return (
    <Link to={`${process.env.PUBLIC_URL}/post/1`} className={styles.root}>
      <Card className={styles.card}>
        <p>/created</p>
        <h2>/title</h2>
        <p>By: //author</p>
      </Card>
    </Link>
  );
};


Component.propTypes = {
  post: PropTypes.object,
};



export {
  Component as PostIt,
};