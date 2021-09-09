import { useState, useEffect } from 'react'
import { User } from '../types'

export default function UserDetail({user}: {user:User|undefined}){
  if(!user){
    return (
      <>
      </>
    )
  }else{
    return (
      <div className='userDetailContainer'>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    )
  }
}