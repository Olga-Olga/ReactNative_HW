import React from "react";
import { SvgXml } from "react-native-svg";

export const SVGicons = ({ name }) => {
  switch (name) {
    // case "iconLogout": //для зміни кольору використовувати
    //   return (
    //     <svg id="iconLogout" viewBox="0 0 24 24" fill="none">
    //       <path
    //         d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
    //         stroke="#BDBDBD"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M17 16L21 12L17 8"
    //         stroke="#BDBDBD"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M21 12H9"
    //         stroke="#BDBDBD"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg>
    //   );
    case "email":
      const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H10V10H3V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3H21V10H14V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 14H21V21H14V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14H10V21H3V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      return <SvgXml xml={svgCode} width={24} height={24} />;

    // case "password": //для зміни кольору використовувати fill
    //   return (
    //     <svg id="icon-password" viewBox="0 0 32 32">
    //       <path d="M24 10.667h-1.333v-2.667c0-3.68-2.987-6.667-6.667-6.667s-6.667 2.987-6.667 6.667v2.667h-1.333c-1.467 0-2.667 1.2-2.667 2.667v13.333c0 1.467 1.2 2.667 2.667 2.667h16c1.467 0 2.667-1.2 2.667-2.667v-13.333c0-1.467-1.2-2.667-2.667-2.667zM16 22.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667c1.467 0 2.667 1.2 2.667 2.667s-1.2 2.667-2.667 2.667zM20.133 10.667h-8.267v-2.667c0-2.28 1.853-4.133 4.133-4.133s4.133 1.853 4.133 4.133v2.667z"></path>
    //     </svg>
    //   );

    default:
      return "SVG not found";
  }
};
