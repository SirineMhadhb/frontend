import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import 'payement/HomePage'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


 export const SimpleSlider = () => {
    const [blogs, setBlogs] = useState([]); 
    const location = useLocation();
    
	useMemo(() => {
		// Check to see if this is a redirect back from Checkout
		// const query = new URLSearchParams(window.location.search);
		const values = QueryString.parse(location.search);

		if (values.success) {
			console.log(
				'Order placed! You will receive an email confirmation.'
			);
		}

		if (values.canceled) {
			console.log(
				"Order canceled -- continue to shop around and checkout when you're ready."
			);
		}
	}, []);  
   

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/all_Parcours`);
                setBlogs(res.data);
                console.log(res)
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, []);
    // function for capitalizer first letter in word juste first one rest not capitalizer 
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 50,
        slidesToShow: 1,
        slidesToScroll: 2 }

    const getBlogs = () => {
        let list = [];
        let result = [];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    blogs.map(CoursesPost => {
        return list.push(
      <div>
        
        <Card >
                
                <div className="cadre" action={`http://localhost:8000/api/stripe/create-checkout-session`}
				method='POST'>
               <CardContent>
                
                    <div>
                    <table >
    <tr><td>
                    <h2  style={{color: "pink"}}>{(CoursesPost.Categories)}</h2>
                    </td>
                    <td>
                        <h3 style={{color: "black" , marginLeft:"30px"}}>
                            
                            <b >{CoursesPost.title}</b></h3>
                            </td>
                            </tr></table>
<br></br>

                        <div ><b>{CoursesPost.month} {CoursesPost.day} {CoursesPost.year}</b></div>
                        <div> <b>{CoursesPost.time}</b></div>
                        <div dangerouslySetInnerHTML={{ __html: CoursesPost.content1}}></div>
                        <div style={{width :"830px" , }} dangerouslySetInnerHTML={{ __html: CoursesPost.content }}>

                        </div>
                        <Button 
                             to={`/coursess/${CoursesPost.slug}`}
                            component={Link}
                            className="justify-start px-32"
                            color="primary"
                            variant="outlined"
                          >
                   Continue reading   
                       </Button>
                    </div>
                    <div >
                        
                    </div>
                    </CardContent>
                   
                </div>
                
                </Card>
        
      </div>
   );
});
    for (let i = 0; i < list.length; i += 2) {
        result.push(
            <div key={i} className='row mb-3'>
                <div className='col-md-6'>
                    {list[i]}
                </div>
                <div className='col-md-6'>
                    {list[i+1] ? list[i+1] : null}
                </div>
            </div>
            
        )
    }
    return result;
    <br></br>
  }
  return (
      
      <div> <Slider {...settings}>
          
           <div>{getBlogs()}</div>
           </Slider>
      </div>
  );

 }