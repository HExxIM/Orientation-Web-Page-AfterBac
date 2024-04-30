import Image from "next/image";
import React from "react";
import close from "../../public/close.svg";

export default function SchoolPopup({ setShowSchoolPopup, school }) {
  return (
    <div className="absolute w-full h-screen z-50">
      <div className="fixed w-full h-screen bg-black bg-opacity-80"></div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white w-1/2 h-[80vh] text-black text-center lg:mt-16 p-16 rounded-md shadow-lg relative">
          <Image
            className="absolute right-8 top-8 cursor-pointer"
            src={close}
            width={30}
            height={30}
            onClick={() => {
              setShowSchoolPopup(false);
            }}
          />
          <h1 className="text-3xl font-bold">{school.Name}</h1>
          {school.Address && (
            <h2 className="text-2xl mt-4">{school.Address}</h2>
          )}
          <p className="text-lg ">
            <br></br>
            {school.Description}
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}
