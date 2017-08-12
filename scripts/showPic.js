function showPic(whichpic){
document.getElementById('placeholder').setAttribute("src", whichpic.getAttribute("href"));
document.getElementById('description').firstChild.nodeValue = whichpic.getAttribute("title");
}

function countBodyChildren(){
var body_element = document.getElementsByTagName("body")[0];
alert(body_element.childNodes.length);
}

window.onload = countBodyChildren;
