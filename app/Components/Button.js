import Link from "next/link";

export default function Button({ title, link }) {
  return (
    <Link
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30 flex justify-between items-center text-right"
    >
      <div className="flex justify-between items-center w-full text-2xl font-semibold">
        <span className="inline-block transition-transform ml-3 group-hover:translate-x-[-0.3rem] motion-reduce:transform-none">
          &lt;-
        </span>
        <h2 className={`ml-1`}> {title}</h2>
      </div>
    </Link>
  );
}
