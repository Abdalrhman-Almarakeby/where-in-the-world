import LoadingSVG from "../assets/loading.svg?react";

export function Loading() {
  return (
    <div
      className="flex min-h-[1000px] items-center justify-center pt-20"
      aria-live="polite"
      aria-label="Loading"
    >
      <LoadingSVG
        className="h-24 w-24 fill-darkBlue dark:fill-white"
        role="img"
        aria-label="Loading indicator"
      />
    </div>
  );
}
