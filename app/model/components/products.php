<?php 
function productos($name, $quantity, $price) {
    try {
        return '<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">'.$name.'</h5>
          <p class="card-text">Mando de Playstation 5 compatible con PC mediante conexión Bluetooth y cable USB a USB-C.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cantidad Disponible: '.$quantity.'</li>
          <li class="list-group-item">Precio: '.$price.'</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link"><button class="btn btn-primary" type="button">Detalles</button></a>
          <a href="#" class="card-link"><button class="btn btn-primary" type="button">Añadir a la cesta</button></a>
        </div>
      </div>';
    } catch(Exception $e) {
        return $e->getMessage();
    }
}