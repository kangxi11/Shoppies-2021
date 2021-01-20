import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import _ from 'lodash';

import Movies from './components/Movies/Movies';
import SearchBar from './components/SearchBar/SearchBar';
import Nominations from './components/Nominations/Nominations';

import ReactLoading from 'react-loading';
import SadFace from './assets/unhappy.png'
class App extends Component {
  state = {
    api: 'http://www.omdbapi.com/?apikey=bc05ca17&s=',
    searchValue: '',
    searchResults: null,
    nominationList: [],
    isLoading: false,
    noData: false
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
          this.setState({noData: false});
        } else {
          this.setState({searchResults: null});
          this.setState({noData: true});
        }
        this.setState({isLoading: false});
      });
  }

  searchButtonHandler = () => {
    this.setState({
      isLoading: true,
      noData: false
    });
    this.sendRequest(this.state.searchValue);
  }

  nominateClickedHandler = (movie) => {
    if ( (_.findIndex(this.state.nominationList, d => d.id === movie.id) === -1) && (this.state.nominationList.length < 5)) {
      this.setState(prevState => ({
        nominationList: [...prevState.nominationList, movie]
      }));
    }
  }

  nominationRemovedHandler = (movie, i) => {
    const nominations = [...this.state.nominationList];
    nominations.splice(i, 1);
    this.setState({nominationList: nominations});
  }

  render() {
    let movieGroups = null;
    if (this.state.searchResults && !this.state.isLoading) {
      movieGroups = this.state.searchResults.map((group, i) => {
        return <Movies
          key={i}
          searchResults={group}
          nominateClicked={this.nominateClickedHandler}
          nominationList={this.state.nominationList}
        />
      })
    }

    let loading = null;
    if (this.state.isLoading) {
      loading = <ReactLoading type={"bars"} color={"grey"} className={styles.Loading}/>
    }

    let noData = null;
    if (this.state.noData) {
      noData = <div className={styles.NoDataContainer}>
        <img src={SadFace} alt='no-data' className={styles.NoData}/>
        <p>No Movies Found</p>
      </div>
    }
    
    return (
      <div className={styles.App}>
        <div className={styles.Search}>
          <SearchBar
            searchValue={this.state.searchValue}
            changed={(event) => this.setState({searchValue: event.target.value})}
            searchClicked={this.searchButtonHandler}
          />
          <div>
            {loading}
          </div>
          <div>
            {noData}
          </div>
          <div className={styles.MovieGroup}>
            {movieGroups}
          </div>
        </div>
        <div className={styles.Nominations}>
          <Nominations
            nominationList={this.state.nominationList}
            nominationRemoved={this.nominationRemovedHandler}
          />
        </div>
      </div>
    );  
  }
}

export default App;
