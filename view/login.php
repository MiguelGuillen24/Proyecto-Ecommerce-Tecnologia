<?php
require_once '../app/model/framework/bootstrap_require.php';
require_once '../app/model/components/social_network.php';
require_once '../app/model/components/form_login.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/10298/10298212.png" type="image/png">
</head>
<body>
    <?php login_form("client") ?>
</body>
</html>