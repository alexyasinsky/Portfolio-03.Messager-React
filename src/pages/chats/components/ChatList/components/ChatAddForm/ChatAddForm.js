import {Button, Grid, TextField} from "@mui/material";


export default function ChatAddForm () {

  function addBuddy() {

  }

  return (
    <Grid container direction='column' rowSpacing={2}>
      <Grid item>
        <TextField
          label="Введите ник"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button
          onClick={addBuddy}
          variant="contained"
        >
          Добавить
        </Button>
      </Grid>
    </Grid>
  )
}