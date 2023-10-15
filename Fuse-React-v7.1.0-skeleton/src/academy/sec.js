import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export const StepDtails = (props) => {
    const[show,setShow]=useState(true)
    const [blog, setBlog] = useState({});
    const [steps, setSteps] = useState([])
    const navigate = useNavigate();
    const [user, setUser] = useState(" ")
    const [courses, setCourses] = useState({})
    let [completed, SetCompleted] = useState("true")
    let [name, Setname] = useState('');
    let [value, setvalue] = useState('');

    let useUser = localStorage.getItem('username')
    let titlein = localStorage.getItem('title')
    console.log(useUser)
    const { id } = useParams();
    console.log('router', id)

    const handleChange = async (e, item) => {
        console.log('checking item', item)
        e.preventDefault();
        if (e.target.type === "radio") {
            value = e.target.checked;

            SetCompleted = e.target.value;
            console.log(SetCompleted, "=", value)



        }
        try {
            const response = await axios.post('http://localhost:8000/blog/create/',
                { completed, user: useUser, steps:titlein }

            );
            console.log(response?.data);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        const fetchstepss = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/Steps/${id}`);

                setSteps(res.data.steps)
                console.log(res.data);
                localStorage.setItem('title', id)
                
                console.log('checking steps', steps);
                
            }
            catch (err) {

            }
        }

        fetchstepss();
    }, [id]);
    // function for capitalizer first letter in word juste first one rest not capitalizer 


    return (
        
        <div >


            {steps.length ? steps?.map(item => {
                localStorage.setItem('title', item.section.title) 
                return (

                    <>
                    <Card style={{}}>
                    
                    <CardContent className="flex flex-col flex-auto items-center justify-center">
                   
                    
                       
                     
                
                         




                    <h3 style={{color: "black" , backgroundColor: "yellow" , textAlign :"center" ,padding:"15px" , width:"400px"}}>
                            
                            <b>{item.title}</b>
                             </h3>
                                
                                
                              
                             <Button style={{backgoundcolor:"blue"}}
                            to={`/coursess/Steps/sec/${item.slug}`} 
                            component={Link}
                            className="justify-start px-32"
                            color="primary"
                            variant="outlined"
                          >
                   Continue reading   
                       </Button>         
                                
                           
               
                </CardContent>
                    
                    </Card> 
                    </>
                    
                )

            })

                :
                <h1 className='cadre1'> <img src="assets/images/avatars/R.png" className='danger' />
                    No coursess found</h1>

            }

        
        </div>
        
    );


}

