const Logo = ({ height = 60 }) => {
  return (
    <img
      src="/dunas-travel-logo.png"
      alt="Dunas Travel"
      className="flex-shrink-0 object-contain dark:invert dark:brightness-200 transition-all duration-300"
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
};

export default Logo;
