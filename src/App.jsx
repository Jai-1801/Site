import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ECommerce from "./components/ECommerce";
import Analytics from "./components/Analytics";
import SEO from "./components/SEO";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/e-commerce" element={<ECommerce />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
