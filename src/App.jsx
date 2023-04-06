import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
        </Routes>
      </Layout>
    </div>
  );
}
