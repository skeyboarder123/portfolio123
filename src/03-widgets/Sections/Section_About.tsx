import TextWrapper from '@entities/TextWrapper';
import { Button, Htags } from '@shared/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
const Section_About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className=" mb-[10rem]">
      <TextWrapper>
        <div className="flex items-center gap-[10px] mb-[3rem]">
          <Htags>{t('about-me')}</Htags>
          <img
            className="w-[60%]"
            src="svgs/sectionSVG/linePurple.svg"
            alt="line"
          />
        </div>

        <div className=" flex justify-between items-center tablet:flex-col tablet:gap-[2rem]">
          <div className="w-[50%] tablet:w-full">
            <p className="mb-[2.5rem]">
              {t('hello')} <span className=" text-siteWhite">Michael!</span>
            </p>{' '}
            <p className="mb-[2.5rem] leading-[2rem]">{t('self-taught')} </p>{' '}
            <p className="leading-[2rem] mb-[3rem]">{t('passion')}</p>
            <Button href="/projects">My projects</Button>
          </div>
          <div>
            <img src="imgs/abouthood.png" alt="about" />
          </div>
        </div>
      </TextWrapper>
    </section>
  );
};

export default Section_About;
