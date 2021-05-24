import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  headrow: {
    fontSize: 25,
  },
});

function RightSidebar() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((res) => {
        console.log(res);
        setRows(res.data.data.regional);
      })
      .catch((err) => {
        console.log(err, "Hello");
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headrow}>State</TableCell>
            <TableCell className={classes.headrow} align="right">
              Total Cases&nbsp;
            </TableCell>
            <TableCell className={classes.headrow} align="right">
              Deaths&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {row.loc}
              </TableCell>
              <TableCell align="right">{row.confirmedCasesIndian}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RightSidebar;
