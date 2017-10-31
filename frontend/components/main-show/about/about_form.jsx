import React from 'react';

class AboutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      sub_category: "",
      value: "",
    };
    this.handleCategory = this.handleCategory.bind(this);
    this.handleSubCategory = this.handleSubCategory.bind(this);
  }

  handleCategory(e) {
    this.setState({
      category: e.currentTarget.value,
      sub_category: "",
      value: "",
    });
  }

  handleSubCategory(e) {
    this.setState({
      sub_category: e.currentTarget.value,
      value: "",
    });
  }

  render(){
    return (
      <form id="about-form">
        <select onChange={ this.handleCategory }
          defaultValue = "">
          <option value="" disabled>Please Choose a Category</option>
          <option
            value="workAndEducation">
            Work and Education
          </option>
          <option
            value="placesYouveLived">
            Places You've Lived
          </option>
          <option
            value="contactAndBasicInfo">
            Contacts And Basic Info
          </option>
          <option
            value="detailsAboutYou">
            Details About You
          </option>
        </select>

        {
          (this.state.category === "workAndEducation") ?
          <select onChange={ this.handleSubCategory }
            defaultValue="">
            <option value="" disabled>
              Please Choose a Sub-category
            </option>
            <option
              value="work">
              Work
            </option>
            <option
              value="professionalSkills">
              Professional Skills
            </option>
            <option
              value="college">
              College
            </option>
            <option
              value="highSchool">
              High School
            </option>
          </select>
          :
          null
        }
        {
          (this.state.category === "placesYouveLived") ?
          <select onChange={ this.handleSubCategory }
            defaultValue="">
            <option value="" disabled>
              Please Choose a Sub-category
            </option>
            <option
              value="currentCityAndHometown">
              Current City And Hometown
            </option>
            <option
              value="otherPlacesLived">
              Other Places Lived
            </option>
          </select>
          :
          null
        }
        {
          (this.state.category === "contactAndBasicInfo") ?
          <select onChange={ this.handleSubCategory }
            defaultValue="">
            <option value="" disabled>
              Please Choose a Sub-category
            </option>
            <option
              value="contactInformation">
              Work
            </option>
            <option
              value="websitesAndSocialLinks">
              Websites and Social Links
            </option>
            <option
              value="basicInformation">
              Basic Information
            </option>
          </select>
          :
          null
        }
        {
          (this.state.category === "detailsAboutYou") ?
          <select onChange={ this.handleSubCategory }
            defaultValue="">
            <option value="" disabled>
              Please Choose a Sub-category
            </option>
            <option
              value="aboutYou">
              About You
            </option>
            <option
              value="namePronunciation">
              Name Pronunciation
            </option>
            <option
              value="otherNames">
              Other Names
            </option>
            <option
              value="favoriteQuotes">
              Favorite Quotes
            </option>
          </select>
          :
          null
        }

      </form>
    );
  }
}

export default AboutForm;
