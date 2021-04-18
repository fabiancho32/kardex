<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Indica los métodos permitidos.
    header('Access-Control-Allow-Methods: GET, POST, DELETE');
    // Indica los encabezados permitidos.
    header('Access-Control-Allow-Headers: Authorization');
    http_response_code(204);
}

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

$params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

$nombre = $params->nombre;
$nombreArchivo = $params->nombreArchivo;
$archivo = $params->base64textString;
$archivo = base64_decode($archivo);

$filePath = $_SERVER['DOCUMENT_ROOT'] . "/kardex/kardex/apps/kardex/src/assets/img/productos/" . $nombreArchivo;
file_put_contents($filePath, $archivo);


class Result
{
}
// GENERA LOS DATOS DE RESPUESTA
$response = new Result();

$response->resultado = 'OK';
$response->mensaje = 'SUBIO CORRECTAMENTE';

header('Content-Type: application/json');
echo json_encode($response); // MUESTRA EL JSON GENERADO */
