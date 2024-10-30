import { MenuItem, OutlinedInput, type SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButton,
  StyledCategorySelect,
  StyledForm,
  StyledInput,
} from "../styles/addTask.styled";
// import type { Question } from "../types/questionType";
import { Toaster } from "react-hot-toast";
import { useQuestionContext } from "../contexts/QuestionContext";
import { showToast } from "../utils/showToast";

interface AddTaskProps {
  mode: "light" | "dark";
}

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
};
export const AddTask = ({ mode }: AddTaskProps) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  // const [questions, setQuestions] = useLocalStorage<Question[]>(
  //   "questions",
  //   []
  // ); // 使用 useLocalStorage
  const { addQuestion } = useQuestionContext();
  const navigate = useNavigate();

  const handleQuestionChange = (e: { target: { value: string } }) => {
    const newQuestion = e.target.value;
    setQuestion(newQuestion);
  };

  const handleAnswerChange = (e: { target: { value: string } }) => {
    const newAnswer = e.target.value;
    setAnswer(newAnswer);
  };

  const handleCategoryChange = (event: SelectChangeEvent<unknown>) => {
    const {
      target: { value },
    } = event;
    setCategory(
      typeof value === "string" ? value.split(",") : (value as string[])
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // useLocalStorage
    // const newQuestion = {
    //   id: uuidv4(),
    //   question,
    //   answer,
    //   category,
    //   pinned: false,
    // };
    // setQuestions([...questions, newQuestion]);

    addQuestion({
      id: uuidv4(),
      question,
      answer,
      category,
      pinned: false,
    });

    setQuestion("");
    setAnswer("");
    setCategory([]);
    await showToast(
      "🎉 Question added successfully!",
      "success",
      "bottom-center"
    );
    console.log("Question submitted");
    navigate("/");
  };

  return (
    <>
      <Toaster reverseOrder={false} />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          required
          label="Question"
          name="question"
          value={question}
          placeholder="Enter question"
          autoComplete="off"
          fullWidth
          onChange={handleQuestionChange}
        />
        <StyledInput
          label="Answer"
          name="answer"
          value={answer}
          placeholder="Enter answer (optional)"
          autoComplete="off"
          fullWidth
          onChange={handleAnswerChange}
        />
        <StyledCategorySelect
          multiple
          required
          label="Category"
          value={category}
          variant="outlined"
          onChange={handleCategoryChange}
          input={<OutlinedInput label="Category" />}
          MenuProps={MenuProps}
          fullWidth
        >
          <MenuItem value="HTML">HTML</MenuItem>
          <MenuItem value="CSS">CSS</MenuItem>
          <MenuItem value="Authenticaton">Authenticaton</MenuItem>
          <MenuItem value="Javascript">Javascript</MenuItem>
          <MenuItem value="Typescript">Typescript</MenuItem>
          <MenuItem value="React">React</MenuItem>
        </StyledCategorySelect>
        <StyledButton variant="contained" type="submit">
          Save
        </StyledButton>
      </StyledForm>
    </>
  );
};
