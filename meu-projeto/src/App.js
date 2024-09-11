import HelloWorld from "./components/HelloWorld"
import Saudacao from "./components/Saudacao"
// para usar-lo basta: <HelloWorld />

function App() {
  const url = 'https://via.placeholder.com/150'
  const nome = "Everaldo"

  return ( //sempre tem que returnar apenas 1 div
    <div className="App">
      <h1>Eu, {nome}, estou estudando React!</h1>
      <p>É muito chato :(</p>
      <HelloWorld />
      <Saudacao nome="Everaldo" idade="18" email="everaldo.j@escolar.ifrn.edu.br"/>
    </div>
  );
}

export default App; //exporta alguma coisa 