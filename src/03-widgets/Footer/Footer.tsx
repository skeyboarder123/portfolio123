import TextWrapper from '@entities/TextWrapper';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-[75%] mx-auto pt-[5rem] phone:w-[95%] ">
      <TextWrapper duration={0.8} axisNum={-100}>
        <div className="flex justify-between mb-[3rem]">
          <div>
            <div className="flex gap-[10px] mb-[1rem]">
              <img src="src/01-app/public/svgs/headerSVG/logo.svg" alt="logo" />
              <p className="font-bold text-siteWhite">Michael</p>
            </div>
            <p>{t('reactFrontEndFooter')}</p>
          </div>
          <div className="pr-[5rem]">
            <p className=" text-siteLarge text-siteWhite mb-[1.5rem]">Media</p>
            <div className="flex gap-[10px]">
              <img
                src="src/01-app/public/svgs/sectionSVG/Github.svg"
                alt="git"
              />
              <img
                src="src/01-app/public/svgs/sectionSVG/Email.svg"
                alt="mail"
              />
              <img src="src/01-app/public/svgs/sectionSVG/tg.svg" alt="tg" />
            </div>
          </div>
        </div>
        <p className=" text-center pb-[2rem]">
          &copy;&nbsp;Copyright 2024. Made by&nbsp;Michael
        </p>
      </TextWrapper>
    </footer>
  );
};

export default Footer;
