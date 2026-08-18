import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative w-full bg-cream">
        <Hero />
        <About />
        <Reservation />
        <Menu />
        <Footer />
      </main>
    </>
  );
}

export default App;
