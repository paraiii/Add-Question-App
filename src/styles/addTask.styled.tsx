import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled(TextField)<{ helpercolor?: string }>`
  margin: 12px;
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
