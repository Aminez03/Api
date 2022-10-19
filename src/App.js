
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './Component/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState(null)
  console.log(data)
  const getUsers=async()=>{
    try{
      const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
      setData(data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>
  {
    getUsers()
  },[])
  return (
    <div className="App">
      <UserList list={data}/>
       
      
     
    </div>
  );
}

export default App;
