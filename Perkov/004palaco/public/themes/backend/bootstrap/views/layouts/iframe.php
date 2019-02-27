<!DOCTYPE html>

<html lang="ru">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title></title>
        <?php \Yii::app()->bootstrap->register(); ?>
        <link rel="stylesheet" type="text/css" href="<?php echo \Yii::app()->theme->baseUrl; ?>/css/main.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo \Yii::app()->theme->baseUrl; ?>/css/styles.css" />
    </head>
<body>

<?php echo $content; ?>

</body>
</html>
