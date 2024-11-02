import React from "react";

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      dashboard Layout
      {children}
    </div>
  );
};

export default page;
