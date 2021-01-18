import React from 'react';

import Movie from '../Movie/Movie';

const movies = (props) => props.searchResults.map(movie => {
    return <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      poster={movie.poster}
    />
});

export default movies;