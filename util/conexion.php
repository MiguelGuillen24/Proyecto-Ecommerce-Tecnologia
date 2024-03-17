<?php
//API: Dotenv / Intérprete de variables de entorno .env
require '../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

//API: Dotenv / Intérprete de variables de entorno .env

class Conexion
{
    public static function conectar()
    {
        try {
            $conexion = new PDO($_ENV['DB_CONECTION'] . ":" . $_ENV['DB_HOST'] . ";" . $_ENV['DB_NAME'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD']);
        } catch (PDOException $ex) {
            die($ex->getMessage());
        }finally{
            echo "conectado correctamente";
            return $conexion;
        }
    }
}

Conexion::conectar();
