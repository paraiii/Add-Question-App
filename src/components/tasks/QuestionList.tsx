import { Delete, Edit, PushPin } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { CategoryBadge } from "../CategoryBadge";
import type { Question } from "../../types/questionType";

import {
  TaskContainer,
  QuestionInfo,
  Pinned,
  QuestionHeader,
  QuestionAnswer,
  QuestionIconContainer,
  StyledIconButton,
} from "./task.styled";

interface QuestionListProps {
  filteredQuestionList: Question[];
}

export const QuestionList = ({ filteredQuestionList }: QuestionListProps) => {
  const { editQuestion, deleteQuestion, pinQuestion } = useQuestionContext();
  const sortedQuestionList = [...filteredQuestionList].sort((a, b) => {
    if (a.pinned === b.pinned) return 0;
    return a.pinned ? -1 : 1; // pinned 为 true 的排在前面
  });
  const theme = useTheme();

  return (
    <>
      {sortedQuestionList.map((q) => (
        <TaskContainer key={q.id} mode={theme.palette.mode}>
          <QuestionInfo>
            <QuestionHeader>
              {q.pinned && (
                <Pinned>
                  {" "}
                  <PushPin /> &nbsp; Pinned
                </Pinned>
              )}

              {q.question}
            </QuestionHeader>
            <QuestionAnswer>{q.answer}</QuestionAnswer>
            <CategoryBadge category={q.category} mode={theme.palette.mode} />
          </QuestionInfo>

          <QuestionIconContainer>
            <StyledIconButton
              onClick={() => pinQuestion(q.id)}
              mode={theme.palette.mode}
            >
              <PushPin />
            </StyledIconButton>
            <StyledIconButton
              onClick={() =>
                editQuestion(q.id, { question: "Updated Question" })
              }
              mode={theme.palette.mode}
            >
              <Edit />
            </StyledIconButton>
            <StyledIconButton
              onClick={() => deleteQuestion(q.id)}
              mode={theme.palette.mode}
            >
              <Delete />
            </StyledIconButton>
          </QuestionIconContainer>
        </TaskContainer>
      ))}
    </>
  );
};
