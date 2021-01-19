import React from 'react';

import Movie from '../Movie/Movie';
import styles from './Movies.module.css';

const movies = (props) => (
    <div className={styles.Movies}>
        {props.searchResults.map(movie => {
            return <Movie
            key={movie.id}
            title={movie.title}
            year={movie.year}
            poster={movie.poster}
            nominateClicked={(event) => props.nominateClicked(movie)}
            />
        })}
        <br/>
    </div>
);

export default movies;