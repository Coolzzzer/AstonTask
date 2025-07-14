import { useState, useCallback, type FC } from "react";
type CommentListProps = {
    comments:string,
}
export const CommentList:FC<CommentListProps> = ({comments}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div>
        {!collapsed && (
        <div>
          <br/>
          Comment: {comments} 
        </div>
      )}
      <button onClick={toggle}>{collapsed ? "Show" : "Hide"} comments</button>

    </div>
  );
};
