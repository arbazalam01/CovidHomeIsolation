import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

function SideDrawer() {
  const [covid, setCovid] = useState([]);
  const [totalcase, setTotalcase] = useState("");
  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((res) => {
        console.log(res);
        setTotalcase(res.data.data.summary.total);
        setCovid(res.data.data.regional);
      })
      .catch((err) => {
        console.log(err, "Hello");
      });
  }, []);
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item sm={6}>
          <Typography gutterBottom variant="h5" component="h2">
            Total Covid Case: {totalcase}
          </Typography>
        </Grid>
      </Grid>

      {covid.map((item) => {
        return (
          <Grid item sm={12}>
            <Typography variant="h5" component="h5">
              State: {item.loc}
              Covid Case: {item.totalConfirmed}
            </Typography>
          </Grid>
        );
      })}
    </div>
  );
}

export default SideDrawer;
