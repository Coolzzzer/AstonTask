import type { FC, PropsWithChildren } from "react";
import { LayoutFooter } from "../../widgets/LayoutFooter/LayoutFooter"
import { LayoutHeader } from "../../widgets/LayoutHeader/LayoutHeader"

export const MainLayout:FC<PropsWithChildren> = ({ children }) => {
    return (
      <>
        <LayoutHeader/>
          {children}
        <LayoutFooter/>
      </>
    )
}
  