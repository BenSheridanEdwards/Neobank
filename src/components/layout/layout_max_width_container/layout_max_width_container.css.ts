import { style } from "@vanilla-extract/css";
import { varsGrid } from "../../../styles/vars/vars_grid.css";

export const maxWidthContainer = style({
  marginInline: "auto",
  maxWidth: `min(100% - 64px, ${varsGrid.gridWidth}px)`,
});
