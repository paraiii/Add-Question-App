import styled from "@emotion/styled";
import { Chip } from "@mui/material";

interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  return <StyledCategoryBadge label={category} />;
};

export const StyledCategoryBadge = styled(Chip)`
  font-weight: bold;
  font-size: 14px;
  margin: 6px 0 0 0;
  padding: 8px;
  transition: 0.3s all;
  background: pink;
  &:focus {
    opacity: none;
  }
`;
