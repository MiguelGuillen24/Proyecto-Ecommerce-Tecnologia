<?php
require_once '../app/model/framework/bootstrap_require.php';
require_once '../app/model/components/client/navbar_client.php';
require_once '../app/model/components/client/footer_client.php';
require_once '../app/model/components/pagination.php';
require_once '../app/model/components/products.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retrogamer</title>
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/10298/10298212.png" type="image/png">
    <link href="../app/model/style.css" rel="stylesheet">
    <link href="../app/model/icon_social.css" rel="stylesheet">
</head>

<body>

    <?php echo navbar_client;
    $quantity_cards = 0;
    do {
        $quantity_cards++;
        echo productos('Mando Dualsense PS5 White V2', 25, '279.99');
    } while ($quantity_cards < 10);
    echo $footer_client;
    ?>

</body>

</html>