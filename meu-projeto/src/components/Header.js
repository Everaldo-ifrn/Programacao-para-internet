import '../index.css'

function Header() {
    return(
        <div className="header">
            <ul className="menu">
                <li id="testandoAi"> <a href="#">Menu</a>
                    <ul className="menuOpcoes">
                        <li><a href="#apresentacao">Apresentação</a></li>
                        <li><a href="#curiosidades">Curiosidades</a></li>
                        <li><a href="#portifolio">Portifólio</a></li>
                        <li><a href="#contato">Contatos</a></li>
                    </ul>
                </li>
            </ul>
            <h2>EJ</h2>
            <div className="nav">     
                <a href="#apresentacao">Apresentação</a> <br/>
                <a href="#curiosidades">Curiosidades</a> <br/>
                <a href="#portifolio">Portifólio</a> <br/>
                <a href="#contato">Contatos</a> <br/>
            </div>
        </div>
    )
}

export default Header