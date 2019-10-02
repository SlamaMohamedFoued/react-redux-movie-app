import React, { Component } from "react";
import "./Rating.css";
import StarRatingComponent from "react-star-rating-component";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: 1 };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue }, () =>
      this.props.numberStars(this.state.rating)
    );
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="rating">
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default Rating;
