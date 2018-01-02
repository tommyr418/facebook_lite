import React from 'react';

import Welcome from './welcome';
import SignupForm from './signup_form';
import NewsFeedContainer from './news_feed_container';

class Main extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(newProps) {
    if(!newProps.currentUser) {
      window.scrollTo(0,0);
    }
  }

  render() {
    if(this.props.currentUser) {
      return (
        <div id="main">
          <NewsFeedContainer />
        </div>
      );
    } else {
      return (
        <div id="main">
          <Welcome />

          <SignupForm signup={ this.props.signup }
            errors={ this.props.errors }/>
        </div>
      );
    }
  }
}

export default Main;
