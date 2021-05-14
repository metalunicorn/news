import React from 'react';


export const Burger = ({ open, setOpen }) => {
  return (
    <button className="burger-menu" open={open} onClick={() => setOpen(!open)}>
      <div style={open ? { transform: "rotate(45deg)" } : { transform: "rotate(0)" }} />
      <div style={open ? { opacity: "0", transform: "translateX(20px)" } : { opacity: "1", transform: "translateX(0)" }} />
      <div style={open ? { transform: "rotate(-45deg)" } : { transform: "rotate(0)" }} />
    </button>
  )
}