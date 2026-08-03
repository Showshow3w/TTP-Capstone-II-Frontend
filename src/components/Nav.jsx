import { Link } from "react-router"

function Nav() {
    return(
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/add">Add Cafe</Link>
        </nav>
    )
}

export default Nav