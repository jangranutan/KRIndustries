import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SEO, Nav, Hero, About, Products, Photos, Quality, Process, Contact, Footer } from "./KRIndustries";
import { styles } from "./globalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <style>{styles.global}</style>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
