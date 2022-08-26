<?php
include('vendor' . DIRECTORY_SEPARATOR . 'autoload.php');

use \ThreeDCart\Primitive\StringValueObject;

$soapFactory = new \ThreeDCart\Api\Soap\Factory();
$advancedClient  = $soapFactory->getAdvancedApiClient(
    new StringValueObject('32389689891943219323896898919432'),
    new StringValueObject('sandbox-honeywebcreator.3dcartstores.com')
);

$plainCustomersArray = $advancedClient->runQuery(
    new StringValueObject('SELECT TOP 2 * from products'));
$r = new ReflectionObject($plainCustomersArray);
$p = $r->getProperty('value');
$p->setAccessible(true);
//$r->getProperties(ReflectionProperty::IS_PRIVATE);
var_dump($plainCustomersArray);
foreach($p as $key=> $value)
{
	var_dump($p);
		foreach((array)$key as $k => $v)
		{
			var_dump($v);
			
		}
		
	
}
?>