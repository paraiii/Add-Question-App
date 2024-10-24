import React, { useContext, useEffect, useState } from "react";
import { Container } from "../styles/addTask.styled";
import {
  Avatar,
  Button,
  IconButton,
  SwipeableDrawer,
  TextField,
  Tooltip,
} from "@mui/material";
import styled from "@emotion/styled";
import { UserContext } from "../contexts/UserContext";

export const Sidebar = () => {
  const userContext = useContext(UserContext);

  const [drawerOpen, setDrawerOpen] = useState(false);
  //   const [username, setUsername] = useState<string | null>(
  //     userContext?.user || ""
  //   );
  //   const [username, setUsername] = useState<string | null>(userContext?.user || "");
  if (!userContext) {
    throw new Error(
      "Submitted component must be wrapped  within a UserProvider"
    );
  }
  const { username, setUsername } = userContext;

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDrawerOpen(open);
    };

  const handleUsername = (e: { target: { value: string } }) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const handleSubmit = () => {
    setUsername(username);
    alert("You have successfully save your username");
  };

  return (
    <Container>
      <Tooltip title="User">
        <IconButton onClick={toggleDrawer(true)}>
          <UserAvatar>{username ? username : "USER"}</UserAvatar>
        </IconButton>
      </Tooltip>
      <StyledSwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <FormContainer onSubmit={handleSubmit}>
          <h3>User</h3>
          <TextField
            type="text"
            value={username}
            placeholder="Add name"
            onChange={handleUsername}
            required
          />
          <Button type="submit">Save</Button>
        </FormContainer>
      </StyledSwipeableDrawer>
    </Container>
  );
};

const UserAvatar = styled(Avatar)`
  color: #ffffff;
  transition: 0.3s background;
  font-weight: 500;
  width: 60px;
  height: 60px;
`;

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  & .MuiPaper-root {
    border-radius: 24px 0 0 0;
    min-width: 300px;
    box-shadow: none;
    padding: 4px 12px;
    z-index: 999;

    @media (min-width: 1920px) {
      min-width: 310px;
    }

    @media (max-width: 1024px) {
      min-width: 270px;
    }

    @media (max-width: 600px) {
      min-width: 55vw;
    }
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  transition: min-height 0.3s ease-in-out;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
