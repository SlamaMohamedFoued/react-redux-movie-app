import React, { Component } from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { table } = this.props;
    return (
      <div className="movieList">
        {table.map((el, index) => (
          <MovieCard list={el} />
        ))}
      </div>
    );
  }
}

export default MovieList;
