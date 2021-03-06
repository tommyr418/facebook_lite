import React from 'react';

class AboutFamilyAndRelationships extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.removeProfile(e.currentTarget.getAttribute("data"));
  }

  render() {
    if(this.props.profile["familyAndRelationships"]) {
      return (
        <div className="about-details">
          <label>Relationship</label>
          {
            this.props.profile["familyAndRelationships"]["relationship"] ?
            <ul>
              { this.props.profile["familyAndRelationships"]["relationship"].map(
                (item) =>
                <li key={ item.id }>
                { item["value"] }
                <div>
                  <button>edit</button>
                  <button
                    onClick={ this.handleDelete }
                    data={ item.id }>delete</button>
                </div>
              </li>) }
            </ul>
            : null
          }

          <label>Family Members</label>
          {
            this.props.profile["familyAndRelationships"]["familyMembers"] ?
            <ul>
              { this.props.profile["familyAndRelationships"]["familyMembers"].map(
                (item) =>
                <li key={ item.id }>
                { item["value"] }
                <div>
                  <button>edit</button>
                  <button
                    onClick={ this.handleDelete }
                    data={ item.id }>delete</button>
                </div>
              </li>) }
              </ul>
              :
              null
            }
        </div>
      );
    } else{
      return (
        <div className="about-details">
          <label>Relationship</label>

          <label>Family Members</label>
        </div>
      );
    }
  }
}

export default AboutFamilyAndRelationships;
