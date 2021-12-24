import { React, useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormRegister({ send, validCPF }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCPF] = useState("");
  const [promotion, setPromotion] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [error, setError] = useState({ cpf: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        send({ name, surname, cpf, promotion, newsletter });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        variant="outlined"
        id="name"
        label="Nome"
        fullWidth
        margin="dense"
      />
      <TextField
        value={surname}
        onChange={(event) => {
          setSurname(event.target.value);
        }}
        variant="outlined"
        id="surname"
        label="Sobrenome"
        fullWidth
        margin="dense"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        onBlur={(event) => {
          const isvalid = validCPF(event.target.value);
          setError({ cpf: isvalid });
        }}
        error={!error.cpf.valid}
        helperText={error.cpf.text}
        variant="outlined"
        id="cpf"
        label="CPF"
        fullWidth
        margin="dense"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promotion}
            onChange={(event) => {
              setPromotion(event.target.checked);
            }}
            name="promotion"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Newsletter"
        control={
          <Switch
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
            name="newsletter"
            color="primary"
          />
        }
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormRegister;
