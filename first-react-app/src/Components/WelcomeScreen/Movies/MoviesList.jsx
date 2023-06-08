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
    // <li key={movie.id}>{movie.title}</li> 
    //Changed to a component Movie


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
          {movieItems} 
      </ul>
    </div>
  )

}

export default MoviesList
