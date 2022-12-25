import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ListItem from './ListItem';
import MyButton from '../../UI/MyButton';

const List = () => {
  return (
    <div className='md:w-[80%] m-auto px-4 mt-10'>
    <div className='flex justify-between items-center my-5'>
      <div>
      <MyButton color='#29335C'>
        Yangi qo'shish
      </MyButton>
      </div>
    </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell>№</TableCell>
        <TableCell >Name</TableCell>
          <TableCell align="left">Position</TableCell>
          <TableCell align="left">Country</TableCell>
          <TableCell align="left">Region</TableCell>
          <TableCell align="left">City</TableCell>
          <TableCell align="left">dmkwl</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
         <ListItem/>
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default List