import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Question, QuestionContextType } from "../types/questionType";
import { useLocalStorage } from "../hooks/UseLocalStorage";

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
);

// Error when component is not included in a provider
export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestionContext must be used within a QuestionProvder");
  }
  return context;
};

export const QuestionProvider = ({ children }: { children: ReactNode }) => {
  // Initialize questions as a empty arrary
  // const [questions, setQuestions] = useState<Question[]>([]);
  const [questions, setQuestions] = useLocalStorage<Question[]>(
    "questions",
    []
  );

  const addQuestion = (question: Question) => {
    setQuestions([...questions, question]);
  };

  const editQuestion = (id: string, updatedQuestion: Partial<Question>) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, ...updatedQuestion } : q))
    );
  };
  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const pinQuestion = (id: string) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, pinned: !q.pinned } : q))
    );
  };

  return (
    <QuestionContext.Provider
      value={{
        questions,
        addQuestion,
        editQuestion,
        deleteQuestion,
        pinQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
