import type { FC, ReactNode } from "react";
import { LayoutFooter } from "../../widgets/LayoutFooter/LayoutFooter"
import { LayoutHeader } from "../../widgets/LayoutHeader/LayoutHeader"

type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout:FC<MainLayoutProps> = ({ children }) => {
    return (
      <>
        <LayoutHeader/>
          {children}
        <LayoutFooter/>
      </>
    )
}
  