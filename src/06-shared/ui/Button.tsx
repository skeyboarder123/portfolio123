import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  children: string;
  href?: string;
  hrefBlank?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href = '',
  hrefBlank = '',
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    if (href.includes('#')) {
      const [, path] = href.split('#');
      document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    } else navigate(href);
  };

  return (
    <div
      onClick={handleClick}
      className={classNames(
        'w-fit cursor-pointer py-[0.5rem] px-[0.5rem] border-[1px] border-sitePrimary transition-all ',
        'hover:bg-sitePrimary/80 hover:rounded-[10px] hover:opacity-95'
      )}
    >
      {hrefBlank ? (
        <Link to={hrefBlank} target="_blank">
          <p className="text-siteWhite">{t(children)}</p>
        </Link>
      ) : (
        <p className="text-siteWhite">{t(children)}</p>
      )}
    </div>
  );
};

export default Button;
