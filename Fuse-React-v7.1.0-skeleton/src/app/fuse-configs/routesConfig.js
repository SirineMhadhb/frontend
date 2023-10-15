import { Navigate } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import FuseLoading from '@fuse/core/FuseLoading';
import Error404Page from 'app/main/404/Error404Page';
import {Login} from 'login/Login'
import DemoApp from 'calender/DemoApp';
import { Register  } from 'login/register';

import { Coursess } from 'academy/parcours';
import { Category } from 'academy/category';
import { CoursesDetail } from 'academy/level';
import HomePage from 'payement/HomePage';
import { Courses1 } from 'academy/hocs/courses';
import { Steps } from 'academy/hocs/Step';
import { Section } from 'academy/hocs/section';
// import Cal from 'calender/calendarAppConfig';
import { Profile } from 'login/profile';
import { Forgot } from 'password.js/forgot';
import { Reset } from 'password.js/reset';
import {Home}  from 'login/home' ;
 import Users from 'login/Users'
import Pay from 'components/pay'
 import StudentsList from 'admin.js/listeetudient'
import TeachersList from 'admin.js/listeteacher';
// import {UseLogoutMutation} from'login/logout';
import ExamplePage from 'app/main/example/Example';
import  {Layout  } from 'tajirba/appsconfig';
import  Great  from 'login/great';
import {UseAuth} from 'hooks/useAuth'
import Avancement from 'tajirba/avancement';
import UsersList from 'teacher.js/avancement';
import { UseMutation } from 'login/logout'; 
import {SimpleSlider} from 'slide/slide';

const routeConfigs = [ExampleConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
 
  {
    path: '/',
    element: <Navigate to="login" />,
  },
 
  {
    path: 'list',
    element: <UsersList />,
  },

  {
    path: 'sl',
    element: <SimpleSlider />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'logout',
    element: <UseMutation />,
  },
  {
    settings: {
      layout: {
        config: {
          navbar: {
            display: false,
            style: 'style-1',
            folded: true,
            position: 'left',
          },
          toolbar: {
            display: false,
            style: 'fixed',
          },
          footer: {
            display: false,
            style: 'fixed',
          },
          leftSidePanel: {
            display: false,
          },
          rightSidePanel: {
            display: false,
          },
          body: { background:false ,
            
          },
        },
      },
    },
    
    path: 'Pay',
    element: <Pay />,
  },
  {
    path: 'Conf',
    element: <Layout  />,
  },
  {
    path: 'teacherslist',
    element: <TeachersList />,
  },
  
  {
    path: 'studentslist',
    element: <StudentsList />,
  },
  {
    path: 'avan',
    element: <Avancement />,
  },
  {
    path: 'great',
    element: <Great/>,
  },

  {
    path: 'example',
    element: <ExamplePage />,
  },
  
  {
    path: 'home',
    element: <Home />,
  },
 
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  
  {
    path: 'users',
    element: <Users />,
  },
 
 
  {
    path: 'Payement',
    element: <HomePage/>,
  },
  {
    path: '/logout',
    element: <Home/>,
  },
  {
    settings: {
      layout: {
        config: {
          navbar: {
            display: false,
            style: 'style-1',
            folded: true,
            position: 'left',
          },
          toolbar: {
            display: false,
            style: 'fixed',
          },
          footer: {
            display: false,
            style: 'fixed',
          },
          leftSidePanel: {
            display: false,
          },
          rightSidePanel: {
            display: false,
          },
        },
      },
    },
    
    path: 'login',
    
    element: < Login/>,
  },
  
 
  {
    settings: {
      layout: {
        config: {
          navbar: {
            display: false,
            style: 'style-1',
            folded: true,
            position: 'left',
          },
          toolbar: {
            display: false,
            style: 'fixed',
          },
          footer: {
            display: false,
            style: 'fixed',
          },
          leftSidePanel: {
            display: false,
          },
          rightSidePanel: {
            display: false,
          },
        },
      },
    },
    path: '404',
    element: <Error404Page />,
  }, 
  {
    path: 'calender',
    element: <DemoApp />,
  },
  {
    settings: {
      layout: {
        config: {
          navbar: {
            display: false,
            style: 'style-1',
            folded: true,
            position: 'left',
          },
          toolbar: {
            display: false,
            style: 'fixed',
          },
          footer: {
            display: false,
            style: 'fixed',
          },
          leftSidePanel: {
            display: false,
          },
          rightSidePanel: {
            display: false,
          },
        },
      },
    },
    
    path: 'register',
    element: <Register />,
  },
  {
    path: 'category/:id',
    element: <Category />,
  },
  {
    path: '/coursess/Steps/:id',
    element: <Steps />,
  },
  {
    path: '/coursess/Section/:id',
    element: <Section />,
  },
  // {
  //   path: 'log',
  //   element: <NormalLoginForm/>,
  // },
  {
    path: '/coursess/:id',
    element: <CoursesDetail />,
  }, 
  {
    path: '/coursess/courses/:id',
    element: <Courses1/>,
  }, 
  {
    path: '/coursess',
    element: <Coursess />,
  }, 
  {
    path: 'Forget',
    element: <Forgot />,
  },
  {
    path: 'reset/',
    element: <Reset />,
  },

  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
