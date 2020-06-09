/*
document.getElementById("collapse").onclick = function() {
  var mySolution = document.getElementsByClassName("solution");
  var myPreset = document.getElementsByClassName("preset");
  if (this.value.charCodeAt(0).toString(16) == 2795) {
    for(var i = 0; i < mySolution.length; i++) {
      mySolution[i].style.display = "block";
    }
    for(var i = 0; i < myPreset.length; i++) {
      myPreset[i].style.display = "none";
    }
    this.value = String.fromCharCode(0x2796);
  }
  else {
    for(var i = 0; i < mySolution.length; i++) {
      mySolution[i].style.display = "none";
    }
    for(var i = 0; i < myPreset.length; i++) {
      myPreset[i].style.display = "";
    }
    this.value = String.fromCharCode(0x2795);
  }
}
*/

document.getElementById("print").onclick = function() {
  var myWindow = window.open();
  myWindow.document.write(`
  <html>
  <head>
  <title>${document.getElementsByClassName("preview-paragraph-0 preview-line 0")[0].innerText.trim()}</title>
  <link rel="stylesheet" type="text/css" href="https://g00d4all.github.io/english/test.css">
  <script type="text/javascript" src="https://g00d4all.github.io/english/test.js"></script>
  </head>
  <body>
  </body>
  </html>
  `);
  var clone = document.getElementById("preview-content");
  clone.querySelector("#print").remove();
  clone.querySelector("#icon").remove();
  myWindow.document.body.appendChild(clone.cloneNode(true));
  //myWindow.document.body.appendChild(document.getElementById("preview-content").cloneNode(true));
  //myWindow.document.getElementById("print").remove();
  //myWindow.document.getElementById("icon").remove();  
  myWindow.document.close();
  myWindow.focus();
  myWindow.print();
}
