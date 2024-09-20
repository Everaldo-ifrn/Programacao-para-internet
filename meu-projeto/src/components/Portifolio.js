import stylels from "./Portifolio.module.css"
function Portifolio() {
    return(
        <article className={stylels.fotos} id="portifolio">
            <h2>Portifólio</h2>
            <ol>
                <li> <img src="./fotos/Academia.png"/> O projeto é o desenvolvimento de um software em Python que simule o funcionamento de uma academia, dando ênfase no cadastro dos clientes, nas suas fichas financeiras, e suas fichas de treino. <br /> <a href="https://github.com/Everaldo-ifrn/poo-academia">Link do Repositório</a> </li>
                <li> <img src="./fotos/BlushGlamour.png"/> BlushGlamour é um projeto escolar inovador que combina a criação de uma loja de maquiagem online com o conhecimento em Banco de Dados e Autoria Web, utilizando as tecnologias Python, HTML, CSS, JavaScript e SQL.<br /> <a href="https://github.com/Everaldo-ifrn/Projeto-BlushGlamour">Link do Repositório</a></li>
                <li> <img src="./fotos/eNAPNE.png"/> O eNAPNE é um projeto para o gerenciamento dos dados das pessoas atendidas pelo NAPNE do IFRN campus CM, foram usadas as tecnologias Python, HTML, CSS, JavaScript e SQL. <br /> <a href="https://github.com/gilbran-ifrn/enapne">Link do Repositório</a> </li>
            </ol>
        </article>
    )
}

export default Portifolio