import React from 'react';
import YouTube from 'react-youtube';
import './Player.css';

class Player extends React.Component {



  render() {
    let { movie } = this.props;
    let id = movie.TrailerURL.split('?');
    id = id[1].split('&')[0].split('=')[1];

    console.log(movie);
    
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // autoplay: 1
      }
    };

    return (
      <div className="youtube-player">
        <YouTube
          videoId={id}
          opts={opts}
          onReady={this._onReady}
        />
        <div className="right-section">
          <div className="movie-title">{movie.EventTitle}</div><br/>
          <span className="movie-language">Language: {movie.EventLanguage}</span><br/>
          Genre: <span className="movie-genre">{movie.EventGenre}</span><br/>
          Date: <span className="movie-date">{movie.ShowDate}</span>
        </div>
      </div>
    );
  }
}

export default Player;