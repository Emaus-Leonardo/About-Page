import React from "react";

const sizes = {
  xs: "text-base font-normal",
  s: "text-lg font-normal",
  md: "text-8xl font-normal md:text-5xl",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
