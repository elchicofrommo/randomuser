import { useState, useEffect } from 'react'
import { User } from '../types'
type UserListProps = {
  users: User[],
  detailCallback: Function,
  networkDelay: number,
  setNetworkDelay: Function,
  isLoading: boolean
}
export default function UserList(props: UserListProps) {
  const { users, detailCallback, networkDelay, setNetworkDelay, isLoading } = props;
  const [filter, setFilter] = useState('none');
  const [filteredUsers, setFilteredUsers] = useState(users)

  useEffect(()=>{
    if(filter === 'none'){
      setFilteredUsers([...users]);
    }else {
      setFilteredUsers(users.filter(user=>user.gender===filter))
    }

  },[filter, users])

  if(isLoading){
    return (
      <div className={'userListContainer'}>
        Loading ...
      </div>
    )
  }
  return (


      <div className={'userListContainer'}>
        <div className={'filterRow'}>
          Filter: 
          <select onChange={(event)=>setFilter(event.target.value)} value={filter}>
            <option>none</option>
            <option>male</option>
            <option>female</option>
          </select>
          Network Delay
          <select onChange={(event)=>setNetworkDelay(event.target.value)} value={networkDelay}>
            <option>0</option>
            <option>1</option>
            <option>3</option>
          </select>

        </div>
        {
          filteredUsers.map(user => {
            return (
              <div className={'userListRow'} key={user.login.uuid} onClick={()=>detailCallback(user)}>
                <img src={user.picture.thumbnail} alt={user.login.username} />
                <div className={'breifDetails'}>
                  <div className='breifRow'>

                    <div>
                      {user.name.title}
                    </div>
                    <div>
                      {user.name.first}
                    </div>
                    <div>
                      {user.name.last}
                    </div>
                  </div>
                  <div className='breifRow'>
                    <div>
                      Gender:
                    </div>
                    <div>
                      {user.gender}
                    </div>
                  </div>

                </div>


              </div>
            )
          })
        }
      </div>
  )
}