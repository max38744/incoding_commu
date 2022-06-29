import { Typography, AppBar, Toolbar, Button } from "@mui/material";
import { makeStyles } from "@mui/material";

import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <AppBar>
      <Typography variant = "h4">
        <Link to ="/">
          nav
        </Link>
      </Typography>
    </AppBar>
    </>
  );
};

export default Navbar;