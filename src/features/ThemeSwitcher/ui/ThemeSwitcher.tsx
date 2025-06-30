import { Button } from '../../../shared/ui/Button/Button';
import { useTheme } from '../../../shared/lib/theme/useTheme';

type ThemeSwitcherProps = {
    text: string
}
export const ThemeSwitcher:React.FC<ThemeSwitcherProps> = ({text}) => {
  const { toggleTheme } = useTheme()
  return <Button onClick={toggleTheme}>{text}</Button>;
};
