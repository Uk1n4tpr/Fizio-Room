//Komponenta za prikaz stranice o uslugama
import React from "react";
import fizikalneTerapijeImg from '../../public/physio-icons/fizikalne.png'
import masaze from '../../public/physio-icons/Untitled.png'
import elektro from '../../public/physio-icons/2643153.png'
import korektivne from '../../public/physio-icons/korektivne vježbe.png'
import taping from '../../public/physio-icons/taping.png'
import manuelna from '../../public/physio-icons/manuelna teraoija.png'
import { useNavigate } from "react-router-dom";

function Usluge() {
  const navigate = useNavigate()

  const handleUslugeOpisShow = (index) => { 
    console.log(index)
    navigate(`/usluge-opis/${index}`)
   }
  return (
    <>
      <div id="usluge" className="usluge-font flex flex-col justify-center items-center bg-blue-600">
        <div className="flex flex-col gap-5 justify-around md:lg:justify-center items-center m-0 p-0 bg-gradient-to-b from-[#000000] to-blue-800 w-full h-full">
          <div className="flex flex-col justify-center items-center text-center text-blue-400 font-semibold text-4xl gap-2 mt-20">
            <p className="text-3xl font-semibold">USLUGE</p>
          </div>
          <div className="flex flex-wrap justify-center items-center text-white font-semibold gap-y-20 gap-x-10 md:lg:gap-y-10 mg:lg:gap-x-10 mb-10">
            <div onClick={() => { handleUslugeOpisShow(0) }} className="flex flex-col w-[40%] min-h-[150px] md:lg:w-auto md:lg:min-h-32 justify-center items-center text-center bg-blue-400 cursor-pointer text-sm font-semibold rounded-xl border-b-4 border-r-4 border-b-white border-r-white">
              <img className="w-30 h-20" src={fizikalneTerapijeImg} alt="" />
              <p className="text-blue-950 text-wrap max-w-full">FIZIKALNE TERAPIJE</p>
              <p className="text-sm p-1 text-normal">
                pročitaj više
              </p>
            </div>
            <div onClick={() => { handleUslugeOpisShow(1) }} className="flex flex-col w-[40%] min-h-[150px] h-auto md:lg:w-auto md:lg:min-h-32 justify-center items-center text-center bg-blue-400 cursor-pointer text-sm font-semibold rounded-xl border-b-4 border-r-4 border-b-white border-r-white-">
              <img className="w-30 h-20" src={masaze} alt="" />
              <p className="text-blue-950 text-wrap max-w-full">MASAŽE</p>
              <p className="text-sm p-1 text-normal">
                pročitaj više
              </p>
            </div>
            <div onClick={() => { handleUslugeOpisShow(2) }} className="flex flex-col w-[40%] min-h-[150px] h-auto md:lg:w-auto md:lg:min-h-32 justify-center items-center text-center bg-blue-400 cursor-pointer text-sm font-semibold rounded-xl border-b-4 border-r-4 border-b-white border-r-white">
              <img className="w-20 h-20" src={elektro} alt="" />
              <p className="text-blue-950">ELEKTROTERAPIJA</p>
              <p className="text-sm p-1 text-normal">
                pročitaj više
              </p>
            </div>
            <div onClick={() => { handleUslugeOpisShow(3) }} className="flex flex-col w-[40%] min-h-[150px] h-auto md:lg:w-auto md:lg:min-h-32 justify-center items-center text-center bg-blue-400 cursor-pointer text-sm font-semibold rounded-xl border-b-4 border-r-4 border-b-white border-r-white">
              <img className="h-20 w-20" src={korektivne} alt="" />
              <p className="text-blue-950 text-wrap max-w-full">KOREKTIVNE VJEŽBE</p>
              <p className="text-sm p-1 text-normal">
                pročitaj više
              </p>
            </div>
            <div onClick={() => { handleUslugeOpisShow(4) }} className="flex flex-col w-[40%] min-h-[150px] h-auto md:lg:w-auto md:lg:min-h-32 justify-center items-center text-center bg-blue-400 cursor-pointer text-sm font-semibold rounded-xl border-b-4 border-r-4 border-b-white border-r-white">
              <img className="w-20 h-20" src={taping} alt="" />
              <p className="text-blue-950 text-wrap max-w-full">KINESIO TAPING</p>
              <p className="text-sm p-1 text-normal">
                pročitaj više
              </p>
            </div>
            <div onClick={() => { handleUslugeOpisShow(5) }} className="flex flex-col w-[40%] min-h-[150px] h-auto md:lg:w-auto md:lg:min-h-32 justify-center items-center text-center bg-blue-400 cursor-pointer text-sm font-semibold rounded-xl border-b-4 border-r-4 border-b-white border-r-white">
              <img className="w-20 h-20" src={manuelna} alt="" />
              <p className="text-blue-950 text-wrap max-w-full">MANUELNA TERAPIJA</p>
              <p className="text-sm p-1 text-normal">
                pročitaj više
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usluge;
