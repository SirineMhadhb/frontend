import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge, & > .logo-text': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      <img className="logo-icon w-24 h-24" src="assets/images/avatars/logo.PNG" style ={{marginTop:"10px",width:"70px" , height:"60px"}} alt="logo" />
      <Typography className="logo-text text-16 leading-none mx-12 font-medium" color="inherit">
      LMS
      </Typography>
    
     
    </Root>
  );
}

export default Logo;