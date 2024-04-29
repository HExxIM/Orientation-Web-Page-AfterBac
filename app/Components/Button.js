import Link from "next/link";

// export default function Button({ title, link }) {
//   return (
//     <Link
//       href={link}
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30 flex justify-between items-center text-right"
//     >
//       <div className="flex justify-between items-center w-full text-2xl font-semibold">
//         <span className="inline-block transition-transform ml-3 group-hover:translate-x-[-0.3rem] motion-reduce:transform-none">
//           &lt;-
//         </span>
//         <h2 className={`ml-1`}> {title}</h2>
//       </div>
//     </Link>
//   );
// }

export default function Button({ title, link }) {
  return (
    <Link
      href={link}
      class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
    >
      <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
      <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
      <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
        {title}
        <span className="inline-block transition-transform ml-3 group-hover:translate-x-[-0.3rem] motion-reduce:transform-none">
          &lt;-{" "}
        </span>
      </span>
      <span class="absolute inset-0 border-2 border-white rounded-full"></span>
    </Link>
  );
}
