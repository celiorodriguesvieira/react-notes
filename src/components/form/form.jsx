import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormRegister() {
  return (
    <form>
      <TextField
        variant="outlined"
        id="name"
        label="Nome"
        fullWidth
        margin="dense"
      />

      <TextField
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
