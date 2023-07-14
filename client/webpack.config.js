const path = require("path");

module.exports = {
  entry: "./index.js", // 번들링할 진입 파일 경로를 지정해주세요
  output: {
    path: path.resolve(__dirname, "dist"), // 번들링된 파일의 출력 경로를 지정해주세요
    filename: "bundle.js", // 번들링된 파일의 이름을 지정해주세요
  },
  target: "node", // Node.js 환경에서 실행되는 코드임을 명시합니다
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "production",
};
