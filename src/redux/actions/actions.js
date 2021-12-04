import { POST_DATA, POST_ERROR } from "../types";
import axios from "axios";

export const postData = (nome, mensalidade, juros, tempo) => async (
  dispatch
) => {
  try {
    const res = await axios.post("https://api.mathjs.org/v4/", {
      expr: `${mensalidade}* (((1 + ${juros}) ^ ${tempo} - 1) / ${juros})`
    });

    var resultado = parseFloat(res.data.result);
    resultado = resultado.toFixed(2);

    dispatch({
      type: POST_DATA,
      payload: {
        nome: nome,
        mensalidade: mensalidade,
        tempo: tempo,
        resultado: resultado
      }
    });
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: console.log(e)
    });
  }
};
