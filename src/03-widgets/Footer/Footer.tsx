import TextWrapper from '@entities/TextWrapper';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-[75%] mx-auto pt-[5rem] phone:w-[95%] ">
      <TextWrapper duration={0.8} axisNum={-100}>
        <div className="flex justify-between mb-[3rem]">
          <div>
            <div className="flex gap-[10px] mb-[1rem]">
              <img src="svgs/headerSVG/logo.svg" alt="logo" />
              <p className="font-bold text-siteWhite">Michael</p>
            </div>
            <p>{t('reactFrontEndFooter')}</p>
          </div>
          <div className="pr-[5rem]">
            <p className=" text-siteLarge text-siteWhite mb-[1.5rem]">Media</p>
            <div className="flex gap-[10px] items-center">
              <Link to="https://github.com/skeyboarder123" target="_blank">
                <img src="svgs/sectionSVG/Github.svg" alt="git" />
              </Link>
              <Link to="https://discord.gg/4SFX39Gp" target="_blank">
                <img src="svgs/sectionSVG/ds.svg" alt="ds" />
              </Link>
              <Link to="https://t.me/maikl_bon" target="_blank">
                <img src="svgs/sectionSVG/tg.svg" alt="tg" />
              </Link>
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
