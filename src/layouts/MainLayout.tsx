import { ReactNode } from "react";
import { BottomNav } from "../components/BottomNav";
import { QuestionProvider } from "../contexts/QuestionContext";
import { useTheme } from "@emotion/react";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return <QuestionProvider>{children}</QuestionProvider>;
};
