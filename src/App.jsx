// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home.jsx";
import New from "./Components/NewEntryForm.jsx";
import NavBar from "./Components/NavBar.jsx";

// COMPONENTS

function App () {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
