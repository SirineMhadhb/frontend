import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "context/AuthProvider";
import ReactLoading from "react-loading";
import axios from 'axios';
import { styled, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const LOGIN_URL = 'http://127.0.0.1:8000/api/authentification/login/';

export const Login = () => {

    const Root = styled('div')(({ theme }) => ({
        backgroundImage: 'url("assets/images/avatars/ph.jpg")',
        height:"600px",
        marginTop:"40px" ,
        position: "center" ,
        boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width:"1100px",
        marginLeft:"10%" , 
        backgroundColor: 'white',
        color: 'red',
        borderRadius : "15px",
        backgroundSize: 'cover',
        backgroundPosition: '0 70%',
        backgroundRepeat: 'no-repeat',
        radius: "50rem"
       
      }));
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef(); 

    const [email , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email , password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email , password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.token;
            const username = response?.data?.username;
            const id = response.data.id
            const user = response.data.role
            switch (user) {
                case 'teacher':
                    window.location.href = "/list";
                    break;
                case 'admin':
                    window.location.href = "/example";
                    break;
                case 'student':
                    window.location.href = "/example";
                    break;
            
                default:
                    break;
            }
    
        
        console.log(accessToken)
            console.log(user)
            localStorage.setItem('user', user)
            localStorage.setItem('token', accessToken)
            localStorage.setItem('token', accessToken)
            localStorage.setItem('username', username)
            localStorage.setItem('id', id)
            localStorage.setItem('email', email)
            localStorage.getItem('token')
            setAuth({ email , password,   accessToken });
            setUsername('');
           
            setPassword('');
            setSuccess(true);

    
        } catch (err) {
            if (!err?.response) {
                setErrMsg(<b><h3 style={{color:"red"}} className='cadre2'>No Server Response !!!!!</h3></b>);
            } else if (err.response?.status === 400) {
                setErrMsg(<b><h3 style={{color:"red"}} className='cadre2'>Missing Email or Password !!!</h3></b>);
            } else if (err.response?.status === 401) {
                setErrMsg(<b><h3 style={{color:"red"}} className='cadre2'>Unauthorized!!!</h3></b>);
            } else {
                setErrMsg(<b><h3 style={{color:"red"}} className='cadre2'>Login Failed!!!</h3></b>);
            }
            errRef.current.focus();
        }
    }
    
    return (
        <>
        <Root>
        
            <Card style={{width:"50%" , heigth:"50%" , marginLeft:"50%" }}>

<CardContent>
            {success ? (
                <center  >
                <section >
                    
                    <h2>You are loading !!!!!!!</h2>
                   <ReactLoading type="balls" color="#0000FF" 
                 height={500} width={100} />
                    <br />
                    
                </section>
                </center>
            ) : (
                <section>
                    
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    
                    <form onSubmit={handleSubmit}>
                    <img className="forget" src='assets/images/avatars/logo.PNG' ></img>
                   
                    <h1 style={{color:"#22d3ee" , marginLeft : "36%"}}> welcome  in LMS </h1>
                        <label htmlFor="email">Email:</label>
                   <div>
                   <img src="assets/images/avatars/email.png" alt="email" className="email1"/>
                        <input className='input'
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={email}
                            required
                        />
                      </div>      
                       
                        <label htmlFor="password">Password:</label>
                        <div>
                        <img src="assets/images/avatars/password.png" alt="email" className="email1"/>
                        <input className='input'
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        </div>
                        <button className='btn2'>Sign In</button>
                        <p>
                       <b> Need an Account?</b><br />
                        <span >
                            {/*put router link here*/}
                            <a  href="register">Sign Up</a>
                        </span>
                    </p>
                    </form>
                   
                </section>
                
            )}
            </CardContent>
           </Card>
            </Root>
        </>
    )
}

