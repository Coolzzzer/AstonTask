import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button:FC<ButtonProps> = ({children,...props}) => {
    return (
        <button {...props}>{children}</button>
    ) 
}

