import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { PullQuote } from "./components/PullQuote";

export default function Home() {
  return (
    <main>
      <Header />
      <hr className="rule rule--contain" />
      <About />
      <Portfolio />
      <PullQuote />
      <Contact />
    </main>
  );
}
