import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RightArrow(props: { color?: string }) {
  const { color = "" } = props;
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 19a1 1 0 01-.77-1.64L13.71 12 9.39 6.63a1 1 0 01.15-1.41 1 1 0 011.46.15l4.83 6a1 1 0 010 1.27l-5 6A1 1 0 0110 19z"
        fill="#D0B070"
      />
    </Svg>
  );
}

export default RightArrow;
