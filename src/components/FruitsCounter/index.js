// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="bg">
        <div className="bgCard">
          <h1>
            Bob ate
            <span className="num"> {key1}</span> mangoes
            <span className="num"> {key2}</span> bananas
          </h1>

          <div className="innerCard">
            <div className="fruitCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />

              <button
                type="button"
                className="btnClick"
                onClick={this.onIncrementMango}
              >
                Eat Mango
              </button>
            </div>

            <div className="fruitCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button
                type="button"
                className="btnClick"
                onClick={this.onIncrementBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
