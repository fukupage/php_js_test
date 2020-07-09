/**
 * formをjsonに変換する
 */
var jsonSend = function(){

  // ①json形式取得
  var text = JSON.stringify($(this).jsForm("get"), undefined, 2);

  // ②送信
  $.ajax({
    'url':           this.action,
    'type':          'post',
    'dataType':      'json',
    'contentType':   'application/json',
    'data':          text
  })

  // ②-a 成功 - 結果出力
  .done(function(data, textStatus, xhr){
    $('#display').text(JSON.stringify(data, undefined, 2));
  })

  // ②-b 失敗 - エラー出力
  .fail(function(xhr, textStatus, errorThrown){
    var text = JSON.stringify(
      {
        "XMLHttpRequest": xhr,
        "textStatus": textStatus,
        "errorThrown": errorThrown
      },
      undefined, 2
    );
    $('#display').text(text);
  });

  // ③ キャンセル
  // 通常フォーム(application/x-www-form-urlencoded)の送信を抑止
  return false;

};

/**
 * フォームの初期化
 */
var formInit = function(){
  var data = {
    "foo": {
      "first": "foo.first",
      "second": {
        "a": "foo.second.a",
        "b": "foo.second.b"
      },
      "third": "foo.third"
    },
    "bar": {
      "first": "bar.first",
      "second": "bar.second"
    },
    "hoge": [
      {
        "first": "hoge[0].first",
        "second": "hoge[0].second"
      },
      {
        "first": "hoge[1].first",
        "second": "hoge[1].second"
      }
    ]
  };
  $('form').jsForm({"data": data});
  $('form').submit(jsonSend);
};

/*
 * 全体初期化
 */
$(function(){
  formInit();
});
