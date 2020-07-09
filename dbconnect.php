<?php

if($_REQUEST["mode"] === "write"){
	$num = 1;
	if(is_file("data.txt")){
		$data = explode(PHP_EOL , file_get_contents("data.txt"));
		$num = count($data);
	}
	file_put_contents("data.txt" , $num.",".$_REQUEST["message"].PHP_EOL , FILE_APPEND);
	echo $num.",".$_REQUEST["message"];
}

else if($_REQUEST["mode"] === "read"){
	echo file_get_contents("log.txt");
}
?>
