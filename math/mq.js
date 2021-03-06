var tikz=document.getElementsByClassName("tikz");
for(var i = 0; i < tikz.length; i++) {
  tikz[i].src = "https://tex.s2cms.ru/svg/"+encodeURIComponent(tikz[i].alt.trim());
  tikz[i].outerHTML = "<span class='image block'>"+tikz[i].outerHTML+"</span>";
}

var latex=document.getElementsByClassName("latex");
for(var i = 0; i < latex.length; i++) {
  latex[i].src = "https://tex.s2cms.ru/svg/"+encodeURIComponent(latex[i].alt.trim());
  latex[i].outerHTML = "<span class='image block'>"+latex[i].outerHTML+"</span>";
}

var latex=document.getElementsByClassName("_latex");
for(var i = 0; i < latex.length; i++) {
  latex[i].src = "https://tex.s2cms.ru/svg/"+encodeURIComponent(latex[i].alt.trim());
  latex[i].outerHTML = "<span class='image inline'>"+latex[i].outerHTML+"</span>";
}

var img=document.getElementsByClassName("img");
for(var i = 0; i < img.length; i++) {
  img[i].outerHTML = "<span class='image block'>"+img[i].outerHTML+"</span>";
}

var imgToCenter=document.querySelectorAll("img[alt='center']")
for(var i = 0; i < imgToCenter.length; i++) {
  imgToCenter[i].outerHTML = "<span class='image block'><img src='"+imgToCenter[i].src+"'></span>";
}

var upmath=document.getElementsByClassName("upmath");
for(var i = 0; i < upmath.length; i++) {
  upmath[i].src = "https://tex.s2cms.ru/svg/"+encodeURIComponent(upmath[i].alt.trim());
  upmath[i].outerHTML = "<span class='image block'>"+upmath[i].outerHTML+"</span>";
}

var upmath=document.querySelectorAll("code[class*='language-upmath']")
for(var i = 0; i < upmath.length; i++) {
  upmath[i].parentElement.outerHTML = "<span class='image block'><img src='https://tex.s2cms.ru/svg/"+encodeURIComponent(upmath[i].innerText.trim())+"' alt='"+upmath[i].innerText.trim()+"'></span>";
}

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

document.getElementById("print").onclick = function() {
  var myWindow = window.open();
  myWindow.document.write(`
  <html>
  <head>
  <title>${document.getElementsByClassName("preview-paragraph-0 preview-line 0")[0].innerText.trim()}</title>
  <link rel="stylesheet" type="text/css" href="https://g00d4all.github.io/math/mq.css">
  <!--
  <link rel="stylesheet" type="text/css" href="https://g00d4all.github.io/fonts/cm-unicode/Serif/cmu-serif.css">
  -->
  <script type="text/javascript" src="https://g00d4all.github.io/math/mq.js"></script>
  <style>
  html * {
    font-family: "CMU Serif", Times, "Times New Roman", serif;
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
