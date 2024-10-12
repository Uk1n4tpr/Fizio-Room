//Komponenta za prikaz liste zauzetih i slobodnih termina
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import FormPacientInput from "./FormPacientInput";
import ErrorLongTermin from "../errors/ErrorLongTermin";

const EventModal = ({
  date,
  onClose,
  filterCalendar,
  handleSubmit,
  pacientInfo,
  setPacientInfo,
  setTerminInfo,
  handleShowError,
}) => {
  //variabla za podatke o datumu i terminima
  const [tableData, setTableData] = useState([]);
  //variabla koju izmjenjujemo i prikazujemo useru
  const [tableDataToShow, setTableDataToShow] = useState([]);

  //ref za formu u koju pacijent unosi podatke o sebi
  const inputTerminRef = useRef(null);
  //ref za error
  const errorRefLongTermin = useRef(null);

  //funkcija za postavljanje podataka o izabranom terminu
  const showInputPacient = async (clock, index, dateTermin, filter) => {
    //ako termin traje duze od 45min a termin posle izabranog nije slobodan prikazujemo error
    if (
      tableDataToShow[index + 1].ocupied === true &&
      (filter.usluga.includes("45") ||
        filter.usluga.includes("60") ||
        filter.usluga.includes("75"))
    ) {
      handleShowLongTerminError();
      return;
    }

    //prikazujemo prozor za unos podataka pacijent
    inputTerminRef.current.style.display = "flex";

    //postavljamo podatke o terminu
    setTerminInfo({
      clock: clock,
      index: index,
      dateTermin: dateTermin.toDateString(),
      filter: filter,
    });
    window.scrollTo(0, 0);
  };

  //funkcija za opciju zatvaranja prozora za unos podataka pacijenta
  const handleCloseInputPacient = () => {
    inputTerminRef.current.style.display = "none";
  };

  //kada se promjeni datum izvrsava se kod ispod
  useEffect(() => {
    const terapeut = filterCalendar.terapeut;
    const usluga = filterCalendar.usluga;
    //ako terapeut i usluga nisu izabrani izbacujemo error prozor
    if (terapeut === "" || usluga === "") {
      handleShowError();
    }

    //povlacimo podatke o odabranom datumu iz baze podataka
    const getTableData = async () => {
      try {
        const dateToStr = date.toDateString();
        const result = await axios.get(
          `/get-table-data/${dateToStr}/${terapeut}/${usluga}`
        );
        setTableData(result.data.times);
      } catch (error) {
        console.error("error fetching data: ", error);
      }
    };
    getTableData();
  }, [date]);

  //kada se promjene podaci o odabranom datumu izvrsava se kod ispod
  useEffect(() => {
    setTableDataToShow(tableData);
    if (tableData.length > 0) {
      //pravimo prazan array da bi posle vidjeli koliko terapeut ima termina i da li je odabrani termin slobodan
      console.log(tableData);
      const newArray = [];
      //pravimo kopiju podataka i postavljamo podatke za prikaz useru
      const table = tableData;
      setTableDataToShow(tableData);
      //loopujemo kroz dobijene podatke da vidimo da li su termini slobodni
      tableData.forEach((time, index) => {
        //lupujemo svaki termin
        time.appointments.forEach((apps, appsIndex) => {
          //ako se izabrani terapeut i terapeut koji ima termin zakazan slazu postavljamo ga u novi array
          if (apps.terapeut === filterCalendar.terapeut) {
            newArray.push(apps.terapeut);
          }
        });
        //ponovo lupujemo termine
        time.appointments.forEach((apps, appsIndex) => {
          //ako je usluga kinezio teping svi termini su slobodni
          if (filterCalendar.usluga === "Kinezio teping") {
            setTableDataToShow(tableData);
            return;
          }
          //ako termin ima zakazanih pet ili vise usluga zauzet je
          if (tableData[index].appointments.length > 4) {
            if (
              apps.usluga.includes("45") ||
              apps.usluga.includes("60") ||
              apps.usluga.includes("75")
            ) {
              //ako je termin duzi od 45min zauzimaju se dva termina
              table[index].ocupied = true;
              table[index + 1].ocupied = true;
              setTableDataToShow(table);
              console.log("tabledatatoshow: ", tableDataToShow);
              return;
            }
            table[index].ocupied = true;
            table[index + 1].ocupied = false;
            setTableDataToShow(table);
            return;
          }
          //ako odabrani terapeut ima dvije ili vise zakazanih usluga termin je zauzet
          if (newArray.length > 1) {
            if (
              apps.usluga.includes("45") ||
              apps.usluga.includes("60") ||
              apps.usluga.includes("75")
            ) {
              //ako je termin duzi od 45min zauzimaju se dva termina
              table[index].ocupied = true;
              table[index + 1].ocupied = true;
              setTableDataToShow(table);
              console.log("tabledatatoshow: ", tableDataToShow);
              return;
            }
            table[index].ocupied = true;
            table[index + 1].ocupied = false;
            setTableDataToShow(table);
            return;
          }
          //ako terapeut nema zakazanih masaza termin je slobodan
          if (
            filterCalendar.terapeut === apps.terapeut &&
            !apps.usluga.toLowerCase().includes("masaža")
          ) {
            if (
              apps.usluga.includes("45") ||
              apps.usluga.includes("60") ||
              apps.usluga.includes("75")
            ) {
              table[index].ocupied = false;
              table[index + 1].ocupied = false;
              setTableDataToShow(table);
              console.log("tabledatatoshow: ", tableDataToShow);
              return;
            }
            table[index].ocupied = false;
            table[index + 1].ocupied = false;
            setTableDataToShow(table);
            return;
          }
          //ako terapeut ima zakazanu masazu termin nije slobodan
          if (
            filterCalendar.terapeut === apps.terapeut &&
            apps.usluga.toLowerCase().includes("masaža")
          ) {
            if (
              apps.usluga.includes("45") ||
              apps.usluga.includes("60") ||
              apps.usluga.includes("75")
            ) {
              //ako je termin duzi od 45min zauzimaju se dva termina
              table[index].ocupied = true;
              table[index + 1].ocupied = true;
              setTableDataToShow(table);
              console.log("tabledatatoshow: ", tableDataToShow);
              return;
            }
            table[index].ocupied = true;
            table[index + 1].ocupied = false;
            setTableDataToShow(table);
            return;
          }
          //ako bilo ko od terapeuta ima zakazanu masazu i pacijent zeli masazu termin je zauzet
          if (
            apps.usluga.toLowerCase().includes("masaža") &&
            filterCalendar.usluga.toLowerCase().includes("masaža")
          ) {
            if (
              apps.usluga.includes("45") ||
              apps.usluga.includes("60") ||
              apps.usluga.includes("75")
            ) {
              //ako je termin duzi od 45min zauzimaju se dva termina
              table[index].ocupied = true;
              table[index + 1].ocupied = true;
              setTableDataToShow(table);
              console.log("tabledatatoshow: ", tableDataToShow);
              return;
            }
            table[index].ocupied = true;
            table[index + 1].ocupied = false;
            setTableDataToShow(table);
            return;
          }
        });
      });
    }
  }, [tableData]);

  //funkcija za prikaz errora ako je termin dug
  const handleShowLongTerminError = () => {
    errorRefLongTermin.current.style.display = "flex";
    window.scrollTo(0, 0);
  };

  //funkcija za skanjanje prozora errora
  const handleHideError = () => {
    errorRefLongTermin.current.style.display = "none";
  };

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col justify-center items-center rounded-xl bg-blue-400 p-3">
          <p className="mt-4">{date.toDateString()}</p>
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center text-xs gap-2">
              <div className="w-4 h-4 bg-blue-950"></div>
              <p>zauzet termin</p>
            </div>
            <div className="flex justify-center items-center text-xs gap-2">
              <div className="w-4 h-4 bg-blue-200"></div>
              <p>slobodan termin</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full p-3 gap-2">
            {tableDataToShow.map((clock, index) => {
              if (clock.ocupied === true) {
                console.log(clock.ocupied);
                return (
                  <div
                    key={index}
                    className="text-xs text-blue-200 border-b-2 w-full flex justify-between items-center bg-blue-800"
                  >
                    <p>{clock.time}</p>
                  </div>
                );
              }
              return (
                <div
                  onClick={() => {
                    showInputPacient(clock, index, date, filterCalendar);
                  }}
                  key={index}
                  className="text-xs text-blue-800 border-b-2 w-full flex justify-between items-center cursor-pointer bg-blue-200"
                >
                  <p>{clock.time}</p>
                </div>
              );
            })}
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
      <div
        ref={inputTerminRef}
        className="hidden flex-col justify-start items-center w-screen h-full absolute top-0 bg-black/85 gap-5"
      >
        <div
          onClick={handleCloseInputPacient}
          className="w-full flex justify-end items-start p-5 font-semibold cursor-pointer text-4xl text-blue-200"
        >
          <p>x</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <FormPacientInput
            pacientInfo={pacientInfo}
            setPacientInfo={setPacientInfo}
            handleSubmit={handleSubmit}
            handleCloseInputPacient={handleCloseInputPacient}
          />
        </div>
      </div>
      <div
        ref={errorRefLongTermin}
        className="z-20 w-screen h-screen hidden justify-center items-center absolute top-0 bg-black/75"
      >
        <ErrorLongTermin handleHideError={handleHideError} />
      </div>
    </>
  );
};

export default EventModal;
