import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import { TABLE_HEADERS } from '../constants';

export function GenericTable({ data, currentTable }) {
  const TableHeaders = TABLE_HEADERS[currentTable];

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
              key={row[TableHeaders[0]]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {TableHeaders.map((header) => (
                <TableCell>
                  <Tooltip title={String(row[header])}>
                    <div>{String(row[header]).slice(0, 30)}</div>
                  </Tooltip>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
