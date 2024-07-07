import TextWrapper from '@entities/TextWrapper';
import { Button } from '@shared/ui';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const Section_Main = () => {
  const { t, i18n } = useTranslation();

  console.log(i18n.language);

  return (
    <>
      <section
        id="home"
        className={classNames(
          'h-fit flex gap-[5%] items-center pt-[12rem]',
          'pl:flex-col pl:gap-[30px]'
        )}
      >
        <img
          className="absolute bottom-[0] left-[6rem] hidden pl:block"
          src="src/01-app/public/svgs/sectionSVG/logoArt.svg"
          alt="logo"
        />
        <div className=" w-[50%] pl:w-[80%] phone:w-full">
          <TextWrapper>
            <h1 className=" mb-[2rem]">
              {t('portfolio')}
              <span className=" text-sitePrimary">
                {t('reactFrontEnd')}
              </span>{' '}
              {t('developer')}
            </h1>

            <p className="w-[80%] mb-[2rem] phone:w-full">
              {t('craftWebsites')}
            </p>
            <Button href="#contacts">Contact me!!</Button>
          </TextWrapper>
        </div>
        <div className="w-fit h-fit">
          <img src="src/01-app/public/imgs/hoodie.png" alt="" />
          <div className="border-[1px] border-siteWhite p-[9px] flex gap-[5px] w-full">
            <img
              src="src/01-app/public/svgs/sectionSVG/purpleStatus.svg"
              alt="status"
            />
            <p>{t('currentlyWorkingOn')}</p>
          </div>
        </div>
      </section>

      <div className="w-[75%] mx-auto pt-[10rem] mb-[10rem]">
        <TextWrapper duration={0.15}>
          <div className="">
            <div className="border-siteGray border-[1px] p-[2rem] relative">
              <span className=" text-siteLarge text-siteWhite ">
                {t('knocksOnKeyboard')}
              </span>
              <div className=" absolute right-[1rem] bottom-[-1rem]">
                <img
                  src="src/01-app/public/svgs/sectionSVG/Quotes.svg"
                  alt="quoq"
                />
              </div>
              <div className="absolute left-[1rem] top-[-1rem]">
                <img
                  src="src/01-app/public/svgs/sectionSVG/Quotes.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-fit flex justify-end ">
              <span className="text-siteLarge text-siteWhite border-siteGray border-t-0 border-[1px] p-[1rem]">
                &mdash;&nbsp;{t('quoteAuthor')}
              </span>
            </div>
          </div>
        </TextWrapper>
      </div>
    </>
  );
};

export default Section_Main;
