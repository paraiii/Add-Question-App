export interface Question {
  id: string;
  question: string;
  answer: string;
  category: string[];
  pinned: boolean;
}

export interface QuestionContextType {
  questions: Question[];
  addQuestion: (question: Question) => void;
  editQuestion: (id: string, updatedQuestion: Partial<Question>) => void;
  deleteQuestion: (id: string) => void;
  pinQuestion: (id: string) => void;
}
