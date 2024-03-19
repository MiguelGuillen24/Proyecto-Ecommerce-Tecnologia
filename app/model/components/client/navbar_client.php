<?php

const navbar_client = '<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://cdn-icons-png.flaticon.com/512/10298/10298212.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
    <strong>Retro Gamer</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./index.php">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./productos.php">Productos</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Consolas
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Playstation</a></li>
                    <li><a class="dropdown-item" href="#">Xbox</a></li>
                    <li><a class="dropdown-item" href="#">Nintendo</a></li>
                    <li><a class="dropdown-item" href="#">Otros</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Retro</a></li>
                </ul>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</div>
</nav>';