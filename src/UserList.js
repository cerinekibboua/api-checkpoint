import react  from 'react';
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import User from './User'

const App = ()=>  {
    document.body.style = 'background: indianred;';
    const [Users,setUsers]=useState([]);
     useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then((res) =>  setUsers (res.data));
         },[]);
   
         return (
            <div style={{display:"flex", flexWrap: "wrap" , justifyContent:"space-around", backgroundcolor:"red"}}>
             {
             Users.map((user) =>   {
                  return  <User  Name={user.name} email={user.email}></User>
                })
            }
            </div>
            )
      
           

     }
     
   
   export default App;