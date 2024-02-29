<?php

header("Access-Control-Allow-Origin: *"); 

/* NOTE ABOUT CORS (Cross-Origin Resource Sharing):
 * 
 * You can research more in-depth about this security header and make
 * a decision for yourselves but we chose to do without explicitly defining the
 * domain. What having it would do is allow only requests from our domain to use
 * this api which is very desirable until you consider that local development
 * environments will not be able to work as intended using the deployed api.
 * Instead future webmasters/devs will have to run a seperate local php server 
 * hosting the api adjacent to their development environment for the webapp to
 * work fully with the backend. Should we or any projects using our design 
 * switch, use the following to set up multiple allowed origins including the
 * admin subdomain which is crucial for it to continue to work. Otherwise, it
 * will have no access to the database.
 *
 * Reminder: adding 'localhost:{port}' does not solve this issue for devs, it
 * just means any thing running an app on their own machine with the same port
 * can access the api
 
$allowedOrigins = [
   'https://admin.oyfaatuva.com',
   // + Other domains...
];

if(in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins))
{
	$http_origin = $_SERVER['HTTP_ORIGIN'];
} else {
	$http_origin = "https://oyfaatuva.com";
}
header("Access-Control-Allow-Origin: $http_origin");

 * Specifically for OYFA webmasters:
 * 
 * In general, for the purposes of our organization, we should never be
 * storing sensitive information on the website anyways so while it is good to
 * take all the reasonable measures to protect your app, we don't need to
 * create the most secure system we can; we're just a Filipino Club after all
 * lol. As you learn about the website though, you wil find all the extra work 
 * we did do to ensure proper security. Not because there are any real risks
 * given an attack or misuse but because, as a CS student or anyone interested 
 * in software, it is good to know and be able to apply safe practices. You can
 * add to it or remove from it, at the end of the day, there will never be
 * anything that is actually "sensitive" held by OYFA (I hope). Just continue
 * to make good design decisions and do your best to give back to our community!
 */ 

header("Access-Control-Allow-Credentials: true");

// header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

// header("Access-Control-Allow-Headers: Content-Type, Authorization");

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
    if ($path_parts[2] == "bncarchive") {
        // REMEMBER SQL INJECTION FOR LATER LOLLLLLLLLL !

        $extraquery = '';
        if($path_parts[4] == 'board')
            $extraquery = 'JSON_EXTRACT(board_json)';

        $sqlquery = "SELECT * FROM bnc JOIN bnc_member ON bnc.bnc_id = bnc_member.bnc_id JOIN committee ON bnc_member.committee_id = committee.committee_id WHERE bnc.bnc_id = " . $path_parts[3];
        $result = $conn->query($sqlquery);
        
        $data = array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }
        
        foreach($data as $item) {
            echo $item[0];
        }
        
        $result->close();
        
        $conn->close();
        
        $json_data = json_encode($data[0]);
        
        echo $json_data;
    }
} 
else
    echo "nope lol";