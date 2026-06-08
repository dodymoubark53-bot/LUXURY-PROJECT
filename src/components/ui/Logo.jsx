import React from 'react';

const Logo = ({ theme = 'dark', height = 40, showTagline = true, companyName = 'Dunas Travel' }) => {
  // تحديث الألوان بناءً على الهوية الجديدة المتفق عليها
  const textColor = theme === 'light' ? 'text-[#1A1A2E]' : 'text-[#F8F9FF]';

  return (
    <div
      className="flex items-center gap-3 select-none"
      style={{ height: `${height}px` }}
    >
      {/* الشعار الجديد المصنوع بصيغة PNG من المجلد المباشر */}
      <img
        src="/dunas-travel-logo.png"
        alt="Dunas Travel Logo"
        className={`flex-shrink-0 object-contain ${theme === 'light' ? 'invert brightness-50' : ''}`}
        style={{ height: `${height}px` }}
      />

      {/* اسم الشركة والـ Tagline الجديد */}
      <div className="flex flex-col justify-center text-left">
        <span
          className={`font-display font-semibold uppercase tracking-[0.1em] leading-none ${textColor}`}
          style={{ fontSize: `${height * 0.45}px` }}
        >
          {companyName}
        </span>
        {showTagline && (
          <span
            className="font-body text-[#F5A623] uppercase tracking-[0.2em] mt-1 leading-none"
            style={{ fontSize: `${height * 0.18}px` }}
          >
            DUNAS TRAVEL
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;