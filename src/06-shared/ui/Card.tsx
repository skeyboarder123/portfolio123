import React from 'react';
import classNames from 'classnames';
import Button from './Button';
import { useTranslation } from 'react-i18next';

interface CardFace {
  type: 'small' | 'big';
  children: string[];
  imageURL?: string;
  github?: boolean;
  githubURL?: string;
  live?: boolean;
  cached?: boolean;
  privateq?: boolean;
}

const Card: React.FC<CardFace> = ({
  children,
  type,
  imageURL,
  github,
  live,
  cached,
  privateq,
  githubURL,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames('border-[1px] border-siteGray h-fit', '', {
        'w-smallCardSize': type === 'small',
        'w-cardSize': type === 'big',
      })}
    >
      {type === 'small' ? (
        <>
          <div className="">
            <p className="py-[0.5rem] px-[10px] text-siteWhite border-b-[1px] border-siteGray">
              {t(children[0])}
            </p>
            <p className="py-[0.5rem] px-[10px]">{children[1]}</p>
          </div>
        </>
      ) : (
        <>
          {imageURL && (
            <div className="w-full h-[300px] ">
              <img
                src={imageURL}
                className="object-cover w-full h-full"
                alt="img"
              />
            </div>
          )}
          <p className="py-[0.5rem] px-[2rem] border-b-[1px]  border-siteGray">
            {children[0]}
          </p>
          <div className="p-[2rem] ">
            <p className="text-siteLarge font-semibold text-siteWhite mb-[1rem]">
              {t(children[1])}
            </p>
            <p className="mb-[1rem]">{t(children[2])}</p>
            <div className="flex gap-[10px]">
              {github && (
                <Button hrefBlank={githubURL}>github &lt;~~&gt;</Button>
              )}
              {live && <Button>live &lt;~~&gt;</Button>}
              {cached && <Button>cached =&gt;</Button>}
              {privateq && <Button>private</Button>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
