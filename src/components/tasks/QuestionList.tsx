import { Delete, Edit, PushPin } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { useQuestionContext } from "../../contexts/QuestionContext";
import type { Question } from "../../types/questionType";
import { CategoryBadge } from "../CategoryBadge";

import { useState } from "react";
import { EditQuestion } from "../EditQuestion";
import {
  Pinned,
  QuestionAnswer,
  QuestionHeader,
  QuestionIconContainer,
  QuestionInfo,
  StyledIconButton,
  TaskContainer,
} from "./task.styled";

interface QuestionListProps {
  filteredQuestionList: Question[];
}

export const QuestionList = ({ filteredQuestionList }: QuestionListProps) => {
  const { editQuestion, deleteQuestion, pinQuestion } = useQuestionContext();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const handleEditClick = (question: Question) => {
    setSelectedQuestion(question);
    setOpenEditDialog(true);
  };

  const handleCloseEdit = () => {
    setOpenEditDialog(false);
    setSelectedQuestion(null);
  };

  const sortedQuestionList = [...filteredQuestionList].sort((a, b) => {
    if (a.pinned === b.pinned) return 0;
    return a.pinned ? -1 : 1; // Sort first when pinned is true
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
              // onClick={() =>
              //   editQuestion(q.id, { question: "Updated Question" })
              // }
              onClick={() => handleEditClick(q)}
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
      {selectedQuestion && (
        <EditQuestion
          open={openEditDialog}
          handleClose={handleCloseEdit}
          initialQuestion={selectedQuestion.question}
          initialAnswer={selectedQuestion.answer || ""}
          initialCategory={selectedQuestion.category || []}
          questionId={selectedQuestion?.id || ""}
        />
      )}
    </>
  );
};
