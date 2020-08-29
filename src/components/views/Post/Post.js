import React from 'react';
//import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


import styles from './Post.module.scss';

class Component extends React.Component {

  render() {
    //const { post } = this.props;
    //const { title, text, price, email, phone, author, created } = post;
    return (
      <div className={styles.root}>
        
        <Card className={styles.card}>
          <Button className={styles.goback} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'><h3>&#8617;</h3></Button>
          <p>Created on: //created</p>
          <h2>/title</h2>
          <p>Posted by: //author</p>

          <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <p>Price: //price</p>
          <p>Phone: //phone</p>
          <p>Contact: //email</p>
          
          
        </Card>
      </div>
    );
  }
}

//Component.propTypes = {
//  post: PropTypes.object,
//};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
