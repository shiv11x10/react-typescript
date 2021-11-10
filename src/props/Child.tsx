import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}

// here, typescript doesn't know it is a react component
// So these properties cant be used - propTypes, displayname, defaultProps, contextTypes
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

// Typescript knows it is a react component
// This also handles the children property of component by default
export const ChildasFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
