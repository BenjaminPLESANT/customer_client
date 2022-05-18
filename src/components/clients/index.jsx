import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";
import React from "react";

const Client = () => {
  const [data, setData] = useState([]);
  console.log(data, "data");

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:8000/customer");
    const res = await response.json();
    setData(res);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Firstname</TableCell>
              <TableCell align="right">Lastname</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phonenumber</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((customer) => (
              <TableRow
                key={customer.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{customer.firstName}</TableCell>
                <TableCell align="right">{customer.lastName}</TableCell>
                <TableCell align="right">{customer.email}</TableCell>
                <TableCell align="right">{customer.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Client;
