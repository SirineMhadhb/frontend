import React, { useState, useEffect } from 'react';
import { Link, useRoutes , Route } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export const Courses1 = (props) => {
    const [blog, setBlog] = useState({});  // c est un object je pense pas un array ??
    const [coursess , setCourses] = useState([])

   


    
    const { id } = useParams();
    console.log('router',id)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/courses/${id}`);
                setBlog(res.data);
                setCourses(res.data.courses)
                console.log(res.data);
                
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, [id]);
    
    return (
        
        <div >
             
            {/* <div className="nav-scroller py-1 mb-2">
           
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/category/web' >web</Link>
                    <Link className="p-2 text-muted" to='/category/mobile'>mobile</Link>
                    <Link className="p-2 text-muted" to='/category/firebase'>firebase</Link>
                    
                    
                </nav>
            </div>
            

        
            <br></br>
            <br></br>
            <br></br> */}
               
      
   
            { coursess.length ?   coursess?.map(item=>{
                return (

                    <>
                    <center className="column">
                   
                        
                 <ul >
                    
                    <Card className='nn'>
                    
                     <CardContent className="flex flex-col flex-auto items-center justify-center">
                    
                       <br></br>
                       <table style={{ backgroundColor: 'yellow' , width:"400px",height:"40px" ,marginTop:"0%" }}>  
                       <tr>
                           <td>
                    <h3 style={{color: "black" , marginLeft:"90px"}}>
                        
                            
                            <b style={{marginRight:"150px"}}>{item.title}</b></h3>
                            </td>
                            {/* <td>
                            <div >{(item.Categories)}</div>
                            </td> */}
                            </tr>
                            </table>
                            <div style={{width :"300px" , }} dangerouslySetInnerHTML={{ __html: item.content }}>

</div>
                            <li>
                       <tr><td><h3 style={{color: "red" }}>creation date  : </h3> </td><br></br><td><h3 style={{color: "green" }}> {item.month}-{item.day}-{item.year}</h3></td></tr>
                        </li>
                        <li>
                        <tr><td><h3 style={{color: "red" }}> formation time :  </h3> </td><td> <div style={{color: "green" }}>{item.time}</div> </td></tr>
                        </li>
                       <br></br>
                      
    
                            <Button style={{backgoundcolor:"blue"}}
                             to={`/coursess/Section/${item.slug}`}
                            component={Link}
                            className="btn23"
                            color="primary"
                            variant="outlined"
                          >
                   Continue reading   
                       </Button>
                   
                            <div >
                        {/* <img className="image" src={item.thumbnail} alt='thumbnail' /> */}
                    </div>
                    </CardContent>
                    
                            </Card> 
                            
                    <br></br>
                    
                    
                    
                    </ul>
                
                
                </center> 
                    <br></br>
                   
                    
                    </>
                   
                    
                   
                 
                )
                
            })
            
            :
            <h1 className='cadre1'> <img src="assets/images/avatars/R.png" className='danger' />No coursess found</h1>
        
        }


    
        </div>
    );
}