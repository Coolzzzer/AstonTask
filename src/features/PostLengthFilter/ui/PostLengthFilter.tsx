import { useState } from "react";

export const PostLengthFilter = ({ onChange }: { onChange: (length: number) => void }) => {
  const [length, setLength] = useState(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const val = Number(e.target.value);
    setLength(val);
    onChange(val);
  }
  return (
    <input
      type="number"
      value={length}
      onChange={handleInputChange}
      placeholder="Минимальная длина заголовка"
    />
  );
};
