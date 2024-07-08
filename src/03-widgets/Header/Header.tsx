import AnimaHeader from '@entities/AnimaHeader';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import React from 'react';
import { LangDropdown } from '@features/LangDropdown';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  main?: boolean;
}

const Header: React.FC<HeaderProps> = ({ main = true }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <header className="w-screen sticky top-0 z-[100] bg-gradient-to-bl  from-siteBg to-black/50 shadow-lg">
      <AnimaHeader>
        <div className="w-[75%] h-fit py-[20px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex gap-[10px]">
            <img src="svgs/headerSVG/logo.svg" alt="logo" />
            <p className="font-bold text-siteWhite">Michael</p>
          </Link>

          <nav className=" select-none pl:hidden">
            <ul className="flex gap-[3rem]">
              {main && (
                <>
                  <li className=" cursor-pointer">
                    <AnchorLink href="#home">
                      <p>
                        <span className=" text-sitePrimary">#</span>
                        {t('home')}
                      </p>
                    </AnchorLink>
                  </li>
                  <li className=" cursor-pointer">
                    <AnchorLink href="#projects">
                      <p>
                        <span className=" text-sitePrimary">#</span>
                        {t('works')}
                      </p>
                    </AnchorLink>
                  </li>
                  <li className=" cursor-pointer">
                    <AnchorLink href="#about">
                      <p>
                        <span className=" text-sitePrimary">#</span>
                        {t('about-me')}
                      </p>
                    </AnchorLink>
                  </li>
                  <li className=" cursor-pointer">
                    <AnchorLink href="#contacts">
                      <p>
                        <span className=" text-sitePrimary">#</span>
                        {t('contacts')}
                      </p>
                    </AnchorLink>
                  </li>
                </>
              )}
              <li className=" cursor-pointer">
                <LangDropdown />
              </li>
            </ul>
          </nav>
          <div className="pl:block hidden">
            <img src="svgs/headerSVG/drop.svg" alt="skladka" />
          </div>
        </div>
      </AnimaHeader>
    </header>
  );
};

export default Header;
