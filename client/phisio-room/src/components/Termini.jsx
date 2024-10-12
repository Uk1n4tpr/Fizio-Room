//Komponenta za prikaz termina
import React, { useEffect, useRef, useState } from "react";
import NavBar from "./smallComponents/NavBar";
import { FaTimes } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventModal from "../components/smallComponents/EventModal";
import InputCalendar from "./smallComponents/InputCalendar";
import time from "../apiMine/time";
import axios from "axios";
import ErrorInputTerapeut from "./errors/ErrorInputTerapeut";
import { useNavigate } from "react-router-dom";

function Termini() {
  //variabla za postavljanje datuma
  const [date, setDate] = useState(new Date());
  //variabla za prikaz termina
  const [showModal, setShowModal] = useState(false);
  //variabla za uslugu i terapeuta
  const [filterCalendar, setFilterCalendar] = useState({
    terapeut: "",
    usluga: "",
  });
  //variabla za postavljanje info o pacijentu
  const [pacientInfo, setPacientInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  //variabla za postavljanje info o terminu
  const [terminInfo, setTerminInfo] = useState({
    clock: 0,
    index: 0,
    dateTermin: "",
    filter: {},
  });

  const navigate = useNavigate();

  const callendarRef = useRef();
  const errorRef = useRef();

  //funkcija za prikaz kalendara
  const handleShowCallendar = () => {
    callendarRef.current.style.display = "flex";
  };

  //funkcija za sklanjanje kalendara
  const handleHideCallendar = () => {
    callendarRef.current.style.display = "none";
  };

  //funkcija za mjenjanje datuma
  const handleDateChange = async (newDate) => {
    setDate(newDate);
    setShowModal(true);
    handleTablePost(newDate);
  };

  //funkcija za pravljenje nove tabele u bazi podataka
  const handleTablePost = async (date) => {
    const sendingDate = date.toDateString();
    try {
      const response = await axios.post("/table-date", { sendingDate, time });
    } catch (error) {
      console.error("error posting docs");
    }
  };

  //funkcija za skrivanje prozora za termine
  const closeModal = () => {
    setShowModal(false);
  };

  //funkcija za prikaz errora
  const handleShowError = () => {
    errorRef.current.style.display = "flex";
    window.scrollTo(0, 0);
  };

  //funkcija za skrivanje errora
  const handleHideError = () => {
    errorRef.current.style.display = "none";
  };

  //funkcija za postavljanje info o zakazanom terminu u bazi podataka
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/termin-submition", {
        terminInfo,
        pacientInfo,
      });
      console.log("data sent correctly");
      setPacientInfo({
        name: "",
        lastName: "",
        email: "",
        phone: "",
      });
      setTerminInfo({
        clock: 0,
        index: 0,
        dateTermin: "",
        filter: {},
      });
      closeModal();
      handleHideCallendar();
    } catch (error) {
      handleShowError();
      console.error("error sending form data: ", error);
      setPacientInfo({
        name: "",
        lastName: "",
        email: "",
        phone: "",
      });
      setTerminInfo({
        clock: 0,
        index: 0,
        dateTermin: "",
        filter: {},
      });
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center bg-image h-screen bg-cover bg-center">
        <NavBar />
        <div className="text-blue-200 font-semibold text-xl md:lg:text-3xl flex justify-center items-center flex-col text-center gap-10">
          <h1 className="text-2xl md:lg:text-5xl text-blue-400">TERMINI</h1>
          <p>
            Ovde možete zakazati termin za neku od usluga koje imamo u ponudi.
          </p>
          <div
            onClick={handleShowCallendar}
            className="flex justify-center items-center cursor-pointer p-3 bg-white/65 rounded-2xl text-blue-600 font-semibold border-b-4 border-r-2 border-b-blue-400 border-r-blue-600 hover:p-4 hover:rounded-3xl"
          >
            <button>
              <p>KALENDAR</p>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={callendarRef}
        className="gap-10 w-screen pb-80 hidden flex-col justify-start items-center bg-gradient-to-b from-blue-950 to-blue-400 absolute top-0 z-20 p-5 text-blue-200"
      >
        <div
          onClick={handleHideCallendar}
          className="flex w-full justify-end items-center text-2xl cursor-pointer"
        >
          <FaTimes />
        </div>
        <div className="gap-10 flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold">KALENDAR</p>
          <div className="w-full p-5 justify-center items-center flex flex-col gap-5 font-semibold">
            <InputCalendar
              filterCalendar={filterCalendar}
              setFilterCalendar={setFilterCalendar}
              handleSubmit={handleSubmit}
            />
          </div>
          <Calendar
            className="bg-white/0 border-2 border-blue-200 text-white rounded-xl"
            onChange={handleDateChange}
            value={date}
          />
          {showModal && (
            <EventModal
              filterCalendar={filterCalendar}
              date={date}
              onClose={closeModal}
              handleSubmit={handleSubmit}
              pacientInfo={pacientInfo}
              setPacientInfo={setPacientInfo}
              terminInfo={terminInfo}
              setTerminInfo={setTerminInfo}
              handleShowError={handleShowError}
            />
          )}
        </div>
      </div>
      <div
        ref={errorRef}
        className="z-20 w-screen h-screen hidden justify-center items-center absolute top-0 bg-black/75"
      >
        <ErrorInputTerapeut handleHideError={handleHideError} />
      </div>
    </>
  );
}

export default Termini;
