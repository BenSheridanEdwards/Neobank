import { style } from "@vanilla-extract/css";
import { varsSpacing } from "../../../styles/vars/vars_spacing.css";
import { varsColors } from "../../../styles/vars/vars_colors.css";

export const navItem = style({
  color: varsColors.gray70,
  selectors: {
    "&:nth-child(n + 2)": {
      marginLeft: varsSpacing.spacing2,
    },
  },
});

export const navItemActive = style({
  color: varsColors.white,
});
