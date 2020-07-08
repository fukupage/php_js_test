window.onload = function(){

	// data-write
	var btn = document.getElementById("btn");
	btn.onclick = function(){
		var input = document.forms.form1.test;
		var requests = "message="+input.value;
		var url = "./test.php?mode=write";
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
		xhr.send(requests);
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				var list = document.getElementById("list");
				list.innerHTML += "<div>"+this.responseText+"</div>";
				document.forms.form1.test.value = "";
			}
		};
	};

	// data-read
	var url = "./test.php?mode=read";
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url, true);
	xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
	xhr.send();
	xhr.onreadystatechange = function(){
		if(this.readyState === 4){
			var datas = this.responseText.split("\n");
			var html = "";
			for(var i=0; i<datas.length; i++){
				html += "<div>"+datas[i]+"</div>";
			}
			var list = document.getElementById("list");
			list.innerHTML = html;
		}
	};
};
