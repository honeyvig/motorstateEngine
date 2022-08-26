<?php 
 require_once('3dcart_handling.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbName = "motorstateEngine";
$offset = 0;
if ( $_REQUEST['offset']=='' ) { $offset=1;} else { $offset = $_REQUEST['offset']; }
$max = 100;
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


 // get from settings
        // $api_url = 'http://api.3dcart.com/cart.asmx';
        // $api_key = '32389689891943219323896898919432';
        // $store_url = 'sandbox-honeywebcreator.3dcartstores.com';
		 
         $api_url = 'http://api.3dcart.com/cart.asmx';
         $api_key = '26517706279399222265177062793992';
         $store_url = 'www.sandparts.com';
		 
        set_time_limit( 0 );   // increase time limit as this can be long
		$c3dcart = new C3DCartHandling( $api_url, $api_key, $store_url );
        echo $quantity = $c3dcart->apiGetProductCount();
        
        // TODO: add splitting to batches per 100 items
        if ( $quantity > $max ) {
           // throw new Exception( "there are more than 100 products" );
        }
        for($i=126592;$i<$quantity;$i=$i+$max)
		{
        $products = $c3dcart->apiGetProduct('100', $i );
		//var_dump($products);

$table = '3dc_products';

$sql = "CREATE TABLE $table (CatalogID VARCHAR(100),ProductID VARCHAR(100),ProductName VARCHAR(100),Categories VARCHAR(100),Mfgid VARCHAR(100),Manufacturer VARCHAR(100),Distributor VARCHAR(100),Cost VARCHAR(100),Price VARCHAR(100),RetailPrice VARCHAR(100),SalePrice VARCHAR(100),OnSale VARCHAR(100),Stock VARCHAR(100),StockAlert VARCHAR(100),Weight VARCHAR(100),Width VARCHAR(100),Height VARCHAR(100),Depth VARCHAR(100),MinimumOrder VARCHAR(100),MaximumOrder VARCHAR(100),DateCreated VARCHAR(100),Description VARCHAR(256),ExtendedDescription VARCHAR(256),Keywords VARCHAR(256),RelatedProducts VARCHAR(100),ShipCost VARCHAR(100),Title VARCHAR(100),MetaTags VARCHAR(256),DisplayText VARCHAR(100),HomeSpecial VARCHAR(100),CategorySpecial VARCHAR(100),Hide VARCHAR(100),FreeShipping VARCHAR(100),NonTax VARCHAR(100),NotForsale VARCHAR(100),GiftCertificate VARCHAR(100),UserId VARCHAR(100),LastUpdate VARCHAR(100),ExtraFields VARCHAR(100),WarehouseLocation VARCHAR(100),WarehouseBin VARCHAR(100),WarehouseAisle VARCHAR(100),WarehouseCustom VARCHAR(100),UseCatoptions VARCHAR(100),QuantityOptions VARCHAR(100),PriceLevel VARCHAR(100),MinOrder VARCHAR(100),ListingDisplayType VARCHAR(100),ShowOutStock VARCHAR(100),PricingGroupOpt VARCHAR(100),QuantityDiscountOpt VARCHAR(100),LoginLevel VARCHAR(100),RedirectTo VARCHAR(100),AccessGroup VARCHAR(100),SelfShip VARCHAR(100),TaxCode VARCHAR(100),eProduct VARCHAR(100),NonSearchable VARCHAR(100),InstockMessage VARCHAR(100),OutOfStockMessage VARCHAR(100),BackOrderMessage VARCHAR(100),Rewards VARCHAR(100),FileName VARCHAR(100),ReviewAverage VARCHAR(100),ReviewCount VARCHAR(100),Images VARCHAR(100),Options VARCHAR(100))";


 $conn->query($sql);
	foreach( $products as $product ) {
	
           $CatalogID       = $product[ 'CatalogID' ];  
           $ProductID       = $product[ 'ProductID' ];
           $ProductName     = $product[ 'ProductName' ]; 
           $data            = serialize( $product );
		   $insertvalues = implode("','", $product);
    $prod_sql = "Insert into $table values('".$insertvalues. "')";
   //echo $prod_sql; 
     $conn->query($prod_sql);
	}
		}

		//$reviews = $c3dcart->apiGetReviews();
        //$quantity = count( $reviews );
		

?>
