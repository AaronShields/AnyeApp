import { useState } from 'react'
import Header from './Header'
import './App.css'
import UserForm from './userform'

function App() {
 const [count, setCount] = useState(0)

  return (
    <>
    <UserForm />
    </>
  ); 
}

export default App; 
