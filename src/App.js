import "./App.css";
import FormRegister from "./components/form/form";
import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto/300.css";

function App() {
  return (
    <Container component={"article"} maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormRegister send={sendForm} validCPF={validCPF} />
    </Container>
  );
}
function sendForm(data) {
  console.log(data);
}

function validCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "CPF deve ter 11 digitos!" };
  } else {
    return { valid: true, text: "" };
  }
}
export default App;
