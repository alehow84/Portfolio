import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import Skills from "./components/layout/Skills";
import Projects from "./components/layout/Projects";
import FooterImg from "./components/layout/FooterImg";
import BurgerMenu from "./components/menu/BurgerMenu";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";
import "./globals.css";

export default function App() {
  return (
    <GlobalStateProvider>
      <Navbar />
      <BurgerMenu />
      <Home />
      <About />
      <Skills />
      <Projects />
      <FooterImg />
      <Footer />
    </GlobalStateProvider>
  );
}
