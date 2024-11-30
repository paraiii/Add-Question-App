// CategorySelect.tsx
import styled from "@emotion/styled";
import { EditRounded } from "@mui/icons-material";
import {
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../contexts/CategoriesContext";

interface CategorySelectProps {
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
  label?: string;
}

export const CategorySelect = ({
  value,
  onChange,
  label = "Category",
}: CategorySelectProps) => {
  const { categories } = useCategories();
  const navigate = useNavigate();

  return (
    <StyledFormControl>
      <Select
        multiple
        required
        label={label}
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        fullWidth
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.name}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
      <div>
        <Button onClick={() => navigate("/categories")}>
          <EditRounded /> &nbsp; Modify Categories
        </Button>
      </div>
    </StyledFormControl>
  );
};

const StyledFormControl = styled(FormControl)`
  margin: 12px;
`;
