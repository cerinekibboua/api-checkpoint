import react from 'react' 
import './User.css'
 function User({Name,email}){
     return(
         <div  className="container">
             <h2> {Name} </h2>   
             <div class="line"></div>
             <h4> {email} </h4>      
         </div>
     )
 }
 export default User;
 