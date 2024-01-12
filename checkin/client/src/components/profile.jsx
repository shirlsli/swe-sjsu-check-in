import React from "react";
import styled from "styled-components";
import { Box, Container } from "@mui/material";
import profilePic from "../images/avatar.jpg";

export default function Profile() {
  const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px; /* Adjust the margin*/
  `;

  const StyledText = styled.p`
    font-family: "Lato Semibold", sans-serif;
    font-size: ${(props) => props.fontSize};
    text-align: center;
    border-radius: 13px; /* Adjust the border-radius as needed */
    background-color: #a060a0; /* Set the background color to purple */
    color: white; /* text color to white */
    padding: 10px; /* Add padding for better visual appearance */
    width: 130px; /* Set a specific width */
    margin-bottom: 10px; /* Adjust the margin as needed */
    box-shadow: 2px 2px 5px rgba(0, 10, 0, 1); /* Add box shadow to make it look better :)*/
  `;

  return (
    <ProfileContainer>
      <Box
        sx={{
          width: "240px",
          height: "240px", //why its not the same as width i have no idea
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={profilePic}
          alt="profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <TextContainer>
        <StyledText>Shu Saw</StyledText>
        <StyledText>Email</StyledText>
        <StyledText>Type of Member</StyledText>
        <StyledText>Points: </StyledText>
      </TextContainer>
    </ProfileContainer>
  );
}
