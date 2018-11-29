import React, { Component } from 'react';
import './Movie.css';

class MovieItem extends Component {

    selectMovie = (item) => () => {
        this.props.selectMovie(item)
    }

    render() {
        let { item } = this.props;
        console.log(item);
        
        return (
            <div className="movieItem">
                <div className="inner-item" onClick={this.selectMovie(item)}>
                    <img src={`https://in.bmscdn.com/events/moviecard/${this.props.item.EventCode}.jpg`} alt="poster" className="poster"/>
                    <br />
                    {item.EventTitle}
                </div>
            </div>
        )
    }
}

export default MovieItem;