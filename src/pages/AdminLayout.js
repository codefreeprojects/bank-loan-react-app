import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
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
import { useAuthAdmin } from "../services/admin-service";

const drawerWidth = 240;
export const AdminLayout = () => {
  const router = useNavigate();
  const onLogout = () => {
    sessionStorage.clear();
    router("/");
  };
  const isValidAuth = useAuthAdmin();
  if (!isValidAuth) {
    sessionStorage.clear();
    return <Navigate to="/" />;
  }
  return (
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
              <ListItemButton onClick={() => router("/admin/employee-list")}>
                <ListItemIcon>
                  <GroupOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={"All Employees"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router("/admin/add-employee")}>
                <ListItemIcon>
                  <GroupAddOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={"Add Employee"} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => router("/admin/add-loan-type")}>
                <ListItemIcon>
                  <StickyNote2Icon />
                </ListItemIcon>
                <ListItemText primary={"Loan Type"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => router("/admin/view-loan-applications")}
              >
                <ListItemIcon>
                  <NoteAltIcon />
                </ListItemIcon>
                <ListItemText primary={"Loan Applications"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router("/admin/view-payments")}>
                <ListItemIcon>
                  <CurrencyExchangeIcon />
                </ListItemIcon>
                <ListItemText primary={"Payments"} />
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
  );
};
