import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';

import Movies from './components/Movies/Movies';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  state = {
    api: 'http://www.omdbapi.com/?apikey=bc05ca17&s=',
    searchValue: '',
    searchResults: []
  }

  sendRequest = (title) => {
    axios.get(this.state.api + title)
      .then(response => {
        if (response.data.Response === 'True') {
          const results = response.data.Search.map(movie => {
            console.log(movie);
            return {
                title: movie.Title,
                year: movie.Year,
                id: movie.imdbID,
                poster: movie.Poster
            }
          });
          this.setState({searchResults: results});
        } else {
          this.setState({searchResults: null});
        }
      });
  }

  searchButtonHandler = () => {
    this.sendRequest(this.state.searchValue);
  }

  render() {
    return (
      <div className={styles.App}>
        <SearchBar
          searchValue={this.state.searchValue}
          changed={(event) => this.setState({searchValue: event.target.value})}
          searchClicked={this.searchButtonHandler}
        />
        <Movies searchResults={this.state.searchResults}/>
      </div>
    );  
  }
}

export default App;
