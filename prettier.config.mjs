/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["tv"],
  vueIndentScriptAndStyle: true,
  printWidth: 80,
};
export default config;
