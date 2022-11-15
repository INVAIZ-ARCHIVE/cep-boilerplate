function evalFiles(jsxFolderPath) {
  var folder = new Folder(jsxFolderPath);
  if (folder.exists) {
    var jsxFiles = folder.getFiles("*.jsx");
    for (var i = 0; i < jsxFiles.length; i++) {
      var jsxFile = jsxFiles[i];
      try {
        $.evalFile(jsxFile);
      } catch (e) {
        return "Exception " + e;
      }
    }
  }
}

function openDocument(location) {
  var fileRef = new File(location);
  var docRef = app.open(fileRef);
}
