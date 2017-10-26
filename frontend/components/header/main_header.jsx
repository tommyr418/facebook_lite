import React from 'react';
import LoginForm from './login_form';
import UserNav from './user_nav';

class MainHeader extends React.Component {
  render () {
    if(this.props.currentUser){
      return (
        <header id="header-main">
          <h1>FacePlace!!</h1>

          <UserNav currentUser={ this.props.currentUser }
            logout={ this.props.logout }/>
        </header>
      );
    } else {
      return (
        <header id="header-main">
          <h1>facePlace</h1>

          <LoginForm login={ this.props.login } errors={ this.props.errors }/>
        </header>
      );
    }
  }
}

export default MainHeader;