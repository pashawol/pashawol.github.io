<?php

$b= $_POST[0];
$a= $_POST[1];
$connection=Yii::app()->db;

// выполняем запрос
//$connection->createCommand("update set into table (pole1,pole2) values (:a, :b)")->execute(array(':a'=>$a, ':b'=>$b));

$connection->createCommand("UPDATE `catalog_product_images` SET `alt` = (:a) WHERE `catalog_product_images`.`id` = (:b)")->execute(array(':a'=>$a, ':b'=>$b));