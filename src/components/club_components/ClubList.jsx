import React from 'react'
import ClubListItem from './ClubListItem'

const ClubList = ({ clubs }) => {

  const renderClubs = clubs.map(club => <ClubListItem key={ club.id } club={ club } />)

  return (
    <div>{ renderClubs }</div>
  )
}

export default ClubList