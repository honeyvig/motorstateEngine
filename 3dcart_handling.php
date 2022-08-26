<?php

/**
* core logic of handling 3dCart
* based on official 3DCart plugin
* writted for motorstate by honeyvig@gmail.com
*/
class C3DCartHandling {
    
      public $apiUrl = 'http://api.3dcart.com/cart.asmx';     
      public $userKey; 
      public $storeUrl; 
      
      protected $_result;   // result of last call to api, array
      
      protected $_curl_result;  // raw result for curl call
      protected $_curl_header;  // header of result for last curl call
      protected $_curl_body;    // body for curl call
      protected $_curl_info;    // info of last curl call
      protected $_curl_errno;    // curl error of last curl call
      
      public $error = false;        // current error status; true if error before
      public $errorMessage = '';    // last error message
      
       
      
      function __construct( $apiUrl, $userKey, $storeUrl  ) {
          $this->apiUrl = $apiUrl;
          $this->userKey = $userKey;
          $this->storeUrl = $storeUrl;
      } 
      
      
      public function getApiUrl()  { return $this->apiUrl; }
      public function getUserKey()  { return $this->userKey; }
      public function getStoreUrl() { return $this->storeUrl; }
      
      
      /**
      * get total quantity of products
      * 
      */
      public function apiGetProductCount() {
          $request = $this->apiGetProductCountRequest();
          $xml_result = $this->curlCallServer( $request );
          $array_result = $this->xml2array( $xml_result );
          $quantity = $this->apiGetProductCountParseResult( $array_result );    // get result from array
          if ( $this->isError() ) {
                return false;
          }
          return $quantity;
      }
      

      /**
      * get array of products
      * 
      */
      public function apiGetProduct( $batchSize = 1, $startNum = 1, $productID = '' ) {
          $request = $this->apiGetProductRequest( $batchSize, $startNum, $productID );
          $xml_result = $this->curlCallServer( $request );
          $array_result = $this->xml2array( $xml_result );
          $products = $this->apiGetProductParseResult( $array_result );    // get result from array          
          if ( $this->isError() ) {
                return false;
          }
          return $products;
      }


      /**
      * get array of products
      * 
      */
      public function apiGetReviews() {
          $request = $this->apiGetReviewsRequest();
          $xml_result = $this->curlCallServer( $request );
          $array_result = $this->xml2array( $xml_result );
          $reviews = $this->apiGetReviewsParseResult( $array_result );
          if ( $this->isError() ) {
                return false;
          }
          return $reviews;
      }
      
      

      
      /**
      * parse array result for product count
      * 
      * @param mixed $array_result
      */
      public function apiGetProductCountParseResult( $array_result ) {
          $this->clearError();
          
          $quantity = 0;
          if ( isset( $array_result["soap:Envelope"]["soap:Body"]["getProductCountResponse"]["getProductCountResult"]["GetProductCountResponse"]["ProductQuantity"] ) ) {
              $quantity = intval( ( $array_result["soap:Envelope"]["soap:Body"]["getProductCountResponse"]["getProductCountResult"]["GetProductCountResponse"]["ProductQuantity"] ) );
          } else {
              $this->raiseError( "cant find required xml tags for quantity at result" );
              return false;
          }
          return $quantity;
      }
      

      /**
      * parse array result for products
      * 
      * @param mixed $array_result
      */
      public function apiGetProductParseResult( & $array_result ) {
          $this->clearError();
          
          $products = null;
          if ( isset( $array_result["soap:Envelope"]["soap:Body"]["getProductResponse"]["getProductResult"]["GetProductDetailsResponse"]["Product"] ) ) {
              $products = ( $array_result["soap:Envelope"]["soap:Body"]["getProductResponse"]["getProductResult"]["GetProductDetailsResponse"]["Product"] );
          } else {
              $this->raiseError( "cant find required xml tags for quantity at result" );
              return false;
          }
          return $products;
      }


