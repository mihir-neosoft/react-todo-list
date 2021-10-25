import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Homepage from './Components/Homepage';
import ChangePassword from './Components/ChangePassword';
import NotFound from './Components/NotFound';
import Logout from './Components/Logout';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Homepage" exact component={Homepage} />
          <Route path="/Changepassword" exact component={ChangePassword} />
          <Route path="/Logout" exact component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
