import {Paper, Typography} from "@mui/material";
import "./area.scss";

export default function Area({children, height, justText}) {
  let style = {
    height: height,
  }

  const renderFunc = () => {
    if (justText) {
      return (
        <Typography variant="h5">
          {children}
        </Typography>
      )
    } else {
      return children
    }
  }

  return (
    <Paper elevation={3} className="area" style={style}>
      {renderFunc()}
    </Paper>
  )
}