// ESM because your package.json has "type":"module"
export default {
  plugins: {
    "@tailwindcss/postcss": {},   // ✅ v4 plugin
    autoprefixer: {},
  },
};
