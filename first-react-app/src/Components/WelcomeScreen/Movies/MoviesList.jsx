import { useState } from "react";
import Movie from "./Movies";
import AddMovieForm from "./AddMovieForm";

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

function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies)

  const movieItems = currentMovies.map(movie => (
    // <li key={movie.id}>{movie.title}</li> 
    //Changed to a component Movie


    <Movie 
      key={movie.id} 
      title={movie.title} 
      year={movie.year} 
      synopsis={movie.synopsis} 
    />
  ))

  const handleReverseMovies = () => {

    // console.log('button clicked') //troubleshooting
    //First
    let newMovies = [...currentMovies];
    
    //Second
    newMovies.reverse();
    // console.log('button clicked') //troubleshooting 
    
    //Last
    setCurrentMovies(newMovies);
  }

  const handleAddMovie = (newMovieToAdd) => {

    let newMovie ={
      ...newMovieToAdd,
      id: currentMovies.length + 1
    }
    
    let newMovies = [
      ...currentMovies, 
      newMovie,
    ]
  
    setCurrentMovies(newMovies)
  };

  const handleUpdateSynopsis = (updateSynopsis) => {
    let newMovies = currentMovies.map(movie => 
      movie.id === 1 ? {
        ...movie, 
        synopsis: updateSynopsis
      }
      :
      movie
      )

    setCurrentMovies(newMovies)
  };

  const handleFilterMovies = (filterBy) => {
    let newMovies = currentMovies.filter(movie => movie.year < filterBy)

    setCurrentMovies(newMovies)
  }


  const tempMovie = {
    id: 4, 
    title: "The Whale", 
    year: 2022,
    synopsis: "A morbidly obese teacher attempts to reconnect with his daughter.",
  }



  return (
    <div className="MoviesList componentBox">
      <ul>
          {movieItems} 
      </ul>
      <button onClick={handleReverseMovies}>Reverse List</button>

      <AddMovieForm onAddMovie={handleAddMovie} />

      <button onClick={() => handleUpdateSynopsis('Iconic heart-warming prison break movie')}>Update Synopsis</button>

      <button onClick={() => handleFilterMovies(2000)}>Filter Movies</button>

      <button onClick={() => setCurrentMovies(movies)}>Reset Movies</button>
    </div>
  )

}

export default MoviesList
