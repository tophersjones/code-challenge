import React from 'react'
import Voting from './Voting'

const Container = (props) => {
  const { person, data } = props
  return (
    <div  className='container'>
      <div>
        <img src={person.image_url} alt={`${person.name}`} className='profileImg'/>
      </div>
      <div className='info'>
        <p className='name'>
          {person.name}
        </p>
        <p className='title'>
          {person.title}
        </p>
        <p className='bio'>
          {person.bio}
        </p>
      <Voting person={person} data={data} />
      </div>
    </div>
  )
}

export default Container