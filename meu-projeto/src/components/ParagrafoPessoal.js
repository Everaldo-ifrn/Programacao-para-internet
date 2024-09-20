import '../index.css'

function ParagrafoPessoal() {
    return(
        <article className="apresentacao" id="apresentacao">
            <h2>Apresentação</h2>
            <p id="comprimento">Olá, bem-vindo a minha página pessoal!</p>
            <div className="euMaisDescricao">
                <figure>
                    <img src="/fotos/foto.jpeg" width="300" alt="Eu"/>
                </figure>
                <p id="minhaDescricao">Me chamo Everaldo, tenho 19 anos e gosto de passar o tempo com jogos, séries e filmes. Meu filme favorito é Jumanji, já minha série favorita é Lock & Key e meu jogo favorito é Mobile Legends. Tenho um sonho de trabalhar na área de programação, por isso pretendo fazer faculdade de engenharia de software, porque é a área que, até agora, me chamou mais atenção. Tenho outro sonho também, que é poder realizar os sonhos de meus familiares, pois são quem estão comigo nas piores e melhores fases da minha vida sem qualquer cobrança de algo em troca :)</p>
            </div>
        </article>
    )
}

export default ParagrafoPessoal