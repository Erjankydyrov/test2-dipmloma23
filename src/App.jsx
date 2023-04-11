import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/category/:path" element={<Category />} />
        </Routes>
      </Layout>
    </div>
  );
}
