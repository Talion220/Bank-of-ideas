import {
  createTheme,
  rem,
  SegmentedControl,
  DEFAULT_THEME,
} from "@mantine/core";
import "@mantine/charts/styles.css";

export const theme = createTheme({
  white: "rgba(247, 250, 252, 1)",
  black: "rgba(13, 20, 28, 1)",
  fontFamily: `Inter, ${DEFAULT_THEME.fontFamily}`,
  primaryColor: "blue",
  headings: {
    textWrap: "wrap",
    colors: {
      myBlack: "rgba(13, 20, 28, 1)",
      myWhite: "rgba(247, 250, 252, 1)",
      myGray: ["rgba(232, 237, 242, 1)", "rgba(79, 115, 150, 1)"],
      myBlue: "rgba(26, 128, 230, 1)",
    },
  },
  components: {
    SegmentedControl: SegmentedControl.extend({
      styles: {
        root: { borderRadius: 16 },
        label: { padding: "10px 0" },
        innerLabel: { fontSize: 14, fontWeight: 600 },
        indicator: {
          borderRadius: 16,
        },
      },
    }),
  },
});
