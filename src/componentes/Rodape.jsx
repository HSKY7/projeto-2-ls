import React from 'react';

const Rodape = props => {
    return (
        < footer className='position' >

            <section className='footer-content'>
                <section className='adress'>
                    <a href=''><img src='img/travel.png' alt='logo-do-site' className='elemento' /></a>
                </section>

                <section className='social'>
                    <h1>NOSSAS REDES</h1>
                    <ul>
                        <li id='facebook'>
                            <a href='https://pt-br.facebook.com/' target='_blank'><i className='fab fa-facebook fa-2x'
                                aria-hidden='true'></i></a>
                        </li>
                        <li id='twitter'>
                            <a href='https://twitter.com/login?lang=pt' target='_blank'><i className='fab fa-twitter fa-2x'
                                aria-hidden='true'></i></a>
                        </li>
                        <li id='instagram'>
                            <a href='https://www.instagram.com/' target='_blank'><i className='fab fa-instagram-square fa-2x'
                                aria-hidden='true'></i></a>
                        </li>
                    </ul>
                </section>
                <section id='prefeitura'>
                    <a href='https://www.joaopessoa.pb.gov.br/' target='_blank'><img src='img/Brasão.svg.png'
                        alt='brasão' /></a>
                </section>
            </section>
            < div className='rodape' >
                <section className='copyright'>
                    <span>&copy; 2023 por Turistando JP. Todos os direitos reservados.</span>
                </section>
            </div >
        </footer >
    )

}

export default Rodape