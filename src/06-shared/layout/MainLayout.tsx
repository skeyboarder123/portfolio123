import React from 'react';
import { Header, Footer } from '@widgets/';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-[75%] mx-auto pl:w-[90%]">{children}</main>
      <Footer />;
    </>
  );
};

export default MainLayout;
