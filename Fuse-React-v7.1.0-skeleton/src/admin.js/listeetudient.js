import React, { useState, useEffect } from 'react';
import { Link, useRoutes , Route } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

export default class StudentsList extends React.Component{

    state = {
        posts:[]
    }
componentDidMount (){

axios.get(`http://localhost:8000/api/authentification/students/`)
                
        .then(res => { ;
            const posts =res.data
            this.setState({posts})
            console.log(posts)
        })

        }

        render(){
    return (
        <div>
            <br></br>
            <br></br>
            <Button style={{backgoundcolor:"blue"}}
                             to={`/list`} 
                            component={Link}
                            className="justify-start px-32"
                            color="primary"
                            variant="outlined"
                          >
                  student progress list
                       </Button>
                       <br></br>
            <br></br>
            <br></br>
        <center>
        <table  className='table' style={{border:"2" , width:"1000px"}}>
            <tr style={{background:"#467da7"  , color :"white" , width:"30px", fontSize:"10px", height:"120px"}}> 
             <td></td>
             <td>
            <h1 className='pay' style={{fontSize : "30px" ,  marginTop:"30px" }}> list student  </h1>
            </td>
            <td></td>
        <br></br>
        
        </tr>  
        <tr className='tr' style={{background:"#467da7"  , color :"white" , width:"70px", fontSize:"20px"}}>
     <td style={{width:"500px" , height:"70px"}}>
       user name 
    </td>
 
    <td style={{width:"500px"}}>
       email 
    </td>
    <td style={{width:"500px"}}>
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
 