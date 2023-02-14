// import logo from './logo.svg';
import './App.css';
import { CardDesign } from './Component/CardDesign';
// import Cards from './Component/Cards';
// import Sample from './Component/Sample';
// import Practcards from './Component/Practcards';
// import Collegelisting from './Component/Collegelisting';
// import Cardshover from './Component/Cardshover';
// import Carousel from './Component/Carousel';

// -----------------------------------------------
import {  Paper , Switch} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import ThemeProvider from './theme';
import Button from './Component/comp/Buttons/Button';
import OutlineButton from './Component/comp/Buttons/BrouchureButton';
import { Stack } from '@mui/system';
import ApplyButton from './Component/comp/Buttons/ApplyButton';
import AdmissionButton from './Component/comp/Buttons/AdmissionButton';
// import SettingMode from './Component/mode/SettingMode';
// import {isLight} from './theme'




function App({isLight}, props) {
  const [darkTheme, setDarkTheme] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      mode: darkTheme ? 'dark' : 'light'
    }
  })

  return (


    <>
      {/* <ThemeProvider theme={theme} > */}
      <Stack justifyContent={'center'} alignItems='center' height={'100vh'} direction='column' >
        <CssBaseline />
        <Paper sx={{ background:'paper' , justifyContent:"space-between" , display:"grid" }}>
          <Button > Hello button </Button>
          <OutlineButton >Outline</OutlineButton>
          <ApplyButton sx={{ color:"" }} />
          <AdmissionButton />

          {/* <Switch checked={darkTheme} onChange={() => { setDarkTheme(!darkTheme) }} sx={{ position:"fixed"  , zIndex:5 }} /> */}
          {/* <SettingMode /> */}
          {/* <CardDesign /> */}
        </Paper>
        </Stack>
      {/* </ThemeProvider> */}
    </>

  );
}

export default App;
