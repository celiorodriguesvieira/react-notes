import "./App.css";
import FormRegister from "./components/form/form";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component={"article"} maxWidth="sm">
      <Typography variant="h1" component="h2">
        Formulário de Cadastro
      </Typography>
      <FormRegister />
    </Container>
  );
}

export default App;
