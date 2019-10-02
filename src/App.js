import React, { Component } from "react";
import "./App.css";
import Rating from "./Components/Rating/Rating";
import MovieList from "./Components/MovieList/MovieList";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddMovie from "./Components/AddMovie/AddMovie";
import { connect } from "react-redux";
import MovieReducer from "./reducers/MovieReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDescriptionComp from "./Components/MovieDescription/MovieDescriptionComp";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: this.props.movies,
      keyword: "",
      minRating: 1
    };
  }

  filterdname = k => {
    // let x = this.props.movies.filter(
    //   (el, index) => el.name.toLowerCase().indexOf(k.trim()) > -1
    // );
    this.setState({ keyword: k });
  };

  filterByStars = n => {
    let x = this.props.movies.filter((el, index) => el.rating >= n);
    this.setState({ minRating: n });
  };

  render() {
    return (
      <div className="App">
        <div className="topBar">
          <SearchBar searchname={s => this.filterdname(s)} />
          <Rating numberStars={n => this.filterByStars(n)} />
        </div>
        <div className="bodyBlock">
          <MovieList
            table={this.props.movies.filter(
              (el, index) =>
                el.name
                  .toLowerCase()
                  .indexOf(this.state.keyword.toLowerCase().trim()) > -1 &&
                el.rating >= this.state.minRating
            )}
          />
          <AddMovie addMovie={newMovie => this.addNewMovie(newMovie)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.MovieReducer
  };
};

export default connect(mapStateToProps)(App);
