import React from 'react';

const Inicio = props => {
    return (
        <div className='row'>
            <section>
                <article className='card'>
                    <h1>Conheça a cidade</h1>
                    <p>João Pessoa é um município brasileiro, capital do estado da Paraíba. Com população estimada em 2020
                        de 817.511 habitantes, a capital paraibana é a oitava cidade mais populosa da Região Nordeste e a
                        23ª do Brasil, sendo, no seu estado, o município mais populoso. Pertence à Região Geográfica
                        Imediata de João Pessoa e à Região Geográfica Intermediária de João Pessoa. A Região Metropolitana
                        de João Pessoa, formada por João Pessoa e mais onze municípios, tinha uma população estimada em 2018
                        de 1.099.360 pessoas, a 23ª mais populosa do Brasil.</p>
                    <h3>Fonte: Wikipédia</h3>
                    <img src='img/letreirojp.jpeg' alt='Foto da letreiro em João Pessoa.' width='100%' className='animacao' />
                </article>
                <article className='card'>
                    <h1>História da Cidade</h1>
                    <div>
                        <p>Nascida de costas para o mar, ao contrário das demais capitais do país banhadas pelo oceano
                            Atlântico, João Pessoa foi fundada no dia 5 de agosto de 1585, pelos colonizadores portugueses.
                            Chamada de “Cidade Real de Nossa Senhora das Neves”, suas primeiras edificações foram às margens
                            do Rio Sanhauá, um afluente do Rio Paraíba, hoje conhecido como Porto do Capim, no bairro do
                            Varadouro.</p>

                        <p>Em 1588, a cidade passou a chamar-se “Filipéia de Nossa Senhora das Neves”, em homenagem ao rei
                            Filipe II, que, na época, acumulava os tronos da Espanha e de Portugal. Em 1634, a capital
                            paraibana foi invadida pelos holandeses, que a batizaram de Fredrikstad (Cidade de Frederico),
                            em homenagem ao príncipe de Orange, Frederico de Orange.</p>

                        <p>Depois do declínio da Nova Holanda e com a saída dos neerlandeses, a cidade adquiriu o nome de
                            “Parahyba do Norte”, em 1654. Sua denominação atual, “João Pessoa”, é uma homenagem ao político
                            paraibano João Pessoa Cavalcanti de Albuquerque, assassinado em 1930, na cidade do Recife,
                            quando era presidente do estado e concorria como candidato a vice-presidente da República, na
                            chapa de Getúlio Vargas.</p>

                        <h1>Ocupação Urbana</h1>

                        <p>Edificado seu casario histórico no Varadouro, João Pessoa, nos seus primórdios, dividiu-se entre
                            cidade baixa e alta. A expansão urbana ocupou a antiga área rural. A partir da segunda metade
                            dos anos 1960, com a ocupação da orla marítima, a economia dos locais mais antigos da capital
                            perdeu um pouco de sua importância de outrora. No que diz respeito à arquitetura, os bairros
                            centrais comportam a maior parte das áreas que são objeto de tombamento pelos órgãos de proteção
                            ao patrimônio.</p>

                        <p>A capital paraibana conta com um litoral de aproximadamente 24 quilômetros de extensão, divididos
                            em nove praias de águas mornas e tranquilas. São elas: Bessa, Manaíra, Tambaú, Cabo Branco,
                            Seixas, Penha, Jacarapé, Praia do Sol e Barra de Gramame. João Pessoa faz limite, ao norte, com
                            Cabedelo, que possui atrativos turísticos como o pôr do sol do Jacaré, e ao sul com o Conde, que
                            tem como destaque, as praias de Coqueirinho e Tambaba.</p>

                        <h1>Capital Verde e com qualidade de vida</h1>

                        <p>João Pessoa é uma das capitais brasileiras com melhor qualidade de vida e conhecida pelo verde e
                            por seus espaços para o lazer. Tanto na orla, quanto nos bairros, há áreas para caminhada e
                            prática de esportes. Grande parte das praças da cidade conta com equipamentos de ginástica. Além
                            disso, os ciclistas têm à disposição,várias ciclovias e ciclofaixas.</p>

                        <h1>Atrativos</h1>

                        <p>O município de João Pessoa se encontra no Nordeste do país, às margens do Oceano Atlântico, no
                            litoral do Estado da Paraíba. A cidade é rodeada por zonas naturais, parques, jardins, reservas
                            de Mata Atlântica e um extenso litoral repleto de belíssimas praias protegidas por coqueiros. É
                            conhecida também pela boa infra-estrutura hoteleira, restaurantes e hospitalidade.</p>

                        <p>Considerada uma das cidades mais bonitas do Brasil, possui maravilhoso Centro Histórico, visitado
                            durante todo o ano por milhares de turistas.</p>
                    </div>
                    <img src='img/cidadevelha.jpg' alt='Foto da cidade velha.' width='100%' className='imagemCidade' />
                </article>
            </section>
        </div>
    )
}

export default Inicio