import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../../pages/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event =>{
    const {value, name} = event.target;

    this.setState({[name]:value});
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            label='email'
            value={this.state.email}
            //required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            label='password'
            value={this.state.password}
            //required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              {' '}
              Sign In With Google{' '}
            </CustomButton>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;
