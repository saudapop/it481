import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableHeaders = [
  'CustomerID',
  'CompanyName',
  'ContactName',
  'ContactTitle',
  'Address',
  'City',
  'Region',
  'PostalCode',
  'Country',
  'Phone',
  'Fax',
];

export function CustomersTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {TableHeaders.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.CustomerID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {TableHeaders.map((header) => (
                <TableCell>{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
