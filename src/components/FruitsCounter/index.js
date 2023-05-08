import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    count: 0,
    counts: 0,
  }

  onMango = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onBanana = () => {
    this.setState(prevState => ({counts: prevState.counts + 1}))
  }

  render() {
    const {count, counts} = this.state

    return (
      <div className="back">
        <div className="backs">
          <h1>
            Bob ate {count} mangoes {counts} bananas
          </h1>
          <div className="container">
            <div className="con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="size"
                alt="mango"
              />
              <button type="button" className="button1" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="size"
                alt="banana"
              />
              <button type="button" className="button1" onClick={this.onBanana}>
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
