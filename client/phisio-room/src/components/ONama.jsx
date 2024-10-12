//Komponenta za prikaz O nama stranice
import React from "react";
import portret from '../../public/physio-icons/portret.png'

function ONama() {
  return (
    <>
      <div id="o-nama" className="flex flex-col justify-center items-center gap-16 bg-image-about bg-cover bg-center bg-no-repeat relative p-20">
        <div className="flex flex-col justify-center items-center">
          <div className="hidden md:lg:flex flex-col justify-center items-center md:lg:absolute md:lg:top-[10%] md:lg:left-[10%] md:lg:p-5 md:lg:py-20 filter blur-2xl bg-blue-400/40 rounded-full w-[200px] h-[300px] animate-spin-slow"></div>
          <div className="hidden md:lg:flex flex-col justify-center items-center md:lg:absolute md:lg:top-[10%] md:lg:left-[10%] md:lg:p-5 md:lg:py-20 filter blur-2xl bg-blue-400/40 rounded-full w-[300px] h-[200px] animate-spin-slow"></div>
          <div className="md:lg:flex justify-center items-center text-5xl md:lg:absolute md:lg:top-[25%] md:lg:left-[12%] text-blue-200 font-semibold">
            <p>O NAMA</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="hidden md:lg:flex flex-col justify-center items-center md:lg:absolute md:lg:bottom-[20%] md:lg:right-[10%] md:lg:p-5 md:lg:py-20 filter blur-2xl bg-blue-400/40 rounded-full w-[500px] h-[600px] animate-spin-slow"></div>
          <div className="hidden md:lgflex flex-col justify-center items-center md:lg:absolute md:lg:bottom-[10%] md:lg:right-[20%] md:lg:p-5 md:lg:py-20 filter blur-2xl bg-blue-400/40 rounded-full w-[600px] h-[500px] animate-spin-slow"></div>
          <div className="w-80 h20 text-wrap text-white text-xl md:lg:absolute md:lg:left-[60%]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, necessitatibus laborum, ducimus vitae nisi fuga quidem rerum facere reprehenderit accusantium autem minima ut, est quas laboriosam quo vero harum possimus?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio soluta hic, autem molestias sed assumenda totam dignissimos aut libero iste.</p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:lg:flex-row gap-5">
          <div className="flex flex-col justify-center items-center text-blue-200 font-semibold text-2xl">
            <img src={portret} alt="" />
            <p>Marko Glisic</p>
            <p className="text-xl">dipl. fizioterapeut</p>
          </div>
          <div className="flex flex-col justify-center items-center text-blue-200 font-semibold text-2xl">
            <img src={portret} alt="" />
            <p>Janko Misic</p>
            <p className="text-xl">dipl. fizioterapeut</p>
          </div>
          <div className="flex flex-col justify-center items-center text-blue-200 font-semibold text-2xl">
            <img src={portret} alt="" />
            <p>Danko Fisic</p>
            <p className="text-xl">dipl. fizioterapeut</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ONama;
