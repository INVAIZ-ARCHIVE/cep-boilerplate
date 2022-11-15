!(function () {
  var http = require("http");
  var path = require("path");
  var os = require("os");
  var fs = require("fs");
  var portNumber = 0;
  var localHost = "127.0.0.1";
  var functionName = "";
  var appName = "";
  var logFile = log("log.txt");
  var csInterface = new CSInterface();

  var server = http.createServer().on("listening", () => {
    portNumber = server.address().port.toString();
    var $port = document.querySelector("#port");
    $port.innerText = portNumber;
    console.log(
      "INFO",
      "Server created listening PORT: " + portNumber + ", IP: " + localHost
    );
    var txtFile = createPortFile("cep_port.dll");
    fs.writeFile(txtFile, portNumber, (e) => {
      //port 파일 쓰는부분
      if (e) {
        alert(e);
      }
    });
    fs.writeFile(logFile, "server onLoad\n", (e) => {
      //log 파일 쓰는부분
      if (e) {
        alert(e);
      }
    });
  });

  function Request(request, response) {
    var userdata = null;
    request.setEncoding("utf-8");

    request.on("error", (err) => {
      //요청에 에러가 있을 시.
      response.write(err);
      response.end();
    }),
      request.on("data", (data) => {
        //요청에 데이터가 있을 시.
        userdata = JSON.parse(data);
      }),
      request.on("end", () => {
        //요청에 데이터를 모두 받았을 시.
        response.on("error", (err) => {
          // 응답에 에러가 있으면
          console.error(err);
        });
        switch (userdata.messageType) {
        }
        csInterface.evalScript(functionName, (status) => {
          // 에러 처리가 완료된 프로그램에 대한 처리
          response.setHeader("Content-Type", "text/plain");
          response.write(status);
          response.end();
        });
      });
  }

  function getPortName() {
    var folderName;
    var e = csInterface.getHostEnvironment();
    switch (e.appId) {
      case "PHXS":
        folderName = "Photoshop";
        break;
      case "PHSP":
        folderName = "Photoshop";
        break;
      case "ILST":
        folderName = "Illustrator";
        break;
      case "AEFT":
        folderName = "AfterEffect";
        break;
      case "PPRO":
        folderName = "PremierePro";
        break;
      case "IDSN":
        folderName = "Indesign";
        break;
    }
    return folderName;
  }

  window.onload = function () {
    let extensionRoot =
      csInterface.getSystemPath(SystemPath.EXTENSION) + `/jsxbin/`;
    appName = getPortName();
    server.on("request", Request);
    extensionRoot += appName;
    csInterface.evalScript(`evalFiles("${extensionRoot}")`);
    server.listen(0, localHost);
  };

  function makeCEPDirectory() {
    var extension = "INVAIZ Extension";
    var isWindows = "Windows_NT" === os.type();
    var filePath = path.join(
      os.homedir(),
      ...(isWindows ? ["AppData", "Local"] : [".local", "share"]),
      extension,
      appName
    );
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    return filePath;
  }

  function createPortFile(fileName) {
    var filePath = makeCEPDirectory();
    return path.join(filePath, fileName);
  }
  function log(fileName) {
    var filePath = makeCEPDirectory();
    return path.join(filePath, fileName);
  }
})();
