import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const CoursesDetail = (props) => {
    const [blog, setBlog] = useState({});  // c est un object je pense pas un array ??
    const [levels , setLevels] = useState([])

    
    const { id } = useParams();
    console.log('router',id)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/Level/${id}`);
                
                setBlog(res.data);
                setLevels(res.data.level)
                console.log(res.data);
                
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, [id]);

  
    return (
        
        <div >
             
   
            { levels.length ? levels?.map(item=>{
                return (

                    <>
                    <center className="column">
                   
                        
                 <ul >
                     <Card className='nn'>
                     <CardContent className="flex flex-col flex-auto items-center justify-center">
                     <table style={{ backgroundColor: 'yellow' , width:"400px",height:"40px" ,marginTop:"0px" }}>
                     <tr>
                         <td>
                   <li>
                      
                        <Typography  style={{color: "blue" , marginLeft:"90px" , top:"0px" }}
                        >{item.title}</Typography>
                            </li>
                            </td>
                            <td>
                            
                            <li>
                            <div >{(item.Categories)}</div> </li> </td>
                            </tr>
                            </table>
                            <br></br>
                            <br></br>
                            <li>
                        <div style={{width :"300px" , }} dangerouslySetInnerHTML={{ __html: item.content }}>
                        

                        </div>
                        </li>
                            <li>
                       <tr><td><h3 style={{color: "red" }}>creation date  : </h3> </td><br></br><td><h3 style={{color: "green" }}> {item.month}-{item.day}-{item.year}</h3></td></tr>
                        </li>
                        <li>
                        <tr><td><h3 style={{color: "red" }}> formation time :  </h3> </td><td> <div style={{color: "green" }}>{item.time}</div> </td></tr>
                        </li>
                       <br></br>
                        <li>
        
                            <Button style={{backgoundcolor:"blue"}}
                             to={`/coursess/courses/${item.slug}`} 
                            component={Link}
                            className="btn23"
                            color="primary"
                            variant="outlined"
                          >
                   Continue reading   
                       </Button>
                            </li>
                            </CardContent>
                            </Card>          
                </ul>
                
                
                </center> 
                    <br></br>
                   
                    
                    </>
                 
                )
                 
            })
            
            :
            <h1 className='cadre1'> <img src="assets/images/avatars/R.png" className='danger' />No levels found</h1>
        
        }


    
        </div>
    );
}