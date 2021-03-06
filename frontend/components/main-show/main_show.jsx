import React from 'react';
import { Route } from 'react-router-dom';

import CoverPhoto from './cover_photo';
import ProfileNav from './profile_nav';
import MainAboutContainer from './about/main_about_container';
import FriendsContainer from './friends/friends_container';
import TimelineContent from './timeline/timeline_content';

class MainShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    window.scrollTo(0,0);
    this.props.requestUser(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.userId) {
      window.scrollTo(0,0);
      this.props.requestUser(newProps.match.params.userId).then(
        () => {
          this.setState({
            loading: !this.state.loading,
          });
        }
      );
    }
  }

  render() {
    if(!this.props.user) {
      return (
        <div></div>
      );
    }

    return (
      <div id="main-show">
        <CoverPhoto user={ this.props.user }
          currentUser={ this.props.currentUser }
          updatePhoto={ this.props.updatePhoto }
          sendRequest={ this.props.sendRequest }/>
        <ProfileNav user={ this.props.user }/>

        <Route exact path="/users/:userId" component={ TimelineContent }/>
        <Route path="/users/:userId/about" component={ MainAboutContainer }/>
        <Route path="/users/:userId/about" component={ FriendsContainer } />
        <Route path="/users/:userId/friends" component={ FriendsContainer } />
      </div>
    );
  }
}

export default MainShow;
