import {  useNavigate } from "react-router-dom";

export default function BackBtn() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex w-fit items-center gap-4 rounded px-4 py-2 text-sm text-darkBlue shadow-lg dark:bg-blue dark:text-white sm:px-6 focus-within:outline focus-within:outline-darkBlue dark:focus-within:outline-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block h-4 w-4 fill-darkBlue dark:fill-white"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M244 400L100 256l144-144M120 256h292"
        />
      </svg>
      <span className="md:text-lg">Back</span>
    </button>
  );
}
