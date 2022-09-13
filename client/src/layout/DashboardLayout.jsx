import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ArrowDown from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddIcon from "@mui/icons-material/AddBoxOutlined";
import KeyIcon from "@mui/icons-material/KeyOutlined";
import SnapshotIcon from "@mui/icons-material/ContentCopyOutlined";
import VolumeIcon from "@mui/icons-material/ViewListOutlined";
import { styled } from "@mui/material/styles";
import Logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const StyledListItem = styled(ListItem)({
  ".css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root": {
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#1144ff",
      color: "white",
      svg: {
        color: "white",
      },
    },
  },
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: "white",
    ".MuiListItemButton-root": {
      borderRadius: "10px",
      color: "white",
      backgroundColor: "#1144ff",
      svg: {
        color: "white",
      },
    },
  },
});

const dashboardItems = [
  {
    title: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    route: "/dashboard",
  },
  {
    title: "Instances",
    icon: <AddIcon color="inherit" />,
    route: "/instances",
  },
  {
    title: "Snapshots",
    icon: <SnapshotIcon color="inherit" />,
    route: "/snapshots",
  },
  {
    title: "SSH keys",
    icon: <KeyIcon color="inherit" />,
    route: "/ssh-keys",
  },
  {
    title: "Volume",
    icon: <VolumeIcon color="inherit" />,
    route: "/volume",
  },
];

const DashboardLayout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { pathname } = useLocation();

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{
          backgroundColor: "#f8f8f8",
          boxShadow: "none",
          color: "#0D2D51",
        }}
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <NotificationsNoneIcon />
            <Avatar sx={{ mx: 3 }} variant="rounded">
              <PersonIcon />
            </Avatar>

            <Button
              id="basic-button"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              User <ArrowDown />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseUserMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img src={Logo} alt="" />
        </Toolbar>
        <Divider />

        <List style={{ marginTop: "20px" }}>
          {dashboardItems.map((item) => {
            const selected = item.route === pathname;

            return (
              <Link key={item.title} to={item.route}>
                <StyledListItem selected={selected}>
                  <ListItemButton>
                    <ListItemIcon color="inherit">{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </StyledListItem>
              </Link>
            );
          })}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
