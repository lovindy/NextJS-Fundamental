import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>Navigate Bar</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>�� 2022 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default layout;
