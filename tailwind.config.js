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
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  variants: {},
  plugins: [],
}
