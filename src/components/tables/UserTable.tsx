import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

 
const UserTable = props => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Aniversario</StyledTableCell>
            <StyledTableCell >endereco</StyledTableCell>
            <StyledTableCell >Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {props.users != null && (
        props.users.map(user => (
          <StyledTableRow  key={user.email}> 
            <StyledTableCell >{user.name}</StyledTableCell>
            <StyledTableCell >{user.email}</StyledTableCell>
            <StyledTableCell >{user.birth_date}</StyledTableCell>
            <StyledTableCell >{user.address}</StyledTableCell>
            <StyledTableCell >
              <EditIcon 
                onClick={() => {
                  props.editRow(user)
                }} 
              >
                Edit
              </EditIcon>
              <DeleteIcon 
                onClick={() => props.deleteUser(user.email)}                
              >
                Delete
              </DeleteIcon>
            </StyledTableCell>
          </StyledTableRow>
        ))
      )  }
    </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable