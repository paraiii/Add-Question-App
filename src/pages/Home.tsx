import React, { useState } from "react";
import { QuestionList } from "../components/tasks/QuestionList";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useQuestionContext } from "../contexts/QuestionContext";
import styled from "@emotion/styled";

export const Home = () => {
  const { questions } = useQuestionContext();
  const [search, setSearch] = useState("");

  const filteredQuestion = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography></Typography>
      <SearchInput
        label="Search ..."
        variant="outlined"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton>
        <SearchOutlinedIcon />
      </IconButton>
      <QuestionList filteredQuestionList={filteredQuestion} />
      {/* <QuestionList /> */}
    </Box>
  );
};

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
