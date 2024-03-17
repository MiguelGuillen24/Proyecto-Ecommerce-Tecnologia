<?php
function social_res($social)
{
    try {
        switch ($social) {
            case "x":
                $url = "https://cdn-icons-png.flaticon.com/512/5969/5969020.png";

                break;
                // Agrega más casos según necesites para otras redes sociales
            default:
                $url = "#";
                break;
        }
        // Imprime el icono
        echo "<img src='$url'>";
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}
