//Komponenta za prikaz kontakt stranice
import React from "react";
import map from "../../public/mapa.png";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col justify-center items-center w-full bg-gradient-to-b from-gray-950 to-gray-500 gap-10 py-16"
      >
        <div className="flex justify-center items-center text-blue-400 font-semibold text-3xl md:lg:text-6xl p-3 mt-3">
          <p>KONTAKT</p>
        </div>
        <div className="w-full h-full flex flex-col md:lg:flex-row justify-center items-center gap-16">
          <div className="flex flex-col justify-around items-center w-full md:lg:w-[50%] h-[50%] font-semibold gap-5">
            <a href="https://www.facebook.com/profile.php?id=100007533226749">
              <div className="flex justify-center items-center rounded-tr-3xl rounded-bl-3xl border-b-4 border-b-blue-950 cursor-pointer shadow-xl shadow-blue-400">
                <div className="flex justify-center items-center h-[2rem] py-4 px-5 rounded-bl-3xl bg-blue-400 text-2xl text-white">
                  <FaFacebook />
                </div>
                <div className="flex justify-center items-center h-[2rem] py-4 px-5 rounded-tr-3xl bg-white text-blue-400">
                  <p>_Phisio_Room_</p>
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com/_physio__room/">
              <div className="flex justify-center items-center rounded-tr-3xl rounded-bl-3xl border-b-4 border-b-blue-950 cursor-pointer shadow-xl shadow-blue-400">
                <div className="flex justify-center items-center h-[2rem] py-4 px-5 rounded-bl-3xl bg-blue-400 text-2xl text-white">
                  <RiInstagramFill />
                </div>
                <div className="flex justify-center items-center h-[2rem] py-4 px-5 rounded-tr-3xl bg-white text-blue-400">
                  <p>_Phisio_Room_</p>
                </div>
              </div>
            </a>
            <div className="flex justify-center items-center rounded-tr-3xl rounded-bl-3xl border-b-4 border-b-blue-950 cursor-pointer shadow-xl shadow-blue-400">
              <div className="flex justify-center items-center h-[2rem] py-4 px-5 rounded-bl-3xl bg-blue-400 text-xl text-white">
                <FaPhoneAlt />
              </div>
              <div className="flex justify-center items-center h-[2rem] py-4 px-5 rounded-tr-3xl bg-white text-blue-400">
                <p className="text-nowrap">+38765/232/555</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl text-blue-400">
              <IoIosPin />
            </div>
            <div className="w-full px-10 text-center text-blue-200 text-xl font-semibold">
              <p>Prvog krajiškog korpusa 19, Banja Luka</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[50%] h-full gap-5">
            <div className="cursor-pointer md:lg:w-[70%] md:lg:h-[50%]">
              <a href="https://www.google.com/maps/place/%D0%9F%D1%80%D0%B2%D0%BE%D0%B3+%D0%BA%D1%80%D0%B0%D1%98%D0%B8%D1%88%D0%BA%D0%BE%D0%B3+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0,+78000+%D0%91%D0%B0%D1%9A%D0%B0+%D0%9B%D1%83%D0%BA%D0%B0/@44.7785231,17.1930584,17z/data=!3m1!4b1!4m6!3m5!1s0x475e030448754a33:0xcb0cc9f9534cd697!8m2!3d44.7785193!4d17.1956333!16s%2Fg%2F1hjh38yr6?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">
                <img className="w-full h-full rounded-xl" src={map} alt="map" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
