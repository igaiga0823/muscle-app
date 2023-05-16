
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

import '../../css/Appbar.css';
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
        <Paper sx={{ border: '0px solid #4a4a4a', opacity: "0.9", borderRadius: '20px', position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            } }
            sx={{
              color: "#00ff7f" ,
              "& .Mui-selected": {
                color: "#00ff7f" // ボタンが選択された時のアイコン・テキストの色を白色に設定
              }
            }}
          >
            <BottomNavigationAction sx={{ backgroundColor: '#4a4a4a' , color: "#f2f2f2" ,padding:"5px", borderRadius: "10px 0 0 10px" }} label="Home" icon={<Icon path={mdiHome} size={2} />} />
            <BottomNavigationAction sx={{ backgroundColor: '#4a4a4a' , color: "#f2f2f2" ,padding:"5px", borderRadius: "0 0 0 0"}} label="Trainging" icon={<Icon path={mdiArmFlex} size={2} />} />
            <BottomNavigationAction sx={{ backgroundColor: '#4a4a4a' , color: "#f2f2f2" ,padding:"5px", borderRadius: "0 0 0 0"}} label="Weight" icon={<Icon path={mdiChartBar} size={2} />} />
            <BottomNavigationAction sx={{ backgroundColor: '#4a4a4a' , color: "#f2f2f2" ,padding:"5px", borderRadius: "0 10px 10px 0"}} label="Friend" icon={<Icon path={mdiAccount} size={2} />} />
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
