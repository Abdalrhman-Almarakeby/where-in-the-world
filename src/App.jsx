import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home/index";
import { Country } from "./pages/Country/index";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer.jsx";
import "./CSS/main.css";

export default function App() {
  return (
    <div className="flex min-h-[100svh] flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
