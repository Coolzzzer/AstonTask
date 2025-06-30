import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button:React.FC<ButtonProps> = ({children,...props}) => {
    return (
        <button {...props}>{children}</button>
    ) 
}

