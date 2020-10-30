<?php

function Auth(){
	$host="localhost";
	$user="mengchendesign";
	$pass="mengchen123456";
	$dbname="Mengchen";
   return [
      "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
      $user,
      $pass
   ];
}
