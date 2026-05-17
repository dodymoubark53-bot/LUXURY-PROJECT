import React from 'react';

const Logo = ({ theme = 'dark', height = 40, showTagline = true, companyName = 'LUMINA' }) => {
  const textColor = theme === 'light' ? 'text-[#0F0D0B]' : 'text-[#F5EDD6]';
  
  // Calculate relative sizes based on height
  const iconSize = height * 0.8;
  
  return (
    <div 
      className="flex items-center gap-3 select-none" 
      style={{ height: `${height}px` }}
    >
      {/* SVG Icon: Sleek Compass Rose with thin gold lines */}
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#E8C97A" />
          </linearGradient>
        </defs>
        
        {/* Outer Elegant Double Ring */}
        <circle cx="50" cy="50" r="45" stroke="url(#gold-gradient)" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="40" stroke="url(#gold-gradient)" strokeWidth="1.5" />
        
        {/* Sleek Compass Rose Star Points */}
        {/* North */}
        <path d="M50 15 L53 45 L50 48 Z" fill="url(#gold-gradient)" />
        <path d="M50 15 L47 45 L50 48 Z" fill="url(#gold-gradient)" opacity="0.7" />
        {/* South */}
        <path d="M50 85 L47 55 L50 52 Z" fill="url(#gold-gradient)" />
        <path d="M50 85 L53 55 L50 52 Z" fill="url(#gold-gradient)" opacity="0.7" />
        {/* East */}
        <path d="M85 50 L55 47 L52 50 Z" fill="url(#gold-gradient)" />
        <path d="M85 50 L55 53 L52 50 Z" fill="url(#gold-gradient)" opacity="0.7" />
        {/* West */}
        <path d="M15 50 L45 53 L48 50 Z" fill="url(#gold-gradient)" />
        <path d="M15 50 L45 47 L48 50 Z" fill="url(#gold-gradient)" opacity="0.7" />
        
        {/* Diagonal Minor Points */}
        {/* NE */}
        <path d="M74.75 25.25 L53.54 46.46 L51.41 48.59 Z" fill="url(#gold-gradient)" />
        <path d="M74.75 25.25 L51.41 48.59 L53.54 46.46 Z" fill="url(#gold-gradient)" opacity="0.7" />
        {/* SW */}
        <path d="M25.25 74.75 L46.46 53.54 L48.59 51.41 Z" fill="url(#gold-gradient)" />
        {/* NW */}
        <path d="M25.25 25.25 L46.46 46.46 L48.59 48.59 Z" fill="url(#gold-gradient)" />
        {/* SE */}
        <path d="M74.75 74.75 L53.54 53.54 L51.41 51.41 Z" fill="url(#gold-gradient)" />
        
        {/* Center elegant circle/stud */}
        <circle cx="50" cy="50" r="4" fill="url(#gold-gradient)" />
      </svg>
      
      {/* Wordmark and Tagline */}
      <div className="flex flex-col justify-center text-left">
        <span 
          className={`font-display font-semibold uppercase tracking-[0.1em] leading-none ${textColor}`}
          style={{ fontSize: `${height * 0.45}px` }}
        >
          {companyName}
        </span>
        {showTagline && (
          <span 
            className="font-body text-gold-500 uppercase tracking-[0.2em] mt-1 leading-none"
            style={{ fontSize: `${height * 0.18}px` }}
          >
            Luxury Travel
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
