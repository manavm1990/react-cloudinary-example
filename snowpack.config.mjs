/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  alias: {
    components: "./src/components",
    "@app": "./src",
  },
  mount: {
    // directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-postcss"],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: {
    /* ... */
  },
  env: {
    // TODO: Replace all of these with your own values ❗
    CLOUDINARY_CLOUD_NAME: "codefinity",

    // Image transformations go in between this and the file name
    // (e.g. "w_200,h_200,c_fill/")
    // https://cloudinary.com/cookbook/resize_an_image
    CLOUDINARY_BASE_URL: "https://res.cloudinary.com/codefinity/image/upload",
    CLOUDINARY_UPLOAD_PRESET: "furbook",
  },
};
