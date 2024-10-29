import { AddRounded } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  darken,
  lighten,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { slideInBottom } from "../styles/keyframes.styled";

interface BottomNavProps {
  mode: "light" | "dark";
}
export const BottomNav = ({ mode }: BottomNavProps) => {
  const n = useNavigate();

  return (
    <StyledBox>
      <StyledButton variant="contained" mode={mode} onClick={() => n("add")}>
        <AddRounded style={{ fontSize: "44px" }} />
      </StyledButton>

      {/* <StyledBottomNavigation>
        <NavigationButton
          title="Add new question"
          onClick={() => n("add")}
          label="Tasks"
          icon={<StyledAddRounded fontSize="large" />}
          mode={mode}
        />
      </StyledBottomNavigation> */}
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  animation: ${slideInBottom} 0.5s ease;
  z-index: 999;
`;
const StyledButton = styled(Button)<{
  mode: "light" | "dark";
}>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: fixed;
  bottom: 24px;
  right: 16vw;
  width: 72px;
  height: 72px;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme, mode }) =>
    mode === "light"
      ? lighten(theme.palette.background.default, 0.8) // light mode font color
      : darken(theme.palette.background.default, 0.8)}; // dark mode cont color
  box-shadow: 0px 0px 15px 5px
    ${({ theme, mode }) =>
      mode === "light"
        ? lighten(theme.palette.primary.main, 0.5) // 浅色模式下的发光效果
        : darken(theme.palette.primary.main, 0.5)}; // 深色模式下的发光效果
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  border-radius: 24px 24px 0 0;
  backdrop-filter: blur(20px);
  margin: 0px 20px 0px -20px;
  padding: 18px 10px 32px 10px;
  transition: 0.3s background, color;
`;

const NavigationButton = styled(BottomNavigationAction)<{
  mode: "light" | "dark";
}>`
  border-radius: 18px;
  margin: 4px;
  color: ${({ theme, mode }) =>
    mode === "light"
      ? lighten(theme.palette.background.default, 0.8) // light mode font color
      : darken(theme.palette.background.default, 0.8)}; // dark mode cont color
`;

const StyledAddRounded = styled(AddRounded)`
  border: 2px solid ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 38px;
  border-radius: 100px;
  padding: 6px;
  margin: 14px;
  transition: background 0.3s;
`;
