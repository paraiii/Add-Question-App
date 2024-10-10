import { ReactNode } from "react";
import { BottomNav } from "../components/BottomNav";
import { QuestionProvider } from "../contexts/QuestionContext";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <QuestionProvider>
      {children}
      <div style={{ marginTop: "128px" }}></div>
      <BottomNav />
    </QuestionProvider>
  );
};
