import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  handelchange = e => {
    this.setState({ keyword: e.target.value }, () =>
      this.props.searchname(this.state.keyword)
    );
  };
  render() {
    return (
      <div className="searchBox">
        <div>
          <input
            type="text"
            className="searchBar"
            onChange={this.handelchange}
          />
        </div>
        <div>
          <button className="searchButton">Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
