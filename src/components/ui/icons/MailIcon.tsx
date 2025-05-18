import * as React from "react";
import Svg, {
  G,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MailIcon(props) {
  return (
    <Svg
      width={52}
      height={45}
      viewBox="0 0 52 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G >
        <Path
          d="M28.674 23.355a4.807 4.807 0 01-5.348 0l-13.113-8.742a4.719 4.719 0 01-.213-.151v14.325a2.945 2.945 0 002.946 2.945h26.108A2.945 2.945 0 0042 28.787V14.462c-.07.052-.14.103-.214.151l-13.112 8.742z"
          fill="url(#paint0_linear_3_7213)"
        />
        <Path
          d="M11.253 13.053l13.113 8.742a2.942 2.942 0 003.268 0l13.113-8.742A2.807 2.807 0 0042 10.71a2.948 2.948 0 00-2.945-2.944h-26.11A2.949 2.949 0 0010 10.712c0 .943.469 1.818 1.253 2.34z"
          fill="url(#paint1_linear_3_7213)"
        />
      </G>
      <G >
        <Rect
          x={31}
          y={2}
          width={15}
          height={15}
          rx={7.5}
          fill="#E82C13"
          fillOpacity={0.9}
          shapeRendering="crispEdges"
        />
        <Path
          d="M38.67 12.341h.984V6h-.984L37 7.187v.966l1.595-1.138h.075v5.326z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_3_7213"
          x1={26}
          y1={14.4617}
          x2={41.8085}
          y2={37.5515}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F0D399" />
          <Stop offset={1} stopColor="#D9A846" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_3_7213"
          x1={26}
          y1={7.76563}
          x2={38.3343}
          y2={29.1859}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F0D399" />
          <Stop offset={1} stopColor="#D9A846" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default MailIcon;
