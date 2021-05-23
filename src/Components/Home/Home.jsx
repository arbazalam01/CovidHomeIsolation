import { CssBaseline, Grid, Typography } from "@material-ui/core";
import React from "react";
import Cards from "../../Utilities/Cards/Cards";
import SideDrawer from "../../Utilities/SideDrawer/SideDrawer";
import Hospital from "../../Utilities/Hospital";

function Home() {
  return (
    <div>
      <CssBaseline>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {Hospital.map((item) => {
              return <Cards items={item} />;
              console.log(item.name, item);
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
