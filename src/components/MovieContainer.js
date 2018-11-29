import React from 'react';
import MovieItem from './MovieItem';

export default class MovieContainer extends React.PureComponent {
    render() {
        return (
            <div className="movieContainer">
                {
                    this.props.movieObj.map((item, index) => (
                        <MovieItem key={index} {...this.props} item={item} />
                    ))
                }
            </div>
        )
    }
}
