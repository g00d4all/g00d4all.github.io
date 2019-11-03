document.getElementById("collapse").onclick = function() {
  var cc=document.getElementsByClassName('cc');
  var bl=document.getElementsByClassName('bl');
  if (this.value.charCodeAt(0).toString(16)==2795) {
    for(var i=0; i<cc.length; i++) {
      cc[i].style.border="1px solid blue";
    }
    for(var i=0; i<bl.length; i++) {
      bl[i].value=bl[i].nextSibling.innerText;
    }
    this.value = String.fromCharCode(0x2796);
  }
  else {
    for(var i=0; i<cc.length; i++) {
      cc[i].style.border="none";
    }
    for(var i=0; i<bl.length; i++) {
      bl[i].value="";
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
  <link rel="stylesheet" type="text/css" href="https://g00d4all.github.io/english/vw.css">
  <script type="text/javascript" src="https://g00d4all.github.io/english/vw.js"></script>
  <style>
    html * { 
    font-family: Times, "Times New Roman", Georgia, serif;
    }
    div {
    margin-top: 0;
    margin-bottom: 1em;
    text-align: justify;
    }
    /* clears the 'X' from Internet Explorer & Edge */
    input[type="search"]::-ms-clear,
    input[type="search"]::-ms-reveal {
    display: none;
    }
    /* clears the 'X' from Chrome */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
    display: none;
    }
  </style>
  </head>
  <body onload="window.print(); window.close();">
  </body>
  </html>
  `);  
  myWindow.document.body.appendChild(document.getElementById('preview-content').cloneNode(true));
  myWindow.document.getElementById("hint").style="width: 24.5cm; height: 3em; position: fixed; top: 50%; left: -11.62cm; transform: rotate(90deg); margin: 0; padding: 0; text-align: left; vertical-algin: bottom; color: grey;";
  myWindow.document.getElementById("hint").removeAttribute("onclick");
  myWindow.document.getElementById("hint").removeAttribute("onmouseover");
  myWindow.document.getElementById("hint").removeAttribute("onmouseout");
  myWindow.document.getElementById("wdlist").style.display="";
  myWindow.document.getElementById("hint").innerHTML = "<small>"+myWindow.document.getElementById("hint").innerText.split('\n').join(' | ')+"</small>";
  var av = myWindow.document.getElementsByClassName("av");
  for(var i=0;i<av.length;i++) {av[i].style.display="none";} 
  myWindow.document.getElementById('preview-content').style.marginLeft ="3em";
  myWindow.document.close();
  myWindow.focus();
}

  alert(msroot);
document.getElementById("wdlist").innerHTML = wdlist.split("|").join("<br>");

//set attributes of selected classes
  var c_a = [
    ["av", [
    ["onclick", "var mp=document.getElementById('mp'); mp.src='" + msroot + "' + this.nextSibling.innerText; mp.load(); mp.play();"]
  ]],
  ["bl", [
    ["type", "text"],
    ["onblur", "this.value=(this.value.toLowerCase().trim()=='?'|| this.value.toLowerCase().trim()==this.nextSibling.innerText.toLowerCase())?this.nextSibling.innerText:'';"],
    ["onkeyup", "if(event.keyCode==13){this.blur();}"],
    ["ondblclick", "this.value=this.nextSibling.innerText;"]
  ]],
  ["cc", [
    ["onclick", "this.style.border='1px solid blue'"]
  ]],
  ["ac", [
    ["onclick", "if(this.hasChildNodes()){this.firstChild.click()}"]
  ]],
  ["hint", [
    ["onclick", "this.style.left=(this.style.left=='-100px'?0:'-100px'); document.getElementById('wdlist').style.display=(document.getElementById('wdlist').style.display==''?'none':'')"],
    ["onmouseover", "this.style.left=0; document.getElementById('wdlist').style.display=''"],
    ["onmouseout", "this.style.left='-100px'; document.getElementById('wdlist').style.display='none'"]
  ]],
  ["mp", [
    ["onloadstart", "this.style.display=''"],
    ["onended", "this.style.display='none'"]
  ]]
  ];

  for (var i = 0; i < c_a.length; i++) {
    var myEl = document.getElementsByClassName(c_a[i][0]);
    for (var j = 0; j < myEl.length; j++) {
      for (var k = 0; k < c_a[i][1].length; k++) {
        myEl[j].setAttribute(c_a[i][1][k][0], c_a[i][1][k][1]);
      }
    }
  }
