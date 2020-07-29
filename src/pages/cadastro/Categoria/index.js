import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handler(infoDoEvento){
    const { getAttribute, value} = infoDoEvento.target
    setValue(
     getAttribute('name'), 
     value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoDoEvento) {
        infoDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>
       
       <FormField 
        label="Nome da categoria"
        type= "text"
        name="nome"
        value = {values.nome}
        onChange={handler}
       />

        <div>
          <label>
            Descrição da Categoria:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handler}
            />
          </label>
        </div>

        <FormField 
        label="Cor da categoria"
        type= "color"
        name="cor"
        value = {values.cor}
        onChange={handler}
       />

        <button>
          Cadastrar
        </button>
      </form>

            <ul>
              {categorias.map((categoria, indice) => {
                return(
                  <li key={`${categoria}${indice}`}>
                    {categoria.nome}
                    {categoria.descricao}
                    {categoria.cor}
                  </li>
                )
              })}
            </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;