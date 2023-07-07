import React from 'react';

const PontosTuristicos = props => {
    return (
        <div>
            <div className='row'>
                <section>
                    <article className='card'>
                        <h1>“Farol do Cabo Branco”</h1>
                        <p>Bem antes de João Pessoa ser considerada como uma cidade turística de interesse nacional o farol já era
                            famoso, o que acontece é que por muito tempo este marco foi considerado o ponto mais oriental das Américas,
                            uma classificação que foi corrigida a algum tempo, ainda assim o farol que tem o formato de um Sisal para
                            representar a planta que era considerada uma das principais fontes de renda do estado recebe visitantes
                            diariamente.
                            Seu mirante privilegiado e o clima agradável do alto da falésia junto com a brisa do mar fazem deste um dos
                            melhores lugares para ver o pôr do sol junto com a família ou com aquela pessoa especial.</p>
                        <img src='../img/farolcb.jpg' alt='farol' width='100%' height='500' className='animacao' /><br />

                      
                    </article>

                    <article className='card'>
                        <h1>“Piscinas Naturais”</h1>
                        <p>Em volta da ilha da areia vermelha se formam todos os dias quando a maré começa a baixar várias piscinas
                            naturais, quem vem aqui pode aproveitar para relaxar nessas piscinas enquanto escuta o som e curte o momento
                            em família. Além disso essas piscinas costumam servir de lar para várias espécies de peixes ornamentais que às
                            crianças adoram e quem tiver um aquário pode aproveitar e escolher alguns para levar para casa.</p>
                        <img src='../img/piscinas-naturais.jpg' alt='piscinas' width='100%' height='500' className='animacao' /><br />

                        
                    </article>

                    <article className='card'>
                        <h1>“Parque Sólon Lucena”</h1>
                        <p>Pistas de Skate e ciclovia, além de uma ótima pista para caminhada e uma lagoa linda, o que mais você poderia
                            querer? O parque sólon lucena conta também com um playground para as crianças e um grande gramado onde você
                            pode apenas deitar e tirar um cochilo ou quem sabe fazer um piquenique em família, o local é um famoso ponto
                            de encontro dos jovens que dão uma vida agitada e cheia de aventuras para a região, durante a noite o local é
                            bem iluminado e propício para um encontros.</p>
                        <img src='../img/lagoa-jp.jpg' alt='lagoa' width='100%' height='500' className='animacao' /><br />

                        
                    </article>

                </section>
                <aside>
                    <article className='card'>
                        <h3>PONTO MAIS BUSCADO NO SITE</h3>
                        <h4>“Parque Arruda Câmara ('Bica')”</h4>
                        <p>É um verdadeiro bosque no centro da cidade. Ideal para quem quer sair um pouco do agito das praias, descansar
                            a pele do sol, se reidratar com a água mineral da fonte natural. Respirar o ar puro da mata. Legal ir até lá.
                            Talvez o local mais amado pelas crianças, esse parque conta com um zoológico que abriga espécies de animais de
                            grande impacto visual como leões e elefantes. Além disso o local também é um jardim botânico de plantas
                            nativas, visitar o local é como caminhar pelas grandes matas enquanto se aproveita a cada curva a vista de um
                            animal raro e imponente, o local tem um espaço bastante amplo e um clima agradável que é ideal para passar as
                            manhãs.</p>
                        
                        <h4>INFORMAÇÕES RECENTES DO LOCAL</h4>
                        <p>
                            A entrada do Parque da Bica custa R$ 2 por pessoa e é gratuito para menores de 7 anos ou maiores de 65.
                        </p>
                        <p>
                            A visitação segue permitida de segunda a sexta-feira, das 8h às 12h e das 13h às 17h, mas com o fechamento da
                            bilheteria uma hora antes do término de cada turno. Além dessa restrição, o Parque permanece com limite de 500
                            pessoas por turno, como também só podem entrar no espaço usando máscara.
                        </p>
                        <img src='../img/bicajp.jpg' alt='bica' width='100%' height='500' className='animacao' />
                    </article>
                    <article className='card'>
                        <h3>Conheça Jampa</h3>
                        <p>Dicas para quem quer morar aqui</p>
                        <iframe width='100%' height='500' src='https://www.youtube.com/embed/BEF283ytFdE' title='YouTube video player'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowfullscreen></iframe>
                    </article>
                </aside>
            </div>
        </div>
    )
}

export default PontosTuristicos