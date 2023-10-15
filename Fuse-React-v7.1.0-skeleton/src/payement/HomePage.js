import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import './HomePage.css';
import { Popup, Card, Image, Rating } from 'semantic-ui-react';
import courses from 'images/parcours.jpg';
import { API_URL } from 'config/index';
const HomePage = () => {
	const location = useLocation();

	useEffect(() => {
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

	return (
		<section>
		<form
				action={`${API_URL}/py/create-checkout-session`}
				method='POST'
			>
		
			<div className='product'>
			<Popup
    trigger={
      <Card>
        <img
					src={courses}
					alt='The cover of Stubborn Attachments'
				/>
        <Card.Content>
		<div id="container">
				
				</div>
				<div className='description'>
					<h3 style={{color :'red'}}>Parcours</h3>
					<h4 style={{color :'green'}}>$20.00</h4>
					<h4 style={{color :'blue'}}>learn react , javascript ,html easyly and fast with profetionnel formateur</h4>
				</div>
        </Card.Content>
      </Card>
    }
  >
    <Popup.Header>User Rating</Popup.Header>
    <Popup.Content>
      <Rating icon='star' defaultRating={3} maxRating={4} />
    </Popup.Content>
  </Popup>
			
			</div>
			<br></br>
			< br></br>
			<br></br>
			<br></br>
			
				<button style={{color:"with" ,background:"pink" ,position: "center" }} className='button' type='submit'>
					Checkout
				</button>
			</form>
		</section>
	);
};

export default HomePage;