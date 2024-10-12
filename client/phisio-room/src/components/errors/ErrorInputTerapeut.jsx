//Komponenta za prikazivanje errora kada zeljeni terapeut ili usluga nije unesena
import React from "react";

function ErrorInputTerapeut({ handleHideError }) {
  return (
    <>
      <div className="flex text-3xl text-red-700 font-semibold flex-col justify-start items-center w-[50%] bg-red-300 rounded-xl border-4 border-red-700 text-center">
        <div
          onClick={() => {
            handleHideError();
          }}
          className="text-4xl w-full text-end px-3 cursor-pointer"
        >
          <p>X</p>
        </div>
        <p className="py-10">Unesite terapeuta i uslugu</p>
      </div>
    </>
  );
}

export default ErrorInputTerapeut;
