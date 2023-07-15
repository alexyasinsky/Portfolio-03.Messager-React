import { useEffect, useRef, useState } from "react";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";


export const ProfileForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    border: '1px solid grey',
    margin: '20px auto'
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <Typography variant='h6'>Изменить ник</Typography>
      <TextField value={value} onChange={handleChange} inputRef={inputRef} />
      <br/>
      <br/>
      <Button type="submit" variant="contained">
        Подтвердить
      </Button>
    </form>
  );
};