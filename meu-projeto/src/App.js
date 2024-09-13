import CardsCuriosidades from "./components/CardsCuriosidades";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Hero from "./components/Hero"
import ParagrafoPessoal from "./components/ParagrafoPessoal";
import Portifolio from "./components/Portifolio";

// para usar-lo basta: <HelloWorld />

// os componentes são cada parte do site, tipo: hero, footer...
// os css de cada componente é: [nomeComponente].module.css
// fazer o site completo no app, e as partes do site nos componentes

function App() {
  return ( //sempre tem que returnar apenas 1 div
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

export default App; //exporta alguma coisa 














/* <div className="App">
      <h1>Eu, {nome}, estou estudando React!</h1>
      <p>É muito chato :(</p>
      <HelloWorld />
      <Saudacao nome="Everaldo" idade="18" email="everaldo.j@escolar.ifrn.edu.br"/>
    </div> */