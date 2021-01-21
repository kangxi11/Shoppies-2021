import React from 'react';

import styles from './Banner.module.css';

const banner = (props) => {

    let classes = [styles.Banner, styles.Hidden];

    if (props.complete) {
        classes = [styles.Banner, styles.Show];
    }

    return (
        <div className={styles.Wrapper}>
            <div className={classes.join(' ')}>
                Nomination List Complete
            </div>
        </div>
    );
}

export default banner;