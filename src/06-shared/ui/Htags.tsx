import React from 'react';

interface HtagProps {
  children: string;
}

const Htags: React.FC<HtagProps> = ({ children }) => {
  return (
    <>
      <h2>
        <span className="text-sitePrimary">#</span>
        {children}
      </h2>
    </>
  );
};

export default Htags;
