import theme from "../../config/theme";

export const nasaBackgroundSVG = `
  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='412' height='412' viewBox='0 0 800 800' %3E %3Cstyle type='text/css'%3E .svg-gray %7B ${theme.colors.background.light.replace(
    "#",
    "%23"
  )}; transform: translate3d(0px, -5px, 0px) scale3d(1, 1, 1); %7D .nasa-star-1 %7B fill: ${theme.colors.background.light.replace(
  "#",
  "%23"
)}; animation: nasa-flicker 5s ease-in-out infinite; animation-delay: 0s; %7D .nasa-star-2 %7B fill: ${theme.colors.background.light.replace(
  "#",
  "%23"
)}; animation: nasa-flicker 5s ease-in-out infinite; animation-delay: 1s; %7D .nasa-star-3 %7B fill: ${theme.colors.background.light.replace(
  "#",
  "%23"
)}; animation: nasa-flicker 5s ease-in-out infinite; animation-delay: 2s; %7D .nasa-star-4 %7B fill: ${theme.colors.background.light.replace(
  "#",
  "%23"
)}; animation: nasa-flicker 5s ease-in-out infinite; animation-delay: 3s; %7D .nasa-star-5 %7B fill: ${theme.colors.background.light.replace(
  "#",
  "%23"
)}; animation: nasa-flicker 5s ease-in-out infinite; animation-delay: 4s; %7D @keyframes nasa-flicker%7B 0%25%7Bfill:${theme.colors.background.light.replace(
  "#",
  "%23"
)};%7D 30%25%7Bfill:%23FFF;%7D 60%25%7Bfill:${theme.colors.background.light.replace(
  "#",
  "%23"
)};%7D 100%25%7Bfill:${theme.colors.background.light.replace(
  "#",
  "%23"
)};%7D %7D %3C/style%3E %3Cg fill='none' stroke='${theme.colors.background.light.replace(
  "#",
  "%23"
)}' stroke-width='1'%3E %3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63' /%3E %3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764' /%3E %3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880' /%3E %3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382' /%3E %3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269' /%3E %3C/g%3E %3Cg%3E %3Cpath class='svg-gray nasa-star-1' d='M578 42l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-1' d='M769 229l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-1' d='M539 269l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-2' d='M603 493l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-2' d='M731 737l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-2' d='M520 660l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-3' d='M309 538l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-3' d='M295 764l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-3' d='M40 599l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-4' d='M102 382l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-4' d='M127 80l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-4' d='M370 105l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-5' d='M578 42l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-5' d='M237 261l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3Cpath class='svg-gray nasa-star-5' d='M390 382l1.8 3.4 3.5 1.9-3.5 1.8-1.8 3.5-1.9-3.5-3.4-1.8 3.4-1.9z'%3E%3C/path%3E %3C/g%3E %3C/svg%3E")`;