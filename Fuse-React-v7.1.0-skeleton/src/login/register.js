import React, { Component } from "react";
import { axiosInstance } from "axiosApi";
import { Form, Input, Select } from "antd";
import './login.css';
import Select1 from 'react-select' ;
import { useHref } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const FormItem = Form.Item;
const Option = Select.Option;
export class Register extends Component{
    

   
    constructor(props){
        super(props);
        this.state = {
            name: "",
            role :[],
            password: "",
            email:"",
            errors:{},
            

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleRole (payload){
        console.log('checking payloads', payload)
    }

  
    handleChange(event) {
    this.setState({value: event.target.value}); 
    this.setState({[event.target.name]: event.target.value}); }
   
    async handleSubmit(event) {
        console.log('checking event', event)

        event.preventDefault();
        try {
            const response = await axiosInstance.post('http://127.0.0.1:8000/api/authentification/register/', {
                username: this.state.name,
                email: this.state.email,
                password: this.state.password, 
                role:this.state.role
              
            }
            
            );
            const lol = response?.data?.id
            console.log('reponse',response.request)
            console.log(response?.data.data.email)
            console.log(response?.data.id)
           
            localStorage.setItem('id', response?.data.data.id)
            localStorage.setItem('email', response?.data.data.email)
            localStorage.setItem('token', response?.token)
            localStorage.setItem('username', response.data.data.username)
            

            return response ; 
            
            
            

        } catch (error) {
            console.log(error.stack);
           
        
    }
    window.location.href ="/pay"
}

    render() {
        
        return (
            <Card style={{width:"40%"  , marginLeft:"30%",marginTop:"4%" ,boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
            <CardContent>
            <div>
               
                <form onSubmit={this.handleSubmit}>
                <img src="assets/images/avatars/logo.PNG" alt="email" className="forgets"/>
                <h1 style={{color:"#22d3ee" , marginLeft : "40%"}}> welcome  in LMS </h1>
                <br></br>
                <table>
                <tr>
                    <tr>
                    <td>
                   
                    <h2 style={{color:"black"}}> Username:</h2>
                    <br></br><br></br>  </td>
                    <td>
                        <input className="input"  name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        { this.state.errors.name ? this.state.errors.name : null}
                        </td>
                        </tr>

                    <tr>
                        <td>
                    <h2 style={{color:"black"}}>  Email:</h2><br></br><br></br> </td> <td>
                        <input className="input" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        { this.state.errors.email ? this.state.errors.email : null}
                        <br></br>
                        </td></tr>
                       
                        
                    
                        <tr>
                            <td>
                        <h2 style={{color:"black"}}>Password:</h2> <br></br><br></br></td>
                        <td>  <input className="input" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        { this.state.errors.password ? this.state.errors.password: null} </td>
                        <br></br><br></br>
                        </tr>
                    <br></br>

                    <tr>
                    <td> 
                    <h2 style={{color:"black"}} >select role : </h2><br></br>
                    </td> <td>
                        <select  className="input" onChange={(ddl) =>{this.setState({role:ddl.target.value})}}> 
                           <option disabled selected={true}>------</option> 
                           <option value="teacher">teacher</option> 
                           <option value="student">student</option> 
                           
                        </select>
                       </td>
                        </tr>
                      </tr>
                      </table>
                      
                    <button className="btn2" >
                    <input className="submit" type="submit" value="Submit" to={`/Pay`} />
                    </button>
                   
                    <span >
                            {/*put router link here*/}
                            <a  href="/">Sign in</a>
                        </span>
                </form>
            </div>
            </CardContent>
            </Card>
        )
    }
}

