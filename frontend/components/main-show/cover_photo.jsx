import React from 'react';
import { Link } from 'react-router-dom';

import ProfilePicture from './profile_picture';
import PictureUpload from './picture_upload';

class CoverPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  openModal() {
    if(this.props.currentUser.id === this.props.user.id) {
      this.setState({
        modalOpen: true,
      });
    }
  }

  closeModal(){
    this.setState({
      modalOpen: false,
    });
  }

  sendRequest() {
    this.props.sendRequest({
      requester_id: this.props.currentUser.id,
      recipient_id: this.props.user.id
    });
  }


  render() {
    const addCover = (this.props.currentUser.id === this.props.user.id) ?
      <button id="add-cover-button"
        onClick={ this.openModal }>
        <i className="fa fa-camera" aria-hidden="true"></i>
        Add Cover Photo
      </button>
      :
      "";

    let friendButton;

    if (this.props.currentUser.id === this.props.user.id) {
      friendButton = "";
    } else if (this.props.currentUser.friends.includes(this.props.user.id)) {
      friendButton = (
        <Link to={ `/users/${this.props.currentUser.id}/friends` }>
          <button id="add-friend-button">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Friends
          </button>
        </Link>
      );
    } else if (this.props.currentUser.outgoingRequests
        .includes(this.props.user.id)) {
      friendButton = (
        <Link to={ `/users/${this.props.user.id}/friends` }>
          <button id="add-friend-button">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Request Sent
          </button>
        </Link>
      );
    } else {
      friendButton = (
        <button id="add-friend-button"
          onClick={ this.sendRequest }>
          <i className="fa fa-plus" aria-hidden="true"></i>
          Add Friend
        </button>
      );
    }

    const coverImage = this.props.user.cover_image_url ?
      <div id="cover-photo-img"
        style={ {backgroundImage: `url(${this.props.user.cover_image_url})` } }>
      </div>
      :
      "";

    return (
      <div id="cover-photo">
        { addCover }

        <ProfilePicture user={ this.props.user }
          currentUser={ this.props.currentUser }
          updatePhoto={ this.props.updatePhoto }/>

        { coverImage }

        <span id="user-name">
          { this.props.user.fname } { this.props.user.lname }
        </span>

        { friendButton }

        { this.state.modalOpen ?
          <div className="modal">
            <div className="modal-content">
              <button onClick={ this.closeModal }
                className="close">
                close
              </button>
              <PictureUpload
                updatePhoto={ this.props.updatePhoto }
                currentUser= { this.props.currentUser }
                closeModal={ this.closeModal }
                photoType="user[cover_photo]"/>
            </div>
          </div>
          : ""}
      </div>
    );
  }
}

export default CoverPhoto;
