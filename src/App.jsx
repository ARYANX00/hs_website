import "./App.css";
import Sponsors from "./components/Sponsors";
import Prizepool from "./components/Prizepool";
import Footer from "./components/Footer";

import Team from "./sections/Team";
import Hero from "./sections/Hero";
import Aboutevent from "./sections/Aboutevent";
import Team_intro from "./sections/Team_intro";

function App() {
  return (
    <main className="bg-[#0F1923]">
      <Hero />
      <Team_intro />
      <Aboutevent />
      <Prizepool />
      <Sponsors />
      <Team />
      <Footer />
    </main>
  );
}

export default App;
