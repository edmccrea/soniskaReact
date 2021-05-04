import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './compnents/layout/Navbar';
import Home from './compnents/layout/Home';
import Login from './compnents/auth/Login';
import Register from './compnents/auth/Register';
import Pricing from './compnents/layout/Pricing';
import FAQ from './compnents/layout/FAQ';
import Footer from './compnents/layout/Footer';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import { setAuthToken } from './utils';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
