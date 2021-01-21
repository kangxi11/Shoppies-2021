import React from 'react';

import Nomination from './Nomination/Nomination';
import styles from './Nominations.module.css';
import Banner from '../Banner/Banner';

const nominations = (props) => (
    <div className={styles.Nominations}>
        <span className={styles.Title}>Nominations</span>
        <div className={styles.Movies}>
            {props.nominationList.map((movie, i) => {
                return <Nomination
                    key={movie.id}
                    title={movie.title}
                    year={movie.year}
                    nominationRemoved={(event) => props.nominationRemoved(movie, i)}
                />
            })}
        </div>
        <div className={styles.Banner}>
            <Banner complete={props.nominationList.length === 5}/>
        </div>
    </div>
);

export default nominations;