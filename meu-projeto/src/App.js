import CardsCuriosidades from "./components/CardsCuriosidades";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Hero from "./components/Hero"
import ParagrafoPessoal from "./components/ParagrafoPessoal";
import Portifolio from "./components/Portifolio";

function App() {
  return ( 
    <div className="body">
      <Header />
      <Hero />
      <ParagrafoPessoal />
      <CardsCuriosidades />
      <Portifolio />
      <Footer />
    </div>
  );
}

export default App;

//Paleta de Cores
// 60 - #d3d3d3
// 30 - #111426
// 10 - #51a6a6