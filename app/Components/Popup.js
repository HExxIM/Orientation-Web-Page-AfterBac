import Image from "next/image";
import React, { useEffect, useState } from "react";
import close from "../../public/close.svg";

export default function SchoolPopup({ setShowSchoolPopup, school }) {
  const [popupHeight, setPopupHeight] = useState("80vh");

  useEffect(() => {
    const descriptionHeight =
      document.getElementById("description").offsetHeight;
    const maxHeight = window.innerHeight * 0.8;
    setPopupHeight(
      descriptionHeight > maxHeight ? maxHeight : descriptionHeight
    );
  }, [school.Description]);

  return (
    <div className="absolute w-full h-screen z-50">
      <div className="fixed w-full h-screen bg-black bg-opacity-80"></div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white w-[90vw] h-auto lg:w-[60vw] md:w-[70vw] p-5 md:p-10 lg:p-13 text-black text-center rounded-md shadow-lg relative  max-h-[80vh] overflow-y-auto">
          <Image
            className="absolute right-5 top-5 cursor-pointer"
            src={close}
            width={30}
            height={30}
            onClick={() => {
              setShowSchoolPopup(false);
            }}
          />
          <h1 className="text-3xl font-bold mx-8 ">{school.Name}</h1>
          {school.Address && (
            <h2 className="text-2xl mt-4">{school.Address}</h2>
          )}
          <br></br>
          <p className="text-lg" id="description">
            {school.Description}
          </p>
        </div>
      </div>
    </div>
  );
}
