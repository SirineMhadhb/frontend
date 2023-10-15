import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 const Avancement  = () => {
    const [post, setpost] = useState([])
    const [students, setStudents] = useState([])
    
    const fetchStudents = async () => {
      let id = localStorage.getItem('id')

      const config =  {

          headers: { Authorization: `token ${localStorage.getItem('token')}` }
      } ;
    }
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/app/users/detail/${id}`);
                setpost(res.data)
                setStudents(res.data.students)
                console.log(res.data);
                console.log(ress.data.students);
    
                
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, []);
    // function for capitalizer first letter in word juste first one rest not capitalizer 

  

    const goToDetail = () => {
        alert("detail page")
    }
   
    return (
        
        <div >
             
            <div className="nav-scroller py-1 mb-2">
           
               
            </div>
            

        
            <br></br>
            <br></br>
            <br></br>
               
      
         
            { students ? students?.map(item=>{
                return (

                    
                    <div className='cadre'>
                    
                  
                       
                            
                        <div style={{color:'black'}}><b>{item.email} {item.username} {item.id}</b></div>
                        <h1> {item.email}</h1>
                        <h1> {item.username} </h1>
                        <h1> {item.id}</h1>
                        
                         
                     
                   
                    <br></br>
                    <br></br>
                    
              </div>
                    
                    
                    
                 
                )
                
            })
            
            :
            <h1 className='cadre1'> <img src="assets/images/avatars/R.png" className='danger' />
            No user found</h1>
        
        }


    
        </div>
    );
}
export default Avancement