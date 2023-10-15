import { useState } from 'react';
import StripeContainer from './StripeContainer';
import courses from 'images/image.png';
import { styled, ThemeProvider } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import { Card } from '@mui/material';
import { BlinkingCursorTextBuilder , FloatingLettersTextBuilder } from 'react-animated-text-builders'

  
function Pay() {
	const [showItem, setShowItem] = useState(false);
	return (
		
			<center>
				<Card style={{width:"2000px" , height:"100px" }}>
					 <BlinkingCursorTextBuilder
		textStyle={{fontWeight :"bold", font : "Times New Roman", fontSize : "18px"}}
		style={{transform: "rotate(-0deg)", marginTop:"10px", marginBottom :"20px"}}
		cursorComponent={<div style={{color : "green" , marginRight:"500px" ,fontSize: "55px"}}> new course </div>}
		blinkTimeAfterFinish={-1}> </BlinkingCursorTextBuilder></Card>
		
		<Card style={{width:"600px" , marginTop:"50px"}}  >
                     <CardContent className="flex flex-col flex-auto items-center justify-center">
				
			<h1 className='pay'>learning javascripts , css and html in easy way and faster with us</h1>
			<br></br>
			<br></br>
			<br></br>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
				
					<img style={{width:'300px'}} src={courses} alt='parcours' />
					<button className='buton' onClick={() => setShowItem(true)}>$10.00</button>
				</>
			)}
			</CardContent>
		</Card>
		</center>
		
	);
}

export default Pay;