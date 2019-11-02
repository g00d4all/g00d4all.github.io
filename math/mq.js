var tikz=document.getElementsByClassName('tikz');
for(var i = 0; i < tikz.length; i++) {
  tikz[i].src = "https://tex.s2cms.ru/svg/"+encodeURIComponent(tikz[i].alt.trim());
  tikz[i].outerHTML = "<span style='display:block;text-align:center;'>"+tikz[i].outerHTML+"</span>";
}

document.getElementById("collapse").onclick = function() {
  var mySolution = document.getElementsByClassName("solution");
  for(var i = 0; i < mySolution.length; i++) {
    mySolution[i].style.display = ((mySolution[i].style.display == "none" || mySolution[i].style.display == "")? "block" : "none");
    }
  this.value = (this.value == "➕" ? "➖" : "➕");
}

document.getElementById("print").onclick = function() {
  var myWindow = window.open();
  myWindow.document.write(`
  <html>
  <head>
  <title>${document.getElementsByClassName("preview-paragraph-0 preview-line 0")[0].innerText.trim()}</title>
  <link rel="stylesheet" type="text/css" href="https://g00d4all.github.io/math/mq.css">
  <script type="text/javascript" src="https://g00d4all.github.io/math/mq.js"></script>
  <style type="text/css">
  html * {
    font-family: Times, Times New Roman, serif;
    }
  li {
    margin-bottom: 1em;
    }
  li br {
    content: \"\A\" !important; display: block !important; margin-bottom: 0.25em !important;
    }
  </style>
  </head>
  <body>
  </body>
  </html>
  `);
  /*
  myWindow.document.head.appendChild(document.getElementById("MJX-SVG-styles").cloneNode(true));
  myWindow.document.head.appendChild(document.getElementById("Mathpix-styles").cloneNode(true));
  */
  myWindow.document.body.appendChild(document.getElementsByClassName("previewPage")[0].cloneNode(true));
  myWindow.document.close();
  myWindow.focus();
  myWindow.print();
}