      /**
      * parse array result for products
      * 
      * @param mixed $array_result
      */
      public function apiGetReviewsParseResult( & $array_result ) {
          $this->clearError();
          
          $reviews = null;
          if ( isset( $array_result["soap:Envelope"]["soap:Body"]["runQueryResponse"]["runQueryResult"]["runQueryResponse"]["runQueryRecord"] ) ) {
              $reviews = ( $array_result["soap:Envelope"]["soap:Body"]["runQueryResponse"]["runQueryResult"]["runQueryResponse"]["runQueryRecord"] );
          } else {
              $this->raiseError( "cant find required xml tags for reviews at result" );
              return false;
          }
          return $reviews;
      }
      
      

    
      /**
      * get product count call message
      */
      public function apiGetProductCountRequest() {
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <getProductCount xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <callBackURL></callBackURL>
    </getProductCount>
  </soap12:Body>
</soap12:Envelope>';
            return $call;
      }
    
    
      public function apiGetProductRequest( $batchSize = 1, $startNum = 1, $productID = '' ) {
          
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <getProduct xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <batchSize>' . $batchSize . '</batchSize>
      <startNum>' . $startNum . '</startNum>
      <productId>' . $productID . '</productId>
      <callBackURL></callBackURL>
    </getProduct>
  </soap12:Body>
</soap12:Envelope>';
            return $call;
      }


      
      public function apiGetReviewsRequest() {
          $sql = "SELECT * FROM product_review ";
            
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <runQuery xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <sqlStatement>' . $sql . '</sqlStatement>
      <callBackURL></callBackURL>
    </runQuery>
  </soap12:Body>
</soap12:Envelope>';
            return $call;
      }   

      public function apieditCustomerRequest( $customerData, $action ) {
         $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <editCustomer xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <customerData>'. $customerData . '</customerData>
      <action>'. $action. '</action>
      <callBackURL></callBackURL>
    </editCustomer>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }

