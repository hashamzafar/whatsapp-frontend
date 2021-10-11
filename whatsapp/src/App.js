import { Route, HashRouter } from 'react-router-dom'
import './App.css';
import Registration from './Component/registration/Registration'
import Login from './Component/login/Login'


function App() {
  return (
    <>
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
