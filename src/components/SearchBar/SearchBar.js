import React from 'react';

const searchBar = (props) => (
    <div>
        <input
            type="text"
            value={props.searchValue}
            style={{width: '300px'}}
            onChange={props.changed}
        />
        <button onClick={props.searchClicked}>Search</button>
    </div>
);

export default searchBar;