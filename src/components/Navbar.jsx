/* eslint-disable react/no-unescaped-entities */
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import rlogo from "../assets/rlogo.png";

const Navbar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <BsInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/russel_basket/?igshid=MzRlODBiNWFlZA%3D%3D",
      style: "hover: cursor-pointer hover:scale-105  ",
    },
    {
      id: 2,
      child: (
        <>
          <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/918052663908",
      style: "hover: cursor-pointer hover:scale-105 ",
    },
  ];
  return (
    <div>
      <nav className="p-2 md:flex md:items-center border-b-2">
        <div className="p-2">
          <img
            className="hover:scale-105 duration-500 h-28 w-28 m-auto md:h-20 md:w-auto"
            src={rlogo}
            alt="russellbasketlogo"
          />
        </div>
        <div className="m-auto flex-col text-center ">
          <h1 className="text-yellow-300 text-6xl pt-2 font-signature tracking-wider">
            Russell's Basket
          </h1>
          <h3 className="text-yellow-200 relative bottom-2 font-thin">
            Gifting made easy
          </h3>
        </div>
        <div className="flex gap-5 md:mr-4 justify-center text-yellow-500">
          {links.map(({ id, child, href, style }) => (
            <div key={id} className={style}>
              <a href={href} className="" target="_blank" rel="noreferrer">
                {child}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
