import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './global/globalStyle';

import Navbar from './components/Navbar/Navbar';

import IsLogged from './Views/IsLogged/IsLogged';
import UserProfile from './Views/UserProfile/UserProfile';
import Product from './Views/Product/Product';
import EndPag from './Views/EndPag/endPag';
import FooterComponent from './Views/EndPag/footer';


function PlataformRotas() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route component={UserProfile} exact path="/profile" />
          <Route component={Product} exact path="/product" render={(props) => <Product {...props} />} />
          <Route component={EndPag} exact path="/endPag" />
      </Switch>
    </Router>
  );
}

function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route component={IsLogged} exact path="/login" />
            <Route component={PlataformRotas} path="/(profile|product|endPag)"/>
          </Switch>
        </Router>
        <GlobalStyle />
        <FooterComponent/>
      </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
