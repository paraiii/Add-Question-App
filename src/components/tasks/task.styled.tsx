import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";

// Function to calculate the dynamic shadow based on the background color
const getDynamicShadow = (bgColor: string) => {
  // Example logic for dynamic shadow calculation:
  if (bgColor === "dark") {
    return "rgba(255, 255, 255, 0.3)"; // Lighter shadow for dark background
  } else {
    return "rgba(0, 0, 0, 0.2)"; // Darker shadow for light background
  }
};

// TaskContainer with dynamic box-shadow based on bgColor
export const TaskContainer = styled.main<{ bgColor: string }>`
  display: flex;
  -webkit-box-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 20px;
  border-radius: 30px;
  margin-top: 14px;
  opacity: 1;
  border-left: 1px solid transparent;
  background-color: ${({ theme }) =>
    theme.palette.primary.main}; /* 使用 MUI 主题中的 primary.main 作为背景色 */
  box-shadow: ${({ bgColor }) => getDynamicShadow(bgColor)} 0px 0px 128px -20px;

  filter: none;
  animation: 0.5s ease-in 0s 1 normal none running animation-if2l3t;
  transition: 0.3s !important;
  flex: 1 1 0%;
`;

export const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Pinned = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0.8;
  font-size: 16px;
`;

export const QuestionHeader = styled.h3`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`;

export const QuestionAnswer = styled.p`
  margin: 0;
  font-size: 18px;
  word-break: break-word;
`;

export const QuestionIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
