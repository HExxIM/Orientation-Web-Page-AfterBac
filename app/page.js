import Image from "next/image";
import Button from "./Components/Button";
import Fields from "./Database/Fields";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20">
      <div className="relative flex place-items-center before:absolute before:h-[400px] before:w-full sm:before:w-[600px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[250px] after:w-full sm:after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-300 after:via-blue-300 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-800 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[500px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/education_logo.png"
          alt="Education Logo"
          width={220}
          height={100}
          priority
        />
      </div>

      <div className="mx-20 flex flex-row-reverse flex-wrap justify-center gap-6 items-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-right">
        {Fields.map((field, index) => (
          <Button key={index} title={field.field} link={`/${field.slug}`} />
        ))}
      </div>
    </main>
  );
}
