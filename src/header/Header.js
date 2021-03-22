import { BrowserRouter as Router, Link } from "react-router-dom";

function Header(props) {
    let nav = props.nav;
    let listNav = nav.map(item => <li key={item.link}><Link to={item.link}>{item.text}</Link></li >)
    return (
        <nav>
            <ul>
                {listNav}
            </ul>
        </nav>
    );
}

export default Header;
