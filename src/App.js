import {Component} from 'react'
import {v4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: '', object: []}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onButton = event => {
    event.preventDefault()
    const {searchInput} = this.state

    const word = searchInput
    const noOfLetters = word.length

    const newItem = {
      id: v4(),
      name: word,
      count: noOfLetters,
    }
    this.setState(prevState => ({
      object: [...prevState.object, newItem],
      searchInput: '',
    }))
  }

  render() {
    const {object, searchInput} = this.state

    return (
      <div className="main-container">
        <div className="display-container">
          <h1 className="heading">Count the characters like a Boss ....</h1>
          <div className="output-container">
            {object.length !== 0 ? (
              <ul className="display-list">
                {object.map(each => (
                  <li key={each.id}>
                    <p className="para">
                      {each.name} : {each.count}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user"
              />
            )}
          </div>
        </div>
        <form className="count-container" onSubmit={this.onButton}>
          <h1 className="input-heading">Character Counter</h1>
          <div className="input-bar">
            <input
              type="text"
              className="input"
              value={searchInput}
              onChange={this.onChangeInput}
              placeholder="Enter the Characters here"
            />
            <button className="button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
