import { Delete, Edit, PushPin } from "@mui/icons-material";
import { IconButton } from "@mui/material";
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

  return (
    <>
      {sortedQuestionList.map((q) => (
        <TaskContainer key={q.id} bgColor={q.pinned ? "dark" : "light"}>
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

// export const TaskContainer = styled.main`
//   display: flex;
//   -webkit-box-align: center;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: 16px 16px 16px 20px;
//   border-radius: 30px;
//   margin-top: 14px;
//   // color: rgb(240, 240, 240);
//   // background-color: grey;
//   opacity: 1;
//   border-left: 1px solid transparent;
//   box-shadow: rgb(182, 36, 255) 0px 0px 128px -20px;
//   filter: none;
//   animation: 0.5s ease-in 0s 1 normal none running animation-if2l3t;
//   transition: 0.3s !important;
//   flex: 1 1 0%;
// `;

// export const QuestionInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Pinned = styled.div`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   opacity: 0.8;
//   font-size: 16px;
// `;
// export const QuestionHeader = styled.h3`
//   display: flex;
//   align-items: start;
//   flex-direction: column;
//   gap: 10px;
// `;

// export const QuestionAnswer = styled.p`
//   margin: 0;
//   font-size: 18px;
//   word-break: break-word;
// `;

// export const QuestionIconContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
