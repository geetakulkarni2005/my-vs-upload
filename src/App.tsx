import About from "./components/About";
import Advantage from "./components/Advantage";
import Categories from "./components/Categories";
import Disciplines from "./components/Disciplines";
import Ecosystem from "./components/Ecosystem";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import UserJourney from "./components/UserJourney";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <UserJourney />
      <Categories />
      <Disciplines />
      <Events />
      <About />
      <Ecosystem />
      <Advantage />
      <Footer />
    </div>
  );
}

export default App;