import { Typography, AppBar, Toolbar, Button } from "@mui/material";
import { makeStyles } from "@mui/material";

import {Link} from "react-router-dom"

const useStyles = makeStyles({
  linkStyle : {
    color : "#fafafa"
  },
});

const Navbar = () => {
  const classes = useStyles()
  return (
    <>
    <AppBar>
      <Typography variant = "h4">
        <Link className = {classes.linkStyle} to ="/">
          nav
        </Link>
      </Typography>
    </AppBar>
    </>
  );
};

export default Navbar;