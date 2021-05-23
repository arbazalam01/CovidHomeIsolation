import { CssBaseline, Grid, Typography } from "@material-ui/core";
import React from "react";
import Cards from "../../Utilities/Cards/Cards";
import SideDrawer from "../../Utilities/SideDrawer/SideDrawer";
import Hospital from "../../Utilities/Hospital";

function Home() {
  return (
    <div>
      <CssBaseline>
        <Grid container spacing={2}>
          <Grid container xs={12} sm={6} spacing={3}>
            {Hospital.map((item, key) => {
              return (
                <Grid item xs={12} sm={6}>
                  <Cards items={item} key={key} />
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={6}>
            <SideDrawer />
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
}

export default Home;
