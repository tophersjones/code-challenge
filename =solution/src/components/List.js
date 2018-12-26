import React, { Component } from 'react';
import { getReq } from '../api'
import Container from './Container'

class List extends Component {
  constructor() {
    super()
    this.state = {
      arr: []
    }
  }

  componentDidMount = async () => {
    const resData = await getReq()
    this.setState({arr: resData})
  }

  render() {
    return (
      <div>
        {
          this.state.arr.map(person => 
            <div key={person.name}>
              <Container 
                person={person}  
                data={this.state.arr} />
              <hr />
            </div>
          )
        }
      </div>
    )
  }
}

export default List
