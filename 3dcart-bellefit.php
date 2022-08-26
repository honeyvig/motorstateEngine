<?php
/*
Plugin Name: 3DCart Motorstate Plugin
Plugin URI: http://honeyvig.com
Description: Allows use of 3DCart products at wordpress, made for HoneyVig.
Version:1.0
Author: HoneyVig.com
Author URI: http://honeyvig.com
License: Private
*/  


/*
    table structure
    
//            global $wpdb;
//            $query = <<<EOT
//
//        CREATE TABLE IF NOT EXISTS `wp_motorstate` (
//          `CatalogID` int(11) NOT NULL,
//          `ProductID` varchar(50) NOT NULL,
//          `ProductName` tinytext,
//          `data` longtext,
//          PRIMARY KEY (`CatalogID`),
//          KEY `ProductID` (`ProductID`)
//        ) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='list of imported motorstate products';    
//
//EOT;
//            $result = $wpdb->query( $query );
//            
//            echo "created: $result; done";

*/


// config vars
$wpmotorstate3dcart_cfg_table = 'wp_motorstate';                        // database table used 
$wpmotorstate3dcart_cfg_table_reviews = 'wp_motorstate_reviews';        // database reviews table
  
  
require_once( '3dcart_handling.php' );

$wpmotorstate3dcart_action = ( isset($_GET[ 'action' ]) ) ? strval( $_GET[ 'action' ]) : ''; 
  
  
  // ============= menu handling   
  
// create custom plugin settings menu
add_action('admin_menu', 'wpmotorstate3dcart_create_menu');
    
function wpmotorstate3dcart_create_menu() {
      //create new top-level menu
      add_menu_page('motorstate 3DCart', 'motorstate 3DCart', 'administrator', "wpmotorstate3dcart_menu", 'wpmotorstate3dcart_common_page');
      add_submenu_page( "wpmotorstate3dcart_menu", '3DCart Settings', '3DCart Settings', 'administrator', __FILE__ . "?action=settings", 'wpmotorstate3dcart_settings_page');
      add_submenu_page( "wpmotorstate3dcart_menu", 'Import Products from 3DCart', 'Import Products from 3DCart', 'administrator', __FILE__ . "?action=import", 'wpmotorstate3dcart_import_products');
      add_submenu_page( "wpmotorstate3dcart_menu", 'Import Reviews from 3DCart', 'Import Reviews from 3DCart', 'administrator', __FILE__ . "?action=importreviews", 'wpmotorstate3dcart_import_reviews');
      add_submenu_page( "wpmotorstate3dcart_menu", 'Products List', 'Products List', 'administrator', __FILE__ . "?action=products", 'wpmotorstate3dcart_display_products');
      add_submenu_page( "wpmotorstate3dcart_menu", 'Reviews List', 'Reviews List', 'administrator', __FILE__ . "?action=reviews", 'wpmotorstate3dcart_display_reviews');
      add_submenu_page( "wpmotorstate3dcart_menu", 'Delete Products', 'Delete Products', 'administrator', __FILE__ . "?action=deleteproducts", 'wpmotorstate3dcart_delete_products');
      add_submenu_page( "wpmotorstate3dcart_menu", 'Delete Reviews', 'Delete Reviews', 'administrator', __FILE__ . "?action=deletereviews", 'wpmotorstate3dcart_delete_reviews');
      //call register settings function
      add_action('admin_init', 'wpmotorstate3dcart_register_settings');
      return;
}


function wpmotorstate3dcart_register_settings() {
      //register our settings
      register_setting('wpmotorstate3dcart-settings-group', 'wpmotorstate3dcart_store_url');
      register_setting('wpmotorstate3dcart-settings-group', 'wpmotorstate3dcart_api_url');
      register_setting('wpmotorstate3dcart-settings-group', 'wpmotorstate3dcart_api_advanced_url');
      register_setting('wpmotorstate3dcart-settings-group', 'wpmotorstate3dcart_api_key');
      
      register_setting('wpmotorstate3dcart-settings-group', 'wpmotorstate3dcart_products');      // list of products
      return;
}


