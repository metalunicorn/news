import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const menuItems = {
  '/category/Business': 'Business',
  '/category/Entertainment': 'Entertainment',
  '/category/Sports': 'Sports',
  '/category/World': 'World',
  '/category/ScienceAndTechnology': 'Science',
  '/category/Politics': 'Politics',
  '/categor/Products': 'Products',
  '/category/Health': 'Health',
}

const NavItem = ({ url, text, setShow }) =>
  <li className="nav-item" ><Link className="nav-link" to={`${url}`} onClick={() => setShow(false)}>{text}</Link></li>


const CategoryNames = ({ active, setActive }) =>
  <>
    {active ? Object.entries(menuItems).map(([url, text],index) => <NavItem setShow={setActive} url={url} text={text} key={index} onClick={() => console.log("flase")} />) : <></>}
  </>

export const SideMenu = (open) => {
  const [show, setShow] = useState(open)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setShow(s => !s)
  }, [open])
  return (
    <>
      {show ? <div className="side-menu" style={{ transform: "translateX(100%)" }}>
        <div className="burger-menu-nav-bar">
          <div className="side-menu-text" onMouseEnter={() => setVisible(true)}>Category</div>
          <div className="side-menu-text"><Link to="/">⚡️ Trending news</Link></div>
        </div>
        {visible ? <div className="category-names-header" onMouseLeave={() => setVisible(false)}><CategoryNames active={visible} setActive={setVisible} /></div> : <></>}
      </div> : <></>}
    </>
  )
}