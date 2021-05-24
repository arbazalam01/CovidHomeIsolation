import { CssBaseline, Grid, Typography } from "@material-ui/core";
import React from "react";
import Cards from "../../Utilities/Cards/Cards";
import Hospital from "../../Utilities/Hospital";
import RightSidebar from "../RightSidebar/RightSidebar";
import { makeStyles } from "@material-ui/core/styles";

function Home() {
  return (
    <div>
      <CssBaseline>
        <Grid container spacing={2} style={{ margin: 2 }}>
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
            <RightSidebar />
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
}

export default Home;
