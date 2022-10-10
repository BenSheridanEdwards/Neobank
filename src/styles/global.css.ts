/* eslint-disable import/prefer-default-export */
import { globalStyle } from "@vanilla-extract/css";
import "./global/global_headings.css";
import "./global/paragraph.css";
import { varsFontSize } from "./vars/vars_font_size.css";
import { resetList } from "./resets/reset_list.css";

export const rootColors = {
  bg: `#00040F`,
  color: `#FFFFFF`,
};

/* ——————————————————————————————————————————————————————————————————————————————
//      GLOBAL SELECTORS                                                        
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`html`, {
  background: rootColors.bg,
  color: rootColors.color,
  fontSize: 16,
});

globalStyle(`html, body`, {
  height: `100%`,
  background: rootColors.bg,
  fontFamily: `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
});

globalStyle(`body`, {
  lineHeight: 1.4,
  fontSize: varsFontSize.body_sm,
  WebkitFontSmoothing: `antialiased`,
});

/* ——————————————————————————————————————————————————————————————————————————————
//      ANCHOR TAGS                                                        
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`a`, {
  padding: 0,
  margin: 0,
  listStyleType: "none",
  textDecoration: "none",
  color: "inherit",
});

/* ——————————————————————————————————————————————————————————————————————————————
//      VISUAL ELEMENTS                                                         
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

/* ——————————————————————————————————————————————————————————————————————————————
//      INPUTS                                                                  
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});
