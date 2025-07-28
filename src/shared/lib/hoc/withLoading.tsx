import type { FC } from "react";
export const withLoading = <P extends object>(Component: FC<P>) => {
  return ({ isLoading, ...props }: P & { isLoading: boolean }) =>
    isLoading ? <div>Loading...</div> : <Component {...(props as P)} />;
};