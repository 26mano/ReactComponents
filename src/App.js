
import './App.css';

// -----------------------------------------------
import {  Paper , Switch} from '@mui/material';
import Button from './Component/comp/Buttons/Button';
import OutlineButton from './Component/comp/Buttons/BrouchureButton';
import { Stack } from '@mui/system';
import ApplyButton from './Component/comp/Buttons/ApplyButton';
import AdmissionButton from './Component/comp/Buttons/AdmissionButton';





function App() {

  return (


    <>
      <Stack justifyContent={'center'} alignItems='center' height={'100vh'} direction='column' >
        <Paper sx={{ background:'paper' , justifyContent:"space-between" , display:"grid" }}>
          <Button > Hello button </Button>
          <OutlineButton />
          <ApplyButton sx={{ color:"" }} />
          <AdmissionButton />
        </Paper>
        </Stack>
    </>

  );
}

export default App;
