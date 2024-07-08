import TextWrapper from '@entities/TextWrapper';
import { Card, Htags } from '@shared/ui';
import { Link } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface ProjectsProps {
  main?: boolean;
}

const Section_Projects: React.FC<ProjectsProps> = ({ main = false }) => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="pt-[5rem] mb-[15rem]">
      <TextWrapper>
        <div className="flex justify-between items-center mb-[6rem]">
          <div className="flex items-center gap-[10px]">
            <Htags>{t('projects')}</Htags>
            <img
              className="w-[50%]"
              src="svgs/sectionSVG/linePurple.svg"
              alt="line"
            />
          </div>
          <div>
            {!main && (
              <Link to="/projects">
                <p className=" text-siteWhite">{t('viewAll')}</p>
              </Link>
            )}
          </div>
        </div>

        {/* <Card type="small">
        {['Languages', 'TypeScript Lua Python JavaScript']}
      </Card> */}
        <div
          className={classNames(
            'w-full flex gap-[20px] justify-start overflow-x-hidden',
            ' pl:flex-col pl:items-center',
            {
              'flex-wrap': main,
            }
          )}
        >
          <Card type="big" imageURL="imgs/siteCard.png" github>
            {['React TS Tailwind Redux', 'Portfolio', 'You are using it rn']}
          </Card>
          <Card
            type="big"
            imageURL="imgs/MNTN.png"
            github
            githubURL="https://skeyboarder123.github.io/tailwindPrac/"
          >
            {[
              'React TS Tailwind React-Router',
              'Landing Page',
              'with auth pages w/o tokens',
            ]}
          </Card>
          <Card type="big" imageURL="imgs/reduxpoo.png" privateq>
            {[
              'React TS Framer Motion Tailwind',
              'CS cheats',
              'discarded development',
            ]}
          </Card>
          {main && <></>}
        </div>
      </TextWrapper>
    </section>
  );
};

export default Section_Projects;
