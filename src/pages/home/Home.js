import Area from "../../components/Area/Area";

import './home.scss';
import {Typography} from "@mui/material";

export default function Home () {
  return (
    <Area className='home'>
      <Typography variant="h6">
        Добро пожаловать!
      </Typography>
    </Area>
  )
}