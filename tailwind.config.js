module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        darkBlue: "#272e4f",
        cream: "#f2f2f0",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  variants: {},
  plugins: [],
}
