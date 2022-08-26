<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbName = "motorstateEngine";

// Connect to MySQL
$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// If database is not exist create one
if (!mysqli_select_db($conn,$dbName)){
    $sql = "CREATE DATABASE ".$dbName;
    if ($conn->query($sql) === TRUE) {
        echo "Database created successfully";
    }else {
        echo "Error creating database: " . $conn->error;
    }
} 

// Return name of current default database
/*if ($result = mysqli_query($conn, "SELECT DATABASE()")) {
  $row = mysqli_fetch_row($result);
  echo "Default database is " . $row[0];
  mysqli_free_result($result);
}
*/
// Change db to "test" db
mysqli_select_db($conn, $dbName);

// Return name of current default database
/*if ($result = mysqli_query($conn, "SELECT DATABASE()")) {
  $row = mysqli_fetch_row($result);
  echo "Default database is " . $row[0];
  mysqli_free_result($result);
}
*/



$file = '838674.csv';
$table = 'pgp_products';

// get structure from csv and insert db
ini_set('auto_detect_line_endings',TRUE);
$handle = fopen($file,'r');
// first row, structure
if ( ($data = fgetcsv($handle) ) === FALSE ) {
    echo "Cannot read from csv $file";die();
}
$fields = array();
$field_count = 0;
for($i=0;$i<count($data); $i++) {
    $f = strtolower(trim($data[$i]));
    if ($f) {
        // normalize the field name, strip to 20 chars if too long
        $f = substr(preg_replace ('/[^0-9a-z]/', '_', $f), 0, 20);
		$f = str_replace('___','',$f);
        $field_count++;
        $fields[] = $f.' VARCHAR(256)';
    }
}

$sql = "CREATE TABLE $table (" . implode(', ', $fields) . ')';
echo $sql . "<br /><br />";
 $conn->query($sql);
while ( ($data = fgetcsv($handle) ) !== FALSE ) {
    $fields = array();
    for($i=0;$i<$field_count; $i++) {
        $fields[] = '\''.addslashes($data[$i]).'\'';
    }
    $sql = "Insert into $table values(" . implode(', ', $fields) . ')';
    echo $sql; 
     $conn->query($sql);
}
fclose($handle);
ini_set('auto_detect_line_endings',FALSE);
?>