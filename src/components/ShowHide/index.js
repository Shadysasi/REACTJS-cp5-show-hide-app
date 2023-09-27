// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    secondCard: false,
  }

  onShowFirstCard = () => {
    this.setState(prevState => ({firstCard: !prevState.firstCard}))
  }

  onShowSecondCard = () => {
    this.setState(prevState => ({secondCard: !prevState.secondCard}))
  }

  render() {
    const {firstCard, secondCard} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button
              type="button"
              className="btn-style"
              onClick={this.onShowFirstCard}
            >
              Show/Hide Firstname
            </button>
            {firstCard && <p className="name">Joe</p>}
          </div>
          <div className="card-container">
            <button
              type="button"
              className="btn-style"
              onClick={this.onShowSecondCard}
            >
              Show/Hide Lastname
            </button>
            {secondCard && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
