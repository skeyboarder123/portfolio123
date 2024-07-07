import React from 'react';
import { MainLayout } from '@shared/layout';
import {
  Section_Main,
  Section_Projects,
  Section_About,
  Section_Skills,
  Section_Contacts,
} from '@widgets/';

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Section_Main />
        <Section_Projects />
        <Section_Skills />
        <Section_About />
        <Section_Contacts />
      </MainLayout>
    </>
  );
};

export default HomePage;
