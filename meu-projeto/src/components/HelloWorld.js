import Saudacao from "./Saudacao"
function HelloWorld() { //componente é uma função!
    return (
        //aqui fica o html
        <div>
            <h1>Olá, Mundo!</h1>
            <Saudacao/>
        </div>
        
    )
} 

export default HelloWorld