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
import MyInput from '../../utils/MyInput';
import { useSelector } from 'react-redux';

const List = () => {
  
  const developers = useSelector(state => state.developers.developers)
  const [search, setSearch] = React.useState('')

  const setDevelopers = developers.filter(developer => developer.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='md:w-[80%] m-auto px-4 mt-10'>
    <div className='flex md:justify-between items-center my-5'>
      <div className=''>
        <Link to="/addlist">
        <MyButton class='add' icon={<PlusCircle size={16}/>}>
        Yangi qo'shish
      </MyButton>
        </Link>
      </div>
      <div>
      <input 
        className='border w-[160px] md:w-[220px] text-[14px] border-[#DEE2E6] ml-20 outline-[#407BFF] px-3 py-[6px]'
      placeholder="Izlash..."
      value = {search}
      onChange = {e => setSearch(e.target.value)}
      />
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
         <ListItem developers={setDevelopers}/>
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default List