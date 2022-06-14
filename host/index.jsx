function evalFiles(jsxFolderPath) {
  var folder = new Folder(jsxFolderPath);
  alert("load");
  if (folder.exists) {
    var jsxFiles = folder.getFiles("*.jsx");
    for (var i = 0; i < jsxFiles.length; i++) {
      var jsxFile = jsxFiles[i];
      alert("i");
      try {
        alert(jsxFile.toString());
      } catch (e) {
        alert(e.toString());
        return "Exception " + e;
      }
    }
  }
}
function openDocument() {
  const obj = {
    name: "hello",
  };
  const APP = app;
  debugger;
  log(APP);
}

function test() {
  alert("test start");
  test.run();
}
function log(msg) {
  $.writeln(msg);
}

$.bp();
alert("hello");
