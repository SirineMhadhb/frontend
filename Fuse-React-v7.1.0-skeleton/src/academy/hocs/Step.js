import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'

export const Steps = (props) => {
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
                    
                        <center>
                     
                            <div className="card" style={{border:"double" , height:"900px"} }>
                         




                                <h2 className='title' >{item.title}</h2>
                                <table>
                                    <tr><td>

                                        <div dangerouslySetInnerHTML={{ __html: item.content }}>

                                        </div>
                                    </td>
                                        <td>

<br></br>
<br></br>
<br></br>
<br></br>
                                            <div style={{ border: "3px solid rgb(85, 85, 91)" }}>
                                            <h2 style={{color:"red"}}> !!! resume </h2>
                                            <br></br>
                                                <div style={{width:"400px"}} dangerouslySetInnerHTML={{ __html: item.content1 }}>

                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <tr> <td>
                        
                                    <h1> checked completed if the Step is ending : </h1>
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="radio"
                                            name="a"
                                            value="completed"
                                            onChange={(event) => handleChange(event, item)}

                                        />
                                    </td>
                                    <td>
                                        <h2> Completed </h2>

                                    </td>
                                </tr>
                                <div >
                                

                                </div>
                                
                            </div>
                </center>
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

