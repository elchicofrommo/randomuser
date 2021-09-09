import {useEffect, useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './types';
import { getUsers } from './api/user';
import UserList from './components/UserList'
import UserDetail from './components/UserDetail';
function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [userToView, setUserToView] = useState<User|undefined>();
  const [networkDelay, setNetworkDelay] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const orchastrateGetUser = useCallback(async ()=>{
    setIsLoading(true);
    setUsers([]);
    setUserToView(undefined);
    setTimeout(async ()=>{
      const _users = await getUsers();
      setUsers(_users);
      setIsLoading(false)
    }, networkDelay * 1000)
  },[networkDelay])
  useEffect(()=>{
    orchastrateGetUser();
  },[networkDelay, orchastrateGetUser])

  return (
    <div className="App">
      <UserList users={users} detailCallback={setUserToView} isLoading={isLoading} networkDelay={networkDelay} setNetworkDelay={setNetworkDelay}/>
      <UserDetail user={userToView} />
    </div>
  );
}

export default App;
