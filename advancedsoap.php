<?php

class Data {
  private $db;
  public function __construct(){
    $this->db = new soapclient('http://api.3dcart.com/cart_advanced.asmx?WSDL',array('trace'=>1,'soap_version'=>SOAP_1_1));
  }

  public function query($sql){
    $param = array(
      'storeUrl'=>"www.sandparts.com",
      'userKey'=>"26517706279399222265177062793992",
      'sqlStatement'=>$sql
    );
    $result = $this->db->runQuery($param);
    $match = $result->runQueryResult->any;
    $sxe = new SimpleXMLElement($match);
    return $sxe->runQueryRecord;
  }
}

$db = new Data();
$query = $db->query("SELECT * FROM products");
var_dump(xml2array($query));

$xml = simplexml_load_string($query);

?>