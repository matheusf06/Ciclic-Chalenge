import { POST_DATA } from "../types";

const initialState = {
  nome: "",
  mensalidade: 0,
  tempo: 0,
  resultado: 0,
  loading: true
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_DATA:
      return {
        ...state,
        nome: payload.nome,
        mensalidade: payload.mensalidade,
        tempo: payload.tempo,
        resultado: payload.resultado,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
