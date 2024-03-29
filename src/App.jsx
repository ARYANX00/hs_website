import "./App.css";
import Sponsors from "./components/Sponsors";
import Prizepool from "./components/Prizepool";
import Footer from "./components/Footer";

import Team from "./sections/Team";
import Hero from "./sections/Hero";
import Aboutevent from "./sections/Aboutevent";
import Team_intro from "./sections/Team_intro";
import { SpeedInsights } from "@vercel/speed-insights/react"


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
      <SpeedInsights/>
    </main>
  );
}

export default App;
