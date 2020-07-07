'use strict';

/*
  htmlで入力された値をチェックしてphpに受け渡す
*/

//変数の設定
let form_title;
let form_user;
let form_content;
let html_box;

let title;
let user;
let content;
let post_p;
let postmemo;

document.querySelector('form').addEventListener('submit', e =>{
  e.preventDefault();

  form_title = document.getElementById('form_title');
  form_user = document.getElementById('form_user');
  form_content = document.getElementById('form_content');
  html_box = document.getElementById('box');

  title = form_title.value;
  user = form_user.value;
  content = form_content.value;

  post_p = `
  <section>
  <h2>${title}</h2>
  <small>${user}</small>
  <p>${content}</p>
  </section>
  `;

  console.log(form_title.value);
  console.log(form_user.value);
  console.log(form_content.value);

  html_box.innerHTML += post_p;
});



