import React, {Component} from 'react';

import styles from './Nomination.module.css';

class Nomination extends Component {
    state = {
        container: [styles.Container, styles.Right, styles.Nomination]
    }

    componentDidMount() {
        setTimeout(this.dropdown, 10);
    }

    dropdown = () => {
        this.setState({container: [styles.Container, styles.Left, styles.Nomination]});
    }

    render() {
        return (
            <div className={styles.Wrapper}>
                <div className={this.state.container.join(' ')}>
                    <p className={styles.Title}>{this.props.title}</p>
                    <p className={styles.Year}>{this.props.year}</p>
                    <div
                        onClick={this.props.nominationRemoved}
                        className={styles.close}
                    />
                </div>    
            </div>
        );
    }
}

export default Nomination;