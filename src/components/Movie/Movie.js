import React from 'react';

import noPoster from '../../assets/no-image.png';

import styles from './Movie.module.css';

const movie = (props) => (
    <div className={styles.Movie}>
        <img src={props.poster === 'N/A' ? noPoster : props.poster} alt='poster'/>
        <p className={styles.Title}>{props.title}</p>
        <p className={styles.Year}>{props.year}</p>
        <button onClick={props.nominateClicked}>Nominate</button>
    </div>
);

export default movie;