import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }


  componentDidMount = () => {
    getUrls()
      .then(data => {
        this.setState({ urls: data.urls })
      })
   .catch(error => this.setState({ error: error.message }))
}


  postNewUrl = newUrl => {
    postUrl(newUrl)
      .then(data => {
        this.setState({ urls: [...this.state.urls, data]})
      })
      .catch(error => this.setState({ error: error.message }))
  }


  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postNewUrl={this.postNewUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
