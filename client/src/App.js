import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './compnents/layout/Navbar';
import Home from './compnents/layout/Home';
import Login from './compnents/auth/Login';
import Register from './compnents/auth/Register';
import Pricing from './compnents/layout/Pricing';
import FAQ from './compnents/layout/FAQ';
import Footer from './compnents/layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/faq' component={FAQ} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
