import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  styled,
} from "@mui/material";
import { slideInBottom } from "../styles/keyframes.styled";
import { useNavigate } from "react-router-dom";
import { AddRounded } from "@mui/icons-material";

export const BottomNav = () => {
  const n = useNavigate();

  return (
    <Container>
      <StyledBottomNavigation>
        <NavigationButton
          title="Add new question"
          onClick={() => n("add")}
          label="Tasks"
          icon={<AddRounded sx={{ fontSize: "29px" }} />}
        />
      </StyledBottomNavigation>
    </Container>
  );
};

const Container = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  animation: ${slideInBottom} 0.5s ease;
  z-index: 999;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  border-radius: 24px 24px 0 0;
`;

const NavigationButton = styled(BottomNavigationAction)`
  border-radius: 18px;
  margin: 4px;
`;
