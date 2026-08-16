<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-cache');

$url = 'https://learn.spirit.engineering/api/public/courses';

$ctx = stream_context_create([
    'http' => [
        'method'  => 'GET',
        'header'  => "Accept: application/json\r\n",
        'timeout' => 10,
    ],
    'ssl' => [
        'verify_peer'      => false,
        'verify_peer_name' => false,
    ],
]);

$response = @file_get_contents($url, false, $ctx);

if ($response === false) {
    http_response_code(503);
    echo json_encode(['error' => 'LMS unavailable']);
    exit;
}

echo $response;
