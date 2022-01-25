module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  artifactDirectory: "./src/__generated__",
  src: "./src",
  schema: "./data/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  extensions: ["ts", "tsx"],
  watch: true,
  language: "typescript",
  customScalars: {
    URI: "string",
  },
};
