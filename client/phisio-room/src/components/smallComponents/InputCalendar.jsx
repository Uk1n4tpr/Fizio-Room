//Komponenta za prikaz unosa terapeuta i usluge
import React, { useEffect, useState } from "react";
import terapeuti from "../../apiMine/terapeuti";
import usluge from "../../apiMine/usluge";

function InputCalendar(props) {
  const { filterCalendar, setFilterCalendar, handleSubmit } = props;

  return (
    <>
        <div className="flex flex-col justify-center items-center w-full gap-5">
          <label className="border-b-2 border-blue-200">
            IZABERITE TERAPEUTA
          </label>
          <select
            onChange={(e) => {
              setFilterCalendar({
                ...filterCalendar,
                terapeut: e.target.value,
              });
            }} 
            className="shadow-lg h-8 shadow-blue-200 rounded-xl w-full text-center bg-white/0"
          >
            {terapeuti.map((terapeut) => {
              return (
                <option
                  className="w-full flex justify-center items-center text-blue-950"
                  key={terapeut.name}
                  value={terapeut.name}
                >
                  {terapeut.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-5">
          <label className="border-b-2 border-blue-200">IZABERITE USLUGU</label>
          <select
            onChange={(e) => {
              setFilterCalendar({ ...filterCalendar, usluga: e.target.value });
            }}
            className="shadow-lg h-8 shadow-blue-200 rounded-xl w-full text-center bg-white/0"
          >
            {usluge.map((usluga) => {
              return (
                <option
                  className="w-full flex justify-center items-center text-blue-950"
                  key={usluga.id}
                  value={usluge.name}
                >
                  {usluga.name}
                </option>
              );
            })}
          </select>
        </div>
    </>
  );
}

export default InputCalendar;
