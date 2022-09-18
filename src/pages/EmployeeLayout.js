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
import { useAuthEmployee } from "../services/admin-service";

const employeeTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

const drawerWidth = 240;
export const EmployeeLayout = () => {
  const router = useNavigate();
  const onLogout = () => {
    sessionStorage.clear();
    router("/");
  };
  const isValidAuth = useAuthEmployee();
  if (!isValidAuth) {
    sessionStorage.clear();
    return <Navigate to="/" />;
  }
  return (
    <ThemeProvider theme={employeeTheme}>
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
                  onClick={() => router("/employee/view-loan-applications")}
                >
                  <ListItemIcon>
                    <NoteAltIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Loan Applications"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => router("/employee/customer-list")}
                >
                  <ListItemIcon>
                    <GroupOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Customer List"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => router("/employee/add-customer")}
                >
                  <ListItemIcon>
                    <GroupAddOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Add Customer"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => router("/employee/add-address")}>
                  <ListItemIcon>
                    <MapsHomeWorkIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Add Address"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => router("/employee/borrower-list")}
                >
                  <ListItemIcon>
                    <StickyNote2Icon />
                  </ListItemIcon>
                  <ListItemText primary={"Borrowers List"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => router("/employee/make-payment")}
                >
                  <ListItemIcon>
                    <CurrencyExchangeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Make Payment"} />
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
