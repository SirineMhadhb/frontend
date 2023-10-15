import react, { createContext, useState } from 'react';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const AuthContext = createContext({});
const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [User, setUser] = useState({});

  const login = (data) => {
    setLoggedIn(true);
    setUser({
      email: 'sirine@gmail.com',
      id: '2',
      username: 'sirine',
    });
  };
  const logout = () => {
    console.log('zaama ?????');
    setLoggedIn(false);
  };
  const authContextValue = {
    login,
    loggedIn,
    User,
    logout,
  };
  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
