import React, { Component } from "react";
import axios from "axios";
export class Forgot extends Component{
 handleSubmit = e =>{
    e.preventDefault() ; 
const data = {
    email : this.email ,
    
}
axios.post('http://localhost:8000/app/api/password_reset/', data).then (
    res => {
        console.log(res)
        
    }
)
.catch(
err => {
    console.log(err); 
}
)

} ; 
render(){
   
    return(

    <form  onSubmit={this.handleSubmit}>
        
          <img className="forget" src='assets/images/avatars/forget.png' style={{}}></img>
<h2 >
Forget password
</h2>

<div className="form_group">
    <label><h2>Email</h2></label>
<input type="email" className="input" placeholder="email" onChange={e=> this.email = e.target.value}/>


</div>

<button className="button ">Submit</button>
    </form>
    )}

}