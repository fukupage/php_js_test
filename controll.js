
(function(){
	'use strict'
	const post = document.getElementById('post');
	const box = document.getElementById('box');
	const form_title = document.getElementById('form_title');
	const form_user = document.getElementById('form_user');
	const form_content = document.getElementById('form_title');
	const url_w = "./dbconnect.php?mode=write";
	const url_r = "./dbconnect.php?mode=read";
	const xhr = new XMLHttpRequest();

	// data-write
	post.onclick = function(){
		const requests = "message="+input.value;
		xhr.open('POST', url_w, true);
		xhr.responseType = 'json';
		xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
		xhr.send(requests);
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				box.innerHTML += "<div>"+this.responseText+"</div>";
				document.forms.form1.test.value = "";
			}
		};
	};

	// data-read
	xhr.open('POST', url_r, true);
	xhr.responseType = 'json';
	xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
	xhr.send();
	xhr.onreadystatechange = function(){
		if(this.readyState === 4){
			const datas = this.responseText.split("\n");
			let html = '';
			for(var i=0; i<datas.length; i++){
				html += "<div>"+datas[i]+"</div>";
			}
			box.innerHTML = html;
		}
	};
}());
