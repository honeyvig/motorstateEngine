<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v2/Webhooks");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"Name\": \"Product Added \",
  \"Url\": \"http://localhost/motorstateEngine/webhook.php\",
  \"EventType\": 2,
  \"Enabled\": false,
  \"Format\": \"JSON/XML \"
}");

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/json",
  "Accept: application/json",
  "SecureURL: sandbox-honeywebcreator.3dcartstores.com",
  "PrivateKey: 4d16497d94b88717c6f6c4a570898d87",
  "Token: bd6594808cbd4b93bd75dc64f9048a4a"
));

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
?>