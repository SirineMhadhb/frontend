import React, { useState, useEffect } from 'react';
import { Link, useRoutes , Route } from 'react-router-dom';
import axios from 'axios';

export default class  Avancement  extends React.Component{

    state = {
        posts:[]
    }
componentDidMount (){

axios.get(`http://127.0.0.1:8000/app/users/detail/1`)
                
        .then(res => { ;
            const posts =res.data
            this.setState({posts})
            console.log(posts)
        })

        }

        render(){
    return (
        
        <div >
 <table style={{border:"2"}}>
     <tr >
     <td>
       user name 
    </td>
    <td>
       step nember
    </td>
    <td>
         completed
    </td>
     </tr>
     {this.state.posts.map((posts) =>
  

<tr style={{ color :"black"}}>

    <td>
        {posts.username}
    </td>
    <td>
        {posts.email}
    </td>
    <td>
         {posts.id}
    </td>
</tr>

)}
 </table>
         
        </div>
    );
}

}
 