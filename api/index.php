<?php
$servername = getenv("SERVER_NAME");
$username = getenv("USERNAME");
$password = getenv("PASSWORD");
$database = getenv("DATABASE");

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sqlquery = "SELECT * FROM archive";
$result = $conn->query($sqlquery);

$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$result->close();

$conn->close();

$json_data = json_encode($data);

header('Content-Type: application/json');
echo $json_data;