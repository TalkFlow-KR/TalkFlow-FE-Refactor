const layout = {
  fCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // 4pt grid
  gap: {
    base: 10,
    "01": 4,
    "02": 8,
    "03": 12,
    "04": 16,
    "05": 20,
  },
  // 3,5,7,9,12
  radius: {
    "01": 3,
    "02": 5,
    "03": 7,
    "04": 9,
    "05": 12,
    circle: "50%",
  },
  borderWidth: {
    "01": 1,
    "02": 2,
    "03": 4,
    "04": 8,
  },
  // pt 단위
  font: {
    size: {
      caption: "12pt",
      base: "14pt",
      subtitle: "18pt",
      title: "32pt",
    },
    lineHeight: {
      title: 1.2,
      text: 1.5,
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
      weight: 900,
    },
  },
  width: {},
  height: {
    input: 30,
  },
  zIndex: {
    deep: -99999,
    top: 99999,
    "01": 10,
    "02": 20,
    "03": 30,
    "04": 40,
    "05": 50,
  },
};

export default layout;
