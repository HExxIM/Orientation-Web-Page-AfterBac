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
    <main className="flex flex-col gap-[6rem] items-center justify-center p-6 pb-16 h-[100%] overflow-x-hidden">
      <Link href={"/"}>
        <Image
          className="absolute top-9 right-9 rounded-full hover:bg-blue-600 cursor-pointer p-2 shadow-lg"
          width={50}
          src={Home}
          alt="home"
          priority
        />
      </Link>
      <div className="mt-20 md:mt-52 lg:mt-auto relative flex place-items-center before:absolute before:h-[400px] before:max-w-full before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[250px] after:max-w-full after:bg-gradient-conic after:from-sky-300 after:via-blue-300 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-800 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[500px] z-[-1]">
        <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-5xl text-center">
          {Fields[FieldIndex] && Fields[FieldIndex].field}
        </h1>
      </div>
      <div className="mx-9 mb-10 flex flex-wrap gap-6 text-center justify-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-right">
        {Fields[FieldIndex] &&
          Fields[FieldIndex].Schools.map((School, index) => (
            <div
              key={index}
              onClick={() => {
                setSchool(School);
                setShowSchoolPopup(true);
              }}
              className="w-full lg:w-auto"
            >
              <Button title={School.Name} />
            </div>
          ))}
      </div>
      {showSchoolPopup && (
        <SchoolPopup setShowSchoolPopup={setShowSchoolPopup} school={school} />
      )}
    </main>
  );
}
