import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function LivroDados(props) {
  const opcoes = controleEditora
    .getEditoras()
    .map((item) => (
      <option value={item.codEditora} key={item.codEditora}>
        {item.nomeEditora}
      </option>
    ));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(0);

  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    setCodEditora(parseInt(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();

    const livro = {
      codigo: 0,
      codEditora,
      titulo,
      resumo,
      autores: autores.split("\n"),
    };

    setTitulo("");
    setResumo("");
    setAutores("");

    controleLivro.incluir(livro);
    navigate("/lista");
  };

  return (
    <main>
      <form className="form-control" onSubmit={incluir}>
        <h1>Cadastro de Livro</h1>
        <div className="form-group">
          <label htmlFor="titulo">Título do livro</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="titulo"
            onChange={(evento) => {
              setTitulo(evento.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo do livro</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="resumo"
            onChange={(evento) => {
              setResumo(evento.target.value);
            }}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="editora">Editora</label>
          <select
            name="editora"
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={tratarCombo}
            required
          >
            <option></option>
            {opcoes}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="autores">Quais são os autores?</label>
          <textarea
  name="autores"
  className="form-control"
  id="exampleFormControlTextarea1"
  rows="2"
  onChange={(evento) => {
    setAutores(evento.target.value);
  }}
  required
></textarea>
        </div>

        <button type="submit" className="btn btn-danger">
          Salvar
        </button>
      </form>
    </main>
       
  );
}

export default LivroDados;