import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <main className="flex-1">
          <Home></Home>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
