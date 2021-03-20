import Home from './home/Home';
import Login from './login/Login';
import News from './news/News';
import Profile from './profile/Profile';
import Water from './water/Waret';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/news">News</Link> </li>
            <li><Link to="/profile">Profile</Link> </li>
            <li><Link to="/water">Water</Link> </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/news"><News /></Route>
          <Route path="/profile"><Profile /></Route>
          <Route path="/water"><Water /></Route>
          <Route exact path="/"><Home /></Route>
        </Switch>

      </Router >
    </div>
  );
}

export default App;
