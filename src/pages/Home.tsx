import { useState } from "react";
import { QuestionList } from "../components/tasks/QuestionList";
import { Box, FormControlLabel, Switch, useTheme } from "@mui/material";
import { useQuestionContext } from "../contexts/QuestionContext";
import styled from "@emotion/styled";
import { Sidebar } from "../components/Sidebar";
import { Greeting } from "../components/Greeting";
import { SearchField } from "../components/SearchField";
import { TaskListContainer } from "../components/tasks/task.styled";
import { BottomNav } from "../components/BottomNav";

export const Home = () => {
  const { questions } = useQuestionContext();
  const [search, setSearch] = useState("");

  const filteredQuestion = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  const theme = useTheme();

  return (
    <>
      <HomeContainer>
        <TopContainer>
          <Greeting />
          <Sidebar />
        </TopContainer>
        <TaskListContainer>
          <SearchField search={search} setSearch={setSearch} />

          <QuestionList filteredQuestionList={filteredQuestion} />
        </TaskListContainer>
        <BottomNav mode={theme.palette.mode} />
      </HomeContainer>
    </>
  );
};

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HomeContainer = styled(Box)`
  margin: 0 16vw;
`;