      public function apigetCustomerRequest(  $batchSize = 1, $startNum = 1, $customersFilter = ''  ) {
         $call = '<?xml version="1.0" encoding="utf-8customersFilter
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getCustomer xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <batchSize>' . $batschSize .'</batchSize>
      <startNum>' . $startNum . '</startNum>
      <customersFilter>'. $customersFilter . '</customersFilter>
      <callBackURL>string</callBackURL>
    </getCustomer>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
            /**
      * get customer count call message
      */
      public function apiCustomerCountRequest() {
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getCustomerCount xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <callBackURL></callBackURL>
    </getCustomerCount>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
      public function apigetCustomerLoginToken(  $customerEmail , $timeToLive = 1 ) {
         $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getCustomerLoginToken xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <customerEmail>'. $customerEmail . '</customerEmail>
      <timeToLive>'. $timeToLive . '</timeToLive>
      <callBackURL></callBackURL>
    </getCustomerLoginToken>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
      
      public function apigetOrderRequest(  $batchSize = 1, $startNum = 1, $startFrom = true,$invoiceNum = '', $status = '', $dateFrom = '', $dateTo = ''  ) {
         $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getOrder xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <batchSize>' . $batschSize .'</batchSize>
      <startNum>' . $startNum . '</startNum>
      <startFrom>' . $startFrom . '</startFrom>
      <invoiceNum>' . $startNum . '</invoiceNum>
      <status>' . $status .'</status>
      <dateFrom>' . $dateFrom .'</dateFrom>
      <dateTo>' . $dateTo .'</dateTo>
      <callBackURL></callBackURL>
    </getOrder>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
	  
            /**
      * get order count call message
      */
      public function apiOrderCountRequest() {
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getOrderCount xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <startFrom>boolean</startFrom>
      <invoiceNum>string</invoiceNum>
      <status>string</status>
      <dateFrom>string</dateFrom>
      <dateTo>string</dateTo>
      <callBackURL>string</callBackURL>
    </getOrderCount>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
	  public function apigetOrderStatus($invoiceNum = '' ) {
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getOrderStatus xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <invoiceNum>' . $invoiceNum . '</invoiceNum>
      <callBackURL></callBackURL>
    </getOrderStatus>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
	  
public function apigetProductInventory($productId = '' ) {
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getProductInventory xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <productId>'. $productId .'</productId>
      <callBackURL>string</callBackURL>
    </getProductInventory>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
	  
	  
public function apiupdateOrderShipment($invoiceNum = '',$shipmentID = '', $tracking ='', $shipmentDate = ''  ) {
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <updateOrderShipment xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <invoiceNum>'. $invoiceNum . '</invoiceNum>
      <shipmentID>'. $shipmentID . '</shipmentID>
      <tracking>'. $tracking . '</tracking>
      <shipmentDate>' . $shipmentDate .'</shipmentDate>
      <callBackURL></callBackURL>
    </updateOrderShipment>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
	  
public function apiupdateOrderStatus($invoiceNum = '',$newStatus = '') {
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <updateOrderStatus xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <invoiceNum>'. $invoiceNum . '</invoiceNum>
      <newStatus>' . $newStatus . '</newStatus>
      <callBackURL></callBackURL>
    </updateOrderStatus>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
public function updateProductInventory($productId = '',$quantity, $replaceStock = false) {
          $call = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <updateProductInventory xmlns="http://3dcart.com/">
      <storeUrl>' . $this->getStoreUrl() . '</storeUrl>
      <userKey>' . $this->getUserKey() . '</userKey>
      <productId>' . $productId . '</productId>
      <quantity>' . $quantity . '</quantity>
      <replaceStock>' . $replaceStock . '</replaceStock>
      <callBackURL></callBackURL>
    </updateProductInventory>
  </soap:Body>
</soap:Envelope>';
            return $call;
      }
      /**
	  
      * make call to server
      * 
      * @param mixed $request
      * @return string result; or false
      */
      public function curlCallServer( & $request, $call_action = null ) {
            $this->clearError();
          
            $this->_curl_result = null;
            $this->_curl_info = null;
            $this->_curl_header = null;
            $this->_curl_body = null;
            $this->_curl_errno = null;
            
            
            //open connection
            $ch = curl_init();

            //set the url, number of POST vars, POST data
            curl_setopt($ch, CURLOPT_URL, $this->getApiUrl() );
            curl_setopt($ch, CURLOPT_POST, true );
            curl_setopt($ch, CURLOPT_HEADER, true );    // need headers for debug
            
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $request );
            
            if ( $call_action == null ) {
                $headers = array(
                    'Content-Type: application/soap+xml; charset=utf-8',    
                  // 'Content-Type: text/xml; charset=ISO-8859-1',    
                  //        'SOAPAction: ' . $call_action,        // we are using soap 1.2 calls; samples are at: http://api.3dcart.com/cart.asmx
                  );
            } else {
                $headers = array(
                    'Content-Type: text/xml; charset=utf-8',    
                  // 'Content-Type: text/xml; charset=ISO-8859-1',    
                    'SOAPAction: ' . $call_action,        // we are using soap 1.2 calls; samples are at: http://api.3dcart.com/cart.asmx
                  );
            }
            
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);    

            //execute post
            $this->_curl_result = curl_exec($ch);
            
            $this->_curl_errno = curl_errno($ch);
            if( ! $this->_curl_errno ) {
                $this->_curl_info = curl_getinfo($ch);
                
                $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
                $this->_curl_header = substr($this->_curl_result, 0, $header_size);
                $this->_curl_body = substr($this->_curl_result, $header_size);        
            } else {
                $this->raiseError( curl_error($ch) );
                return false;
            }    

            //close connection
            curl_close($ch);
            
            return $this->_curl_body;    
      }
      
      
      
      public function raiseError( $message ) {
          $this->error = true;
          $this->errorMessage = $message;
          return;
      }
      
      public function clearError() {
          $this->error = false;
          $this->errorMessage = '';
      }
      
      public function isError() {
          return $this->error;
      }
      
      
    /**
    * parse xml to array
    *   
    * @param mixed $contents
    * @param mixed $get_attributes
    * @param mixed $priority
    */
    public function xml2array($contents, $get_attributes=1, $priority = 'tag') {
          if (!$contents)
            return array();

          if (!function_exists('xml_parser_create')) {
            //print "'xml_parser_create()' function not found!";
            return array();
          }

          //Get the XML parser of PHP - PHP must have this module for the parser to work
          $parser = xml_parser_create('');
          xml_parser_set_option($parser, XML_OPTION_TARGET_ENCODING, "UTF-8"); # http://minutillo.com/steve/weblog/2004/6/17/php-xml-and-character-encodings-a-tale-of-sadness-rage-and-data-loss
          xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);
          xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1);
          xml_parse_into_struct($parser, trim($contents), $xml_values);
          xml_parser_free($parser);

          if (!$xml_values)
            return; //Hmm...


            
    //Initializations
          $xml_array = array();
          $parents = array();
          $opened_tags = array();
          $arr = array();

          $current = &$xml_array; //Refference
          //Go through the tags.
          $repeated_tag_index = array(); //Multiple tags with same name will be turned into an array
          foreach ($xml_values as $data) {
            unset($attributes, $value); //Remove existing values, or there will be trouble
            //This command will extract these variables into the foreach scope
            // tag(string), type(string), level(int), attributes(array).
            extract($data); //We could use the array by itself, but this cooler.

            $result = array();
            $attributes_data = array();

            if (isset($value)) {
              if ($priority == 'tag')
                $result = $value;
              else
                $result['value'] = $value; //Put the value in a assoc array if we are in the 'Attribute' mode
            }

            //Set the attributes too.
            if (isset($attributes) and $get_attributes) {
              foreach ($attributes as $attr => $val) {
                if ($priority == 'tag')
                      $attributes_data[$attr] = $val;
                else
                      $result['attr'][$attr] = $val; //Set all the attributes in a array called 'attr'
              }
            }

            //See tag status and do the needed.
            if ($type == "open") {//The starting of the tag '<tag>'
              $parent[$level - 1] = &$current;
              if (!is_array($current) or (!in_array($tag, array_keys($current)))) { //Insert New tag
                $current[$tag] = $result;
                if ($attributes_data)
                      $current[$tag . '_attr'] = $attributes_data;
                $repeated_tag_index[$tag . '_' . $level] = 1;

                $current = &$current[$tag];
              } else { //There was another element with the same tag name
                if (isset($current[$tag][0])) {//If there is a 0th element it is already an array
                      $current[$tag][$repeated_tag_index[$tag . '_' . $level]] = $result;
                      $repeated_tag_index[$tag . '_' . $level]++;
                } else {//This section will make the value an array if multiple tags with the same name appear together
                      $current[$tag] = array($current[$tag], $result); //This will combine the existing item and the new item together to make an array
                      $repeated_tag_index[$tag . '_' . $level] = 2;

                      if (isset($current[$tag . '_attr'])) { //The attribute of the last(0th) tag must be moved as well
                        $current[$tag]['0_attr'] = $current[$tag . '_attr'];
                        unset($current[$tag . '_attr']);
                      }
                }
                $last_item_index = $repeated_tag_index[$tag . '_' . $level] - 1;
                $current = &$current[$tag][$last_item_index];
              }
            } elseif ($type == "complete") { //Tags that ends in 1 line '<tag />'
              //See if the key is already taken.
              if (!isset($current[$tag])) { //New Key
                $current[$tag] = $result;
                $repeated_tag_index[$tag . '_' . $level] = 1;
                if ($priority == 'tag' and $attributes_data)
                      $current[$tag . '_attr'] = $attributes_data;
              } else { //If taken, put all things inside a list(array)
                if (isset($current[$tag][0]) and is_array($current[$tag])) {//If it is already an array...
                      // ...push the new element into that array.
                      $current[$tag][$repeated_tag_index[$tag . '_' . $level]] = $result;

                      if ($priority == 'tag' and $get_attributes and $attributes_data) {
                        $current[$tag][$repeated_tag_index[$tag . '_' . $level] . '_attr'] = $attributes_data;
                      }
                      $repeated_tag_index[$tag . '_' . $level]++;
                } else { //If it is not an array...
                      $current[$tag] = array($current[$tag], $result); //...Make it an array using using the existing value and the new value
                      $repeated_tag_index[$tag . '_' . $level] = 1;
                      if ($priority == 'tag' and $get_attributes) {
                        if (isset($current[$tag . '_attr'])) { //The attribute of the last(0th) tag must be moved as well
                          $current[$tag]['0_attr'] = $current[$tag . '_attr'];
                          unset($current[$tag . '_attr']);
                        }

                        if ($attributes_data) {
                          $current[$tag][$repeated_tag_index[$tag . '_' . $level] . '_attr'] = $attributes_data;
                        }
                      }
                      $repeated_tag_index[$tag . '_' . $level]++; //0 and 1 index is already taken
                }
              }
            } elseif ($type == 'close') { //End of tag '</tag>'
              $current = &$parent[$level - 1];
            }
          }

          return($xml_array);
    }
      
      
      
      
}


// ========= tools






  
?>