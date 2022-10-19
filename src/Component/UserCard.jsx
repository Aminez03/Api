

import React from 'react'
import { Card } from 'react-bootstrap'

export const UserCard = ({user}) => {
  return (
    <div className='movieCard'>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <span className='cardname'>Title: </span><span className="mb">{user.name}</span>
        <hr />
        <span className='cardname'>ID: </span><span className="mb">{user.id}</span>
        <hr />
        <span className='cardname'>Email: </span ><span className="mb">{user.email}</span>
        <hr />
        <span className='cardname'>Phone: </span><span className="mb">{user.phone}</span>
      </Card.Body>
    </Card>
    </div>
  )
}
