import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleDemo(e){
    e.preventDefault();
    e.stopPropagation();
    const user = {
      email: "homer@yahoo.com",
      password: "homersimpson",
    };
    this.props.login(user);
  }

  handleInputChange(feild){
    return (e) => this.setState({
      [feild]: e.currentTarget.value
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors.length > 0 &&
      newProps.errors[0].responseJSON[0] === "Invalid Email or Password") {
      this.setState({
        email: "",
        password: "",
        errors: "Invalid Email or Password",
      });
    }
  }

  removeErrors() {
    setTimeout(() => {
      this.setState({errors: ""});
    }, 2500);
  }

  render () {
    if (this.state.errors) {
      this.removeErrors();
    }
    return (
      <form onSubmit={ this.handleSubmit } id="login-form">
        { this.state.errors ?
          <span id="login-error">{ this.state.errors }</span>
          :
          ""
        }

        <div>
          <label>Email</label>
          <input type="text"
            value={ this.state.email }
            onChange={ this.handleInputChange('email')}></input>
        </div>

        <div>
          <label>Password</label>
          <input type="password"
            value={ this.state.password }
            onChange={ this.handleInputChange('password')}></input>
          <label>forgot account?</label>
        </div>

        <button>Log In</button>
        <button
          onClick={ this.handleDemo }>Demo</button>
      </form>
    );
  }
}

export default LoginForm;
