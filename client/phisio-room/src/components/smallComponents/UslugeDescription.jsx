//Komponenta za ucitavanje informacija o uslugama
import React from "react";
import uslugeOpis from "../../apiMine/uslugeOpis";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function UslugeDescription() {
  const { index } = useParams();

  const navigate = useNavigate()

 //redirekt na termine
  const handleTerminiRedirect = () => { 
      navigate('/termini')
   }
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 to to-blue-400 text-blue-200 py-10">
        <NavBar />
        <div className="flex flex-col justify-center items-center font-semibold mt-32 text-justify p-3 gap-5">
          <h1 className="text-2xl">{uslugeOpis[index].name}</h1>
          <p className="text-lg">{uslugeOpis[index].opis}</p>
        </div>
        <div className="flex justify-center items-center p-3 bg-white/65 rounded-2xl text-blue-600 font-semibold border-b-4 border-r-2 border-b-blue-600 border-r-blue-600 hover:p-4 hover:rounded-3xl">
          <button onClick={handleTerminiRedirect} className="">
            <p>ZAKAŽITE TERMIN</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default UslugeDescription;
