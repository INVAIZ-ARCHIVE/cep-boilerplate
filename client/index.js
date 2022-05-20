/* 1) Create an instance of CSInterface. */
var csInterface = new CSInterface();

/* 2) Make a reference to your HTML button and add a click handler. */
var openButton = document.querySelector("#open-button");
openButton.addEventListener("click", openDoc);

/* 3) Write a helper function to pass instructions to the ExtendScript side. */
function openDoc() {
  csInterface.evalScript("openDocument()");
  csInterface.evalScript("openDocument()");
}

window.onload = function () {
  var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
  alert(extensionRoot);
  csInterface.evalScript('evalFiles("'.concat(extensionRoot, '")'));
};
