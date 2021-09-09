import axios from 'axios';
import { User } from '../types'
export async function getUsers()  : Promise<User[]>{
  const result = await axios.get('https://randomuser.me/api/?results=500&seed=rando')

  return result.data.results as User[]
}