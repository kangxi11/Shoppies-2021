import React from 'react';

import noPoster from '../../assets/no-image.png';

import styles from './Movie.module.css';

const movie = (props) => (
    <div className={styles.Movie}>
        <img src={props.poster === 'N/A' ? noPoster : props.poster} alt='poster'/>
        <p>{props.title}</p>
        <p>{props.year}</p>
    </div>
);

export default movie;