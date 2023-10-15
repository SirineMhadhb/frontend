import React, { useState, useEffect } from 'react';
import { Link, useRoutes , Route } from 'react-router-dom';
import axios from 'axios';

export default class TeachersList extends React.Component{

    state = {
        posts:[]
    }
componentDidMount (){

axios.get(`http://localhost:8000/api/authentification/teachers/`)
                
        .then(res => { ;
            const posts =res.data
            this.setState({posts})
            console.log(posts)
        })

        }

        render(){
    return (
        
        <div >
            <br></br>
            <br></br>
            <center>
 <table className='table' style={{border:"2" , width:"700px"}}>
            <tr style={{background:"#467da7"  , color :"white" , width:"20px", fontSize:"10px", height:"120px"}}> 
            <td></td>
            <td>  
            <h1 className='pay' style={{fontSize : "30px" , marginLeft:"20px" ,  marginTop:"30px" }}> teachers list </h1>
            </td>
            <td></td>
        
        
        </tr> 
        <tr className='tr' style={{background:"#467da7"  , color :"white" , width:"20px", fontSize:"20px"}}>
     <td style={{background:"#467da7" , width:"350"}}>
       user name 
    </td>
    
    <td>
       email 
    </td>

    <td>
      role
    </td>
     </tr>
     {this.state.posts.map((posts) =>
  

<tr className='tr' style={{ color :"black"}}>

    <td >
        {posts.username}
    </td>
    
    
    <td>
        {posts.email}
    </td>
    <td>
        {posts.role}
    </td>
    
    
    
</tr>

)}
 </table>
 </center>
        </div>
    );
}

}
 