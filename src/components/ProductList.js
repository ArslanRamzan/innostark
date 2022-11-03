import React, { useContext, useState, useEffect } from "react";
import { ProductListingContext } from "../context";
import { Table } from '@mui/material';
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Paper } from "@mui/material";
const ProductList = () => {
  const contextValue = useContext(ProductListingContext);
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchedVal) => {
    setSearched(searchedVal)
    const filteredRows = contextValue.products.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };
  useEffect(() => {
    setRows(contextValue.products);
    
  }, [contextValue.products]);
  const getSearchBar = () => {
    return <input
      value={searched}
      onChange={(e) => requestSearch(e.target.value)}
      className="input-text"
      style={{
        width: '100%',
        margin: '20px 0px',
        height: '32px'
      }}
      placeholder="Search Items..."
    />
  }
  const getTableData = () => {
    return <Paper>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{fontWeight: "bold"}}>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description&nbsp;</TableCell>
              <TableCell align="right">Price&nbsp;</TableCell>
              <TableCell align="right">Date&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  }
  return (
    <>
        {getSearchBar()}
        {getTableData()}
    </>
  );
}

export default ProductList;
