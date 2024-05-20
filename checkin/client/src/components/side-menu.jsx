import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import DiscordIcon from "./discord-icon";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoutIcon from '@mui/icons-material/Logout';
import SWELogo from "../images/swe_logo.png";
import Lottie from "react-lottie";
import sweGearsAnimation from "../animations/swe_gears_animation.json";

export default function SideMenu({ page }) {

  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sweGearsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleLogout = async () => {
    try {
      // 1. Revoke Access Token (Send request to Google's OAuth2 token revocation endpoint)
      await fetch('https://oauth2.googleapis.com/revoke?token=ACCESS_TOKEN', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // 2. Clear User Session/Local Storage
      localStorage.removeItem('accessToken'); // Clear access token from local storage
      localStorage.removeItem('userProfile'); // Clear user profile data from local storage

      // Redirect user to the login page or any other desired page
      navigate("/");
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Drawer
      anchor="left"
      BackdropProps={{ invisible: true }}
      PaperProps={{
        sx: {
          backgroundColor: "#ffffff",
          color: "#5A5377",
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
            // justifyContent: "center",
            pl: 5,
            pb: 3,
          }}
        >
          <Link
            to="/home"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src={SWELogo}
              style={{ width: "80%", height: "auto" }}
              alt="SWE Logo"
            />
          </Link>
        </ListItem>
        {/* Club's Dashboard section */}
        <Link
          to="/home"
          style={{
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              backgroundColor: page === "dashboard" ? "#dedaed" : "#ffffff",
              borderRadius: "10px",
              ml: 2,
              mr: 2,
            }}
          >
            <ListItem
              button
              component="a"
              href="#dashboard-section"
              sx={{
                textDecoration: "none",
                color: "#5A5377",
                display: "flex",
                alignItems: "center",
                pl: 2,
                borderRadius: "10px"
              }}
            >
              <ListItemIcon sx={{ minWidth: 24, mr: 0.5 }}>
                <HomeIcon sx={{ color: "#5A5377", width: 15, height: 15 }} />
              </ListItemIcon>
              <Typography sx={{ fontWeight: "bold", fontSize: "0.6rem" }}>
                Dashboard
              </Typography>
            </ListItem>
          </Box>
        </Link>
        <Box sx={{ height: "10px" }} /> {/*puts space between the links*/}
        {/* My Profile section */}
        <Link
          to="/profile"
          style={{
            textDecoration: "none",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              backgroundColor: page === "profile" ? "#dedaed" : "#ffffff",
              borderRadius: "10px",
              ml: 2,
              mr: 2,
            }}
          >
            <ListItem
              button
              component="a"
              href="#profile-section"
              sx={{
                textDecoration: "none",
                color: "#5A5377",
                display: "flex",
                alignItems: "center",
                pl: 2,
                pb: 1,
                borderRadius: "10px"
              }}
            >
              <ListItemIcon sx={{ minWidth: 24, mr: 0.5 }}>
                <AccountCircleIcon sx={{ color: "#5A5377", width: 15, height: 15 }} />
              </ListItemIcon>
              <Typography sx={{ fontWeight: "bold", fontSize: "0.6rem" }}>
                Profile
              </Typography>
            </ListItem>
          </Box>
        </Link>
        <Box sx={{ height: "10px" }} /> {/*puts space between the links*/}
        <Box
          sx={{
            ml: 2,
            mr: 2,
          }}
          onClick={handleLogout}
        >
          <ListItem
            button
            component="a"
            href="#logout-section"
            sx={{
              textDecoration: "none",
              color: "#5A5377",
              display: "flex",
              alignItems: "center",
              pl: 2.25,
              pb: 1,
              borderRadius: "10px"
            }}
          >
            <ListItemIcon sx={{ minWidth: 24, mr: 0.5 }}>
              <LogoutIcon sx={{ color: "#5A5377", width: 15, height: 15 }} />
            </ListItemIcon>
            <Typography sx={{ fontWeight: "bold", fontSize: "0.6rem" }}>
              Logout
            </Typography>
          </ListItem>
        </Box>
      </List>
      {/* <div style={{ position: "absolute", bottom: 0 }}>
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              height={400}
              width={400}
            />
          </div> */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          // backgroundColor: "#c2bae3",
          pb: 1,
          // zIndex: 2,
        }}
      >
        <List sx={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="https://discord.gg/rSrsw4fXXu"
            style={{
              textDecoration: "none",
            }}
          >
            <ListItemIcon
              sx={{ display: "flex", justifyContent: "center", pl: 1, pr: 1 }}
            >
              <DiscordIcon sx={{ color: "#5A5377", width: 15, height: 15 }} />
            </ListItemIcon>
          </Link>
          <Link
            to="https://instagram.com/swe.sjsu/"
            style={{
              textDecoration: "none",
            }}
          >
            <ListItemIcon
              sx={{ display: "flex", justifyContent: "center", pl: 1, pr: 1 }}
            >
              <InstagramIcon sx={{ color: "#5A5377", width: 15, height: 15 }} />
            </ListItemIcon>
          </Link>
          <Link
            to="https://linkedin.com/in/swe-at-sjsu/"
            style={{
              textDecoration: "none",
            }}
          >
            <ListItemIcon
              sx={{ display: "flex", justifyContent: "center", pl: 1, pr: 1 }}
            >
              <LinkedInIcon sx={{ color: "#5A5377", width: 15, height: 15 }} />
            </ListItemIcon>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
}
