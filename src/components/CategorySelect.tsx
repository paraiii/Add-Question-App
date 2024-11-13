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
import { Link } from "react-router-dom";

interface CategorySelectProps {
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
  label?: string;
}

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
};

export const CategorySelect = ({
  value,
  onChange,
  label = "Category",
}: CategorySelectProps) => {
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
        <MenuItem value="HTML">HTML</MenuItem>
        <MenuItem value="CSS">CSS</MenuItem>
        <MenuItem value="Authentication">Authentication</MenuItem>
        <MenuItem value="Javascript">Javascript</MenuItem>
        <MenuItem value="Typescript">Typescript</MenuItem>
        <MenuItem value="React">React</MenuItem>
      </Select>
      <div>
        <Link to="/categories">
          <Button>
            <EditRounded /> &nbsp; Modify Categories
          </Button>
        </Link>
      </div>
    </StyledFormControl>
  );
};

const StyledFormControl = styled(FormControl)`
  margin: 12px;
`;
