import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  RevenueWrapper,
  RevenueHeadingText,
  StatsWrapper,
} from "./Revenue.style";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Revenue = () => {
  return (
    <RevenueWrapper>
      <RevenueHeadingText>Revenue</RevenueHeadingText>
      <p style={{ color: "#A5A5A5" }}>Check your performance reports</p>
      <StatsWrapper>
        {/* <h2
          style={{
            margin: "0px",
            fontWeight: "bold",
            paddingBottom: "30px",
            borderBottom: "2px solid #F8F9FA",
          }}
        >
          Stats For this week
        </h2> */}
        <TableContainer>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#6F6E71" }}>Booking ID</TableCell>
                <TableCell sx={{ color: "#6F6E71" }}>Transaction ID</TableCell>
                <TableCell sx={{ color: "#6F6E71" }}>Paid</TableCell>
                <TableCell sx={{ color: "#6F6E71" }}>Remaining</TableCell>
                <TableCell sx={{ color: "#6F6E71" }}>Booking Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#F8F9FA" }}>
              {rows.map((row) => (
                <TableRow
                  sx={
                    {
                      // borderRadius: "15px",
                      // marginBottom: "10px",
                      // border: "1px solid red",
                    }
                  }
                  key={row.name}
                >
                  <TableCell
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      // border: "1px solid red",
                      // borderTopLeftRadius: "10px",
                      // borderBottomLeftRadius: "10px",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                    {row.calories}
                  </TableCell>
                  <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                    {row.fat}
                  </TableCell>
                  <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                    {row.carbs}
                  </TableCell>
                  <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/*  */}
      </StatsWrapper>
    </RevenueWrapper>
  );
};

export default Revenue;
