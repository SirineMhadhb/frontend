import React, { useState, useEffect } from 'react';
import { Link, useRoutes , Route } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

export default class UsersList extends React.Component{

    state = {
        posts:[]
    }
componentDidMount (){

axios.get(`http://localhost:8000/blog/list/`)
                
        .then(res => { ;
            const posts =res.data
            this.setState({posts})
            console.log(posts)
        })

        }
        handleDelete = (posts) => {
            axios.delete(`http://127.0.0.1:8000/blog/delete/${posts.id}/`)
              .then((res) => this.refreshList());
          };

        render(){
    return (
        <div>
            <br></br>
            <br></br>
             <Button style={{backgoundcolor:"blue"}}
                             to={`/studentslist`} 
                            component={Link}
                            className="justify-start px-32"
                            color="primary"
                            variant="outlined"
                          >
                   list of students
                       </Button>
                       
                       <br></br>
                       <br></br>
        
                       <br></br>
        
        
        <center>
        <table className='table' style={{border:"2"}}>
            <tr style={{background:"#467da7"  , color :"white" , width:"20px", fontSize:"10px", height:"120px"}}> 
            <td> </td> <td></td>
            <h1 className='pay' style={{fontSize : "30px" , marginLeft:"200px" ,  marginTop:"30px" }}> student progress list </h1>
            <td></td>
        <br></br>
        
        </tr>  
     <tr className='tr' style={{background:"#467da7"  , color :"white" , width:"20px", fontSize:"20px"}}>
     <td>
       user name 
    </td>
    <td>
       courses name
    </td>
    <td>
       step name
    </td>
    <td>
         completed
    </td>
    <td>
       delete progress
    </td>
     </tr>
     {this.state.posts.map((posts) =>
  

<tr className='tr' style={{ color :"black"}}>

    <td>
        {posts.user}
    </td>
    <td>
    {posts.courses.title}
    </td>
    <td>
    {posts.step.title}
        
    </td>
    <td>
         {posts.completed ? (
             <p>completed</p>
         ) : (
         <p>not completed</p>
         )}
    </td>
    <Button
            className="deletebtn"
            onClick={() => this.handleDelete(posts)}
          >
            Delete
          </Button>
</tr>


)}
 </table>

      
        </center>
        </div>
    );
}

}
 