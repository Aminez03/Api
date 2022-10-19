import React from 'react'
import { UserCard } from './UserCard'


const UserList = ({list}) => {
  return (
    <div  className='movielist'>
        <div className='list'>
            List Users
        </div>
        {
            list&&(React.Children.toArray(list.map(el=><UserCard user={el}/>)))
        }
    </div>
  )
}

export default UserList