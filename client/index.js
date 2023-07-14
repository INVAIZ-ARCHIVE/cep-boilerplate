const { createKey, verifyKey, generateKeyPair } = require("license-keys");

// Generate a PGP key pair
(async () => {
  const keyPair = await generateKeyPair("John Doe", "john.doe@example.com", "secure-passphrase");
  console.log(keyPair);
})();

// !(function () {
//   const http = require("http");
//   let hostApp = [];
//   const localHost = "127.0.0.1";
//   let functionName = "";
//   const macaddress = require("macaddress");
//   const csInterface = new CSInterface();
//   const { createKey, verifyKey, generateKeyPair } = require("license-keys");

//   /* 2) Make a reference to your HTML button and add a click handler. */
//   var openButton = document.querySelector("#open-button");
//   openButton.addEventListener("click", openDoc);

//   var openDebugButton = document.querySelector("#open-debug");
//   openDebugButton.addEventListener("click", openDebub);

//   /* 3) Write a helper function to pass instructions to the ExtendScript side. */
//   function openDoc() {
//     csInterface.evalScript("openDocument()");
//   }
//   function openDebub() {
//     csInterface.openURLInDefaultBrowser("http://localhost:8089");
//   }

//   const server = http.createServer().on("listening", () => {
//     console.log(hostApp);
//     alert("port number =" + hostApp[0].toString());
//   });

//   function Request(request, response) {
//     response.writeHead(200, { "content-Type": "text/html" });
//     response.end("<h1>Hello World!</h1>");

//     request.setEncoding("utf-8");

//     // 요청에 에러가 있을 시.
//     request.on("error", (err) => {
//       response.write(err);
//       response.end();
//     });

//     // 요청에 데이터가 있을 시.
//     request.on("data", (data) => {
//       // 로직 작성
//       console.log(data);
//     });

//     // 요청에 데이터를 모두 받았을 시.
//     request.on("end", () => {
//       // 응답에 에러가 있을 시
//       response.on("error", (err) => {
//         console.error(err);
//       });

//       csInterface.evalScript(functionName, (status) => {
//         // 에러 처리가 완료된 프로그램에 대한 처리
//         response.setHeader("Content-Type", "text/plain");
//         response.write(status);
//         response.end();
//       });
//     });
//   }

//   // getHostEnvironment 함수를 이용해 현재 HostApp을 판별하고 해당 Port를 return합니다.
//   function getPortNumber() {
//     var portNumber;
//     var folder;
//     var e = csInterface.getHostEnvironment();
//     switch (e.appId) {
//       case "PHXS":
//         portNumber = 50001;
//         folder = "phxs";
//         break;
//       case "PHSP":
//         portNumber = 50001;
//         folder = "phxs";
//         break;
//       case "ILST":
//         portNumber = 50002;
//         folder = "ilst";
//         break;
//       case "AEFT":
//         portNumber = 50003;
//         folder = "aeft";
//         break;
//       case "PPRO":
//         portNumber = 50004;
//         folder = "ppro";
//         break;
//       case "IDSN":
//         portNumber = 50005;
//         folder = "idsn";
//         break;
//     }
//     return [portNumber, folder];
//   }
//   window.onload = function () {
//     hostApp = getPortNumber();

//     let extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + `/jsxbin/`;

//     extensionRoot += hostApp[1];
//     csInterface.evalScript(`evalFiles("${extensionRoot}")`);

//     server.on("request", Request);

//     server.on("connection", function () {
//       console.log("클라이언트가 접속하였습니다...");
//     });

//     server.on("close", function () {
//       console.log("서버가 종료되었습니다...");
//     });

//     server.listen(hostApp[0], localHost);
//   };
// })();
