
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
import { mdiHome, mdiArmFlex, mdiAccount, mdiChartBar } from '@mdi/js';

import '../../css/AppBar.css';
import Home from '../pages/Home';

import Training from '../pages/Training';
import Friend from '../pages/Friend';
import Weight from '../pages/Weight';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

/**
 * @component
 */
function AppBar(props) {

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  const pages = [
    <Home />,
    <Training />,
    <Weight />,
    <Friend />,
  ];

  return (
    <div>
      {pages[value]}
      <Box sx={{ pb: 12 }} ref={ref}>
        <CssBaseline />
        <Paper sx={{ border: '4px solid #ff6347', borderRadius: '4px', position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            } }
          >
            <BottomNavigationAction sx={{ backgroundColor: '#f0f8ff' }} label="Home" icon={<Icon path={mdiHome} size={1} />} />
            <BottomNavigationAction sx={{ backgroundColor: '#f0f8ff' }} label="Trainging" icon={<Icon path={mdiArmFlex} size={1} />} />
            <BottomNavigationAction sx={{ backgroundColor: '#f0f8ff' }} label="Weight" icon={<Icon path={mdiChartBar} size={1} />} />
            <BottomNavigationAction sx={{ backgroundColor: '#f0f8ff' }} label="Friend" icon={<Icon path={mdiAccount} size={1} />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
};

AppBar.propTypes = {
  // ...
};

export default AppBar;
