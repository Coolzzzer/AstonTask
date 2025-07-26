import { useState } from "react";

export const PostLengthFilter = ({ onChange }: { onChange: (length: number) => void }) => {
  const [length, setLength] = useState(0);

  return (
    <input
      type="number"
      value={length}
      onChange={(e) => {
        const val = Number(e.target.value);
        setLength(val);
        onChange(val);
      }}
      placeholder="Минимальная длина заголовка"
    />
  );
};
