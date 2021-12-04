import React, { useState } from "react";
import "../../style.css";

import { Button, Spinner } from "react-bootstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";

import schema from "../../schema";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";

function Formulario({ postData }) {
  const [juros] = useState(0.00517);

  async function onSubmit(values) {
    var normalButton = document.getElementById("normalButton");
    var loadButton = document.getElementById("loadButton");
    normalButton.classList.toggle("showButton");
    normalButton.classList.toggle("hideButton");
    loadButton.classList.toggle("showButton");
    await postData(values.nome, values.mensalidade, juros, values.tempo);
    window.open("#/resultado", "_self");
  }

  return (
    <div className="divFormulario">
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          nome: "",
          mensalidade: "",
          tempo: ""
        }}
      >
        {({ isValid }) => (
          <Form className="Formulario">
            <div>
              <label>Nome:</label>
              <Field name="nome" type="text" autoComplete="off" />
              <ErrorMessage name="nome">
                {() => <div className="divErro">*Digite um nome válido</div>}
              </ErrorMessage>
            </div>
            <div>
              <label>Mensalidade:</label>
              <Field name="mensalidade" type="text" autoComplete="off" />
              <ErrorMessage name="mensalidade">
                {() => <div className="divErro">*Digite um valor válido</div>}
              </ErrorMessage>
            </div>
            <div>
              <label>Período:</label>
              <Field name="tempo" as="select">
                <option value="" disabled>
                  Escolha uma opção
                </option>
                <option value="12">1 ano</option>
                <option value="24">2 ano</option>
                <option value="36">3 ano</option>
                <option value="48">4 ano</option>
                <option value="60">5 ano</option>
                <option value="72">6 ano</option>
                <option value="84">7 ano</option>
                <option value="96">8 ano</option>
                <option value="108">9 ano</option>
                <option value="120">10 ano</option>
              </Field>
              <ErrorMessage name="tempo">
                {() => <div className="divErro">*Escolha uma opção válida</div>}
              </ErrorMessage>
            </div>
            <div className="d-grid gap-2">
              <Button
                id="normalButton"
                size="lg"
                className="showButton"
                type="submit"
                disabled={!isValid}
              >
                Simular
              </Button>
              <Button id="loadButton" size="lg" className="hideButton" disabled>
                <Spinner animation="border" variant="light" />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Formulario);
