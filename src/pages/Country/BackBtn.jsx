import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/icons/arrow-back-outline.svg?react";

export default function BackBtn() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex w-fit items-center gap-4 rounded px-4 py-2 text-sm text-darkBlue shadow-lg dark:bg-blue dark:text-white sm:px-6 focus-visible:outline focus-visible:outline-darkBlue dark:focus-visible:outline-white"
    >
      <BackIcon className="inline-block h-4 w-4 fill-darkBlue dark:fill-white" />
      <span className="md:text-lg">Back</span>
    </button>
  );
}
