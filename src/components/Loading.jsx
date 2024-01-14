import LoadingSVG from "../assets/loading.svg?react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center pt-20">
      <LoadingSVG className="h-24 w-24 fill-darkBlue dark:fill-white" />
    </div>
  );
}
