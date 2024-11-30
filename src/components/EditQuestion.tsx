// src/components/EditQuestion.tsx
import styled from "@emotion/styled";
import { Dialog, type SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuestionContext } from "../contexts/QuestionContext";
import { StyledInput } from "../styles/addTask.styled";
import { DialogBtn } from "../styles/common.styled";
import { CategorySelect } from "./CategorySelect";
import { CustomDialogTitle } from "./CustomDialogTitle";

interface EditQuestionProps {
  open: boolean;
  handleClose: () => void;
  initialQuestion: string;
  initialAnswer: string;
  initialCategory: string[];
  questionId: string;
}

export const EditQuestion = ({
  open,
  handleClose,
  initialQuestion,
  initialAnswer,
  initialCategory,
  questionId,
}: EditQuestionProps) => {
  const [question, setQuestion] = useState(initialQuestion);
  const [answer, setAnswer] = useState(initialAnswer);
  const [category, setCategory] = useState<string[]>(initialCategory);
  const { editQuestion } = useQuestionContext();

  useEffect(() => {
    setQuestion(initialQuestion);
    setAnswer(initialAnswer);
    setCategory(initialCategory);
  }, [initialQuestion, initialAnswer, initialCategory]);

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    setCategory(typeof value === "string" ? value.split(",") : value);
  };

  const handleSave = () => {
    // Save the edited question logic here
    editQuestion(questionId, {
      question,
      answer,
      category,
    });
    handleClose();
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <CustomDialogTitle title="Edit Question" subTitle="" />
      <StyledInput
        required
        label="Question"
        value={question}
        placeholder="Enter question"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <StyledInput
        label="Answer"
        value={answer}
        placeholder="Enter answer"
        onChange={(e) => setAnswer(e.target.value)}
      />
      <CategorySelect value={category} onChange={handleCategoryChange} />
      <ButtonContainer>
        <DialogBtn onClick={handleClose}>Cancel</DialogBtn>
        <DialogBtn onClick={handleSave} variant="contained">
          Save
        </DialogBtn>
      </ButtonContainer>
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)`
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
