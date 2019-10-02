import React from "react";
import Rating from "../Rating/Rating";
import "./MovieCard.css";
import { connect } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { removeMovie } from "../../actions/movieActions";
import EditMovieComp from "../ModalEditMovie/ModalEditMovie";

import { Link } from "react-router-dom";

const MovieCard = ({ list, deleteMovie }) => {
  return (
    <div className="movie-card">
      <div className="movie-rating">
        <StarRatingComponent name="rate1" starCount={5} value={list.rating} />
      </div>
      <div
        className="movie-image"
        style={{
          backgroundImage: `url('${list.image}')`
        }}
      />
      <div className="movie-description">
        {list.name} - {list.year}
      </div>

      <div>
        <button onClick={() => deleteMovie(list.id)}>remove</button>
        <Link to={`/movieDescription/${list.id}`}>
          <button>description</button>
        </Link>
        <EditMovieComp id={list.id} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    // the first "deleteMovie" is a props we will pass to the MovieCard
    deleteMovie: id => dispatch(removeMovie(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieCard);
