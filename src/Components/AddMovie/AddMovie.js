import React, { Component } from "react";
import "./AddMovie.css";
import { connect } from "react-redux";
import { addMovie } from "../../actions/movieActions";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  add = () => {
    let name = prompt("enter the name of the movie");
    let image = prompt("enter the name of the image");
    let rating = prompt("enter the name of the rating");
    let year = prompt("enter the name of the year");
    let newMovie = {
      name: name,
      image: image,
      rating: rating,
      year: year
    };
    this.props.addNewMovie(newMovie);
  };
  render() {
    return (
      <div className="addMovie">
        <img
          src="http://www.dacoromania.org/upload/o/3/32368_plus-sign-png.png"
          alt=""
          height="80px"
          onClick={this.add}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: newMovie => dispatch(addMovie(newMovie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddMovie);
