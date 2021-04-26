import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './compnents/layout/Navbar';
import Home from './compnents/layout/Home';
import Login from './compnents/auth/Login';
import Register from './compnents/auth/Register';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Switch>
          <Route exact path='/login' compnent={Login} />
          <Route exact path='/register' compnent={Register} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
