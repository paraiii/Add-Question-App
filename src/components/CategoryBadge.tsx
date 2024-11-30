import styled from "@emotion/styled";
import { Chip, darken, lighten } from "@mui/material";

const getTextColor = (bgColor: string, mode: "light" | "dark") => {
  return mode === "light" ? lighten(bgColor, 0.8) : darken(bgColor, 0.8);
};
interface CategoryBadgeProps {
  category: string;
  mode: "light" | "dark";
}

export const CategoryBadge = ({ category, mode }: CategoryBadgeProps) => {
  return <StyledCategoryBadge label={category} mode={mode} />;
};

export const StyledCategoryBadge = styled(Chip)<{
  mode: "light" | "dark";
}>`
  font-weight: bold;
  font-size: 14px;
  margin: 6px 0 0 0;
  padding: 8px;
  transition: 0.3s all;
  background: ${({ theme, mode }) =>
    mode === "light"
      ? darken(theme.palette.warning.main, 0)
      : lighten(theme.palette.warning.main, 0.2)};
  &:focus {
    opacity: none;
  }
  color: ${({ theme, mode }) =>
    mode === "light"
      ? lighten(theme.palette.background.default, 0.8) // light mode font color
      : darken(theme.palette.background.default, 0.8)}; // dark mode cont color
`;
