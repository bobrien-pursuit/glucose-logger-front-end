import { Link, useLocation } from "react-router-dom";

export default function NavBar() {

    const location = useLocation();
    const currentLocation = location.pathname;

    return (
        <nav>
            <h1>
                Glucose Logger App
            </h1>
            { currentLocation.includes('/new') ? <h3>Enter Information Below</h3>
            :
            <Link to="/new">
            <button>
                Add Entry
            </button>
            </Link>
            }
        </nav>
    );
}