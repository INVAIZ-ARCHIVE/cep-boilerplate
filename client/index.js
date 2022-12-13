!(function () {
  var http = require("http");
  var portNumber = 0;
  var localHost = "127.0.0.1";
  var functionName = "";
  var csInterface = new CSInterface();

  var server = http.createServer().on("listening", () => {
    alert("port number =" + portNumber.toString());
  });

  function Request(request, response) {
    response.writeHead(200, { "content-Type": "text/html" });
    response.end("<h1>Hello World!</h1>");

    var userdata = null;
    request.setEncoding("utf-8");

    // 요청에 에러가 있을 시.
    request.on("error", (err) => {
      response.write(err);
      response.end();
    });

    // 요청에 데이터가 있을 시.
    request.on("data", (data) => {
      // 로직 작성
    });

    // 요청에 데이터를 모두 받았을 시.
    request.on("end", () => {
      // 응답에 에러가 있을 시
      response.on("error", (err) => {
        console.error(err);
      });

      csInterface.evalScript(functionName, (status) => {
        // 에러 처리가 완료된 프로그램에 대한 처리
        response.setHeader("Content-Type", "text/plain");
        response.write(status);
        response.end();
      });
    });
  }

  // getHostEnvironment 함수를 이용해 현재 HostApp을 판별하고 해당 Port를 return합니다.
  function getPortNumber() {
    var num;
    var e = csInterface.getHostEnvironment();
    switch (e.appId) {
      case "PHXS":
        num = 50001;
        break;
      case "PHSP":
        num = 50001;
        break;
      case "ILST":
        num = 50002;
        break;
      case "AEFT":
        num = 50003;
        break;
      case "PPRO":
        num = 50004;
        break;
      case "IDSN":
        num = 50005;
        break;
    }
    return num;
  }

  window.onload = function () {
    let extensionRoot =
      csInterface.getSystemPath(SystemPath.EXTENSION) + `/jsxbin/`;

    // csInterface.evalScript(`evalFiles("${extensionRoot}")`);

    portNumber = getPortNumber();

    server.on("request", Request);

    server.on("connection", function (code) {
      console.log("클라이언트가 접속하였습니다...");
    });

    server.on("close", function (code) {
      console.log("서버가 종료되었습니다...");
    });

    server.listen(portNumber, localHost);
  };
})();
