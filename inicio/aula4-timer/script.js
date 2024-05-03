function acao(){
    document.write("Indo...<br/>");
}

var timer = setInterval(acao, 1000);
// parar o time
// clearInterval(timer);
// setInterval(acao, 1000);
setTimeout(acao, 3000);