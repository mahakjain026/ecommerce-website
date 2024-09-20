import React from 'react';
import { mapLocaleToMeaningfulFormat } from "../utils/i18n";
import LikeIcon from "../../../public/assets/like";
import CartIcon from "../../../public/assets/cart";
import UserIcon from "../../../public/assets/user";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import SearchBox from '../header/SearchBox';

export const HamburgerMenuPage = () => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <HamburgerMenu bgColor="bg-white" textColor="text-black">
      <HamburgerMenuBrand href="#">
        {/* <section className='flex gap-x-16'> */}
        <section>
            <h1>Exclusive</h1>
            {/* <section className=""><SearchBox /></section> */}
            </section>
            </HamburgerMenuBrand>
                 

      <HamburgerMenuToggler toggle={toggle} />
      <HamburgerMenuCollapse open={open}>
        <HamburgerMenuNav>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/Home">{mapLocaleToMeaningfulFormat().home}</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="#">{mapLocaleToMeaningfulFormat().contact}</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="#">{mapLocaleToMeaningfulFormat().about}</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/SignUp">{mapLocaleToMeaningfulFormat().signup}</HamburgerMenuLink>
          </HamburgerMenuItem>
        </HamburgerMenuNav>
      </HamburgerMenuCollapse>
    </HamburgerMenu>
  );
};

/* Logic */

const style = {
  nav: `block pl-0 mb-0`,
  navbar: `font-light shadow py-2 px-4`,
  collapse: `transition-height ease duration-300`,
  toggler: `float-right pt-1.5 text-3xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer py-1.5 px-4  hover:text-gray-400 font-medium`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
};

function HamburgerMenu({ children, bgColor, textColor } :any) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`}>{children}</nav>
  );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuBrand({ children, href } :any) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
}

function HamburgerMenuToggler({ toggle } : any) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
}

function HamburgerMenuCollapse({ children, open } :any) {
  const ref = React.useRef(null);

  const inlineStyle = open
    ? { height: ref.current?.scrollHeight }
    : { height: 0, visibility: 'hidden', opacity: 0 };

  return (
    <div className={style.collapse} style={inlineStyle} ref={ref}>
      {children}
    </div>
  );
}

function HamburgerMenuNav({ children }) {
  return <ul className={style.nav}>{children}</ul>;
}

function HamburgerMenuItem({ children }) {
  return <li>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuLink({ children, href }) {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  );
}