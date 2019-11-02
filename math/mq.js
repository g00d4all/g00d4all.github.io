var tikz=document.getElementsByClassName('tikz');
for(var i=0;i<tikz.length;i++) {
  tikz[i].src = "https://tex.s2cms.ru/svg/"+encodeURIComponent(tikz[i].alt.trim());
  tikz[i].outerHTML="<span style='display:block;text-align:center;'>"+tikz[i].outerHTML+"</span>";
}

function collapse(x) {
  var mySolution = document.getElementsByClassName("solution");
  for(var i = 0; i < mySolution.length; i++) {
    mySolution[i].style.display = (mySolution[i].style.display == "none" ? "block" : "none");
    }
  x.value = (x.value == "➕" ? "➖" : "➕");
}
