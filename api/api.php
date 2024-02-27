<?php
header('Access-Control-Allow-Origin: *');
// Should be this later on for just oyfa though:
// header('Access-Control-Allow-Origin: https://www.example.com');

header('Content-Type: application/json');

$key = $_GET['key'];

if (!isset($key)) {
    die("No key provided");
}
else if($key != getenv("MAIN_API_KEY")) {
    die("invalid key");
}

$servername = getenv("API_SERVER_NAME");
$username = getenv("USERNAME");
$password = getenv("PASSWORD");
$database = getenv("DATABASE");

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

/* URL */

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $parts = explode('?', $_SERVER["REQUEST_URI"]);

    $path = $parts[0];
    
    $path_parts = explode('/', $path);

    if ($path_parts[1] == "bncarchive") {
        // REMEMBER SQL INJECTION FOR LATER LOLLLLLLLLL !

        $sqlquery = "SELECT * FROM archive WHERE bnc_num = " . $path_parts[2];
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
        
        echo $json_data;
    }
} 
else
    echo "nope lol";