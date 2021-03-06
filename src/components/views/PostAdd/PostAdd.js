import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { NotFound } from '../NotFound/NotFound';
//import { Homepage } from '../Homepage/Homepage';
//import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router';

import styles from './PostAdd.module.scss';

import { connect } from 'react-redux';
//import { addPost } from '../../../redux/postsRedux.js';
import { postToAPI } from '../../../redux/postsRedux';
import { getUser } from '../../../redux/loginRedux.js';



class Component extends React.Component {

  componentDidMount() {
    const creationDate = new Date();
    this.setState({ created: creationDate.toISOString().slice(0, 10) }); //add datepicker
    //this.setState({ _id: uuidv4().slice(0, 8) }); //add uuidv4
  }

  state = {
    //_id: '',
    title: '',
    text: '',
    created: '',
    author: '',
    price: '',
    phone: '',
    email: '',
    photo: '',
    userIdStamp: this.props.user.userId,
    status: 'published',
    redirect: false,
  }
  

  submit = () => {
    const { postToAPI } = this.props;
    //console.log(this.state);
    postToAPI(this.state);
    if ( (this.state.title.length < 3) || (this.state.title.length > 30)  ) {
      alert('Title needs to be between 3 to 30 characters'); 
    } else if ((this.state.text.length < 3) || (this.state.text.length > 60) ) {
      alert('Text needs to be between 3 to 60 characters'); 
    } else if (!this.state.phone ) {
      alert('Please add your phone'); 
    } else if (this.state.author.length > 30 ) {
      alert('Add name with less than 30 characters'); 
    } else {
      alert('OK! Check homepage'); 
      console.log (this.state.redirect);
      this.state.redirect = true;
      console.log (this.state.redirect);
      this.renderRedirect();
    }
    //console.log(this.state); 
  };

  renderRedirect = () => {
    if (this.state.redirect === true) {
      return <Redirect to={`${process.env.PUBLIC_URL}/`} />;
    }
    
  }


  render() {
    const { user } = this.props;
    console.log ('PostAdd: ',this.props.user.logged);
    if (user.logged === true) {
      return (
        <div className={styles.root}> 
          {this.renderRedirect()}
          <Card className={styles.card}>
            <Button className={styles.goback} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} ><h3>&#8617;</h3></Button>
            <p>Fill your post and your data:</p>
            <TextField required id="title" name="title" label="Title  (required)" fullWidth value={this.state.title}  onChange={(e) => this.setState({ title: e.target.value })}/>
            <br></br><br></br>
            <TextField required id="text" name="text" label="I want to let others know...  (required)" multiline variant="outlined" rows={3} fullWidth value={this.state.text}  onChange={(e) => this.setState({ text: e.target.value })}/>
            <TextField required id="author" name="author" label="Your name (required) " fullWidth value={this.state.author}  onChange={(e) => this.setState({ author: e.target.value })}/>
            <TextField id="email" name="email" label="Email address" fullWidth value={this.state.email}  onChange={(e) => this.setState({ email: e.target.value })}/>
            <TextField id="phone" name="phone" label="Phone number  (required)" fullWidth value={this.state.phone}  onChange={(e) => this.setState({ phone: e.target.value })}/>
            <TextField required id="price" name="price" label="Price" fullWidth value={this.state.price}  onChange={(e) => this.setState({ price: e.target.value })}/>
            <TextField required id="link" name="link" label="Photo link" fullWidth value={this.state.photo}  onChange={(e) => this.setState({ photo: e.target.value })}/>
            <Button className={styles.submit} onClick={() => this.submit() }  exact to={`${process.env.PUBLIC_URL}/`} component={NavLink} ><h3>+</h3></Button>
          </Card>
          
        </div>
      );
    } else {
      return <NotFound />;
    }
  }
}



Component.propTypes = {
  //addPost: PropTypes.any,
  user: PropTypes.any,
  postToAPI: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  postToAPI: (post) => dispatch(postToAPI(post)),
});


const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as PostAdd,
  Component as PostComponent,
};
