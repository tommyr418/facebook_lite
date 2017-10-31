import React from 'react';

const AboutPlacesYouveLived = ({ profile, userId }) => {
  if(profile["placesYouveLived"]) {
    return (
      <div className="about-details">
        <label>Current City and Hometown</label>
        {
          profile["placesYouveLived"]["currentCityAndHometown"] ?
          <ul>
            { profile["placesYouveLived"]["currentCityAndHometown"].map(
              (item, index) => <li key={ index }>{ item["value"] }</li>) }
          </ul>
          :
          null
        }

        <label>Other Places Lived</label>
        {
          profile["placesYouveLived"]["otherPlacesLived"] ?
          <ul>
            { profile["placesYouveLived"]["otherPlacesLived"].map(
              (item, index) => <li key={ index }>{ item["value"] }</li>) }
          </ul>
          :
          null
        }
      </div>
    );
  } else{
    return (
      <div className="about-details">
        <label>Current City and Hometown</label>

        <label>Other Places Lived</label>
      </div>
    );
  }
};

export default AboutPlacesYouveLived;
