import {Paper, Typography} from "@mui/material";
import "./area.scss";

export default function Area({children, height}) {
  let style = {
    height: height,
  }
  return (
    <Paper elevation={3} className="area" style={style}>
      <Typography variant="h5">
        {children}
      </Typography>
    </Paper>
  )
}