import { useState } from "react";
import { Container } from "../styles/addTask.styled";
import { TextField, Button } from "@mui/material";
import styled from "@emotion/styled";

export const UserProfile = () => {
  const [username, setUsername] = useState("");

  const handleUsername = (e: { target: { value: string } }) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  return (
    <>
      <Container>
        <TextField
          label="username"
          value={username}
          onChange={handleUsername}
        ></TextField>
        <SaveButton />
      </Container>
    </>
  );
};

const SaveButton = styled(Button)`
  width: 300px;
  font-weight: 600;
  border: none;
  font-size: 18px;
  padding: 14px;
  border-radius: 16px;
  cursor: pointer;
  text-transform: capitalize;
  transition: background 0.3s, color 0.3s;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    color: white;
  }
`;
