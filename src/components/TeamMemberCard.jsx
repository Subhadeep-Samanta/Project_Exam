import React from 'react'

export default function TeamMemberCard(props) {
  return (
    <div className='component'>
      <h1>Welcome to our Page!</h1>
      <div className='card-component'>
        <div className='Card'>
            <div className='card1'>
            <h2>Team Member:{props.name1}</h2>
            <h3>Job Title:{props.jobTitle1}</h3>
            </div>
            <div className='card2'>
            <h2>Team Member:{props.name2}</h2>
            <h3>Job Title:{props.jobTitle2}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}
