"use client";
import Button from "../Components/Button";
import Fields from "../Database/Fields";
import Image from "next/image";
import Home from "../../public/home.svg";
import Link from "next/link";
import SchoolPopup from "../Components/Popup";
import { useState } from "react";

export default function OpenLimitedPage({ params }) {
  const FieldIndex = Fields.findIndex((field) => field.slug === params.Field);
  const [showSchoolPopup, setShowSchoolPopup] = useState(false);
  const [school, setSchool] = useState(null);

  return (
    <main className="flex flex-col gap-[6rem] items-center justify-center p-6 h-[100vh]">
      <Link href={"/"}>
        <Image
          className="absolute top-9 right-9 rounded-full hover:bg-blue-600 cursor-pointer p-2 shadow-lg"
          width={50}
          src={Home}
          alt="home"
        />
      </Link>
      <div className="mt-[30px] relative flex place-items-center before:absolute before:h-[400px] before:w-full sm:before:w-[600px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[250px] after:w-full sm:after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-300 after:via-blue-300 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-800 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[500px] z-[-1]">
        <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-5xl text-center">
          {Fields[FieldIndex] && Fields[FieldIndex].field}
        </h1>
      </div>
      <div className="mb-10 flex flex-wrap gap-6 text-center justify-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-right">
        {Fields[FieldIndex] &&
          Fields[FieldIndex].Schools.map((School, index) => (
            <div
              onClick={() => {
                setSchool(School);
                setShowSchoolPopup(true);
              }}
            >
              <Button key={index} title={School.Name} />
            </div>
          ))}
      </div>
      {showSchoolPopup && (
        <SchoolPopup
          className=""
          setShowSchoolPopup={setShowSchoolPopup}
          school={school}
        />
      )}
    </main>
  );
}
