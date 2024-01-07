import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Error from "./pages/Error";

import "./CSS/main.css";

export default function App() {
  return (
    <div className="min-h-[100svh] flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:name" element={<Country />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
