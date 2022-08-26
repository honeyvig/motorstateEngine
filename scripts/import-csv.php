<?php 
/**Created By Honey Vig
*/
include('../inc/db.php');

$host="localhost"; // Host name.
$db_user="root"; //mysql user
$db_password=""; //mysql pass
$db='motorstateEngine'; // Database name.
//$conn=mysql_connect($host,$db_user,$db_password) or die (mysql_error());
//mysql_select_db($db) or die (mysql_error());
$con=mysqli_connect($host,$db_user,$db_password,$db);
// Check connection
if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$filename = "838674.csv";
  $file = fopen($filename, "r");
         while (($emapData = fgetcsv($file, 10000, ",")) !== FALSE)
         {
            $sql = "INSERT into tableName(name,email,address) values('$emapData[0]','$emapData[1]','$emapData[2]')";
            mysqli_query($con, $sql);
         }
         fclose($file);
         echo "CSV File has been successfully Imported.";

 
 
}