/* eslint-disable */

// #include "./jsxbin/ppro/index.js"; // include polyfill file

function evalFiles(jsxFolderPath) {
  // alert("load" + jsxFolderPath);
  $.bp();

  var folder = new Folder(jsxFolderPath);
  if (folder.exists) {
    var jsxFiles = folder.getFiles("*.js");
    for (var i = 0; i < jsxFiles.length; i++) {
      var jsxFile = jsxFiles[i];
      // alert(jsxFile.toString());
      try {
        $.evalFile(jsxFile);
      } catch (e) {
        return "Exception " + e;
      }
    }
  }
}

// #include "./jsxbin/lib/json2.js"; // include polyfill file

function log(message) {
  if (!JSON || !JSON.stringify) return;

  var now = new Date();
  var timestamp = now.toLocaleString();
  var output = JSON.stringify(message);
  $.writeln(now.toTimeString() + ": " + output);

  var logMessage = timestamp + " - " + output + "\n";
  var filePath = "~/Desktop/log.txt"; // 로그 파일 경로, 바탕화면에 log.txt 파일로 저장

  var file = new File(filePath);
  file.open("a");
  file.write(logMessage);
  file.close();
}

// log({ test: "value1", test2: "value3" });

function openDocument() {
  alert("hello pr3");
  $.bp();
  pproTest.testPrint();
  console.log(pproTest);
}

// var path = "C:\\Users\\ckdwn\\AppData\\Roaming\\Adobe\\CEP\\extensions\\test\\jsxbin\\ppro";
// evalFiles(path);
// $.bp();

// openDocument();
