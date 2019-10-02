import React, { Component } from "react";
import Rating from "../Rating/Rating";
import { connect } from "react-redux";
import StarRatingComponent from "react-star-rating-component";

class MovieDescriptionComp extends Component {
  state = {};
  componentDidMount = () => {
    this.setState({
      ...this.props.movies.filter(
        movie => String(movie.id) === this.props.match.params.id
      )[0]
    });
  };
  render() {
    return (
      <div className="movie-card">
        <div className="movie-rating">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
          />
        </div>
        <div
          className="movie-image"
          style={{
            backgroundImage: `url('${this.state.image}')`
          }}
        />
        <div className="movie-description">
          {this.state.name} - {this.state.year}
        </div>
        <div>{this.state.description}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.MovieReducer
  };
};

export default connect(mapStateToProps)(MovieDescriptionComp);
