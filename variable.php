<?php 

$nombre="luis";

$url="www.youtube.com/lubutech";
echo "<h3>dirección</h3>";
echo $url;
echo "<br/>";

//cambiando el valor de una variable

$url="www.lubutech.com";
echo $url;
echo "<br/>";

//Concatenación

$apellidos="bueno castro";
$mensaje = "mi primer string";

print "$apellidos: $mensaje";
echo "<br/>";

//Variables de tipo entero

$estatura = 123;

echo "Estatura: $estatura";
echo "<br/>";

//Suma de dos variables

$num1=10; $num2= 20;
$total = $num1 + $num2;
echo "$total";
echo "<br/>";

function sumar($num1,$num2) {
    echo $num1 + $num2;
}

sumar($num1,$num2);

?>