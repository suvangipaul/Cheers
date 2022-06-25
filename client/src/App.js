import "./App.css";
import Header from "./components/header/header.components.jsx";
import Footer from "./components/footer/footer.components.jsx";
import { Routes, Route } from "react-router-dom";
import { Bar, Home, Explore, Charity } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/bar" element={<Bar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;