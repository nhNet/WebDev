/*
A setup file for the Dev Tools website
Made by Nicholas Huaman
*/
var html="&#60;h1&#62;NH Web Development Element in Browser&#60;/h1&#62;<br>&#60;p&#62;Welcome to NH Web Development.&#60;/p&#62;<br>&#60;p&#62;Here you can test your HTML in a quick way before releasing it to the public!&#60;/p&#62;<br>&#60;p&#62;Please don't criticise this website.  This web developer's is still developing!!(Play on words)&#60;/p&#62;<br>&#60;h3&#62;Current Errors:&#60;/h3&#62;<br>&#60;p&#62;&#60;strong&#62;&middot;&#60;/strong&#62;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Interface (Will Improve very soon. :) )&#60;/p&#62;<br>&#60;p style='margin-left:-100px;'&#62;&#60;strong&#62;&middot;&#60;/strong&#62;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indenting&#60;/p&#62;<br>&#60;p&#62;&#60;strong&#62;&middot;&#60;/strong&#62;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clipboard Errors&#60;/p&#62;";
//Variables

var javascript="";
var css="body{text-align:center;background:black;color:white;overflow:hidden;}";
var srcdoc='<!DOCTYPE html><html><head><style>'+css+'</style></head><body>'+html+'<script>'+javascript+'</script></body></html>';
var activeHTML=true;
var activeJavaScript=false;
var activeCSS=false;


document.getElementById("code").innerHTML=html;

document.getElementById("code").contentEditable=true;


//JavaScript Functions

WhichSave();



document.getElementById("Clipboard").onclick=function(){
  document.getElementById("copyBox").select();
  document.execCommand('copy');
};

function WhichSave(){
    if(activeHTML===true){SendHTML();}
    if(activeJavaScript===true){SendJavaScript();}
    if(activeCSS===true){SendCSS();}
}

function SendHTML(){
    html=document.getElementById("code").innerHTML;
    srcdoc='<html><head><style>'+css+'</style></head><body>'+html+'<script>'+javascript+'</script></body></html>';
    document.getElementById("copyBox").value = srcdoc;
    document.getElementById("nameResults").innerHTML='Result - HTML Saved locally <button  id="Clipboard">Copy my text</button>';
    var results=document.getElementById("Results");results.innerHTML='<iframe style="border:5px solid black;width:100%;height:96.4%;" id="Result" srcdoc="'+srcdoc+'" frameborder="0" name="resultBox"></iframe>';
}
function SendJavaScript(){
    javascript=document.getElementById("code").innerHTML;
    srcdoc='<html><head><style>'+css+'</style></head><body>'+html+'<script>'+javascript+'</script></body></html>';
    document.getElementById("copyBox").value = srcdoc;
    document.getElementById("nameResults").innerHTML='Result - JavaScript Saved locally <button  id="Clipboard">Copy my text</button>';
    var results=document.getElementById("Results");results.innerHTML='<iframe style="border:5px solid black;width:100%;height:96.4%;" id="Result" srcdoc="'+srcdoc+'" frameborder="0" name="resultBox"></iframe>';
}
function SendCSS(){
    css=document.getElementById("code").innerHTML;
    srcdoc='<html><head><style>'+css+'</style></head><body>'+html+'<script>'+javascript+'</script></body></html>';
    document.getElementById("copyBox").value = srcdoc;
    document.getElementById("nameResults").innerHTML='Result - CSS Saved locally <button  id="Clipboard">Copy my text</button>';
    var results=document.getElementById("Results");results.innerHTML='<iframe style="border:5px solid black;width:100%;height:96.4%;" id="Result" srcdoc="'+srcdoc+'" frameborder="0" name="resultBox"></iframe>';
}
setInterval(function(){srcdoc='<html><head><style>'+css+'</style></head><body>'+html+'<script>'+javascript+'</script></body></html>';document.getElementById("copyBox").value=srcdoc;},500);
setInterval(Checkforsave,500);
function Checkforsave(){
    if(activeHTML===true && html!=document.getElementById("code").innerHTML){document.getElementById("nameResults").innerHTML='Result - HTML Not saved<button disabled="true" id="Clipboard">Copy my text</button>';}
    if(activeJavaScript===true && javascript!=document.getElementById("code").innerHTML){document.getElementById("nameResults").innerHTML='Result - JavaScript Not saved<button disabled="true" id="Clipboard">Copy my text</button>';}
    if(activeCSS===true && css!=document.getElementById("code").innerHTML){document.getElementById("nameResults").innerHTML='Result - CSS Not saved<button disabled="true" id="Clipboard">Copy my text</button>';}
    if (document.getElementById("nameHTML").style.background=="red"){activeHTML=true;activeJavaScript=false;activeCSS=false;}
    if (document.getElementById("nameJavaScript").style.background=="blue"){activeHTML=false;activeJavaScript=true;activeCSS=false;}
    if (document.getElementById("nameCSS").style.background=="green"){activeHTML=false;activeJavaScript=false;activeCSS=true;}
}


document.getElementById("nameJavaScript").onclick = function(){
    document.getElementById("nameHTML").style.background="#09a1e8";
    document.getElementById("nameJavaScript").style.background="blue";
    document.getElementById("nameCSS").style.background="#09a1e8";
    document.getElementById("code").innerHTML=javascript;
};
document.getElementById("nameHTML").onclick = function(){
    document.getElementById("nameHTML").style.background="red";
    document.getElementById("nameJavaScript").style.background="#09a1e8";
    document.getElementById("nameCSS").style.background="#09a1e8";
    document.getElementById("code").innerHTML=html;
};
document.getElementById("nameCSS").onclick = function(){
    document.getElementById("nameHTML").style.background="#09a1e8";
    document.getElementById("nameJavaScript").style.background="#09a1e8";
    document.getElementById("nameCSS").style.background="green";
    document.getElementById("code").innerHTML=css;
};
