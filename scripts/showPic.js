
function showPic(whichpic){
if(!document.getElementById('placeholder')) return false;
document.getElementById('placeholder').setAttribute("src", whichpic.getAttribute("href"));
if(document.getElementById('description')){
  document.getElementById('description').firstChild.nodeValue = whichpic.getAttribute("title");
}
return true;
}


function prepareGallery(){
  if(!document.getElementsByTagName || !document.getElementById) return false;
  if(!document.getElementById('imagegallery')) return false;
  var links = document.getElementById('imagegallery').getElementsByTagName("a");
  for(var i = 0; i < links.length; i++){
    links[i].onclick = function(){
      return !showPic(this);
    }
  }
}

function addLoadEvent(func){
  var oldonload = window.onload;
  if(typeof window.onload != 'function'){
    window.onload = func;
  }
  else {
    window.onload = function(){
      oldonload();
      func();
    }
  }
}

addLoadEvent(prepareGallery);
