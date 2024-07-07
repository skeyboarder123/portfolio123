import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const LangDropdown = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, isOpen] = useState(false);

  const { i18n } = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const urlLang = searchParams.get('lang') || 'en';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    isOpen(!open);
    navigate(`${location.pathname}?lang=${lng}`);
  };

  useEffect(() => {
    if (!searchParams.has('lang')) {
      navigate(`${location.pathname}?lang=${urlLang}`, { replace: true });
    }
    i18n.changeLanguage(urlLang).then(() => {
      console.log('Language successfully changed to', urlLang);
    });
    console.log(urlLang, location.pathname, 'called');
  }, [urlLang, location.pathname, i18n.language]);

  return (
    <>
      <div
        onClick={() => isOpen(!open)}
        className="w-fit flex gap-[5px] items-center relative"
      >
        <p>{urlLang.toUpperCase()}</p>
        <img
          src="src/01-app/public/svgs/headerSVG/arrowdown.svg"
          alt="arrowdown"
        />
      </div>
      {open && (
        <ul className="w-[40px] bg-black/50 absolute p-[5px]">
          <li
            onClick={() => changeLanguage('en')}
            className="border-b-[1px] border-siteBg"
          >
            <p>EN</p>
          </li>
          <li onClick={() => changeLanguage('ru')} className="">
            <p>RU</p>
          </li>
        </ul>
      )}
    </>
  );
};

export default LangDropdown;
