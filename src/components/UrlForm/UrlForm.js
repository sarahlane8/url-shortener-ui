import React, { Component } from 'react';

class UrlForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      urlToShorten: ''
    }
  }

  handleNameChange = event => {
    const {name, value} = event.target
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault()
    const { title, urlToShorten } = this.state
    if (title && urlToShorten) {
      const newUrl = {
        long_url: {this.state.urlToShorten},
        title,
      }
    }
  }
    this.props.postNewUrl(newUrl)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={this.handleNameChange}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={this.handleNameChange}
        />

        <button onClick={this.handleSubmit}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
