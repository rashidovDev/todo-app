import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ListItem from './ListItem';
import MyButton from '../../utils/MyButton';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'react-feather';

const List = () => {
  return (
    <div className='md:w-[80%] m-auto px-4 mt-10'>
    <div className='flex justify-between items-center my-5'>
      <div>
        <Link to="/addlist">
        <MyButton class='add' icon={<PlusCircle size={16}/>}>
        Yangi qo'shish
      </MyButton>
        </Link>
      </div>
    </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell>№</TableCell>
        <TableCell >Ism</TableCell>
          <TableCell align="left">Yosh</TableCell>
          <TableCell align="left">Email</TableCell>
          <TableCell align="left">Kompaniya</TableCell>
          <TableCell align="left">Pozitsiya</TableCell>
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