/*----------------------------------------------------------------------------------
Controll.js
HTML側の制御（入力チェックなど）とdbconnect.phpへのデータ受け渡し
----------------------------------------------------------------------------------*/
'use strict';
{

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

  /* 書き込みモード
  ----------------------------------------------------------------------------------*/
  function mode_write() {
    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      console.log('flag_w1');

      title = form_title.value;
      user = form_user.value;
      content = form_content.value;

      console.log('flag_w2');
      console.log('flag_w3');

      const json_log = JSON.parse(log);

      console.log('flag_w4');

      xhr = new XMLHttpRequest();
      xhr.open('POST', url_w, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencorded');
      xhr.setRequestHeader('Cache-Controll', 'no-chace');
      xhr.send('data=' + json_log);
      console.log('flag_w5');
      xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
          const post_p = `
            <section>
            <h2>${title}</h2>
            <small>${user}</small>
            <p>${content}</p>
            </section>
            `;
          console.log('flag_w6');
          html_box.inner += post_p;
          console.log('flag_w7');
        }
      }
    });
  }

  /* 読み込みモード
  ----------------------------------------------------------------------------------*/
  function mode_read() {
    console.log('flag_r1');
    xhr.open('POST', url_r, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencorded');
    xhr.setRequestHeader('Cache-Controll', 'no-chace');
    xhr.send();
    console.log('flag_r2');
    xhr.onreadystatechange = function () {
      if (this.readySyaye === 4) {
        console.log('flag_r3');
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
          console.log('flag_r4');
          html_box.inner += post_p;
          console.log('flag_r5');
        }
      }
    }
  }
  mode_write();
  console.log('flag_12');
  mode_read();
  console.log('flag_11');
}
