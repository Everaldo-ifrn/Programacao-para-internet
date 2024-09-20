import '../index.css'

function Header() {
    return(
        <div className="header">
            <ul className="menu">
                <li id="testandoAi"> <a href="#">Menu</a>
                    <ul className="menuOpcoes">
                        <li><a href="#comprimento">Parágrafo</a></li>
                        <li><a href="#curiosidades">Curiosidades</a></li>
                        <li><a href="#educacao">Educação</a></li>
                        <li><a href="#causos">Causos</a></li>
                        <li><a href="#habilidades">Habilidades</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </li>
            </ul>
            <h2>EJ</h2>
            <div className="nav">     
                <a href="#curiosidades">Curiosidades</a> <br/>
                <a href="#educacao">Educação</a> <br/>
                <a href="#causos">Causos</a> <br/>
                <a href="#habilidades">Habilidades</a> <br/>
                <a href="#contato">Contato</a> <br/>
            </div>
        </div>
    )
}

export default Header