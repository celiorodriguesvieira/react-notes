import { React, useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormRegister() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name, surname);
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
        variant="outlined"
        id="CPF"
        label="CPF"
        fullWidth
        margin="dense"
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" color="primary" defaultChecked />}
      />
      <FormControlLabel
        label="Newsletter"
        control={<Switch name="newsletter" color="primary" defaultChecked />}
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormRegister;
