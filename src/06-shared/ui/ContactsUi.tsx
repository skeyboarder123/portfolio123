import { Link } from 'react-router-dom';

const ContactsUi = () => {
  return (
    <div className="flex flex-col gap-[20px] absolute w-[30px] h-fit top-[10rem] left-[2rem]">
      <Link
        className="cursor-pointer"
        to="https://t.me/maikl_bon"
        target="_blank"
      >
        <img src="src/01-app/public/svgs/sectionSVG/tg.svg" alt="tg" />
      </Link>

      <img src="src/01-app/public/svgs/sectionSVG/Email.svg" alt="mail" />
      <img src="src/01-app/public/svgs/sectionSVG/ds.svg" alt="ds" />
    </div>
  );
};

export default ContactsUi;
