import React from 'react';

import styles from './SearchBar.module.css';
import searchIcon from '../../assets/search.png';

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';

const searchBar = (props) => {

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            return props.searchClicked();
        }
    }

    return (
        <div>
            <TextField
                className={styles.Search}
                InputProps={{
                    startAdornment: (
                    <InputAdornment onClick={props.searchClicked}>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                placeholder="Search movies"
                style={{backgroundImage: `url("${searchIcon}")`}}
                value={props.searchValue}
                onChange={props.changed}
                onKeyDown={keyDownHandler}
            />
        </div>
    );
};

export default searchBar;