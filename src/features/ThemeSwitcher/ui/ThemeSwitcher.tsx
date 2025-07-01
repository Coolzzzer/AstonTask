import { useContext } from 'react';
import { Button } from '../../../shared/ui/Button/Button';
import { ThemeContext } from '../../../shared/lib/theme/ThemeContext';

type ThemeSwitcherProps = {
    text: string
}
export const ThemeSwitcher:React.FC<ThemeSwitcherProps> = ({text}) => {
  const { toggleTheme } = useContext(ThemeContext)
  return <Button onClick={toggleTheme}>{text}</Button>;
};
