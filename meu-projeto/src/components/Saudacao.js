import stylels from "./Frase.module.css"

function Saudacao({nome, idade, email}) {
    return (
        <div>
            <p>Oi, {nome}!</p>
            <p>Sua idade é {idade} anos</p>
            <p>Seu email é {email}</p>
        </div>
    )
}

export default Saudacao