import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Cabeçalho = props => {
    const [busca, setBusca] = useState('');

    const handleChange = (event) => {
        setBusca(event.target.value);
    };

    const handleClick = props => {
        const array = [
            {
                nome: 'Farol do Cabo Branco',
                localizacao: 'Cabo Branco',
                tipo: 'Farol',
            },
            {
                nome: 'Piscinas Naturais',
                localizacao: 'Praia do Seixas',
                tipo: 'Praia',
            },
            {
                nome: 'Parque Sólon Lucena',
                localizacao: 'Bairro Centro',
                tipo: 'Parque',
            },
            {
                nome: 'Parque Arruda Câmara ("Bica")',
                localizacao: 'Bairro Tambiá',
                tipo: 'Parque',
            },
        ];

        const resultado = array.filter(
            (item) =>
                item.nome.toLowerCase().includes(busca.toLowerCase()) ||
                item.localizacao.toLowerCase().includes(busca.toLowerCase()) ||
                item.tipo.toLowerCase().includes(busca.toLowerCase())
        );

        if (resultado.length === 0) {
            console.log('Local ainda não adicionado');
            alert('Busca não encontrada');
        } else {
            resultado.forEach((item) => {
                console.log('Nome:', item.nome);
                console.log('Localização:', item.localizacao);
                console.log('Tipo:', item.tipo);
                console.log('------------------------');
            });
        }
    };

    return (
        <div>
            <header>
                <img src='img/poster2.png' alt='poster' width='100%' />
            </header>
            <div>
                <nav className='position'>
                    <ul>
                        <li>
                            <Link to='/'>Página Inicial</Link>
                        </li>
                        <li>
                            <Link to='/pontosturisticos'>Pontos Turísticos</Link>
                        </li>
                        <li>
                            <Link to='/serviços'>Serviços e Utilidades</Link>
                        </li>
                        <li> <Link to='/mapas'>Localizações</Link>
                           
                        </li>
                        <li>
                            <form action=''>
                                <input
                                    type='text'
                                    id='Buscar'
                                    name='q'
                                    placeholder='Buscar'
                                    title='Digite o nome do ponto turístico que deseja buscar'
                                    value={busca}
                                    onChange={handleChange}
                                />
                                <button type='button' title='Buscar' onClick={handleClick}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </form>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Cabeçalho;
