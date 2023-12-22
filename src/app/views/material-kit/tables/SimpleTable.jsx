import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
  },
  {
    name: "james cassegne",
    date: "8 january, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
];

const SimpleTable = () => {
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
          {subscribarList.map((subscriber, index) => (
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
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SimpleTable;
