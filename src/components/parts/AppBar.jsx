import "css/reset.css";

import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import HomeIcon from "@mui/icons-material/Home";

import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import Icon from "@mdi/react";
import {
  mdiHome,
  mdiArmFlex,
  mdiAccount,
  mdiChartBar,
  mdiEarthPlus,
} from "@mdi/js";

import "../../css/Appbar.css";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { UserContext } from "../../App.js";

// context.user_idでuserのIDが取れるよ

// navigate.push("移動したいパス")

/**
 * @component
 */
function AppBar(props) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  const context = useContext(UserContext);
  const appBarbgColor = "#4B555C";//"#6400B3"; //'#4f4f4f'
  return (
    <>
      {context.isLogin ? (
        <div>
          {/* {pages[value]} */}
          <Box sx={{}} ref={ref}>
            <CssBaseline />
            <Paper
              sx={{
                color: "#00ff7f",
                background: "transparent",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
              }}
              elevation={5}
            >
              <BottomNavigation
                showLabels
                sx={{
                  "& .Mui-selected": {
                    color: "#00ff7f", // ボタンが選択された時のアイコン・テキストの色を白色に設定
                  },
                  background: "transparent",
                }}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  component={Link}
                  to="/home"
                  sx={{
                    color: value === 0 ? "#00ff7f" : "#f2f2f2",
                    backgroundColor: appBarbgColor,
                    padding: "0px",
                    borderRadius: "15px 0 0 15px",
                    minWidth: "40px",
                  }}
                  label="Home"
                  icon={<Icon path={mdiHome} size={1} />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/training"
                  sx={{
                    color: value === 1 ? "#00ff7f" : "#f2f2f2",
                    backgroundColor: appBarbgColor,
                    padding: "0px",
                    borderRadius: "0 0 0 0",
                    minWidth: "40px",
                  }}
                  label="Trainging"
                  icon={<Icon path={mdiArmFlex} size={1} />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/data"
                  sx={{
                    color: value === 2 ? "#00ff7f" : "#f2f2f2",
                    backgroundColor: appBarbgColor,
                    padding: "0px",
                    borderRadius: "0 0 0 0",
                    minWidth: "40px",
                  }}
                  label="Data"
                  icon={<Icon path={mdiChartBar} size={1} />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/friend"
                  sx={{
                    color: value === 3 ? "#00ff7f" : "#f2f2f2",
                    backgroundColor: appBarbgColor,
                    padding: "0px",
                    borderRadius: "0 0 0 0",
                    minWidth: "40px",
                  }}
                  label="Friend"
                  icon={<Icon path={mdiEarthPlus} size={1} />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/mypage"
                  sx={{
                    color: value === 4 ? "#00ff7f" : "#f2f2f2",
                    backgroundColor: appBarbgColor,
                    padding: "0px",
                    borderRadius: "0 15px 15px 0",
                    minWidth: "40px",
                  }}
                  label="Mypage"
                  icon={<Icon path={mdiAccount} size={1} />}
                />
              </BottomNavigation>
            </Paper>
          </Box>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

AppBar.propTypes = {
  // ...
};

export default AppBar;
