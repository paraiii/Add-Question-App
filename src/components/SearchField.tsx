import styled from "@emotion/styled";
import { IconButton, TextField } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface SearchFieldProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  search,
  setSearch,
}) => {
  return (
    <SearchContainer>
      {" "}
      <SearchInput
        label="Search ..."
        variant="outlined"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <IconButton>
        <SearchOutlinedIcon />
      </IconButton> */}
    </SearchContainer>
  );
};

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0;
`;

export const SearchInput = styled(TextField)`
  margin: 8px 0 0 0;
  border-radius: 16px;
  transition: 0.3s all;
  width: 100%;
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid;
  }
  & .MuiOutlinedInput-root {
    padding: 2px 16px;
    border-radius: 16px;
    transition: 0.3s all;
    }
  }
`;
