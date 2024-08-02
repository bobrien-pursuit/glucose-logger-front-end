// PAGES
import Entries from "../Components/Entries.jsx";

function Home() {
    return (
        <div className="home">
            <p><Entries /></p>
            <button>
                Add Entry
            </button>
        </div>
    );
}

export default Home;