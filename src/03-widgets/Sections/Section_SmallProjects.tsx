import { Card, Htags } from '@shared/ui';
import React from 'react';

const Section_SmallProjects = () => {
  return (
    <div className="pb-[15rem] border-b-[1px] border-siteGray">
      <div className="flex items-center gap-[10px] mb-[3rem]">
        <Htags>small-projects</Htags>
        <img
          className="w-[50%]"
          src="src/01-app/public/svgs/sectionSVG/linePurple.svg"
          alt="line"
        />
      </div>
      <Card
        type="big"
        github
        githubURL="https://skeyboarder123.github.io/todoApp/"
      >
        {['React LocalStorage ', 'TodoApp', 'Mastering hooks and states']}
      </Card>
    </div>
  );
};

export default Section_SmallProjects;
