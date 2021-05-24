import { Grid, Typography } from "@material-ui/core";

import React from "react";

function Header() {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h2" component="h2">
            Every Life Matters
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
