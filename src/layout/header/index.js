import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from '../../components/burgerMenu.js';
import { SideMenu } from "../../components/sideMenu.js";
import { CSearch } from "../../components/search";


export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header>
        <Link to="/">
          NEWS
      </Link>
        {open ? <></> : <CSearch />}
        <div>
          <Burger open={open} setOpen={setOpen} />
          <SideMenu open={open} setOpen={setOpen} />
        </div>
      </header>

    </>
  );
}