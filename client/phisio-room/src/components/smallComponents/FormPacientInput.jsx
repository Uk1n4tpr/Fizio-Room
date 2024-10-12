//Komponenta za prikaz prozora za unos podataka pacijenta
import React from "react";

function FormPacientInput(props) {
  const { handleSubmit, pacientInfo, setPacientInfo, handleCloseInputPacient } = props;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center border-none bg-white/0 font-semibold text-center items-center text-xl text-blue-200 gap-5"
      >
        <div className="flex justify-center itemce flex-col bg-none">
          <p>UNESITE PODATKE ZA UNOS TERMINA</p>
        </div>
        <div className="flex justify-center itemce flex-col bg-none">
          <label className="text-lg">IME</label>
          <input
            value={pacientInfo.name}
            onChange={(e) => {
              setPacientInfo({ ...pacientInfo, name: e.target.value });
            }}
            className="text-center shadow-lg shadow-blue-200 bg-white/0 border-b-2 border-b-blue-200 rounded-md"
            type="text"
          />
        </div>
        <div className="flex justify-center itemce flex-col bg-none">
          <label className="text-lg">PREZIME</label>
          <input
            value={pacientInfo.lastName}
            onChange={(e) => {
              setPacientInfo({ ...pacientInfo, lastName: e.target.value });
            }}
            className="text-center shadow-lg shadow-blue-200 bg-white/0 border-b-2 border-b-blue-200 rounded-md"
            type="text"
          />
        </div>
        <div className="flex justify-center itemce flex-col bg-none">
          <label className="text-lg">EMAIL</label>
          <input
            value={pacientInfo.email}
            onChange={(e) => {
              setPacientInfo({ ...pacientInfo, email: e.target.value });
            }}
            className="text-center shadow-lg shadow-blue-200 bg-white/0 border-b-2 border-b-blue-200 rounded-md"
            type="email"
          />
        </div>
        <div className="flex justify-center itemce flex-col bg-none">
          <label className="text-lg">MOBILNI</label>
          <input
            value={pacientInfo.phone}
            onChange={(e) => {
              setPacientInfo({ ...pacientInfo, phone: e.target.value });
            }}
            className="text-center shadow-lg shadow-blue-200 bg-white/0 border-b-2 border-b-blue-200 rounded-md"
            type="text"
          />
        </div>
        <div
          type="submit"
          className="flex justify-center items-center bg-blue-400 cursor-pointer p-3 rounded-xl mt-5 hover:p-6 hover:rounded-2xl"
        >
          <button onClick={handleCloseInputPacient}>
            <p>ZAKAŽI</p>
          </button>
        </div>
      </form>
    </>
  );
}

export default FormPacientInput;
