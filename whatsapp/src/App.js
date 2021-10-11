import { Route, HashRouter } from 'react-router-dom'
import './App.css';


import Main from './Component/main/Main.js'



import Registration from './Component/registration/Registration'
import Login from './Component/login/Login'



function App() {
  return (
    <>
      <div className="App">
        <Main />
      </div>


      <HashRouter basename='/'>
        <div className="App">
          <Route exact path='/login' render={(routerProps) => <Login />} />
          <Route exact path='/register' render={(routerProps) => <Registration />} />
        </div>
      </HashRouter>
    </>

  );
}

export default App;
