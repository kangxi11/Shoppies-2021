import React from 'react';

import styles from './Nomination.module.css';

const nomination = (props) => (
    <div className={styles.Nomination}>
        <p className={styles.Title}>{props.title}</p>
        <p className={styles.Year}>{props.year}</p>
        <div
            onClick={props.nominationRemoved}
            className={styles.close}
        />
    </div>
);

export default nomination;