import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes"
import AuthApi from "./utils/AuthApi"

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = useState(
//     !localStorage.getItem(localStorageKey) ? false :  localStorage.getItem(localStorageKey)
//   );
 
//   useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);
 
//   return [value, setValue];
// };

function App() {
  const [auth, setAuth] = useState(false)
  // const [auth, setAuth] = useStateWithLocalStorage(
  //   'myValueInLocalStorage'
  // ); 
  return (
    <div className="App">
    <AuthApi.Provider value = {{auth, setAuth}}>
      <Router>
        <Routes />
      </Router>
    </AuthApi.Provider>


    </div>
  );
}

export default App;
