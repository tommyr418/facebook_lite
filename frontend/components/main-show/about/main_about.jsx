import React from 'react';
import { Route } from 'react-router-dom';

import AboutCategories from './about_categories';
import AboutOverveiwContainer from './about_overveiw_container';

class MainAbout extends React.Component {
  render() {
    return (
      <div id="main-about">
        <div id="main-about-title">

          <a>About</a>
        </div>

        <div id="main-about-content">
          <AboutCategories userId={this.props.userId}/>
          <Route exact path="/users/:userId/about"
            component={ AboutOverveiwContainer }/>
        </div>
      </div>
    );
  }
}

export default MainAbout;
