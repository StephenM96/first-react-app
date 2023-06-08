import Movie from "./Movies";

function MoviesList() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const movieItems = movies.map(movie => (
    // <li key={movie.id}>{movie.title}</li> //Changed to a component Movie
    <Movie 
      key={movie.id} 
      title={movie.title} 
      year={movie.year} 
      synopsis={movie.synopsis} 
    />
  ))
  //See error below

  return (
    <div className="MoviesList componentBox">
      <ul>
        {movies.map(movie => (
          // <li key={movie.id} className={movie.id}>{movie.title}</li>
          {movieItems} 
          //React does not like this line of code for some reason - error says: "react-dom.development.js:14887 Uncaught Error: Objects are not valid as a React child (found: object with keys {movieItems}). If you meant to render a collection of children, use an array instead."
        ))}
      </ul>
    </div>
  )

}

export default MoviesList
