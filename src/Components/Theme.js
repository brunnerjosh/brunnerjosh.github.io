// Themes from https://designschool.canva.com/blog/website-color-schemes/
const themes = {
  simpleAndFresh: {
    primary: { hex: '#414141', r: 65, g: 65, b: 65 },
    secondary: { hex: '#ccdfcb', r: 204, g: 223, b: 203 },
    tertiary: { hex: '#ff6a5c', r: 255, g: 106, b: 92 },
    quaternary: { hex: '#056571', r: 5, g: 101, b: 113 }
  },
  coolMint: {
    primary: { hex: '#2A2D34', r: 42, g: 245, b: 52 },
    secondary: { hex: '#fafafa', r: 250, g: 250, b: 250 },
    tertiary: { hex: '#00A4DB', r: 0, g: 164, b: 219 },
    quaternary: { hex: '#56E39F', r: 86, g: 227, b: 159 }
  }
}

export default {
  ...themes.coolMint
}
