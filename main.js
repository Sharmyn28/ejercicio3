
var records = document.getElementById('records');

function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}

var convertir = document.getElementById("celsius");
convertir.onclick = function (){
	var far = document.getElementById('far').value;
	far = parseInt(far);
	var c = 0;
	c = (far - 32)/1.8;
	c = c.toFixed(2);
	printHTML(c);
}



