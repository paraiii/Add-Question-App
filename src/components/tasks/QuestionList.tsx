import { Delete, Edit, PushPin } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import { useQuestionContext } from "../../contexts/QuestionContext";
import styled from "@emotion/styled";
import { CategoryBadge } from "../CategoryBadge";
import type { Question } from "../../types/questionType";

import {
  TaskContainer,
  QuestionInfo,
  Pinned,
  QuestionHeader,
  QuestionAnswer,
  QuestionIconContainer,
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
        <TaskContainer key={q.id} bgColor={theme.palette.background.default}>
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
            <CategoryBadge category={q.category} />
          </QuestionInfo>

          <QuestionIconContainer>
            <IconButton onClick={() => pinQuestion(q.id)}>
              <PushPin />
            </IconButton>
            <IconButton
              onClick={() =>
                editQuestion(q.id, { question: "Updated Question" })
              }
            >
              <Edit />
            </IconButton>
            <IconButton onClick={() => deleteQuestion(q.id)}>
              <Delete />
            </IconButton>
          </QuestionIconContainer>
        </TaskContainer>
      ))}
    </>
  );
};
