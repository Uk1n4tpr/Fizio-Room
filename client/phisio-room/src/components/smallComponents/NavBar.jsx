import React, { useRef } from "react";
import Logo from "../../../public/Screenshot_1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const { handleTerminiRedirect } = props;

  const navigate = useNavigate();

  const hamburgerRef = useRef(null);

  const handleHamburgerMenu = () => {
    hamburgerRef.current.style.display = "flex";
  };

  const handleCloseMenu = () => {
    hamburgerRef.current.style.display = "none";
  };

  const handleHomeRedirect = () => {
    navigate("/");
    handleNavNavigate();
  };

  const handleNavNavigate = () => {
    hamburgerRef.current.style.display = "none";
  };

  return (
    <>
      <div className="w-full absolute top-0 flex flex-col justify-between items-center p-5 z-10 font-fredoka">
        <div className="w-full flex justify-between items-center p-5 z-10">
          <div className="flex justify-center items-center gap-5 p-2">
            <a href="#home">
              <div onClick={handleHomeRedirect}>
                <img className="w-9 h-10" src={Logo} alt="logo-img" />
              </div>
            </a>
            <div className="text-blue-400 font-semibold text-xl md:text-3xl lg:text-3xl">
              <p className="font-fredoka">PHYSIO ROOM</p>
            </div>
          </div>
          <div className="hidden md:hidden lg:flex justify-center items-center text-blue-400 font-semibold text-xl">
            <ul className="flex justify-center items-center gap-20 p-2">
              <li
                onClick={handleHomeRedirect}
                className="cursor-pointer p-2 rounded-xl bg-white-400/0 hover:bg-blue-400 hover:text-white"
              >
                POČETNA
              </li>
              <li
                onClick={() => {
                  handleTerminiRedirect();
                }}
                className="cursor-pointer p-2 rounded-xl bg-white-400/0 hover:bg-blue-400 hover:text-white"
              >
                TERMINI
              </li>
              <a href="#usluge">
                <li className="cursor-pointer p-2 rounded-xl bg-white-400/0 hover:bg-blue-400 hover:text-white">
                  ULUGE
                </li>
              </a>
              <a href="#o-nama">
                <li className="cursor-pointer text-nowrap p-2 rounded-xl bg-white-400/0 hover:bg-blue-400 hover:text-white">
                  O NAMA
                </li>
              </a>
              <a href="#contact">
                <li className="cursor-pointer p-2 rounded-xl bg-white-400/0 hover:bg-blue-400 hover:text-white">
                  KONTAKT
                </li>
              </a>
            </ul>
          </div>
          <div
            onClick={handleHamburgerMenu}
            className="lg:hidden md:flex sm:flex flex-col justify-center items-center text-blue-400 text-3xl cursor-pointer"
          >
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="w-full h-1 bg-blue-400 px-5 rounded-xl"></div>
      </div>
      <div
        ref={hamburgerRef}
        className="hidden justify-start gap-5 items-center flex-col w-screen h-screen fixed z-20  bg-gradient-to-b from-blue-950 to-blue-400 text-blue-200 font-semibold"
      >
        <div
          onClick={handleCloseMenu}
          className="w-full flex justify-end items-center cursor-pointer p-10 text-3xl"
        >
          <FaTimes />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <ul className="flex flex-col justify-center items-center w-full gap-10 underline">
            <li
              onClick={handleHomeRedirect}
              className="cursor-pointer bg-white/0 rounded-xl hover:bg-blue-400 p-3"
            >
              POČETNA
            </li>
            <li
              onClick={handleTerminiRedirect}
              className="cursor-pointer bg-white/0 rounded-xl hover:bg-blue-400 p-3"
            >
              TERMINI
            </li>
            <a onClick={handleHomeRedirect} href="#usluge">
              <li className="cursor-pointer bg-white/0 rounded-xl hover:bg-blue-400 p-3">
                USLUGE
              </li>
            </a>
            <a onClick={handleHomeRedirect} href="#o-nama">
              <li className="cursor-pointer text-nowrap bg-white/0 rounded-xl hover:bg-blue-400 p-3">
                O NAMA
              </li>
            </a>
            <a onClick={handleHomeRedirect} href="#contact">
              <li className="cursor-pointer bg-white/0 rounded-xl hover:bg-blue-400 p-3">
                KONTAKT
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
