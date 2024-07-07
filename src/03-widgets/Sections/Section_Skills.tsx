import TextWrapper from '@entities/TextWrapper';
import { Card, Htags } from '@shared/ui';
import { useTranslation } from 'react-i18next';
const Section_Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full mb-[15rem]">
      <TextWrapper>
        <div className="flex mb-[4rem] items-center gap-[10px]">
          <Htags>{t('skills')}</Htags>
          <img
            className="w-[50%]"
            src="src/01-app/public/svgs/sectionSVG/linePurple.svg"
            alt="line"
          />
        </div>
        <div className="flex justify-between tablet:flex-col tablet:items-center">
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
          <div className="w-[55%] mt-[2rem] flex gap-[1rem] flex-wrap tablet:w-[70%] tablet:justify-center">
            <Card type="small">
              {['Languages', 'TypeScript Python JavaScript HTML CSS SCSS']}
            </Card>
            <Card type="small">
              {['Other', 'WordPress Tilda Strapi FramerMotion ']}
            </Card>
            <Card type="small">{['Frameworks', 'React Next Tailwind ']}</Card>

            <Card type="small">
              {['Tools', 'VSCode Figma Git npm Webpack Redux RTKQuery']}
            </Card>
          </div>
        </div>
      </TextWrapper>
    </section>
  );
};

export default Section_Skills;
