import * as Yup from "yup";

export default Yup.object().shape({
  nome: Yup.string().min(3).required(),
  mensalidade: Yup.number().required().positive().integer(),
  tempo: Yup.number().required().positive().integer()
});
