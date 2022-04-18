import {Paper} from "@mui/material";


export default function Area ({children, className}) {
  return (
    <Paper elevation={3} className={className}>
      {children}
    </Paper>
  )
}