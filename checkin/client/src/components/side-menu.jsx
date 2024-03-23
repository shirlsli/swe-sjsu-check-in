import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TabletIcon from "@mui/icons-material/Tablet";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SideMenu() {
  return (
    <Drawer
      anchor="left"
      BackdropProps={{ invisible: true }}
      PaperProps={{
        sx: {
          backgroundColor: "#9370DB",
          color: "#ffffff",
          width: 280,
          fontSize: "1.875rem",
          fontWeight: "500",
          overflow: "hidden",
        },
      }}
      variant="permanent"
    >
      <List>
        <ListItem
          sx={{
            fontSize: "1.1rem",
            fontWeight: "500",
            justifyContent: "center",
            pb: 0,
          }}
        >
          SWE
        </ListItem>
        <ListItem
          sx={{
            fontSize: "1.1rem",
            fontWeight: "500",
            justifyContent: "center",
            pb: 0,
          }}
        >
          LOGO
        </ListItem>
        {/* My Profile section */}
        <ListItem
          component="a"
          href="#profile-section"
          sx={{
            textDecoration: "none",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
        {/* Club's Dashboard section */}
        <ListItem
          component="a"
          href="#dashboard-section"
          sx={{
            textDecoration: "none",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemIcon>
            <TabletIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* Social Media Icons */}
        <ListItem
          button
          component="a"
          href="https://facebook.com"
          target="_blank"
        >
          <ListItemIcon>
            <FacebookIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://discord.gg/YYwpnsa5"
          target="_blank"
        >
          <ListItemIcon>
            <TwitterIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://instagram.com/swe.sjsu/"
          target="_blank"
        >
          <ListItemIcon>
            <InstagramIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Instagram" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://linkedin.com/in/swe-at-sjsu/"
          target="_blank"
        >
          <ListItemIcon>
            <LinkedInIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItem>
      </List>
    </Drawer>
  );
}
