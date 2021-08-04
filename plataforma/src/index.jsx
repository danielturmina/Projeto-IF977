import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './global/globalStyle';

import IsLogged from './Views/IsLogged/IsLogged';
import UserProfile from './Views/UserProfile/UserProfile';

function App() {
  return (
      <>
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route component={IsLogged} path="/login" />
            <Route component={UserProfile} path="/profile" />
          </Switch>
        </Router>
        <GlobalStyle />
      </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
