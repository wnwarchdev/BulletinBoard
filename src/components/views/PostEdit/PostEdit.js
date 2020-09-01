import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { NotFound } from '../NotFound/NotFound';

import styles from './PostEdit.module.scss';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import { getPost } from '../../../redux/postsRedux';
import { addPost } from '../../../redux/postsRedux.js';



class Component extends React.Component {

  componentDidMount() {
    this.setState({ created: 'sample-date' }); //add datepicker
    this.setState({ id: 'sample-id' }); //add uuidv4
  }

  state = {
    id: this.props.post.id,
    title: this.props.post.title,
    text: this.props.post.text,
    created: '',
    author: this.props.post.author,
    price: this.props.post.price,
    phone: this.props.post.phone,
    email: this.props.post.email,
    photo: '',
  }

  submit = () => {
    console.log(this.state);
    this.props.addPost(this.state);
  };


  render() {
    const { logged } = this.props;
    //console.log (this.props.logged);
    if (logged === true) {
      return (
        <div className={styles.root}>
          
          <Card className={styles.card}>
            <Button className={styles.goback} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} ><h3>&#8617;</h3></Button>
            <p>Update and save:</p>
            <TextField required id="title" name="title" label="Title" fullWidth value={this.state.title}  onChange={(e) => this.setState({ title: e.target.value })}/>
            <br></br><br></br>
            <TextField required id="text" name="text" label="I want to let others know..." multiline variant="outlined" rows={3} fullWidth value={this.state.text}  onChange={(e) => this.setState({ text: e.target.value })}/>
            <TextField required id="author" name="author" label="Your name" fullWidth value={this.state.author}  onChange={(e) => this.setState({ author: e.target.value })}/>
            <TextField required id="email" name="email" label="Email address" fullWidth value={this.state.email}  onChange={(e) => this.setState({ email: e.target.value })}/>
            <TextField id="phone" name="phone" label="Phone number" fullWidth value={this.state.phone}  onChange={(e) => this.setState({ phone: e.target.value })}/>
            <TextField required id="price" name="price" label="Price" fullWidth value={this.state.price}  onChange={(e) => this.setState({ price: e.target.value })}/>
            <TextField required id="link" name="link" label="Photo link" fullWidth value={this.state.photo}  onChange={(e) => this.setState({ photo: e.target.value })}/>
            <Button className={styles.submit} onClick={() => this.submit()}><h3>↺</h3></Button>
          </Card>

        </div>
        
      );
    } else {
      return <NotFound />;
    }
  }
}



Component.propTypes = {
  addPost: PropTypes.any,
  post: PropTypes.any,
  logged: PropTypes.bool,
};

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id),
  posts: getAll(state),
  logged: state.logged,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (payload) => dispatch(addPost(payload)),
});


const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as PostEdit,
  Component as PostComponent,
};
