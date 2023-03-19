import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
  
	return (
	  <div className="d-flex flex-nowrap justify-content-start">
		{props.movies.map((movie, index) => (
		  <div key={movie.imdbID} className="image-container d-flex justify-content-center align-items-center m-3" style={{ width: "300px" }}>
			<img src={movie.Poster} alt="movie" />
			<div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
			  <FavouriteComponent />
			</div>
		  </div>
		))}
	  </div>
	);
  };
  
  
  
export default MovieList;