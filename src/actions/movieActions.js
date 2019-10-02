import { ADD_MOVIE, EDIT_MOVIE, REMOVE_MOVIE } from "./actionsTypes";

export const addMovie = newMovie => {
  return {
    type: ADD_MOVIE,
    newMovie
  };
};

export const removeMovie = id => {
  return {
    type: REMOVE_MOVIE,
    id
  };
};

export const editMovie = movieToUpdate => {
  return {
    type: EDIT_MOVIE,
    movieToUpdate
  };
};
