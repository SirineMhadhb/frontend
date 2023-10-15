import React, { useState, useEffect } from 'react';
import { Link, useRoutes , Route } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { width } from '@mui/system';



export const Section = (props) => {
    const [blog, setBlog] = useState({});  // c est un object je pense pas un array ??
    const [section , setSection] = useState([])

   


    
    const { id } = useParams();
    console.log('router',id)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/section/${id}`);
                setBlog(res.data);
                setSection(res.data.section)
    
                
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, [id]);
    // function for capitalizer first letter in word juste first one rest not capitalizer 

  
    return (
        
        <div >
             
            
            
         
            { section ?   section?.map(item=>{
                return (

                    <>
                    <center className="column">
                   
                        
                 <ul >
                   
                   <Card className='nn'>
                    
                     <CardContent className="flex flex-col flex-auto items-center justify-center">
                    
                   
                        <h3 style={{color: "black" , backgroundColor: "yellow" , textAlign :"center" ,padding:"15px" , width:"400px"}}>
                            
                            <b>{item.title}</b>
                             </h3>
                        <div ><b>{item.month} {item.day} {item.year}</b></div>
                        <div> <b>{item.time}</b></div>
                         
                        <div style={{width :"350px" , }} dangerouslySetInnerHTML={{ __html: item.content }}>

                        </div>
                        <br></br>
                        {/* <button className='btn2'> 
                            <Link >Continue reading</Link> </button> */}
                            <Button style={{backgoundcolor:"blue"}}
                            to={`/coursess/Steps/${item.slug}`} 
                            component={Link}
                            className="btn23"
                            color="primary"
                            variant="outlined"
                          >
                   Continue reading   
                       </Button>
                            <div >
                        {/* <img  src={item.thumbnail} alt='thumbnail' /> */}
                    </div>
                   
                    <br></br>
                    <br></br>
                    
                    </CardContent>
                    
                    </Card> 
                   
                    </ul>
                
                
                </center> 
                    <br></br>
                   
                    
                    </>
                 
                )
                
            })
            
            :
            <h1 className='cadre1'> <img src="assets/images/avatars/R.png" className='danger' />No section found</h1>
        
        }


    
        </div>
    );
}