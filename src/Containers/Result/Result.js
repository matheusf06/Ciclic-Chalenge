import React from "react";
import "../../style.css";

import { Button } from "react-bootstrap";

import { connect } from "react-redux";

function Result({ nome, mensalidade, tempo, resultado }) {
  const voltar = () => {
    window.open("#/", "_self");
  };
  return (
    <div className="wrapper">
      <div className="divResultado">
        <h1>Olá {nome}!</h1>
        <p>
          Juntando R$ {mensalidade} todo mês, você terá{" "}
          <span>R$ {resultado}</span> em {tempo / 12} anos.
        </p>
        <div className="d-grid gap-2">
          <Button size="lg" type="submit" onClick={() => voltar()}>
            Simular Novamente
          </Button>
        </div>
      </div>
      <div className="bannerResultado" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  nome: state.nome,
  mensalidade: state.mensalidade,
  tempo: state.tempo,
  resultado: state.resultado
});

export default connect(mapStateToProps, null)(Result);
