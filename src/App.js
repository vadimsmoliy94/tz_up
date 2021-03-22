import Home from './home/Home';
import Login from './login/Login';
import News from './news/News';
import Profile from './profile/Profile';
import Water from './water/Waret';
import UserNews from './news/UserNews';
import Header from './header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  let log = localStorage.getItem('email');
  let navOll = [
    { link: "/", text: "Home" },
    { link: "/login", text: "login" },
    { link: "/news", text: "News" },
  ];
  let navUsers = [
    { link: "/", text: "Home" },
    { link: "/login", text: "login" },
    { link: "/userNews", text: "News" },
    { link: "/profile", text: "Profile" },
    { link: "/water", text: "Water" },
  ];
  let nav = null;
  log ? nav = navUsers : nav = navOll;
  return (
    <div className="App">

      <Router>
        <Header nav={nav} />

        <Switch>
          <Route path="/userNews"><UserNews /></Route>
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
