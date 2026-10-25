import React from "react";
// If you have a 'cn' utility for class merging, import it. 
// Otherwise, you can just use template literals as shown below.

const Badge = ({ className = "", variant = "default", ...props }) => {
  
  // Define styles for different badge variants
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200/80 border-transparent dark:bg-gray-800 dark:text-gray-100",
    outline: "text-foreground border-border",
    destructive: "bg-red-500 text-white hover:bg-red-600 border-transparent",
  };

  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  // Combine base styles with variant styles and any custom className passed in
  const combinedClassName = `${baseStyles} ${variants[variant] || variants.default} ${className}`;

  return (
    <div className={combinedClassName} {...props} />
  );
}

export { Badge };