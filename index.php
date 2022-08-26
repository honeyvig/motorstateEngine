<?php 
define("CALLBACK_URL", "http://localhost/motorstate/index.php");
define("AUTH_URL", "https://apirest.3dcart.com/oauth/authorize");
define("ACCESS_TOKEN_URL", "https://apirest.3dcart.com/oauth/token");
define("CLIENT_ID", "3802cd9eb6a147f2707eb9f33bf32370");
define("CLIENT_SECRET", "8f612fc4ecc480340fb6ca019468fb21");
define("SCOPE", ""); // optional
define("STATE", "12345"); // optional
define("STORE_URL", "https://sandbox-honeywebcreator.3dcartstores.com/"); // optional

session_start();


$params = array(
  'storeUrl' => "sandbox-honeywebcreator.3dcartstores.com",
  'userKey' => "32389689891943219323896898919432"
);
$db =  new soapclient('http://api.3dcart.com/cart_advanced.asmx?WSDL', array('trace' => 1,'soap_version' => SOAP_1_1));

// Retrive product list
$result = $db->runQuery($params + array(
  'sqlStatement' => "SELECT TOP 20 * from products"
));
$sxe = new SimpleXMLElement($result->runQueryResult->any);
//var_dump($sxe->runQueryRecord);
$products = $sxe->runQueryRecord;
print_r($products);

foreach( $products as $product )
{
	echo $product["catalogid"];
}




















function authorizeUrl($client_id, $callback, $scopes = array())
{
  $pattern = "https://moneybird.com/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&response_type=code";
  return sprintf($pattern, $client_id,
                           urlencode($callback),
                           implode("+", $scopes));
}
$url = AUTH_URL."?"
   ."response_type=code"
   ."&client_id=". urlencode(CLIENT_ID)
   ."&scope=". urlencode(SCOPE)
   ."&store_url=". urlencode(STORE_URL)
   ."&redirect_uri=". urlencode(CALLBACK_URL)
;
$login = "Garage1";
$password = "Garage@123456789";
$params = array(
  "client_id" => "3802cd9eb6a147f2707eb9f33bf32370",
  "username" => "Garage1",
  "password" => "Garage@123456789",
  "grant_type" => "password",
  "store_url" => urlencode(STORE_URL),
  "redirect_uri" => urlencode(CALLBACK_URL));

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, AUTH_URL);
curl_setopt($curl, CURLOPT_HEADER, true);
curl_setopt($curl, CURLINFO_HEADER_OUT, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_HEADER,'Content-Type: application/x-www-form-urlencoded');
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_USERPWD, urlencode('user').':'.urlencode('pass'));

// Remove comment if you have a setup that causes ssl validation to fail
//curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
$postData = "";

//This is needed to properly form post the credentials object
foreach($params as $k => $v)
{
   $postData .= $k . '='.urlencode($v).'&';
}

$postData = rtrim($postData, '&');

curl_setopt($curl, CURLOPT_POSTFIELDS, $postData);
echo "Performing Request...";

$json_response = curl_exec($curl);
var_dump($json_response);die();
//header("Location:". $url );

$code = $_GET['code'];


$ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/oauth/token");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");

            $data = array('Code' => $code, 'client_id' => '3802cd9eb6a147f2707eb9f33bf32370', 'client_secret' => '8f612fc4ecc480340fb6ca019468fb21', 'grant_type' => 'authorization_code');
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'application/x-www-form-urlencoded'
            ));
            $response = curl_exec($ch);
			

$info = json_decode($response, true);
$access_token = $info['access_token'];



$auth = array(
"Content-Type: application/xml",
"Accept: application/json",
"Authorization: Bearer $access_token",
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v2/{API END POINT}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_HTTPHEADER, $auth);
$response = curl_exec($ch);
curl_close($ch);
?>