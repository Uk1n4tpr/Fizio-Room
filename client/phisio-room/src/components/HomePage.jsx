//Pocetna stranica
import React from "react";
import NavBar from "./smallComponents/NavBar";
import Usluge from "./Usluge";
import ONama from "./ONama";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()

  const handleTerminiRedirect = () => { 
      navigate('/termini')
   }
  return (
    <>
      <div id="home" className="w-full flex justify-center items-center bg-image h-screen bg-cover bg-center">
        <NavBar handleTerminiRedirect={handleTerminiRedirect} />
        <div className="w-full flex flex-col items-start text-center font-bold text-blue-400 h-full relative">
          <div className="flex flex-col justify-center items-center absolute top-[30%] left-[5%] md:left-[10%] lg:left-[10%] p-5 py-20 filter blur-2xl bg-blue-400/40 rounded-full w-[400px] h-[500px] animate-spin-slow"></div>
          <div className="flex flex-col justify-center items-center absolute top-[30%] left-[5%] md:left-[10%] lg:left-[10%] p-5 py-20 filter blur-2xl bg-blue-400/40 rounded-full w-[500px] h-[400px] animate-spin-slow"></div>
          <div className="flex flex-col justify-center items-center absolute bottom-[23%] left-[5%] md:left-[10%] lg:left-[10%] bg-white/0 gap-5 text-blue-200">
            <h1 className="text-6xl filter blur-none">PHYSIO ROOM</h1>
            <p className="text-xl">studio za rehabilitaciju</p>
            <div className="flex justify-center items-center p-3 bg-white/65 rounded-2xl text-blue-600 font-semibold border-b-4 border-r-2 border-b-blue-600 border-r-blue-600 hover:p-4 hover:rounded-3xl">
              <button onClick={handleTerminiRedirect} className="">
                <p>ZAKAŽITE TERMIN</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Usluge />
      <ONama />
      <Contact />
    </>
  );
}

export default HomePage;
