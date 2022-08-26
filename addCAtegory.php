<?php
	$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v2/Categories");

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
  \"CategoryID\": 235
  ,
  \"CategoryName\": \"Imports\",
  \"Link\": \"imports\",
  \"CategoryDescription\": \"Import Category DEscription\",
  \"CategoryIcon\": \"import\",
  \"CategoryMain\": true,
  \"CategoryParent\": -72269965,
  \"Sorting\": 56501169,
  \"Hide\": false,
  \"UserID\": \"admin\",
  \"LastUpdate\": \"1965-05-13T11:18:12.747Z\",
  \"CategoryMenuGroup\": -82853280,
  \"HomeSpecialCategory\": false,
  \"FilterCategory\": true,
  \"TemplateCategoryPage\": 53690528,
  \"DefaultProductsSorting\": 89501843,
  \"SubcategoryColumnsCategorySpecials\": 70854169,
  \"ProductColumnsCategorySpecials\": -7941458,
  \"ProductColumnsCategoryGeneralItems\": 39622744,
  \"ItemsPerPageCategorySpecialItems\": 4012094,
  \"ItemsPerPageCategoryGeneralItems\": -80875337,
  \"DisplayTypeCategorySpecialItems\": 84659598,
  \"DisplayTypeCategoryGeneralProducts\": 61161615,
  \"AllowAccess\": \"officia \",
  \"OnFailRedirectTo\": \"minim\",
  \"HideLeftBar\": true,
  \"HideRightBar\": true,
  \"HideTopMenu\": false,
  \"SmartCategories\": -88149128,
  \"SmartCategoriesSearchKeyword\": \"laborum officia\",
  \"SmartCategoriesLinkTarget\": \"incididunt eiusmod \",
  \"TemplateProductPage\": -3376213,
  \"ProductColumnsRelatedProducts\": 84148240,
  \"ProductColumnsUpsellProducts\": 9573080,
  \"DisplayTypeRelatedItems\": 95433922,
  \"DisplayTypeUpsellItems\": -24609856,
  
  \"Title\": \"Imports\",
  \"CustomFileName\": \"Excepteur est nisi nulla tempor\",
  \"MetaTags\": \"ipsum ullamco labore sed\",
  \"CategoryHeader\": \"consequat veniam ullamco nisi\",
  \"CategoryFooter\": \"consectetur deserunt et\",
  \"AdditionalKeywords\": \"imports\"
}");


$response = curl_exec($ch);
curl_close($ch);

var_dump($response);

?>