<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tipo = $_POST['tipo'];
    $peso = $_POST['peso'];
    $ancho = $_POST['ancho'];
    $alto = $_POST['alto'];
    $fondo = $_POST['fondo'];
    $km = $_POST['km'];

    // Lógica de cotización
    $precioBase = 0;

    if ($tipo === 'sobre') $precioBase = 20;
    else if ($tipo === 'caja') $precioBase = 100;
    else if ($tipo === 'tarima') $precioBase = 500;
    else if ($tipo === 'contenedor') {
        $bloques = ceil($peso / 50);
        $precioBase = $bloques * 600;
    }

    $cmCubicos = $ancho * $alto * $fondo;
    $precioVolumen = $cmCubicos * 1;
    $precioDistancia = $km * 10;

    $total = $precioBase + $precioVolumen + $precioDistancia;
    echo json_encode(['total' => $total]);
}
?>
