import React from 'react';
import { Header, Footer } from '@widgets/';

interface LayoutProps {
  children: React.ReactNode;
}

const RoutesLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header main={false} />
      <main className="w-[75%] mx-auto pl:w-[90%]">{children}</main>
      <Footer />;
    </>
  );
};

export default RoutesLayout;
