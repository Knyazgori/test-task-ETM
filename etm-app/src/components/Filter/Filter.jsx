import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAC } from '../../redux/actionCreators/filterAC';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

const options = ['По возрастанию цены', 'По убыванию цены'];

function Filter(props) {
  const filter = useSelector(state => state.filterReducer.filter)
  const dispatch = useDispatch()

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
      margin: '10px auto 50px',
      borderRadius: '10px',
      color: 'red',
      width: '90%',
    }}>
      <h1>Филтер</h1>
      <Autocomplete
        value={filter}
        onChange={(event, newValue) => {
          dispatch(changeFilterAC(newValue))
        }}
        sx={{ width: 250 }}
        disablePortal
        id="combo-box-demo"
        options={options}
        renderInput={(params) => <TextField {...params} label="filter" />}
      />
    </Box>
  );
}

export default Filter;
