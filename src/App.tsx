import { Header } from "./sections/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Services } from "./sections/Services/Services";
import { Method } from "./sections/Method/Method";

export function App() {
  return (
    <div className="bg-purple-400">
      <Header />
      <Hero />
      <About />
      <Services />
      <Method />
    </div>
  );
}
