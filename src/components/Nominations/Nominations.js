import React from 'react';

import Nomination from './Nomination/Nomination';

const nominations = (props) => (
    <div>
        {props.nominationList.map((movie, i) => {
            return <Nomination
                key={movie.id}
                title={movie.title}
                year={movie.year}
                nominationRemoved={(event) => props.nominationRemoved(movie, i)}
            />
        })}
    </div>
);

export default nominations;