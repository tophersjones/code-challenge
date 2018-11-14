import React from 'react';
import App from './App';
import List from './components/List'
import dummyData from './mocks/mocks.js'
import Voting from './components/Voting'
import { shallow, configure } from 'enzyme'
import { getReq, putReq } from './api'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter()})

describe('<App />', () => {
  it('Renders 1 List component', () => {
    const component = shallow(<App />)
    expect(component).toHaveLength(1)
  })
})

describe('<List />', () => {
  it('Renders 1 List component', () => {
    const component = shallow(<List />)
    expect(component).toHaveLength(1) 
  })
})

describe('<Voting />', () => {
  const component = shallow(<Voting person={dummyData[0]} data={dummyData}/>)
  it('State updates on click', () => {
    const thumb = component.find('img').at(0)
    const votes = component.instance().props.person.vote
    thumb.simulate('click')
    expect(component.state().clicked).toBe(true) 
    expect(component.state().totalVotes).toBe(votes + 1) 
    thumb.simulate('click')
    expect(component.state().clicked).toBe(false)  
    expect(component.state().totalVotes).toBe(votes)
  }) 
})

describe('api calls', () => {
  it('Gets data', () => {
    const response = getReq()
    expect(response.toBeDefined)
  })
})

