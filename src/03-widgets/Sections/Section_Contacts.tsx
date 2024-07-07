import TextWrapper from '@entities/TextWrapper';
import { Htags } from '@shared/ui';
import { useTranslation } from 'react-i18next';
const Section_Contacts = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contacts"
      className="pb-[10rem] border-b-[1px] border-siteWhite"
    >
      <TextWrapper>
        <div className="flex items-center gap-[10px] mb-[5rem] ">
          <Htags>{t('contacts')}</Htags>
          <img
            className="w-[50%]"
            src="src/01-app/public/svgs/sectionSVG/linePurple.svg"
            alt="line"
          />
        </div>
        <div className=" flex  gap-[30%] tablet:flex-col tablet:gap-[2rem]">
          <p className="w-[40%] tablet:w-full">{t('openToFreelance')}</p>
          <div className="border-[1px] border-siteWhite w-[200px] h-[fit] p-[.8rem] mt-[2rem] tablet:ml-auto">
            <p className=" text-siteWhite mb-[.8rem]">{t('messageMeHere')}</p>
            <div className="flex gap-[10px] mb-[.5rem]">
              <img src="src/01-app/public/svgs/sectionSVG/tg.svg" alt="tg" />
              <p>@maikl_bon</p>
            </div>
            <div className="flex gap-[10px] mb-[.5rem]">
              <img src="src/01-app/public/svgs/sectionSVG/ds.svg" alt="ds" />
              <p>@vvscarter</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" relative w-[40%] h-[300px]">
            <img
              className="absolute top-[2rem] left-[4rem]"
              src="src/01-app/public/svgs/sectionSVG/dotsCube.svg"
              alt="dots"
            />
            <img
              className="absolute top-[0] right-[4rem]"
              src="src/01-app/public/svgs/sectionSVG/CubeLarge.svg"
              alt="cube"
            />
            <img
              className="absolute bottom-[2rem] right-[0]"
              src="src/01-app/public/svgs/sectionSVG/cubeSmall.svg"
              alt="cube"
            />
            <img
              className="absolute bottom-[4.5rem] right-[10rem]"
              src="src/01-app/public/svgs/sectionSVG/dotsCube.svg"
              alt="dots"
            />
            <img
              className="absolute bottom-[0rem] left-[6rem]"
              src="src/01-app/public/svgs/sectionSVG/logoArt.svg"
              alt="logo"
            />
          </div>
        </div>
      </TextWrapper>
    </section>
  );
};

export default Section_Contacts;
