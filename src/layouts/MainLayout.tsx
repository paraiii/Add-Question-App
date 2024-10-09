import { ReactNode } from "react";
import { BottomNav } from "../components/BottomNav";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      {children}
      <div style={{ marginTop: "128px" }}></div>
      <BottomNav />
    </>
  );
};
