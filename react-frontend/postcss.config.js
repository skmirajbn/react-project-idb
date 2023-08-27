import autoprefixer from "autoprefixer";
import nested from "postcss-nested";
import tailwindcss from "tailwindcss";

export default {
  plugins: [
    autoprefixer,
    nested,
    tailwindcss,
    // other PostCSS plugins...
  ],
  // other Vite configuration options...
};
