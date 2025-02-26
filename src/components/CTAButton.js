import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ text, to, isPrimary = true, isLarge = false, className = '' }) => {
  const baseClasses = "inline-block font-medium rounded-md transition duration-300 text-center";
  const primaryClasses = "bg-accent hover:bg-yellow-500 text-white";
  const secondaryClasses = "bg-primary hover:bg-blue-700 text-white";
  const sizeClasses = isLarge ? "py-3 px-8 text-lg" : "py-2 px-6";
  
  const combinedClasses = `${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses} ${sizeClasses} ${className}`;
  
  return (
    <Link to={to} className={combinedClasses}>
      {text}
    </Link>
  );
};

export default CTAButton;