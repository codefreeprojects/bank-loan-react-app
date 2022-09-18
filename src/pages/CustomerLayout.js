import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, red } from "@mui/material/colors";

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import { useAuthCustomer } from "../services/admin-service";

const customerTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const drawerWidth = 240;
export const CustomerLayout = () => {
  const router = useNavigate();
  const onLogout = () => {
    sessionStorage.clear();
    router("/");
  };
  const isValidAuth = useAuthCustomer();
  if (!isValidAuth) {
    sessionStorage.clear();
    return <Navigate to="/" />;
  }
  return (
    <ThemeProvider theme={customerTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Bank Loan Management
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => router("/customer/edit-profile")}
                >
                  <ListItemIcon>
                    <NoteAltIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Edit Profile"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => router("/customer/loan-types")}>
                  <ListItemIcon>
                    <GroupOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Loan Types"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => router("/customer/emi-details")}>
                  <ListItemIcon>
                    <GroupAddOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"EMI Details"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => router("/customer/apply-loan")}>
                  <ListItemIcon>
                    <StickyNote2Icon />
                  </ListItemIcon>
                  <ListItemText primary={"Apply for Loan"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => router("/customer/documents-required")}
                >
                  <ListItemIcon>
                    <CurrencyExchangeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Documents"} />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />

            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={onLogout}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
