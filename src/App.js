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
      <FormRegister />
    </Container>
  );
}

export default App;
