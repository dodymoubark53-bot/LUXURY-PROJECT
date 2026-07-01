import { useTheme } from '../../context/ThemeContext';

const Logo = ({ theme: propTheme, height = 60 }) => {
  const { theme: siteTheme } = useTheme();

  let effectiveTheme = propTheme || 'dark';
  if (siteTheme === 'dark') effectiveTheme = 'light';

  return (
    <img
      src="/dunas-travel-logo.png"
      alt="Dunas Travel"
      className={`flex-shrink-0 object-contain ${effectiveTheme === 'light' ? 'invert brightness-50' : ''}`}
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
};

export default Logo;