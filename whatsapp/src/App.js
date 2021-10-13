import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Main from "./Component/main/Main.js";
import Registration from "./Component/registration/Registration";
import Login from "./Component/login/Login";
import { useState, useEffect } from 'react'
function App() {
  // console.log("env.URL", process.env.URL);
  // const [userData, setUserData] = useState("")
  return (
    <>
      <HashRouter basename="/">
        <div className="App">
          <Route exact path="/main" render={(routerProps) => <Main />} />
          <Route exact path="/" render={(routerProps) => <Login />} />
          <Route
            exact
            path="/register"
            render={(routerProps) => <Registration />}
          />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
