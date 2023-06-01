
import "../../css/reset.css";

import * as React from "react";
import {useContext} from "react";
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

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { UserContext } from '../../App.js'; 


    // context.user_idでuserのIDが取れるよ

    // navigate.push("移動したいパス")

/**
 * @component
 */
function AppBar(props) {

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  const context = useContext(UserContext)

  return (
    <>
    {context.isLogin ? 
        <div>
      {/* {pages[value]} */}
      <Box sx={{  }} ref={ref}>
        <CssBaseline />
        <Paper sx={{ color: "#00ff7f" , background: 'transparent', position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
          <BottomNavigation
              showLabels
            sx={{

              "& .Mui-selected": {
                color: "#00ff7f" // ボタンが選択された時のアイコン・テキストの色を白色に設定
              }
              ,background: 'transparent'

            }}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            } }
          >
            <BottomNavigationAction   
                component={Link}
                to="/home"
              sx={{ color: value === 0 ? "#00ff7f" : "#f2f2f2", backgroundColor: '#4f4f4f' , padding:"2px", borderRadius: "15px 0 0 15px" }} label="Home" size={2} icon={<Icon path={mdiHome}  />} />
            <BottomNavigationAction 
                component={Link}
                to="/training"
                sx={{ color: value === 1 ? "#00ff7f" : "#f2f2f2", backgroundColor: '#4f4f4f'  ,padding:"2px", borderRadius: "0 0 0 0"}} label="Trainging" icon={<Icon path={mdiArmFlex} size={2} />} />
            <BottomNavigationAction
                component={Link}
                to="/data"
                sx={{ color: value === 2 ? "#00ff7f" : "#f2f2f2", backgroundColor: '#4f4f4f'  ,padding:"2px", borderRadius: "0 0 0 0"}} label="Data" icon={<Icon path={mdiChartBar} size={2} />} />
            <BottomNavigationAction
                component={Link}
                to="/friend"
                sx={{ color: value === 3 ? "#00ff7f" : "#f2f2f2", backgroundColor: '#4f4f4f'  ,padding:"2px", borderRadius: "0 15px 15px 0"}} label="Friend" icon={<Icon path={mdiAccount} size={2} />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </div> : ""
}
    </>

  );
};

AppBar.propTypes = {
  // ...
};

export default AppBar;

