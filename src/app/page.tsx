import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import Skills from "./components/layout/Skills";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";
import "./globals.css";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
