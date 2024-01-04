export default function Loading() {
  return (
    <div className="flex items-center justify-center pt-20">
      <svg
        className="h-24 w-24 fill-darkBlue dark:fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="%2308FF0B"
      >
        <circle stroke="%2308FF0B" strokeWidth="4" r="15" cx="40" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="1.5"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </circle>
        <circle
          fill="%2308FF0B"
          stroke="%2308FF0B"
          strokeWidth="4"
          r="15"
          cx="100"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="1.5"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </circle>
        <circle
          fill="%2308FF0B"
          stroke="%2308FF0B"
          strokeWidth="4"
          r="15"
          cx="160"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="1.5"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
