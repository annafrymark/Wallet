import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/joy/CircularProgress';

export const Loader = ({ visable }) => {
  return visable ? (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={visable}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : null;
};
