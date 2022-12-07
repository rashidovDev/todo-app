import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {
    Edit3,
    Search,
    PlusCircle,
    Trash2,
    UserCheck,
    CheckCircle,
    XCircle,
 } from "react-feather";
 
 

const ListItem = () => {

  const developers = useSelector(state => state.developers.developers)

  return (
    <>
    {developers.map((developer, idx) => (
     <TableRow
            key={idx + 1}
            sx={{'&:last-child td, &:last-child th': { border: 0 } }}
          >
             <TableCell component="th" scope="row">
                {idx+1}
            </TableCell>
            <TableCell component="th" scope="row">
               {developer.name}
            </TableCell>
            <TableCell align="left">{developer.position}</TableCell>
            <TableCell align="left">{developer.country}</TableCell>
            <TableCell align="left">{developer.region}</TableCell>
            <TableCell align="left">{developer.city}</TableCell>
            <TableCell align="left">
                <button className='mr-5'>  <Edit3 color={"#189ED3"} size={16} /></button>
                <button> <Trash2 color={"#E63950"} size={16} /></button>
            </TableCell>
          </TableRow>
    ))}
    </>
  )
}

export default ListItem