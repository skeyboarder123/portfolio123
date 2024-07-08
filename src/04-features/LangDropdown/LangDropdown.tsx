import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LangDropdown = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, isOpen] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        opacity: { duration: 0.1 },
        height: { duration: 0.1 },
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        opacity: { duration: 0.1 },
        height: { duration: 0.1 },
      },
    },
  };

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
  }, [urlLang, location.pathname, i18n.language]);

  return (
    <>
      <div
        onClick={() => isOpen(!open)}
        className="w-fit flex gap-[5px] items-center relative"
      >
        <p>{urlLang.toUpperCase()}</p>
        <img src="svgs/headerSVG/arrowdown.svg" alt="arrowdown" />
      </div>

      <motion.ul
        variants={variants}
        initial="closed"
        animate={open ? 'open' : 'closed'}
        className="w-[40px] bg-black/20 absolute  p-[5px] flex flex-col items-left"
      >
        <li
          onClick={() => changeLanguage('en')}
          className="border-b-[1px] border-siteBg"
        >
          <p>EN</p>
        </li>
        <li onClick={() => changeLanguage('ru')} className="">
          <p>RU</p>
        </li>
      </motion.ul>
    </>
  );
};

export default LangDropdown;
