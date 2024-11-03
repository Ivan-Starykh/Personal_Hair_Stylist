import React from "react";
import "./Navbar.css"

function Navbar() {
	return (
		<nav className="navbar">
			<div className="logo">Hair Stylist</div>
			<ul className="nav-links">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#reviews">Reviews</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	)
};

export default Navbar;
// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// function Navbar({ isAuthenticated }) {
//   return (
//     <nav className="navbar">
//       <div className="logo">Hair Stylist</div>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#portfolio">Portfolio</a></li>
//         <li><a href="#reviews">Reviews</a></li>
//         <li><a href="#contact">Contact</a></li>
//         {isAuthenticated ? (
//           <li><Link to="/dashboard">Dashboard</Link></li>
//         ) : (
//           <>
//             <li><Link to="/signup">Sign Up</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
