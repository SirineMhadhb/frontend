import React, {Component} from 'react';
import axios from 'axios';
export  class Home extends Component {

componentDidMount() {
    let idUser = localStorage.getItem('id')

const config =  {
    // headers: {
        
    //     Authorization:  localStorage.getItem('token' )
    // }
    headers: { Authorization: `token ${localStorage.getItem('token')}` }
} ;   
axios.get(`http://127.0.0.1:8000/app/users/detail/${idUser}`).then (
    res => {
    this.setState ({
    user: res.data ,
    }
    
    );
    
    },
    err => {
    console.log(err)
   
    })}
    
render () {
    return(
    <form onSubmit={this.handleSubmit}>
    <h2>not login</h2>
    </form>
    )
}
}