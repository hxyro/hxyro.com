import Navbar from "../components/Navbar";
import Home from "../components/sections/Home";
import Projects from "../components/sections/Projects";
import AboutMe from "../components/sections/AboutMe";
import Footer from "../components/sections/Footer";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
