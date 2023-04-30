import "./a.css";
import "../../css/reset.css";

import * as React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import Icon from '@mdi/react';
import { mdiArmFlex, mdiAccount, mdiChartBar } from '@mdi/js';



const AppBar1 = (props) => {

    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

  return (
    <div>
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon  />} />
          <BottomNavigationAction label="Trainging" icon={<Icon path = {mdiArmFlex} size={1}/>} />
          <BottomNavigationAction label="Weight" icon={<Icon path={mdiChartBar} size={1}/>} />
          <BottomNavigationAction label="MyPage" icon={<Icon path = {mdiAccount} size={1} />} />
        </BottomNavigation>
      </Paper>
    </Box>
    </div>
  );
};

export default AppBar1;
