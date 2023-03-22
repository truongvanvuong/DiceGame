const { defineConfig } = require("cypress");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://github.com/truongvanvuong/DcieGame" // Thay tên repository của các bạn vào đây nhé
      : "/",
};
