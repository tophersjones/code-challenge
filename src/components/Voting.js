import React, { Component } from 'react';
import { putReq } from '../api'

class Voting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalVotes: this.props.person.vote,
      clicked: false
    }
  }

  componentWillMount = async () => {
    const { person } = this.props
    localStorage.getItem(person.name) && 
      await this.setState({clicked: JSON.parse(localStorage.getItem(person.name))
    })
  }

  onClick = () => {
    const { clicked, totalVotes } = this.state
    let newVotes
    clicked ? 
      newVotes = totalVotes - 1 
    : newVotes = totalVotes + 1 
    this.setState({totalVotes: newVotes, clicked: !clicked})
  }

  componentDidUpdate = () => {
    const { data, person } = this.props
    const { totalVotes, clicked } = this.state
    person.vote = totalVotes
    putReq(data)
    localStorage.setItem(person.name, JSON.parse(clicked))
  }

  render() {
    const { person } = this.props
    const { totalVotes, clicked } = this.state
    let thumbs
    clicked ? 
      thumbs = 'https://image.flaticon.com/icons/svg/179/179662.svg' 
    : thumbs = 'https://image.flaticon.com/icons/svg/179/179655.svg'
    return (
      <div>
        <div className="wantTo">
          <p> Want to work with {person.name}?</p>
          <img 
            className="thumb"
            src={thumbs} 
            onClick={this.onClick} 
            alt={''} />
            {clicked && 
              <div className="yes">Yes!</div>}
        </div>
        <p className="votes"> <b>{totalVotes}</b> people have said Yes!</p>
      </div>
    )
  }
}

export default Voting