import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const PaginationTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="center">Record Type</TableCell>
            <TableCell align="center">Record Number</TableCell>
            <TableCell align="center">Account Number</TableCell>
            <TableCell align="center">BACK OFFICE Account Type</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Debit/Credit Indicator</TableCell>
            <TableCell align="center">Currency Code</TableCell>
            <TableCell align="center">Effective Date</TableCell>
            <TableCell align="center">Reference</TableCell>
            <TableCell align="center">BACK OFFICE Transaction Type</TableCell>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">Corresponding Account</TableCell>
            <TableCell align="center">Front End Transaction Type</TableCell>
            <TableCell align="center">Transaction Place</TableCell>
            <TableCell align="center">Optional #1.</TableCell>
            <TableCell align="center">Optional #2.</TableCell>
            <TableCell align="center">Optional #3.</TableCell>
            <TableCell align="center">Optional #4.</TableCell>
            <TableCell align="center">Optional #5,</TableCell>
            <TableCell align="center">Optional #6</TableCell>
            <TableCell align="center">Optional #7.</TableCell>
            <TableCell align="center">Optional #8.</TableCell>
            <TableCell align="center">Transactions group ID</TableCell>
            <TableCell align="center">ISO Terminal ID.</TableCell>
            <TableCell align="center">ISO Merchant ID. </TableCell>
            <TableCell align="center">Retrieval Reference Number</TableCell>
            <TableCell align="center">System Trace Audit Number</TableCell>
            <TableCell align="center">Card Contract ID </TableCell>
            <TableCell align="center">
              Debit/Credit Contract Indicator
            </TableCell>
            <TableCell align="center">Internal сard Type</TableCell>
            <TableCell align="right">Acquirer Bin </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">ID</TableCell>
                <TableCell align="center">Record Type</TableCell>
                <TableCell align="center">Record Number</TableCell>
                <TableCell align="center">Account Number</TableCell>
                <TableCell align="center">BACK OFFICE Account Type</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Debit/Credit Indicator</TableCell>
                <TableCell align="center">Currency Code</TableCell>
                <TableCell align="center">Effective Date</TableCell>
                <TableCell align="center">Reference</TableCell>
                <TableCell align="center">
                  BACK OFFICE Transaction Type
                </TableCell>
                <TableCell align="center">User ID</TableCell>
                <TableCell align="center">Corresponding Account</TableCell>
                <TableCell align="center">Front End Transaction Type</TableCell>
                <TableCell align="center">Transaction Place</TableCell>
                <TableCell align="center">Optional #1.</TableCell>
                <TableCell align="center">Optional #2.</TableCell>
                <TableCell align="center">Optional #3.</TableCell>
                <TableCell align="center">Optional #4.</TableCell>
                <TableCell align="center">Optional #5,</TableCell>
                <TableCell align="center">Optional #6</TableCell>
                <TableCell align="center">Optional #7.</TableCell>
                <TableCell align="center">Optional #8.</TableCell>
                <TableCell align="center">Transactions group ID</TableCell>
                <TableCell align="center">ISO Terminal ID.</TableCell>
                <TableCell align="center">ISO Merchant ID. </TableCell>
                <TableCell align="center">Retrieval Reference Number</TableCell>
                <TableCell align="center">System Trace Audit Number</TableCell>
                <TableCell align="center">Card Contract ID </TableCell>
                <TableCell align="center">
                  Debit/Credit Contract Indicator
                </TableCell>
                <TableCell align="center">Internal сard Type</TableCell>
                <TableCell align="right">Acquirer Bin </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={data.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
};

export default PaginationTable;
