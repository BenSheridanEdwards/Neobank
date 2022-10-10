import { style } from "@vanilla-extract/css";
import { resetList } from "../../../styles/resets/reset_list.css";
import { varsSpacing } from "../../../styles/vars/vars_spacing.css";

export const navItemList = style([
  resetList,
  {
    alignItems: "center",
    display: "flex",
    paddingLeft: varsSpacing.spacing3,
  },
]);

export const navItem = style({
  selectors: {
    "&:nth-child(n + 2)": {
      marginLeft: varsSpacing.spacing2,
    },
  },
});
