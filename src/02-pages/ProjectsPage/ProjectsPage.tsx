import { RoutesLayout } from '@shared/';
import { Section_Projects, Section_SmallProjects } from '@widgets/';

import React from 'react';

const ProjectsPage = () => {
  return (
    <RoutesLayout>
      {
        <>
          <Section_Projects main />
          <Section_SmallProjects />
        </>
      }
    </RoutesLayout>
  );
};

export default ProjectsPage;
