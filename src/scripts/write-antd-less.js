const fs = require("fs/promises");

const SCSS_FILE_NAME = "antd.customize.scss";
const LESS_FILE_NAME = "antd.customize.less";
const PATH_TO_READ = `./src/styles/${SCSS_FILE_NAME}`;
const PATH_TO_WRITE = `./src/styles/${LESS_FILE_NAME}`;

fs.readFile(PATH_TO_READ, "utf8")
  .then((data) => {
    const result = data.replace(/\$/g, "@");
    return fs.writeFile(PATH_TO_WRITE, result, "utf8");
  })
  .then(() => {
    console.log(`✓ File "${LESS_FILE_NAME}" has been written`);
  })
  .catch((error) => {
    console.error(error);
  });
