import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Header({ user }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Button color="inherit">Home</Button>
        {user != null ? (
          <Button color="inherit">SignOut</Button>
        ) : (
          <Button color="inherit">SignIn</Button>
        )}

        <Button color="inherit">SignUp</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
