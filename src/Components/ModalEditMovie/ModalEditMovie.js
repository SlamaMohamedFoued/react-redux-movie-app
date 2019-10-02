import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { editMovie } from "../../actions/movieActions";

class EditMovieComp extends Component {
  state = {
    show: false
  };

  componentDidMount = () => {
    this.setState({
      ...this.props.movies.filter(movie => movie.id === this.props.id)[0]
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  toEdit = () => {
    this.props.edit({ ...this.state, show: false });
    this.handleClose();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <>
          <Button variant="primary" onClick={this.handleShow}>
            edit
          </Button>

          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="inputs">
                <input
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  placeholder="image url"
                  value={this.state.image}
                  name="image"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  placeholder="image url"
                  value={this.state.rating}
                  name="rating"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  placeholder="image url"
                  value={this.state.year}
                  name="year"
                  onChange={this.handleChange}
                />
                <textarea
                  type="textarea"
                  placeholder="write your article here!"
                  value={this.state.description}
                  name="description"
                  onChange={this.handleChange}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={this.toEdit}>
                Edit!
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    edit: movieToUpdate => dispatch(editMovie(movieToUpdate))
  };
};

const mapStateToProps = state => {
  return {
    movies: state.MovieReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMovieComp);