function wpmotorstate3dcart_common_page() {
    ?>
    <div>
        <h1>motorstate 3DCart connection tool</h1>
        <p>Allows import products.</p>
        <p>Please check settings before import products.</p>
        <p>With help of plugin you can: 
            <ul>
                <li>- Import products</li>
                <li>- Check list of imported products</li>                
                <li>- Check details of products</li>                
                <li>- Clear imported products</li>                
            </ul>
        </p>
    </div>
    <?php
}


function wpmotorstate3dcart_settings_page() {
    global $wpdb;    

      if ($_SERVER['REQUEST_METHOD'] == "POST") {
        update_option("wpmotorstate3dcart_store_url", $_POST['wpmotorstate3dcart_store_url']);
        update_option("wpmotorstate3dcart_api_url", $_POST['wpmotorstate3dcart_api_url']);
        update_option("wpmotorstate3dcart_api_advanced_url", $_POST['wpmotorstate3dcart_api_advanced_url']);
        update_option("wpmotorstate3dcart_api_key", $_POST['wpmotorstate3dcart_api_key']);
        
        // create tables 
        $sql_create_reviews = <<<EOT
CREATE TABLE IF NOT EXISTS `wp_motorstate_reviews` (
  `id` int(11) NOT NULL,
  `catalogid` int(11) NOT NULL,
  `user_email` tinytext,
  `short_review` tinytext,
  `data` longtext,
  PRIMARY KEY (`id`),
  KEY `catalogid` (`catalogid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
EOT;
        $result = $wpdb->query( $sql_create_reviews );
        
        
      }
      ?>
      <div class="wrap">
            <h2>motorstate 3DCart Settings</h2>

            <form method="post" action="?page=3dcart-motorstate/3dcart-motorstate.php?action=settings">
          <?php settings_fields('wpmotorstate3dcart-settings-group'); ?>
          <?php do_settings_sections('wpmotorstate3dcart-settings-group'); ?>
              <table class="form-table">
                <tr valign="top">
                  <th scope="row">3DCart Store URL,<br />from which products will be imported:</th>
                  <td><input type="text" name="wpmotorstate3dcart_store_url" value="<?php echo get_option('wpmotorstate3dcart_store_url'); ?>" /></td>
                </tr>
                
                <tr valign="top">
                  <th scope="row">3DCart API Url,<br />usually: http://api.3dcart.com/cart.asmx:</th>
                  <td><input type="text" name="wpmotorstate3dcart_api_url" value="<?php echo get_option('wpmotorstate3dcart_api_url'); ?>" /></td>
                </tr>

                <tr valign="top">
                  <th scope="row">3DCart Advanced API Url,<br />usually: http://api.3dcart.com/cart_advanced.asmx. <br />Advanced API must be enabled at 3D Cart admin:</th>
                  <td><input type="text" name="wpmotorstate3dcart_api_advanced_url" value="<?php echo get_option('wpmotorstate3dcart_api_advanced_url'); ?>" /></td>
                </tr>
                
                <tr valign="top">
                  <th scope="row">3DCart API User Key,<br />
                  must be taked from 3DCart store admin</th>
                  <td><input type="text" name="wpmotorstate3dcart_api_key" value="<?php echo get_option('wpmotorstate3dcart_api_key'); ?>" /></td>
                </tr>
                
              </table>

              <p class="submit">
                <input type="submit" class="button-primary" value="<?php _e('Save Changes') ?>" />
              </p>

            </form>

      </div>
<?php 
    return;
}



/**
* import products
* 
*/
function wpmotorstate3dcart_import_products() {
    ?>
    <div class="wrap">
        <h2>Import products</h2>
        
        <form method="post" action="?page=3dcart-motorstate/3dcart-motorstate.php?action=import">
              <p class="submit">
                <input type="submit" class="button-primary" value="<?php _e('Begin Import of products') ?>" />
              </p>
              <p>ps. When importing - please wait, this will take some time, usually few secounds</p>  
        </form>
        <hr />
        
        
    <?php

      if ($_SERVER['REQUEST_METHOD'] == "POST") {
          
        // get from settings
        // $api_url = 'http://api.3dcart.com/cart.asmx';
        // $api_key = '33294512679369213329451267936921';
        // $store_url = 'motorstatedevelopment.3dcartstores.com';
        
        $api_url = get_option('wpmotorstate3dcart_api_url');
        $api_key = get_option('wpmotorstate3dcart_api_key');
        $store_url = get_option('wpmotorstate3dcart_store_url');
        

        set_time_limit( 60 );   // increase time limit as this can be long
        
        $c3dcart = new C3DCartHandling( $api_url, $api_key, $store_url );
        $quantity = $c3dcart->apiGetProductCount();
        
        // TODO: add splitting to batches per 100 items
        if ( $quantity > 100 ) {
            throw new Exception( "there are more than 100 products" );
        }
        
        $products = $c3dcart->apiGetProduct($quantity, 1 );

        // store new products at db
        wpmotorstate3dcart_save_products( $products );
        
        echo "<h3>Import have finished. Finded $quantity  products</h3><div>";
        wpmotorstate3dcart_display_products();
        echo "</div>  </div>";
        
    }
    
    return;
}



/**
* import reviews
* 
*/
function wpmotorstate3dcart_import_reviews() {
    ?>
    <div class="wrap">
        <h2>Import reviews for products</h2>
        
        <form method="post" action="?page=3dcart-motorstate/3dcart-motorstate.php?action=importreviews">
              <p class="submit">
                <input type="submit" class="button-primary" value="<?php _e('Begin Import of reviews') ?>" />
              </p>
              <p>ps. When importing - please wait, this will take some time, usually few secounds</p>  
        </form>
        <hr />
        
        
    <?php

      if ($_SERVER['REQUEST_METHOD'] == "POST") {
          
        // get from settings
        $api_url = get_option('wpmotorstate3dcart_api_advanced_url');
        $api_key = get_option('wpmotorstate3dcart_api_key');
        $store_url = get_option('wpmotorstate3dcart_store_url');

        set_time_limit( 60 );   // increase time limit as this can be long
        
        $c3dcart = new C3DCartHandling( $api_url, $api_key, $store_url );
        $reviews = $c3dcart->apiGetReviews();
        $quantity = count( $reviews );
        
        // store new products at db
        wpmotorstate3dcart_save_reviews_todb( $reviews );
        
        echo "<h3>Import have finished. Finded $quantity reviews</h3><div>";
        wpmotorstate3dcart_display_reviews();
        echo "</div>  </div>";
        
    }
    
    return;
}



/**
* display products
* 
*/
function wpmotorstate3dcart_display_products() {
    
    if ( isset( $_GET[ 'product_id' ] ) ) {
        wpmotorstate3dcart_display_product_one( intval( $_GET[ 'product_id' ] ) );
        return;
    }
    wpmotorstate3dcart_display_products_lists();
    return;
}


/**
* display reviews
* 
*/
function wpmotorstate3dcart_display_reviews() {
    
    if ( isset( $_GET[ 'review_id' ] ) ) {
        wpmotorstate3dcart_display_review_one( intval( $_GET[ 'review_id' ] ) );
        return;
    }
    wpmotorstate3dcart_display_reviews_lists();
    return;
}




/**
* display list of products
* 
*/
function wpmotorstate3dcart_display_products_lists() {
    
    $quantity = 0;
    $products = wpmotorstate3dcart_get_products();
    $quantity = count( $products );
    
    ?>
    <div class="wrap">
        <h2>Products List</h2>
        <h3>Quantity: <?php echo $quantity; ?> </h3>
    <?php
    
    if ( is_array( $products ) ) {
        $output = '<ol>';
        foreach ( $products as $product ) {
            $link = "?page=3dcart-motorstate/3dcart-motorstate.php?action=products&product_id={$product[ 'CatalogID' ]}";
            $output .= sprintf( '<li><a href="%s" >%s</a>', $link, $product[ 'ProductName' ]  );
            
        }    
        $output .= '</ol>';
        
        echo $output; 
    }
    
    ?>
    </div>
    <?php
}



/**
* display list of products
* 
*/
function wpmotorstate3dcart_display_reviews_lists() {
    
    $quantity = 0;
    $reviews = wpmotorstate3dcart_get_reviews();
    $quantity = count( $reviews );
    
    ?>
    <div class="wrap">
        <h2>Reviews List</h2>
        <h3>Quantity: <?php echo $quantity; ?> </h3>
    <?php
    
    if ( is_array( $reviews ) ) {
        $output = '<ol>';
        foreach ( $reviews as $review ) {
            $link = "?page=3dcart-motorstate/3dcart-motorstate.php?action=reviews&review_id={$review[ 'id' ]}";
            $output .= sprintf( '<li><a href="%s" > id %s ; catid %s ; %s | %s </a>', $link, $review[ 'id' ], $review[ 'catalogid' ], $review[ 'user_email' ], $review[ 'short_review' ]  );
            
        }    
        $output .= '</ol>';
        
        echo $output; 
    }
    
    ?>
    </div>
    <?php
}



/**
* return stored products
* 
*/
function wpmotorstate3dcart_get_products () {
    global $wpdb, $wpmotorstate3dcart_cfg_table;
    $products = $wpdb->get_results( "select CatalogID, ProductID, ProductName from $wpmotorstate3dcart_cfg_table order by ProductName ", ARRAY_A  );
    return $products;
}


/**
* return stored products
* 
*/
function wpmotorstate3dcart_get_reviews ( $catalogid = null ) {
    global $wpdb, $wpmotorstate3dcart_cfg_table_reviews;
    
    $where = '';
    
    if ( $catalogid != null ) {
        $where = " WHERE `catalogid` = '" . intval( $catalogid ) . "' ";
    }
    
    $reviews = $wpdb->get_results( "select * from $wpmotorstate3dcart_cfg_table_reviews $where order by catalogid, id ", ARRAY_A  );
    return $reviews;
}



/**
* return stored products, stored from options table; 
* obsolete; dont used more
* 
*/
function wpmotorstate3dcart_get_products_from_options_table () {
    $products_serialized = get_option('wpmotorstate3dcart_products');
    $products = unserialize( $products_serialized );
    
    if ( ! is_array( $products ) ) {
        $products = array();
    }    
    return $products;    
}




/**
* save products to database
* 
*/
function wpmotorstate3dcart_save_products ( & $products ) {
    // dump products to test file
    // file_put_contents( 'test_123092184.txt', var_export( $products, true ) );
    
    // save to db
    wpmotorstate3dcart_save_products_todb( $products );
    return true;    
}


/**
* get products with id from array of products
* 
* @param mixed $products
* @param mixed $id
*/
function wpmotorstate3dcart_get_product( $CatalogID ) {
    global $wpdb, $wpmotorstate3dcart_cfg_table;
    
    
    $result = $wpdb->get_row( "select * from $wpmotorstate3dcart_cfg_table where `CatalogID` = '" . intval( $CatalogID ) . "' ", ARRAY_A  );
    
    // if dont finded - return empty array
    if ( $result == null )  {
        return array();    
    }
    
    $finded_product = unserialize( $result[ 'data'] );
    if ( $finded_product === false ) {
        return array();
    }
    
    return $finded_product;    
}





/**
* get products with id from array of products
* 
* @param mixed $products
* @param mixed $id
*/
function wpmotorstate3dcart_get_product_by_code( $CatalogID ) {
    global $wpdb, $wpmotorstate3dcart_cfg_table;
    
    
    $result = $wpdb->get_row( 
        $wpdb->prepare( 
        " select * from $wpmotorstate3dcart_cfg_table where Lower(`ProductID`) = Lower('%s') ",
            $CatalogID 
        ),
        ARRAY_A  );
    
    // if dont finded - return empty array
    if ( $result == null )  {
        return array();    
    }
    
    $finded_product = unserialize( $result[ 'data'] );
    if ( $finded_product === false ) {
        return array();
    }
    
    return $finded_product;    
}







/**
* get products with id from array of products
* 
* @param mixed $products
* @param mixed $id
*/
function wpmotorstate3dcart_get_review( $id ) {
    global $wpdb, $wpmotorstate3dcart_cfg_table_reviews;
    
    
    $result = $wpdb->get_row( "select * from $wpmotorstate3dcart_cfg_table_reviews where `id` = '" . intval( $id ) . "' ", ARRAY_A  );
    
    // if dont finded - return empty array
    if ( $result == null )  {
        return array();    
    }
    
    $finded = unserialize( $result[ 'data'] );
    if ( $finded === false ) {
        return array();
    }
    
    return $finded;    
}




/**
* display list of products
* 
*/
function wpmotorstate3dcart_display_product_one( $id ) {
    ?>
    <div class="wrap">
        <h2></h2>

        <a href="?page=3dcart-motorstate/3dcart-motorstate.php?action=products">Back to Product List</a>
    
        <h2>Product Details</h2>
    <?php
    
    $finded_product = wpmotorstate3dcart_get_product( $id );   
        
    echo '<div class="wrap"><pre>';
    var_export( $finded_product );
    echo "</pre></div>";
    
    ?>
    </div>
    <?php
}



/**
* display list of products
* 
*/
function wpmotorstate3dcart_display_review_one( $id ) {
    ?>
    <div class="wrap">
        <h2></h2>

        <a href="?page=3dcart-motorstate/3dcart-motorstate.php?action=reviews">Back to Review List</a>
    
        <h2>Review Details</h2>
    <?php
    
    $finded_review = wpmotorstate3dcart_get_review( $id );   
        
    echo '<div class="wrap"><pre>';
    var_export( $finded_review );
    echo "</pre></div>";
    
    ?>
    </div>
    <?php
}




/**
* delete current products
* 
*/
function wpmotorstate3dcart_delete_products() {
    ?>
    <div class="wrap">
        <h2>Delete Imported Products</h2>
        <p>This will clear list of current imported products</p>
        
        <form method="post" action="?page=3dcart-motorstate/3dcart-motorstate.php?action=deleteproducts">
              <p class="submit">
                <input type="submit" class="button-primary" value="<?php _e('Delete Imported Products') ?>" />
              </p>
        </form>
        
    <?php

      if ($_SERVER['REQUEST_METHOD'] == "POST") {
            wpmotorstate3dcart_delete_products_fromdb();
            
            echo '<hr /><div class="wrap"><h3>Products have deleted</h3></div>';
      }

     echo "</div>";
    
     return;
}



/**
* delete current products
* 
*/
function wpmotorstate3dcart_delete_reviews() {
    ?>
    <div class="wrap">
        <h2>Delete Imported Reviews</h2>
        <p>This will clear list of current imported reviews</p>
        
        <form method="post" action="?page=3dcart-motorstate/3dcart-motorstate.php?action=deletereviews">
              <p class="submit">
                <input type="submit" class="button-primary" value="<?php _e('Delete Imported Reviews') ?>" />
              </p>
        </form>
        
    <?php

      if ($_SERVER['REQUEST_METHOD'] == "POST") {
            wpmotorstate3dcart_delete_reviews_fromdb();
            
            echo '<hr /><div class="wrap"><h3>Reviews have deleted</h3></div>';
      }

     echo "</div>";
	
     return;
}






/**
* save products to db
* 
* @param mixed $products
*/
function wpmotorstate3dcart_save_products_todb( & $products ) {
    global $wpdb, $wpmotorstate3dcart_cfg_table;
    
    // clear db first
    wpmotorstate3dcart_delete_products_fromdb();
    
    $total_result = true;
    foreach( $products as $product ) {
        $result = $wpdb->insert( 
            $wpmotorstate3dcart_cfg_table, 
            array( 
              'CatalogID'       => $product[ 'CatalogID' ],  
              'ProductID'       => $product[ 'ProductID' ], 
              'ProductName'     => $product[ 'ProductName' ], 
              'data'            => serialize( $product ) 
            ), 
            array( 
                '%d', 
                '%s', 
                '%s', 
                '%s' 
            ) 
        );       
        
        $total_result = $total_result & $result; 
    }
    
    return $total_result;
}




/**
* save reviews to db
* 
* @param mixed $reviews
*/
function wpmotorstate3dcart_save_reviews_todb( & $reviews ) {
    global $wpdb, $wpmotorstate3dcart_cfg_table_reviews;
    
    // clear db first
    wpmotorstate3dcart_delete_reviews_fromdb();
    
    $total_result = true;
    foreach( $reviews as $review ) {
        $result = $wpdb->insert( 
            $wpmotorstate3dcart_cfg_table_reviews, 
            array( 
              'id'                  => $review[ 'id' ],  
              'catalogid'           => $review[ 'catalogid' ],  
              'user_email'          => $review[ 'user_email' ], 
              'short_review'        => $review[ 'short_review' ], 
              'data'                => serialize( $review ) 
            ), 
            array( 
                '%d', 
                '%d', 
                '%s', 
                '%s', 
                '%s' 
            ) 
        );       
        
        $total_result = $total_result & $result; 
    }
    
    return $total_result;
}





/**
* delete products from db
* 
*/
function wpmotorstate3dcart_delete_products_fromdb() {
    global $wpdb, $wpmotorstate3dcart_cfg_table;
    
    $result = $wpdb->query( "TRUNCATE $wpmotorstate3dcart_cfg_table" );
    return $result;
}

/**
* delete products from db
* 
*/
function wpmotorstate3dcart_delete_reviews_fromdb() {
    global $wpdb, $wpmotorstate3dcart_cfg_table_reviews;
    
    $result = $wpdb->query( "TRUNCATE $wpmotorstate3dcart_cfg_table_reviews" );
    return $result;
}



function wpmotorstate3dcart_get_options_block_html( & $product ) {
                
    $options = array();
    $html = '';
                 
    $option_block = <<<EOT
                <span class="select">
                    <select name="%s-%s">
                            <!--START: option-->
                            %s
                            <!--END: option-->
                    </select>
                </span>
EOT;

    $option_block_test = <<<EOT
<div style="margin-left:63px;">
                <strong>Size</strong><br />

                
                    <select name="Size-11">
                            <!--START: option-->
                            <option value="Select Size:::434">Select Size </option>
                            
                            <option value="XS 32.5 - 35:::4" selected >XS 32.5" - 35" </option>
                            
                            <option value="S 35.5 - 39.5:::5">S 35.5" - 39.5" </option>
                            
                            <option value="M 40 - 43:::6">M 40" - 43" </option>
                            
                            <option value="L 43.5 - 47:::7">L 43.5" - 47" </option>
                            
                            <option value="XL 47.5 - 52:::8">XL 47.5" - 52" </option>
                            <!--END: option-->
                    </select>
                
            </div>    
EOT;

    // <option value="Select Size:::434">Select Size </option>
    $sub_option_block = <<<EOT
                            <option value="%s" %s >%s </option>

EOT;


    
    // do we have only one option, or few options. than format little differ
    
    // if only one option, than have this
    if ( isset( $product[ 'Options' ][ 'Option' ][ 'Id' ] )) {
        $options[] =  $product[ 'Options' ][ 'Option' ];
    } else {
        $options =  $product[ 'Options' ][ 'Option' ];
    }

    $id = $product[ 'CatalogID' ]; 
    if ( is_array( $options ) ) {       
        foreach( $options as $option ) {
            $sub_options = '';
            $title = $option[ 'OptionType' ];    
            
            // prepare <options>
            $count = 0;
            foreach( $option[ 'Values' ][ 'Value' ] as $value ) {
                $count++;
                
                $sub_option_id = $value[ 'ID' ];
                $sub_option_name = $value[ 'Name' ];
                $sub_option_value = wpmotorstate3dcart_option_value_prepare( $sub_option_name, $sub_option_id );
                
                if ( $count == 1 ) {
                    $selected = ' selected '; // select only 2nd            
                } else {
                    $selected = ''; // select only 2nd                            
                }
                
                $sub_options .= sprintf( $sub_option_block, $sub_option_value, $selected, $sub_option_name );
            }
            
            $option = sprintf( $option_block,$title, $id, $sub_options );
            
            $html .= '<div class="option_block">' . $option . '</div>';
        }
    }
    
    return $html;
}



/**
* prepare option value
* 
* @param mixed $option_value
* @param mixed $option_id
*/
function wpmotorstate3dcart_option_value_prepare( $option_value, $option_id ) {
    $name_part = str_ireplace( '"', '', $option_value );
    $result = "{$name_part}:::{$option_id}";    
    return $result;
}







// ========= short code handling
//[motorstateproduct]
function wpmotorstate3dcart_motorstateproduct_func( $atts ){
    // get form function
    $file =  'wp-content/plugins/3dcart-motorstate/' . 'form_sample.php';    
    require_once( $file );
    
    // get product data
    $id = $atts[ 'id' ];
    $product = wpmotorstate3dcart_get_product( $id );
    
    $form_text = wpmotorstate3dcart_motorstateproduct_form( $product );
    
    return $form_text;
}


function wpmotorstate3dcart_motorstateproduct_frontend_func( $atts ){
    // get form function
    $file =  'wp-content/plugins/3dcart-motorstate/' . 'form_frontend_3dcart.php';    
    require_once( $file );
    
    // get product data
    $id = $atts[ 'id' ];
    $product = wpmotorstate3dcart_get_product_by_code( $id );
    $product[ 'linked_productid' ] = $id;
    
    $form_text = wpmotorstate3dcart_motorstateproduct_form( $product );
    
    return $form_text;
}



//[motorstatereview id]
function wpmotorstate3dcart_motorstatereview_func( $atts ){ 
    // get product data
    $categoryid = $atts[ 'id' ];
    $reviews = wpmotorstate3dcart_get_reviews( $categoryid );
    $quantity = count( $reviews );
    
    $output = <<<EOT
    <div class="wrap">
        <h2>Reviews ({$quantity}) </h2>
EOT;

    if ( is_array( $reviews ) ) {
        $output .= '<ol>';
        foreach ( $reviews as $review ) {
            $review_data = unserialize( $review[ 'data' ] );
            $output .= sprintf( '<li>date: %s; rating: %s; <br /> %s', $review_data[ 'review_date' ], $review_data[ 'rating' ], $review_data[ 'long_review' ]  );
        }    
        $output .= '</ol>';
    }
    
    $output .= '</div>';
    
    return $output;
}


add_shortcode( 'motorstateproduct', 'wpmotorstate3dcart_motorstateproduct_func' );
add_shortcode( 'motorstatereview', 'wpmotorstate3dcart_motorstatereview_func' );
   
    
  
  
?>