<?php 

 global $partnumber;
global $description;
global $brand;
global $suggestedretail;
global $cost;




$mysqli = new mysqli("localhost", "root", "", "motorstateengine");
$fields = "`partnumber`, `description`, `brand`, `suggestedretail`, `cost`, `length`, `width`, `height`, `weight`, `qtyavail`, `upc`, `jobber`, `aaiacode`, `mapprice`, `vendormsrp`, `airrestricted`, `staterestricted`, `truckfrtonly`, `manufacturerpart`, `shipalone`, `status`, `motorstatenotes`, `image_url`, `category_level_1`, `category_level_2`, `category_level_3`, `long_description_150`";

function getDistinctCategory($categorylvl){
 $query = "SEKECT DISTINCT $categorylvl from `pgp_products`";
 $category = $mysqli -> query($query) or die('Error: '.$mysqli -> error);
 return $category;
}

function display_posts () {

    global $mysqli;
    global $fields;

    $query = "SELECT DISTINCT $fields FROM `pgp_products`";

    $posts = $mysqli -> query($query) or die('Error: '.$mysqli -> error);
//echo $posts -> num_rows;
    if ($posts -> num_rows > 0) {

        while ($row = $posts -> fetch_assoc()) {
        $partnumber = $row['partnumber'];
		$description = $row['description'];
		$brand = $row['brand'];
		$suggestedretail = $row['suggestedretail'];
		$cost = $row['cost'];
		$length = $row['length'];
		$width = $row['width'];
		$height = $row['height'];
		$qtyavail = $row['qtyavail']; 
		$upc = $row['upc'];
		$jobber = $row['jobber'];
		$aaiacode = $row['aaiacode'];
		$mapprice = $row['mapprice'];
		$vendormsrp = $row['vendormsrp'];
		$airrestricted = $row['airrestricted'];
		$staterestricted = $row['staterestricted'];
		$truckfrtonly = $row['truckfrtonly'];
		$manufacturerpart = $row['manufacturerpart'];
		$shipalone = $row['shipalone'];
		$status = $row['status'];
		$motorstatenotes = $row['motorstatenotes'];
		$image_url = $row['image_url'];
		$category_level_1 = $row['category_level_1'];
		$category_level_2 = $row['category_level_2'];
		$category_level_3 = $row['category_level_3'];
		$long_description_150 = $row['long_description_150'];
        
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products");

curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/json",
  "Accept: application/json",
  "SecureURL: sandbox-honeywebcreator.3dcartstores.com",
  "PrivateKey: 4d16497d94b88717c6f6c4a570898d87",
  "Token: bd6594808cbd4b93bd75dc64f9048a4a"
));

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"SKUInfo\": {
    \"SKU\": \"$partnumber\",
    \"Name\": \"$description\",
    \"Cost\": \"$cost\",
    \"Price\": \"$suggestedretail\",
    \"Currency\": \"USD\",
    \"RetailPrice\": \"$suggestedretail\" ,
    \"SalePrice\": \"0\" ,
    \"OnSale\": false,
    \"Stock\": $qtyavail
  },
  \"ShortDescription\": \"$category_level_1/$category_level_2/$category_level_3\",
  \"CategoryList\": [
    {
      \"CategoryID\": 233,
      \"CategoryName\": \"Import\"
    }
  ],
  \"Height\": $height,
  \"Width\": $width,
  \"Depth\": $length,
  \"MainImageFile\": \"$image_url\",
  \"MainImageCaption\": \"$description\",
  \"ThumbnailFile\": \"$image_url\",
  \"Description\": \"$long_description_150\",
}"
);
$response = curl_exec($ch);

$information = curl_getinfo($ch);
//var_dump($information);
$info = json_decode($response, true);
curl_close($ch);
var_dump($info);

		
		
        }

    }else {

        echo 'No records found.';

    }

}

//Call the function
display_posts ();
echo $partnumber;die();

?>