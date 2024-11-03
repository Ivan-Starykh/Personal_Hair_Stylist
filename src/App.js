
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import Reviews from "./pages/Reviews";
// import SignUp from "./components/SignUp";
// import Login from "./components/Login";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";
// import "./styles.css";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <Navbar isAuthenticated={isAuthenticated} />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/reviews" element={<Reviews />} />
//           <Route path="/signup" element={<SignUp onSignUp={() => setIsAuthenticated(true)} />} />
//           <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
//           <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors } from "@fortawesome/free-solid-svg-icons";

function App() {
		const [isMenuOpen, setIsMenuOpen] = useState(false);
	
		const toggleMenu = () => {
			setIsMenuOpen(!isMenuOpen);
		};

  return (
    <Router>
      <header className="header">
			<nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
			<h2 className="logo">
        <FontAwesomeIcon icon={faScissors} /> 
      </h2>
				<button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
          <Link to="/">Главная</Link>
          <Link to="/about">Обо мне</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/reviews">Отзывы</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;


//   return (
//     <div className="App">
      
  
//         <h1>Your Personal Hair Stylist</h1>
//       </header>
//       <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
//         <ul>
//           <li><a href="#home" onClick={toggleMenu}>Home</a></li>
//           <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
//           <li><a href="#reviews" onClick={toggleMenu}>Reviews</a></li>
//           <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
//         </ul>
//       </nav>
//       <Home />
//       <Portfolio />
//       <Reviews />
//     </div>
//   );
// }

// export default App;