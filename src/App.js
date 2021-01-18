import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';

import Movies from './components/Movies/Movies';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  state = {
    api: 'http://www.omdbapi.com/?apikey=bc05ca17&s=',
    searchValue: '',
    searchResults: null
  }

  sendRequest = (title) => {
    axios.get(this.state.api + title)
      .then(response => {
        if (response.data.Response === 'True') {
          const results = response.data.Search.map(movie => {
            return {
                title: movie.Title,
                year: movie.Year,
                id: movie.imdbID,
                poster: movie.Poster
            }
          });
          if (results.length > 5) {
            this.setState({searchResults: [results.slice(0,5), results.slice(5,results.length)]});
          } else {
            this.setState({searchResults: [results]});
          }
        } else {
          this.setState({searchResults: null});
        }
      });
  }

  searchButtonHandler = () => {
    this.sendRequest(this.state.searchValue);
  }

  render() {
    let movieGroups = null;
    if (this.state.searchResults) {
      movieGroups = this.state.searchResults.map((group, i) => {
        return <Movies
          key={i}
          searchResults={group}
        />
      })
    }
    console.log(movieGroups);
    return (
      <div className={styles.App}>
        <SearchBar
          searchValue={this.state.searchValue}
          changed={(event) => this.setState({searchValue: event.target.value})}
          searchClicked={this.searchButtonHandler}
        />
        <div className={styles.MovieGroup}>
          {movieGroups}
        </div>
      </div>
    );  
  }
}

export default App;
