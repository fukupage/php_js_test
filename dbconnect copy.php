<?php
ini_set('display_errors', 1);
/*
jsから受け取った値をjsonに書き込む
*/

session_start();

  $arr = $_SESSION['log'];
file_put_contents("log.json" , $arr);

/*
$log = array(
  "siteLog" => array(
  [
  "id" => "1",
  "title" => "ほげほげほげほげ",
  "user" => "ふがふが",
  "content" => "1の内容内容内容内容内容内容内容内容内容内容内容内容"
  ],
  [
  "id" => "2",
  "title" => "ふがふがふがふが",
  "user" => "ばーばーばー",
  "content" => "2の内容内容内容内容内容内容内容内容内容内容内容内容"
  ],
  [
  "id" => "3",
  "title" => "ばーばーばーばーばーばーばーばーばーばーばーばー",
  "user" => "ほげほげほげほげ",
  "content" => "3の内容内容内容内容内容内容内容内容内容内容内容内容"
  ]
  )
  );
  $arr = json_encode($log);
  file_put_contents("log.json" , $arr);
  ?>

*/
  ?>
