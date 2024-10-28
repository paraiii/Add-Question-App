import styled from "@emotion/styled";
import {
  ArrowBackIosNewRounded,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { FormControlLabel, IconButton, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

interface TopBarProps {
  title: string;
  mode: "light" | "dark";
  toggleTheme: () => void;
}

/**
 * Component for displaying a top bar with a title and a back button.
 * @param {string} title - Title of page
 */
export const TopBar = ({ title, mode, toggleTheme }: TopBarProps) => {
  const n = useNavigate();
  return (
    <TopbarContainer>
      <BackBtn size="large" aria-label="Back" onClick={() => n("/")}>
        {location.pathname === "/add" && <ArrowBackIosNewRounded /> && (
          <HomeOutlinedIcon />
        )}
      </BackBtn>
      <Title>{title}</Title>
      <StyledSwitch
        control={
          <Switch
            checked={mode === "dark"}
            onChange={toggleTheme}
            icon={<Brightness7 />}
            checkedIcon={<Brightness4 />}
          />
        }
        label={mode === "light" ? "Light" : "Dark"}
      />
    </TopbarContainer>
  );
};

const TopbarContainer = styled.div`
  margin: 0;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: background 0.3s, color 0.3s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

const Title = styled.h2`
  display: flex;
  font-size: 28px;
  margin: 0 auto;
  text-align: center;
  padding: 4px 0 8px 0;
`;
const BackBtn = styled(IconButton)`
  display: flex;
  @media (max-width: 1024px) {
    margin-top: 4px;
  }
`;

const StyledSwitch = styled(FormControlLabel)`
  display: flex;
  justify-content: end;
  margin: 0;
`;
