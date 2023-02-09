import { logo, logo_org, logo_white, menu, close } from '../assets';
import { navLinks } from '../constants';

import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
			<a href="#home">
				<img src={logo_white} alt="root" className="w-[160px]" />
			</a>
      

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-white ${
              active === nav.title ? "text-secondary" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-[11]"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "fixed"
          } p-6 bg-primary absolute top-0 right-0 h-full sidebar-animation w-full z-[10]`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col h-full">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[32px] leading-[72px] mb-4 ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                }`}
                onClick={() => {
									setActive(nav.title);
									setToggle(!toggle);
								}}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
						<li className={`font-poppins font-medium cursor-pointer text-[32px] leading-[72px] mb-4 text-dimWhite hover:text-white`}>
							<a href={`#contact`} onClick={ () => setToggle(!toggle)}>Kontakt</a>
						</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar