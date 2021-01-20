import React, {Component} from 'react';

import noPoster from '../../assets/no-image.png';

import styles from './Movie.module.css';
class Movie extends Component {
    state = {
        container: [styles.Container, styles.Up]
    }

    componentDidMount() {
        setTimeout(this.dropdown, 10);
    }

    dropdown = () => {
        this.setState({container: [styles.Container, styles.Down]});
    }

    render() {
        return (
            <div className={styles.Movie}>
                <div className={this.state.container.join(' ')}>
                    <img src={this.props.poster === 'N/A' ? noPoster : this.props.poster} alt='poster'/>
                    <p className={styles.Year}>{this.props.year}</p>
                    <p className={styles.Title}>{this.props.title}</p>
                    <div className={styles.Button}>
                        <button onClick={this.props.nominateClicked} disabled={!this.props.disabled}>Nominate</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;