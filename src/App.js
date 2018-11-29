import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
import MovieContainer from './components/MovieContainer';

class App extends Component {
  state = {
    languages: [],
    movieObj: [],
    activeMovie: null,
    url: null,
    selectedLanguage: 'Filter by language'
  }

  componentDidMount() {
    fetch('https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs')
      .then(response => response.json())
      .then(response => this.setState({
        languages: response[0],
        movieObj: Object.keys(response[1]).map(item => response[1][item]),
        fullList: Object.keys(response[1]).map(item => response[1][item])
      }))
      .catch(err => console.log(err))
  }

  filterMovie = (e) => {
    this.setState({ selectedLanguage: e.target.value, movieObj: this.state.fullList.filter(item => item.EventLanguage === e.target.value) });
  }

  selectMovie = (activeMovie) => {
    this.setState({ activeMovie });
  }

  render() {
    let { languages, selectedLanguage, movieObj, activeMovie } = this.state;
    return (
      <div>
        <div className="header">
          Select language <select id="select" name={selectedLanguage} value={selectedLanguage} onChange={this.filterMovie}>
            {
              languages && languages.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }
          </select>
        </div>
        {activeMovie && <Player movie={activeMovie} />}
        <div>
          <MovieContainer movieObj={movieObj} selectMovie={this.selectMovie} />
        </div>
      </div>
    );
  }
}

export default App;
