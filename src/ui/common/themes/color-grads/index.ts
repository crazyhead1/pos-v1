// Reds
export const REDS = {
  10: "#ffe5e5",
  20: "#ffb3b3",
  30: "#ff8080",
  40: "#ff4d4d",
  50: "#ff1a1a",
  60: "#e60000",
  70: "#b30000",
  80: "#800000",
  90: "#4d0000",
  100: "#1a0000",
};

// Oranges
export const ORANGES = {
  10: "#fff1e5",
  20: "#ffd4b3",
  30: "#ffb780",
  40: "#ff9a4d",
  50: "#ff7d1a",
  60: "#e66400",
  70: "#b34e00",
  80: "#803800",
  90: "#4d2100",
  100: "#1a0b00",
};

// Oranges
export const YELLOWS = {
  10: "#ffffe5",
  20: "#ffffb3",
  30: "#ffff80",
  40: "#ffff4d",
  50: "#ffff1a",
  60: "#e5e600",
  70: "#b2b300",
  80: "#7f8000",
  90: "#4c4d00",
  100: "#191a00",
};

// Oranges
export const SKY_BLUES = {
  10: "#e9f6fb",
  20: "#bde4f4",
  30: "#92d2ed",
  40: "#66c1e5",
  50: "#3aafde",
  60: "#2195c5",
  70: "#1a7499",
  80: "#12536d",
  90: "#0b3242",
  100: "#041116",
};

// Greens
export const GREENS = {
  10: "#e9fce9",
  20: "#bdf5bd",
  30: "#90ee90",
  40: "#64e764",
  50: "#38e138",
  60: "#1ec71e",
  70: "#189b18",
  80: "#116f11",
  90: "#0a420a",
  100: "#031603",
};

// Purple
export const PURPLES = {
  10: "#f0eef7",
  20: "#d2cbe7",
  30: "#b4a8d6",
  40: "#9685c6",
  50: "#7763b6",
  60: "#5e499c",
  70: "#49397a",
  80: "#342957",
  90: "#1f1834",
  100: "#0a0811",
};
// Cyans
export const CYANS = {
  10: "#e5ffff",
  20: "#b3ffff",
  30: "#80ffff",
  40: "#4dffff",
  50: "#1affff",
  60: "#00e5e6",
  70: "#00b2b3",
  80: "#007f80",
  90: "#004c4d",
  100: "#00191a",
};

// Blacks
export const BLACKS = {
  10: "#ffffff",
  20: "#d9d9d9",
  30: "#bfbfbf",
  40: "#a6a6a6",
  50: "#8c8c8c",
  60: "#737373",
  70: "#595959",
  80: "#404040",
  90: "#262626",
  100: "#000000",
};
export const COLOR_GRIDS = {
  REDS,
  ORANGES,
  YELLOWS,
  SKY_BLUES,
  GREENS,
  PURPLES,
  CYANS,
  BLACKS,
};

export const getThemeColors = () => {
  const themeKey = localStorage.getItem("themeKey");
  return COLOR_GRIDS[themeKey || "SKY_BLUES"];
};

export const getComponentColors = () => {
  const themeColors = getThemeColors();
  return {
    PRIMARY: {
      BACKGROUND: themeColors[50],
      TEXT_COLOR: BLACKS[10],
      OUTLINE_BACKGROUND: themeColors[10],
      OUTLINE: themeColors[60],
      OUTLINE_TEXT_COLOR: themeColors[60],
    },
    SECONDARY: {
      BACKGROUND: themeColors[30],
      TEXT_COLOR: BLACKS[90],
      OUTLINE_BACKGROUND: themeColors[10],
      OUTLINE: themeColors[30],
      OUTLINE_TEXT_COLOR: themeColors[30],
    },
    DISABLED: {
      BACKGROUND: BLACKS[40],
      TEXT_COLOR: BLACKS[10],
      OUTLINE_BACKGROUND: themeColors[10],
      OUTLINE: BLACKS[40],
      OUTLINE_TEXT_COLOR: BLACKS[40],
    },
  };
};
