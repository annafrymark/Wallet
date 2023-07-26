// import Backdrop from '@mui/material/Backdrop';
import Backdrop from '@mui/material/Backdrop';
import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <FallingLines color="inherit" />
    </Backdrop>
  );
};
