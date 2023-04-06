import { NavLink, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
        </Routes>
      </main>
    </div>
  );
}
