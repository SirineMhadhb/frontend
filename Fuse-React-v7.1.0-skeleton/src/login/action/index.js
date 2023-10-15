// Internet Explorer 11 requires polyfills and partially supported by this project.
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';

import ReactDOM from 'react-dom';
import prof from 'login/prof'; 
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import {createStore , compose , applyMiddleware} from 'redux'
import reducer from './app/store/reducers/auth'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
const composeEnhansces = compose
const store = createStore(reducer , composeEnhansces(

applyMiddleware(thunk)
));
const app = (
    <Provider store={store}> 
              <App />
     </Provider>
)
ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();