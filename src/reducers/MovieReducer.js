import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../actions/actionsTypes";

let initialState = [
  {
    id: 0,
    name: "inception",
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/e8/01/39/e8013988-4dad-2282-8d04-3767b35879da/pr_source.lsr/268x0w.png",
    rating: 4,
    year: "2512",
    description:
      "Inception ou Origine au Québec et au Nouveau-Brunswick, est un thriller de science-fiction américano-britannique écrit, réalisé et produit par Christopher Nolan, sorti en 2010."
  },
  {
    id: 1,
    name: "harry potter",
    image: "",
    rating: 5,
    year: "2365",
    description:
      "Harry Potter [ʔaʁi pɔtœʁ]a (en anglais : [ˈhæɹi ˈpɒtə]b) est une série littéraire de fantasy écrite par l'auteure britannique J. K. Rowling, dont la suite romanesque s'est achevée en 2007. Une pièce de théâtre, considérée comme la « huitième histoire » officielle, a été jouée et publiée en 2016. Les livres et le script de la pièce ont été traduits en français par Jean-François Ménard."
  },
  {
    id: 2,
    name: "insolate",
    image: "",
    rating: 3,
    year: "06636",
    description: "some film"
  }
];

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.newMovie];
    case REMOVE_MOVIE:
      return state.filter(el => el.id !== action.id);
    case EDIT_MOVIE:
      return state.map(article =>
        article.id === action.movieToUpdate.id ? action.movieToUpdate : article
      );
    default:
      return state;
  }
};

export default MovieReducer;
