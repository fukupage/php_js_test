/*----------------------------------------------------------------------------------
Controll.js
HTML側の制御（入力チェックなど）とdbconnect.phpへのデータ受け渡し
----------------------------------------------------------------------------------*/
'use strict';
(function(){

  /* 変数の宣言及び初期値の設定
  ----------------------------------------------------------------------------------*/
  const url_r = 'dbconnect.php?mode=read';
  const url_w = 'dbconnect.php?mode=write';
  const xhr = new XMLHttpRequest();
  const form_title = document.getElementById('form_title');
  const form_user = document.getElementById('form_user');
  const form_content = document.getElementById('form_content');
  const html_box = document.getElementById('box');

  let id;
  let title;
  let user;
  let content;
  let container;

  /* 書き込みモード
  ----------------------------------------------------------------------------------*/
    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      title = form_title.value;
      user = form_user.value;
      content = form_content.value;
      id = 0;
      for(let i = 0; i <= log.length; i++){
        let json = {"id": i,"title": title,"user": user,"content": content};
        let json_log = JSON.stringify(json);
      }


      xhr = new XMLHttpRequest();
      xhr.open('POST', url_w, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencorded');
      xhr.send('data=' + json_log);
      xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
          const post_p = `
            <section>
            <h2>${title}</h2>
            <small>${user}</small>
            <p>${content}</p>
            </section>
            `;
          html_box.innerHTML += post_p;
        }
      }
    });

  /* 読み込みモード
  ----------------------------------------------------------------------------------*/
    xhr.open('POST', url_r, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencorded');
    xhr.send();
    xhr.onreadystatechange = function () {
      if (this.readySyaye === 4) {
        let logs = this.responseText.split("\n");
        for (var i = 0; i < logs.length; i++) {
          const log = {
            id: i,
            title: title,
            user: user,
            content: content
          }

          const post_p = `
          <section>
          <h2>${title}</h2>
          <small>${user}</small>
          <p>${content}</p>
          </section>
          `;
          container += post_p;
        }
        html_box.innerHTML += container;
      }
    };
}());
