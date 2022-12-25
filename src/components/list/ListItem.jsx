import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
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
import { deleteDeveloper } from '../../store/developerReducer';
 
 

const ListItem = () => {

  const developers = useSelector(state => state.developers.developers)
  const dispatch = useDispatch()

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
            <TableCell align="left">{developer.age}</TableCell>
            <TableCell align="left">{developer.email}</TableCell>
            <TableCell align="left">{developer.company}</TableCell>
            <TableCell align="left">{developer.position}</TableCell>
            <TableCell align="left" sx={{ width : "150px"}}>
              <div className='flex'>
                <button className='mr-5'> <Edit3 color={"#189ED3"} size={16} /></button>
                <button onClick={() => dispatch(deleteDeveloper(developer.id))}> <Trash2 color={"#E63950"} size={16} /></button>
              </div>
            </TableCell>
          </TableRow>
    ))}
    </>
  )
}

export default ListItem