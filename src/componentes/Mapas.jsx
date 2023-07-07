import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Mapas = props => {
    const [enderecos, setEnderecos] = useState([]);
    const [cepInvalido, setCepInvalido] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [novoEndereco, setNovoEndereco] = useState({
        nomeLocal: "",
        cep: "",
        street: "",
        number: "",
        neighborhood: "",
        state: "",
        city: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setNovoEndereco((prevState) => ({
            ...prevState,
            [id]: value,
        }));

        if (id === "cep" && value === "") {
            setNovoEndereco((prevState) => ({
                ...prevState,
                street: "",
                number: "",
                neighborhood: "",
                state: "",
                city: "",
            }));
            setCepInvalido(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        const enderecoPreenchido = { ...novoEndereco };
        Object.keys(enderecoPreenchido).forEach((key) => {
            if (!enderecoPreenchido[key]) {
                delete enderecoPreenchido[key];
            }
        });
        setEnderecos((prevState) => [...prevState, enderecoPreenchido]);
        setNovoEndereco({
            nomeLocal: "",
            cep: "",
            street: "",
            number: "",
            neighborhood: "",
            state: "",
            city: "",
        });
    };

    const getCEP = async props => {
        try {
            const response = await fetch(
                `https://viacep.com.br/ws/${novoEndereco.cep}/json/`
            );
            const data = await response.json();
            if (!data.erro) {
                setNovoEndereco((prevState) => ({
                    ...prevState,
                    street: data.logradouro,
                    neighborhood: data.bairro,
                    state: data.uf,
                    city: data.localidade,
                }));
                setCepInvalido(false);
            } else {
                setCepInvalido(true);
            }
        } catch (error) {
            console.error("Erro ao obter CEP:", error);
        }
    };

    const inputClass = cepInvalido ? "is-invalid" : "";
    const cepErrorClass = cepInvalido ? "invalid-feedback" : "d-none";

    const handleDownload = () => {
        const data = enderecos
            .map(
                (endereco, index) =>
                    `${index + 1}. Local: ${endereco.nomeLocal}\nCEP: ${endereco.cep}\nRua: ${endereco.street}\nNúmero: ${endereco.number}\nBairro: ${endereco.neighborhood}\nEstado: ${endereco.state}\nCidade: ${endereco.city}\n\n`
            )
            .join("");

        const element = document.createElement("a");
        const file = new Blob([data], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "dados_cadastrados.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const handleDelete = (index) => {
        setEnderecos((prevState) => {
            const updatedEnderecos = [...prevState];
            updatedEnderecos.splice(index, 1);
            return updatedEnderecos;
        });
    };

    return (
        <div>
            <main className="mapas-container container">
                <form onSubmit={handleSubmit} className="mapas-form card p-4">
                    <p>Informe apenas o nome do local que vai visitar ou se preferir informações detalhadas informe o CEP.</p>
                    <p>Após montar sua rota, baixe o arquivo .txt</p>
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="nomeLocal" className="col-sm-2 col-form-label fw-bold">
                            Nome do Local:
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="nomeLocal"
                                className="form-control form-control-lg"
                                placeholder="Nome do Local"
                                value={novoEndereco.nomeLocal}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="cep" className="col-sm-2 col-form-label fw-bold">
                            CEP:
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="cep"
                                className={`form-control form-control-lg ${inputClass}`}
                                placeholder="CEP"
                                value={novoEndereco.cep}
                                onChange={handleChange}
                                onBlur={getCEP}
                            />
                            <div className={`${cepErrorClass}`}>
                                O CEP informado é inválido.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="street" className="col-sm-2 col-form-label fw-bold">
                            Rua:
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="street"
                                className="form-control form-control-lg"
                                placeholder="Rua"
                                value={novoEndereco.street}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="number" className="col-sm-2 col-form-label fw-bold">
                            Número:
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="number"
                                className="form-control form-control-lg"
                                placeholder="Número"
                                value={novoEndereco.number}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="neighborhood" className="col-sm-2 col-form-label fw-bold">
                            Bairro:
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="neighborhood"
                                className="form-control form-control-lg"
                                placeholder="Bairro"
                                value={novoEndereco.neighborhood}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="state" className="col-sm-2 col-form-label fw-bold">
                            Estado:
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="state"
                                className="form-control form-control-lg"
                                placeholder="Estado"
                                value={novoEndereco.state}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row align-items-center">

                        <label htmlFor="city" className="col-sm-2 col-form-label fw-bold">
                            Cidade:
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="city"
                                className="form-control form-control-lg"
                                placeholder="Cidade"
                                value={novoEndereco.city}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">
                        Cadastrar
                    </button>
                </form>
                {submitted && (
                    <div className="submitted-data card mt-4 p-4">
                        <h3>Dados Cadastrados:</h3>
                        {enderecos.map((endereco, index) => (
                            <div key={index}>
                                <p>
                                    {index + 1}. Local: {endereco.nomeLocal}
                                </p>
                                {endereco.cep && <p>CEP: {endereco.cep}</p>}
                                {endereco.street && <p>Rua: {endereco.street}</p>}
                                {endereco.number && <p>Número: {endereco.number}</p>}
                                {endereco.neighborhood && <p>Bairro: {endereco.neighborhood}</p>}
                                {endereco.state && <p>Estado: {endereco.state}</p>}
                                {endereco.city && <p>Cidade: {endereco.city}</p>}
                                {index !== enderecos.length - 1 && <hr />}
                                <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                                    Excluir
                                </button>
                            </div>
                        ))}
                        <button className="btn btn-primary mt-3" onClick={handleDownload}>
                            Baixar Dados
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Mapas;
