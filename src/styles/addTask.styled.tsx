import styled from "@emotion/styled";
import { Button, darken, lighten, TextField } from "@mui/material";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const StyledInput = styled(TextField)<{ helpercolor?: string }>`
  margin: 12px;
  width: 400px;
  & .MuiOutlinedInput-root {
    border-radius: 16px;
    transition: 0.3s all;
    width: 400px;
    color: black;
  }
  .MuiFormHelperText-root {
    color: pink;
    opacity: 0.8;
  }
`;

export const StyledSelectTextfield = styled(TextField)`
  margin: 12px 0;
  border-radius: 16px !important;
  transition: 0.3s all;
  width: 400px;
`;

export const StyledButton = styled(Button)<{
  mode: "light" | "dark";
}>`
  margin-top: 4px;
  border: none;
  padding: 16px 32px;
  font-size: 24px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme, mode }) =>
    mode === "light"
      ? darken(theme.palette.primary.main, 0.2) // light mode font color
      : (theme.palette.primary.main, 0.8)}; // dark mode cont color
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s all;
  margin: 20px;
  width: 400px;
  text-transform: capitalize;
  &:hover {
    box-shadow: 0px 0px 24px 0px ${({ theme }) => theme.primary + "80"};
    background: ${({ theme }) => theme.primary};
  }
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
    color: ${({ theme }) => theme.secondary};
  }
`;
