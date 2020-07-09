
(function(){
	'use strict'
	const btn = document.getElementById("btn");
	const list = document.getElementById("list");
	const input = document.forms.form1.test;
	const url_w = "./test.php?mode=write";
	const url_r = "./test.php?mode=read";
	const xhr = new XMLHttpRequest();

	// data-write
	btn.onclick = function(){
		const requests = "message="+input.value;
		xhr.open('POST', url_w, true);
		xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
		xhr.send(requests);
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				list.innerHTML += "<div>"+this.responseText+"</div>";
				document.forms.form1.test.value = "";
			}
		};
	};

	// data-read
	xhr.open('POST', url_r, true);
	xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
	xhr.send();
	xhr.onreadystatechange = function(){
		if(this.readyState === 4){
			const datas = this.responseText.split("\n");
			let html = "";
			for(var i=0; i<datas.length; i++){
				html += "<div>"+datas[i]+"</div>";
			}
			list.innerHTML = html;
		}
	};
}());
