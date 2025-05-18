import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { SvgProps } from "react-native-svg";

function PlantIdentfiyIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1_1138)" fill="#fff">
        <Path d="M4.5 16.453H2.25a.704.704 0 01-.703-.703V13.5a.422.422 0 00-.844 0v2.25a1.55 1.55 0 001.547 1.547H4.5a.422.422 0 000-.844zM16.875 13.078a.422.422 0 00-.422.422v2.25a.704.704 0 01-.703.703H13.5a.422.422 0 000 .844h2.25a1.55 1.55 0 001.547-1.547V13.5a.422.422 0 00-.422-.422zM1.125 4.922a.421.421 0 00.422-.422V2.25a.703.703 0 01.703-.703H4.5a.422.422 0 000-.844H2.25A1.55 1.55 0 00.703 2.25V4.5a.421.421 0 00.422.422zM15.75.703H13.5a.422.422 0 100 .844h2.25a.703.703 0 01.703.703V4.5a.422.422 0 00.844 0V2.25A1.55 1.55 0 0015.75.703zM4.078 5.625v2.11h9.844v-2.11a1.55 1.55 0 00-1.547-1.547h-6.75a1.55 1.55 0 00-1.547 1.547z" />
        <Path
          d="M13.922 12.375V9.422h1.828a.422.422 0 100-.844H2.25a.422.422 0 000 .844h1.828v2.953a1.55 1.55 0 001.547 1.547h6.75a1.55 1.55 0 001.547-1.547z"
          fillOpacity={0.7}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_1138">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PlantIdentfiyIcon;
