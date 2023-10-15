import React, { Component } from "react";
import axios from "axios";
import {  Navigate, useParams } from 'react-router-dom'; 
export class Reset extends Component{


   
    state = {} ;
        handleSubmit = e =>{
            e.preventDefault() ; 

            const config =  {
            
                headers: { Authorization: `token ${localStorage.getItem('token')}` }
            } ;
const data = {
 old_password: this.old_password,
 new_password: this.new_password , }
 axios.put(`http://localhost:8000/api/authentification/api/change-password/`, data , {
                   
    baseURL: process.env.REACT_APP_BACKEND_HOST,
    headers: { Authorization: `Token ${localStorage.getItem('token')}` }
    

    }).then (
 
        
    res => {
        console.log(res)
        this.setstate ({
            reset : true
            
        })
        
        
    }
    
)
.catch(
err => {
    console.log(err); 
}
)

} ;

render() {

    if(this.state.reset){
        return <Navigate to={'/login'}/>
   
    }
    return(
        <form onSubmit={this.handleSubmit}>
    <img src="assets/images/avatars/change.png" alt="email" style={{marginLeft:"30%"}}/>
    <div className="form-group">
        <label>old_password</label>
        <input  className='input' type="password"  placeholder="old_password"
                onChange={e => this.old_password = e.target.value}/>
    </div>

    <div className="form-group">
        <label>new_password</label>
        <input  className='input' type="password" placeholder="new_password"
                onChange={e => this.new_password= e.target.value}/>
    </div>
    <button className='button' >change</button>
   
</form>
    )
}
}