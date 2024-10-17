import { useState } from "react";
import { QuestionList } from "../components/tasks/QuestionList";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useQuestionContext } from "../contexts/QuestionContext";
import styled from "@emotion/styled";
import { Sidebar } from "../components/Sidebar";
import { Greeting } from "../components/Greeting";

export const Home = () => {
  const { questions } = useQuestionContext();
  const [search, setSearch] = useState("");

  const filteredQuestion = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {" "}
      <Box>
        <TopContainer>
          <Greeting />
          <Sidebar />
        </TopContainer>
        <SearchContainer>
          {" "}
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
        </SearchContainer>

        <QuestionList filteredQuestionList={filteredQuestion} />
      </Box>
    </>
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

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0;
`;
