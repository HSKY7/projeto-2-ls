import React, { useState } from 'react';

const Comentarios = props => {
    const [comentarios, setComentarios] = useState([]);
    const [popup, setPopup] = useState('');

    const adicionarComentario = (event) => {
        event.preventDefault();
        const nome = document.getElementById('inputNome').value;
        const email = document.getElementById('inputEmail').value;
        const sobre = document.getElementById('sobrevoce').value;
        const regiao = document.getElementById('regiao').value;
        const mensagem = document.getElementById('textAreaMensagem').value;

        if (sobre === 'Selecione' || regiao === 'Selecione') {
            window.alert('Selecione as opções nos campos de seleção.');
            return;
        }

        const novoComentario = {
            nome,
            email,
            sobre,
            regiao,
            mensagem,
        };

        if (!validarCampos(nome, email, mensagem)) {
            window.alert('Preencha os campos corretamente!');
            return;
        }

        setComentarios([...comentarios, novoComentario]);

        setPopup('Comentário adicionado com sucesso!');

        event.target.reset();
    };

    const excluirComentario = (indice) => {
        setComentarios(comentarios.filter((_, i) => i !== indice));
    };

    const validarCampos = (nome, email, mensagem) => {
        const nomeRegex = /^[A-Za-zÀ-ú\s]{1,40}$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        const mensagemRegex = /^.{1,256}$/;

        if (!nomeRegex.test(nome)) {
            return false;
        }

        if (!emailRegex.test(email)) {
            return false;
        }

        if (!mensagemRegex.test(mensagem)) {
            return false;
        }

        return true;
    };

    return (
        <div>

            <h1>Area do contato</h1>
            <p>Que tal nos contar como foi marcante sua experiencia nessa bela cidade ou/e nos ajudar melhorar cada
                vez mais nosso site, vamos lá?</p>
            <p> Preencha o formulário abaixo com sua informações :</p>

            <form className="card" id="form-comentario" onSubmit={adicionarComentario}>
                <label htmlFor="inputNome">
                    <strong>Nome:</strong>
                </label>
                <input
                    type="text"
                    id="inputNome"
                    required
                    maxLength="40"
                    pattern="[A-Za-zÀ-ú\s]+"
                    title="Digite apenas letras até 40 caracteres"
                /><br />

                <label htmlFor="inputEmail">
                    <strong>E-mail:</strong>
                </label>
                <input
                    type="email"
                    id="inputEmail"
                    required
                    maxLength="64"
                    pattern="^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$"
                    title="Digite um email válido"
                /><br />




                <div className="campo">
                    <label htmlFor="sobrevoce">
                        <strong>Você é? :</strong>
                    </label>
                    <select id="sobrevoce" defaultValue="Selecione">
                        <option disabled>Selecione</option>
                        <option>Residente de outra cidade</option>
                        <option>Turista na cidade</option>
                        <option>Residente da cidade</option>
                    </select>
                </div>

                <br />
                <br />
                <div>
                    <label htmlFor="regiao">
                        <strong>Marque qual sua região :</strong>
                    </label>
                    <select id="regiao" defaultValue="Selecione">
                        <option disabled>Selecione</option>
                        <option>Nordeste</option>
                        <option>Norte</option>
                        <option>Centro-Oeste</option>
                        <option>Sudeste</option>
                        <option>Sul</option>
                    </select>
                    <br />
                    <br />
                </div>

                <label htmlFor="textAreaMensagem">
                    <strong>Deixe seu comentário:</strong>
                </label> <br />
                <textarea
                    name="textAreaMensagem"
                    id="textAreaMensagem"
                    required
                    maxLength="256"
                    pattern=".{0,256}"
                    title="Digite até 256 caracteres"
                ></textarea><br />
                <button type="submit"><strong>Enviar comentário</strong></button>
            </form>

            <article className="card" id="comentarios-deixados">
                <h1><strong>Comentários Adicionados:</strong></h1>
                {comentarios.length === 0 ? (
                    <li>Nenhum comentário adicionado.</li>
                ) : (
                    <ul id="comentarios-lista">
                        {comentarios.map((comentario, indice) => (
                            <li key={indice}>
                                <strong>Nome:</strong> {comentario.nome} <br />
                                <strong>E-mail:</strong> {comentario.email} <br />
                                <strong>Você é:</strong> {comentario.sobre} <br />
                                <strong>Região:</strong> {comentario.regiao} <br />
                                <strong>Comentário:</strong> {comentario.mensagem} <br />
                                <button onClick={() => excluirComentario(indice)}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </article>

        </div>
    );
};

export default Comentarios;
