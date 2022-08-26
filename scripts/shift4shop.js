/**Create new admin user**/
var SecureURL = "sandbox-honeywebcreator.3dcartstores.com";
var PrivateKey = "4d16497d94b88717c6f6c4a570898d87";
var Token = "bd6594808cbd4b93bd75dc64f9048a4a";
function newAdminUser()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Admins');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', SecureURL);
request.setRequestHeader('PrivateKey', PrivateKey);
request.setRequestHeader('Token', Token);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'Username': 'ut dolore non fugiat',
  'Email': 'est irure incididunt laborum',
  'Name': 'ali',
  'Password': 'aute m',
  'AdminId': -85630586,
  'ExternalId': 'nisi elit',
  'AdminPermissionsList': []
};

request.send(JSON.stringify(body));

}

function retrieveAdminUsersList()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Admins?limit=&offset=&name=&username=&external_id=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', SecureURL);
request.setRequestHeader('PrivateKey', PrivateKey);
request.setRequestHeader('Token', Token);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveAdminUserById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Admins/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function updateAdminUserById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Admins/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'AdminId': -8588494,
  'Username': 'aute proident sunt anim ad',
  'Email': 'occaecat ipsum',
  'Name': 'Lorem',
  'Password': 'veniam in r',
  'ExternalId': 'fugiat ipsum do',
  'AdminPermissionsList': []
};

request.send(JSON.stringify(body));

}
function deleteAdminUser()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Admins/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveAdminUserPermissions()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/AdminPermissions?limit=&offset=&section=&action=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrievePermissionById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/AdminPermissions/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}

function retrieveLoginTokenAdminUser()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Admins/{id}/LoginToken?targetpage=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}

function retrieveAdminUserPermissions()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/AdminPermissions?limit=&offset=&section=&action=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveSpecificAdminUserPermission()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/AdminPermissions/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveLoginTokenforAdminUser()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Admins/{id}/LoginToken?targetpage=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createCart()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Cart');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CustomerId': -80365023,
  'BillingFirstName': 'culpa ut',
  'BillingLastName': 'esse tempor ut',
  'BillingCompany': 'id',
  'BillingAddress': 'laborum veniam in',
  'BillingAddress2': 'ipsum e',
  'BillingCity': 'labore do sint',
  'BillingState': 'ni',
  'BillingZipCode': 'dolo',
  'BillingCountry': 'qui culpa',
  'BillingPhoneNumber': 'eu',
  'BillingEmail': 'laboris veniam sed aliquip Ut',
  'ShipmentFirstName': 'dolore Excepteur',
  'ShipmentLastName': 'aliquip ipsum cillum culpa tempor',
  'ShipmentCompany': 'in velit magna est',
  'ShipmentAddress': 'proident sunt adipisicing minim id',
  'ShipmentAddress2': 'cupidatat commodo',
  'ShipmentCity': 'incididunt ',
  'ShipmentState': 'consequat d',
  'ShipmentZipCode': 'Ut voluptate et pr',
  'ShipmentCountry': 'aute ',
  'ShipmentPhone': 'aliquip exercitation qui deserunt',
  'ShipmentEmail': 'fugiat sint'
};

request.send(JSON.stringify(body));

}

function retrieveCart()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Cart/{orderkey}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function updateCart()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Cart/{orderkey}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CustomerId': -80365023,
  'BillingFirstName': 'culpa ut',
  'BillingLastName': 'esse tempor ut',
  'BillingCompany': 'id',
  'BillingAddress': 'laborum veniam in',
  'BillingAddress2': 'ipsum e',
  'BillingCity': 'labore do sint',
  'BillingState': 'ni',
  'BillingZipCode': 'dolo',
  'BillingCountry': 'qui culpa',
  'BillingPhoneNumber': 'eu',
  'BillingEmail': 'laboris veniam sed aliquip Ut',
  'ShipmentFirstName': 'dolore Excepteur',
  'ShipmentLastName': 'aliquip ipsum cillum culpa tempor',
  'ShipmentCompany': 'in velit magna est',
  'ShipmentAddress': 'proident sunt adipisicing minim id',
  'ShipmentAddress2': 'cupidatat commodo',
  'ShipmentCity': 'incididunt ',
  'ShipmentState': 'consequat d',
  'ShipmentZipCode': 'Ut voluptate et pr',
  'ShipmentCountry': 'aute ',
  'ShipmentPhone': 'aliquip exercitation qui deserunt',
  'ShipmentEmail': 'fugiat sint'
};

request.send(JSON.stringify(body));

}
function deleteCart()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Cart/{orderkey}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createCartItem()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Cart/{orderkey}/Item');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CatalogID': 79295989,
  'ItemQuantity': 74216946.47779638,
  'ItemOptions': [
    {
      'OptionSetID': 15820261,
      'OptionID': 47597762,
      'OptionValue': 'dolore fugiat'
    },
    {
      'OptionSetID': 99572501,
      'OptionID': 91126905,
      'OptionValue': 'deserunt'
    }
  ]
};

request.send(JSON.stringify(body));

}
function updateCartItem()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Cart/{orderkey}/Item/{cartitemid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'ItemQuantity': 8748205.447808474
};

request.send(JSON.stringify(body));

}
function deleteCartItem()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Cart/{orderkey}/Item/{cartitemid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function createCategory()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CategoryID': -67557159,
  'CategoryName': 'nulla ad',
  'Link': 'dolore non',
  'CategoryDescription': 'est ea id',
  'CategoryIcon': 'proident nisi',
  'CategoryMain': true,
  'CategoryParent': -72269965,
  'Sorting': 56501169,
  'Hide': true,
  'UserID': 'Ut et',
  'LastUpdate': '1965-05-13T11:18:12.747Z',
  'CategoryMenuGroup': -82853280,
  'HomeSpecialCategory': false,
  'FilterCategory': true,
  'TemplateCategoryPage': 53690528,
  'DefaultProductsSorting': 89501843,
  'SubcategoryColumnsCategorySpecials': 70854169,
  'ProductColumnsCategorySpecials': -7941458,
  'ProductColumnsCategoryGeneralItems': 39622744,
  'ItemsPerPageCategorySpecialItems': 4012094,
  'ItemsPerPageCategoryGeneralItems': -80875337,
  'DisplayTypeCategorySpecialItems': 84659598,
  'DisplayTypeCategoryGeneralProducts': 61161615,
  'AllowAccess': 'officia ',
  'OnFailRedirectTo': 'minim',
  'HideLeftBar': true,
  'HideRightBar': true,
  'HideTopMenu': false,
  'SmartCategories': -88149128,
  'SmartCategoriesSearchKeyword': 'laborum officia',
  'SmartCategoriesLinkTarget': 'incididunt eiusmod ',
  'TemplateProductPage': -3376213,
  'ProductColumnsRelatedProducts': 84148240,
  'ProductColumnsUpsellProducts': 9573080,
  'DisplayTypeRelatedItems': 95433922,
  'DisplayTypeUpsellItems': -24609856,
  'OptionSetList': [
    {
      'OptionSetID': -61902981,
      'OptionSetName': 'fugiat',
      'OptionSorting': -1292591.7864389867,
      'OptionRequired': true,
      'OptionType': 'mo',
      'OptionURL': 'ipsum ut voluptate',
      'OptionAdditionalInformation': 'officia pariatur velit eiusmod ullamco',
      'OptionSizeLimit': 87628114,
      'OptionList': [
        {
          'OptionID': 11480194,
          'OptionName': 'ad Lorem',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': -48016879.41722226,
          'OptionPartNumber': 'pariatur reprehenderit tempor ad',
          'OptionSorting': -64312345.4802585,
          'OptionImagePath': 'laborum deserunt',
          'OptionBundleCatalogId': -76645580,
          'OptionBundleQuantity': 86468048
        },
        {
          'OptionID': 8861248,
          'OptionName': 'ad adipisicing',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': -57687975.04047156,
          'OptionPartNumber': 'fugiat ex',
          'OptionSorting': -62179365.28394232,
          'OptionImagePath': 'esse elit nostrud enim eu',
          'OptionBundleCatalogId': -86423189,
          'OptionBundleQuantity': -78764220
        }
      ]
    },
    {
      'OptionSetID': 23891114,
      'OptionSetName': 'aute',
      'OptionSorting': 37821766.63776654,
      'OptionRequired': false,
      'OptionType': 'Lo',
      'OptionURL': 'amet ea non',
      'OptionAdditionalInformation': 'dolore',
      'OptionSizeLimit': 77367386,
      'OptionList': [
        {
          'OptionID': 50141412,
          'OptionName': 'sit in cupidatat et',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': -12360782.211385548,
          'OptionPartNumber': 'commodo',
          'OptionSorting': 15546518.396177739,
          'OptionImagePath': 'laboris anim laborum',
          'OptionBundleCatalogId': 33874973,
          'OptionBundleQuantity': -3418620
        },
        {
          'OptionID': 26389454,
          'OptionName': 'adipisicing tempor ut irure quis',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': 67157952.88318315,
          'OptionPartNumber': 'nulla cu',
          'OptionSorting': 29150772.753243536,
          'OptionImagePath': 'aute sed laboris',
          'OptionBundleCatalogId': 98032983,
          'OptionBundleQuantity': 73331717
        },
        {
          'OptionID': -15583349,
          'OptionName': 'voluptate aute ex in',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 13691939.410343498,
          'OptionPartNumber': 'Excepteur sit veniam ex',
          'OptionSorting': 11873942.539606601,
          'OptionImagePath': 'Lorem',
          'OptionBundleCatalogId': -16396892,
          'OptionBundleQuantity': -90964417
        }
      ]
    }
  ],
  'Title': 'laboris',
  'CustomFileName': 'Excepteur est nisi nulla tempor',
  'MetaTags': 'ipsum ullamco labore sed',
  'CategoryHeader': 'consequat veniam ullamco nisi',
  'CategoryFooter': 'consectetur deserunt et',
  'AdditionalKeywords': 'incididunt',
  'CategoryExternalIdsList': [
    {
      'ID': -86097882,
      'CategoryID': -9938274,
      'ExternalId1': 'labore occaecat amet laboris',
      'ExternalIdType': 'non velit pariatur Lorem'
    },
    {
      'ID': 68936496,
      'CategoryID': -24351766,
      'ExternalId1': 'elit',
      'ExternalIdType': 'fugiat irure incididunt'
    }
  ]
};

request.send(JSON.stringify(body));

}

function retrieveCategories()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories?limit=&offset=&category=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function retrieveCategoryById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function updateMultipleCAtegories()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'CategoryID': 20568772,
    'CategoryName': 'nostrud officia laboris commodo sit',
    'Link': 'sunt velit',
    'CategoryDescription': 'adipisicing commodo incididunt eu irure',
    'CategoryIcon': 'commodo dolor irure',
    'CategoryMain': true,
    'CategoryParent': -40250046,
    'Sorting': -4347994,
    'Hide': true,
    'UserID': 'laborum reprehenderit minim',
    'LastUpdate': '1977-03-25T23:14:41.941Z',
    'CategoryMenuGroup': 67688871,
    'HomeSpecialCategory': false,
    'FilterCategory': true,
    'TemplateCategoryPage': 8611143,
    'DefaultProductsSorting': 10991548,
    'SubcategoryColumnsCategorySpecials': -10753710,
    'ProductColumnsCategorySpecials': -26970234,
    'ProductColumnsCategoryGeneralItems': 86802777,
    'ItemsPerPageCategorySpecialItems': 88544527,
    'ItemsPerPageCategoryGeneralItems': 24167595,
    'DisplayTypeCategorySpecialItems': -32263812,
    'DisplayTypeCategoryGeneralProducts': 47126883,
    'AllowAccess': 'ut velit aliquip sint ea',
    'OnFailRedirectTo': 'et sed',
    'HideLeftBar': false,
    'HideRightBar': false,
    'HideTopMenu': false,
    'SmartCategories': -55392261,
    'SmartCategoriesSearchKeyword': 'et do ut quis',
    'SmartCategoriesLinkTarget': 'do veniam labor',
    'TemplateProductPage': 11334197,
    'ProductColumnsRelatedProducts': 17546575,
    'ProductColumnsUpsellProducts': 70149168,
    'DisplayTypeRelatedItems': -88273472,
    'DisplayTypeUpsellItems': 34052311,
    'OptionSetList': [
      {
        'OptionSetID': -75731084,
        'OptionSetName': 'voluptate sed quis et',
        'OptionSorting': -96539508.41777772,
        'OptionRequired': true,
        'OptionType': '',
        'OptionURL': 'do amet',
        'OptionAdditionalInformation': 'occaecat',
        'OptionSizeLimit': 5672833,
        'OptionList': [
          {
            'OptionID': -75887427,
            'OptionName': 'labore deserunt laborum Duis',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': -59937182.77688549,
            'OptionPartNumber': 'eiusmod ad nostrud labore cupidatat',
            'OptionSorting': 86071948.6004144,
            'OptionImagePath': 'pariatur Excepteur',
            'OptionBundleCatalogId': -60711731,
            'OptionBundleQuantity': 30673284
          }
        ]
      },
      {
        'OptionSetID': -31955416,
        'OptionSetName': 'quis eiusmod',
        'OptionSorting': -66348953.76952237,
        'OptionRequired': false,
        'OptionType': 'aliquip i',
        'OptionURL': 'elit do',
        'OptionAdditionalInformation': 'sit pariatur',
        'OptionSizeLimit': -41589887,
        'OptionList': [
          {
            'OptionID': 25015635,
            'OptionName': 'dolore ut nulla',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -33072882.332152046,
            'OptionPartNumber': 'commodo ut',
            'OptionSorting': 90530102.89804876,
            'OptionImagePath': 'deserunt ullamco aute',
            'OptionBundleCatalogId': -89959324,
            'OptionBundleQuantity': -22023584
          },
          {
            'OptionID': 97324761,
            'OptionName': 'ex voluptate pariatur elit',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 72722283.53238845,
            'OptionPartNumber': 'ad tempor',
            'OptionSorting': 23016543.367841795,
            'OptionImagePath': 'ad cupidatat eiusmod aute',
            'OptionBundleCatalogId': -69043452,
            'OptionBundleQuantity': 43822225
          }
        ]
      }
    ],
    'Title': 'in cupidatat fugiat',
    'CustomFileName': 'Excepteur Lorem ut officia',
    'MetaTags': 'officia ullamco sit ut',
    'CategoryHeader': 'sunt labore in aliquip dolore',
    'CategoryFooter': 'culpa id reprehenderit in',
    'AdditionalKeywords': 'cillum culpa',
    'CategoryExternalIdsList': [
      {
        'ID': 67730448,
        'CategoryID': -16074942,
        'ExternalId1': 'et commodo',
        'ExternalIdType': 'laboris ut ea proident id'
      },
      {
        'ID': 27537116,
        'CategoryID': -51137858,
        'ExternalId1': 'est in mollit enim',
        'ExternalIdType': 'consectetur Ut'
      },
      {
        'ID': -85502322,
        'CategoryID': -60783293,
        'ExternalId1': 'eu pariatur',
        'ExternalIdType': 'mollit incididunt'
      }
    ]
  },
  {
    'CategoryID': -38231792,
    'CategoryName': 'mollit dolore dolor labore',
    'Link': 'nostrud pariatur',
    'CategoryDescription': 'non fugiat magna n',
    'CategoryIcon': 'ut',
    'CategoryMain': false,
    'CategoryParent': 22678387,
    'Sorting': 26006029,
    'Hide': true,
    'UserID': 'labore f',
    'LastUpdate': '1993-03-12T03:37:23.828Z',
    'CategoryMenuGroup': 39662559,
    'HomeSpecialCategory': false,
    'FilterCategory': true,
    'TemplateCategoryPage': 17571355,
    'DefaultProductsSorting': 8628776,
    'SubcategoryColumnsCategorySpecials': 61765045,
    'ProductColumnsCategorySpecials': 2901356,
    'ProductColumnsCategoryGeneralItems': 65491452,
    'ItemsPerPageCategorySpecialItems': 44148399,
    'ItemsPerPageCategoryGeneralItems': 74711849,
    'DisplayTypeCategorySpecialItems': -80748538,
    'DisplayTypeCategoryGeneralProducts': 7803513,
    'AllowAccess': 'cillum laborum minim',
    'OnFailRedirectTo': 'ad dolore',
    'HideLeftBar': false,
    'HideRightBar': false,
    'HideTopMenu': false,
    'SmartCategories': -31939948,
    'SmartCategoriesSearchKeyword': 'dolor officia laborum',
    'SmartCategoriesLinkTarget': 'magna adipisicing id',
    'TemplateProductPage': -77171173,
    'ProductColumnsRelatedProducts': 7898074,
    'ProductColumnsUpsellProducts': 28531767,
    'DisplayTypeRelatedItems': -4169152,
    'DisplayTypeUpsellItems': 88298725,
    'OptionSetList': [
      {
        'OptionSetID': 74837456,
        'OptionSetName': 'labore dolor exercitation',
        'OptionSorting': 48091622.23854077,
        'OptionRequired': false,
        'OptionType': 'nostr',
        'OptionURL': 'quis non dolor',
        'OptionAdditionalInformation': 'aute laborum reprehenderit',
        'OptionSizeLimit': 72129784,
        'OptionList': [
          {
            'OptionID': 60722654,
            'OptionName': 'dolor ni',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -67262445.84641537,
            'OptionPartNumber': 'sint consectetur consequat ',
            'OptionSorting': 99928287.40942946,
            'OptionImagePath': 'ea',
            'OptionBundleCatalogId': 73879382,
            'OptionBundleQuantity': -7396796
          },
          {
            'OptionID': 83228897,
            'OptionName': 'non et tempor elit',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': -7083094.560462117,
            'OptionPartNumber': 'officia irure null',
            'OptionSorting': -80081827.88170063,
            'OptionImagePath': 'non',
            'OptionBundleCatalogId': -59869594,
            'OptionBundleQuantity': 9703570
          },
          {
            'OptionID': -92350055,
            'OptionName': 'nisi pariatur',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -90332628.25495316,
            'OptionPartNumber': 'tempor Duis aliquip eiusmod',
            'OptionSorting': -62219206.823874585,
            'OptionImagePath': 'nostrud',
            'OptionBundleCatalogId': -51145970,
            'OptionBundleQuantity': 96302810
          }
        ]
      },
      {
        'OptionSetID': 46761863,
        'OptionSetName': 'nisi incididunt',
        'OptionSorting': -70396605.13459216,
        'OptionRequired': true,
        'OptionType': 'consequ',
        'OptionURL': 'occaecat laborum exercitation',
        'OptionAdditionalInformation': 'Ut ipsum',
        'OptionSizeLimit': -602532,
        'OptionList': [
          {
            'OptionID': 31182779,
            'OptionName': 'anim tempor amet eiusmod reprehenderit',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': -56774730.08607312,
            'OptionPartNumber': 'Duis sunt dolor irure dolor',
            'OptionSorting': 91280165.61374578,
            'OptionImagePath': 'incididunt',
            'OptionBundleCatalogId': -47920121,
            'OptionBundleQuantity': -79760433
          },
          {
            'OptionID': 72655906,
            'OptionName': 'ipsum enim',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 47679301.041104525,
            'OptionPartNumber': 'laboris officia ',
            'OptionSorting': -25101021.47573021,
            'OptionImagePath': 'enim magna elit qui veniam',
            'OptionBundleCatalogId': -19385029,
            'OptionBundleQuantity': -5099530
          }
        ]
      },
      {
        'OptionSetID': -45541705,
        'OptionSetName': 'ut commodo',
        'OptionSorting': 59545650.19917911,
        'OptionRequired': true,
        'OptionType': 'qu',
        'OptionURL': 'occaecat nostrud sunt incididunt',
        'OptionAdditionalInformation': 'quis aliqua cupidatat nostrud',
        'OptionSizeLimit': -84707790,
        'OptionList': [
          {
            'OptionID': -42423158,
            'OptionName': 'Lorem tempor elit labore',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 41695245.98499611,
            'OptionPartNumber': 'laborum Duis velit et',
            'OptionSorting': -25473139.41574055,
            'OptionImagePath': 'pariatur',
            'OptionBundleCatalogId': 68685275,
            'OptionBundleQuantity': -45761768
          },
          {
            'OptionID': -80021263,
            'OptionName': 'dolore eu tempor occaecat',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 65276237.620652765,
            'OptionPartNumber': 'in consequat non eiusm',
            'OptionSorting': -67075692.390820764,
            'OptionImagePath': 'eiusmod in irure',
            'OptionBundleCatalogId': -31815606,
            'OptionBundleQuantity': -30526227
          },
          {
            'OptionID': 30644454,
            'OptionName': 'ut quis esse',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 91381760.92553037,
            'OptionPartNumber': 'sunt Ut et anim',
            'OptionSorting': -14140415.486470565,
            'OptionImagePath': 'consequat anim reprehenderit id non',
            'OptionBundleCatalogId': 71435497,
            'OptionBundleQuantity': 92049760
          }
        ]
      },
      {
        'OptionSetID': -26151559,
        'OptionSetName': 'et Ut ullamco esse nulla',
        'OptionSorting': -17582981.37645018,
        'OptionRequired': true,
        'OptionType': 'sunt',
        'OptionURL': 'velit anim et',
        'OptionAdditionalInformation': 'elit laborum ad',
        'OptionSizeLimit': -67079179,
        'OptionList': [
          {
            'OptionID': -3143279,
            'OptionName': 'cupidatat nostrud incididunt',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 1738681.0807540417,
            'OptionPartNumber': 'incididunt proident',
            'OptionSorting': 40740370.32994321,
            'OptionImagePath': 'aute in aliqua in',
            'OptionBundleCatalogId': 45223386,
            'OptionBundleQuantity': 2530208
          },
          {
            'OptionID': -42300898,
            'OptionName': 'aliqua sint tempor',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -25188059.688181758,
            'OptionPartNumber': 'veniam velit dolor et',
            'OptionSorting': -98699714.38869634,
            'OptionImagePath': 'sed proident pariatur',
            'OptionBundleCatalogId': 74974750,
            'OptionBundleQuantity': -60848785
          },
          {
            'OptionID': -89184301,
            'OptionName': 'sunt est',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 27388935.985263303,
            'OptionPartNumber': 'aute in',
            'OptionSorting': -27452174.924212262,
            'OptionImagePath': 'esse officia Duis incididunt',
            'OptionBundleCatalogId': 54716178,
            'OptionBundleQuantity': 63860042
          }
        ]
      },
      {
        'OptionSetID': -12791947,
        'OptionSetName': 'do minim',
        'OptionSorting': 18885884.753000945,
        'OptionRequired': true,
        'OptionType': 'ut sint p',
        'OptionURL': 'sint consequat',
        'OptionAdditionalInformation': 'cupidatat velit',
        'OptionSizeLimit': -22184438,
        'OptionList': [
          {
            'OptionID': 21064730,
            'OptionName': 'voluptate cupidatat reprehenderit aute proident',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 77350367.07517052,
            'OptionPartNumber': 'laborum dolore',
            'OptionSorting': -34955118.2123907,
            'OptionImagePath': 'labore id adipisicing',
            'OptionBundleCatalogId': 21992519,
            'OptionBundleQuantity': -84122959
          },
          {
            'OptionID': 74872942,
            'OptionName': 'incididunt in fugiat',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 42897099.61011207,
            'OptionPartNumber': 'pariatur esse dolore do',
            'OptionSorting': 5766181.224910393,
            'OptionImagePath': 'mollit ',
            'OptionBundleCatalogId': -29015869,
            'OptionBundleQuantity': -83486689
          },
          {
            'OptionID': -71714227,
            'OptionName': 'aliqua dolore Ut non',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 62015711.11286688,
            'OptionPartNumber': 'commodo dolor fugiat eu',
            'OptionSorting': 68522351.24806389,
            'OptionImagePath': 'adipisicing sed dolor',
            'OptionBundleCatalogId': 97557516,
            'OptionBundleQuantity': -43039536
          },
          {
            'OptionID': -67195843,
            'OptionName': 'elit cillum in incididunt reprehenderit',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -8456211.184706047,
            'OptionPartNumber': 'sed qui in dolore',
            'OptionSorting': 28988692.003649727,
            'OptionImagePath': 'incididunt minim',
            'OptionBundleCatalogId': -13553697,
            'OptionBundleQuantity': -49906785
          }
        ]
      }
    ],
    'Title': 'minim cupidatat ipsum nisi',
    'CustomFileName': 'ut deserunt',
    'MetaTags': 'nulla ut culpa',
    'CategoryHeader': 'cillum',
    'CategoryFooter': 'consectetur nulla do sunt',
    'AdditionalKeywords': 'ex esse cupidatat',
    'CategoryExternalIdsList': [
      {
        'ID': -48905284,
        'CategoryID': 65508538,
        'ExternalId1': 'ea',
        'ExternalIdType': 'ut cupidatat'
      }
    ]
  },
  {
    'CategoryID': 3242417,
    'CategoryName': 'nostrud officia nisi',
    'Link': 'Lorem minim fugiat',
    'CategoryDescription': 'consectetur laborum amet sed',
    'CategoryIcon': 'dolore voluptate cupidatat in',
    'CategoryMain': false,
    'CategoryParent': 17984540,
    'Sorting': 5752348,
    'Hide': true,
    'UserID': 'sint elit Ut',
    'LastUpdate': '1993-09-25T05:44:37.159Z',
    'CategoryMenuGroup': 84461561,
    'HomeSpecialCategory': true,
    'FilterCategory': false,
    'TemplateCategoryPage': -13141093,
    'DefaultProductsSorting': -49122385,
    'SubcategoryColumnsCategorySpecials': 21172699,
    'ProductColumnsCategorySpecials': 3672582,
    'ProductColumnsCategoryGeneralItems': -93345850,
    'ItemsPerPageCategorySpecialItems': 24775260,
    'ItemsPerPageCategoryGeneralItems': -46950751,
    'DisplayTypeCategorySpecialItems': -32369927,
    'DisplayTypeCategoryGeneralProducts': 1183740,
    'AllowAccess': 'labore esse mollit tempor',
    'OnFailRedirectTo': 'do Lorem dolore nulla',
    'HideLeftBar': true,
    'HideRightBar': true,
    'HideTopMenu': false,
    'SmartCategories': 63407332,
    'SmartCategoriesSearchKeyword': 'eu velit',
    'SmartCategoriesLinkTarget': 'anim ',
    'TemplateProductPage': 18547652,
    'ProductColumnsRelatedProducts': -91453517,
    'ProductColumnsUpsellProducts': 87697311,
    'DisplayTypeRelatedItems': 36829773,
    'DisplayTypeUpsellItems': -39874858,
    'OptionSetList': [
      {
        'OptionSetID': 6657161,
        'OptionSetName': 'n',
        'OptionSorting': 58223432.29291743,
        'OptionRequired': false,
        'OptionType': 'si',
        'OptionURL': 'Ut dolore amet',
        'OptionAdditionalInformation': 'nulla in',
        'OptionSizeLimit': 9281594,
        'OptionList': [
          {
            'OptionID': -21999234,
            'OptionName': 'ipsum esse tempor quis in',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -94257794.26250757,
            'OptionPartNumber': 'velit consectetur dolor elit aut',
            'OptionSorting': -47884164.807351135,
            'OptionImagePath': 'in pariatur',
            'OptionBundleCatalogId': -59682969,
            'OptionBundleQuantity': 39968379
          },
          {
            'OptionID': -41599054,
            'OptionName': 'Excepteur in',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 88460500.03025067,
            'OptionPartNumber': 'ex',
            'OptionSorting': -60799611.630514994,
            'OptionImagePath': 'Ut labore consequat Excepteur pariatur',
            'OptionBundleCatalogId': 26044585,
            'OptionBundleQuantity': -61396903
          }
        ]
      },
      {
        'OptionSetID': -2612978,
        'OptionSetName': 'elit sunt deserunt aliquip ea',
        'OptionSorting': -75889360.33887927,
        'OptionRequired': true,
        'OptionType': 'id Exce',
        'OptionURL': 'qui',
        'OptionAdditionalInformation': 'tem',
        'OptionSizeLimit': 75732732,
        'OptionList': [
          {
            'OptionID': 13353699,
            'OptionName': 'officia incididunt nisi',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 34447909.855547994,
            'OptionPartNumber': 'velit veniam',
            'OptionSorting': 78162270.74954227,
            'OptionImagePath': 'in c',
            'OptionBundleCatalogId': -71651929,
            'OptionBundleQuantity': 51939266
          },
          {
            'OptionID': 53356018,
            'OptionName': 'cillum officia eiusmod',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 18957100.081903234,
            'OptionPartNumber': 'ea et',
            'OptionSorting': -47754403.98882509,
            'OptionImagePath': 'anim labore ut',
            'OptionBundleCatalogId': -25170081,
            'OptionBundleQuantity': 39947065
          },
          {
            'OptionID': -51797199,
            'OptionName': 'consectetur mollit dolore',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': -65184861.41719211,
            'OptionPartNumber': 'ut labore amet culpa',
            'OptionSorting': -47972148.37624497,
            'OptionImagePath': 'non nostrud ipsum',
            'OptionBundleCatalogId': 60457392,
            'OptionBundleQuantity': -93173967
          },
          {
            'OptionID': -22995896,
            'OptionName': 'pariatur Excepteur',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': -7901532.5541561395,
            'OptionPartNumber': 'voluptate dolore sunt',
            'OptionSorting': -69735210.66052553,
            'OptionImagePath': 'labore fugiat',
            'OptionBundleCatalogId': 88728383,
            'OptionBundleQuantity': -38887245
          },
          {
            'OptionID': 96907822,
            'OptionName': 'do laborum',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -39720514.71177855,
            'OptionPartNumber': 'eiusmod ipsum dolor aute esse',
            'OptionSorting': 73978711.2845327,
            'OptionImagePath': 'ad enim esse',
            'OptionBundleCatalogId': 84775025,
            'OptionBundleQuantity': -38487117
          }
        ]
      },
      {
        'OptionSetID': -10277117,
        'OptionSetName': 'nulla ea ad aliquip Ut',
        'OptionSorting': 57219273.85353941,
        'OptionRequired': false,
        'OptionType': 'ni',
        'OptionURL': 'sint',
        'OptionAdditionalInformation': 'nisi Lorem fugiat',
        'OptionSizeLimit': 32849644,
        'OptionList': [
          {
            'OptionID': -253227,
            'OptionName': 'labore cillum cupidatat',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 83843550.03509429,
            'OptionPartNumber': 'Excepteur e',
            'OptionSorting': -65213580.39029486,
            'OptionImagePath': 'cupidatat',
            'OptionBundleCatalogId': -25499690,
            'OptionBundleQuantity': 23387213
          },
          {
            'OptionID': 98496861,
            'OptionName': 'in ullamco',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -58826484.70863989,
            'OptionPartNumber': 'consectetur nostrud do',
            'OptionSorting': -88084823.3866431,
            'OptionImagePath': 'dolor mollit dolore',
            'OptionBundleCatalogId': -71423397,
            'OptionBundleQuantity': -13269372
          },
          {
            'OptionID': -68930299,
            'OptionName': 'ut pariatur Duis',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -42229190.09528532,
            'OptionPartNumber': 'Lorem minim in',
            'OptionSorting': -18335575.258460328,
            'OptionImagePath': 'voluptate elit ea nostrud anim',
            'OptionBundleCatalogId': 22487598,
            'OptionBundleQuantity': 61337346
          },
          {
            'OptionID': 12064789,
            'OptionName': 'mollit in',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 44082106.65290761,
            'OptionPartNumber': 'aute cillum consequat',
            'OptionSorting': -72382902.38076086,
            'OptionImagePath': 'Excepteur',
            'OptionBundleCatalogId': 54785887,
            'OptionBundleQuantity': 66991923
          }
        ]
      }
    ],
    'Title': 'occaecat laborum Excepteur ut',
    'CustomFileName': 'in minim',
    'MetaTags': 'tempor fugiat laborum nulla in',
    'CategoryHeader': 'voluptate reprehenderit',
    'CategoryFooter': 'ad in',
    'AdditionalKeywords': 'qui sed sit',
    'CategoryExternalIdsList': [
      {
        'ID': 21740349,
        'CategoryID': -93114626,
        'ExternalId1': 'aliquip non deserunt reprehenderit',
        'ExternalIdType': 'in amet pariatur exercitation dolor'
      },
      {
        'ID': 65972065,
        'CategoryID': -88569652,
        'ExternalId1': 'ipsum ad nostrud mollit',
        'ExternalIdType': 'ullamco Duis exercitation'
      },
      {
        'ID': -64571079,
        'CategoryID': 21800531,
        'ExternalId1': 'Excepteur incididunt dolore ullamco',
        'ExternalIdType': ''
      }
    ]
  }
];

request.send(JSON.stringify(body));

}

function updateCategory()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories/{categoryid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CategoryID': 69175899,
  'CategoryName': 'ut qui',
  'Link': 'sed adipisicing esse',
  'CategoryDescription': 'aliqua dolore id adipisicing',
  'CategoryIcon': 'ea culpa voluptate dolor minim',
  'CategoryMain': true,
  'CategoryParent': -27199819,
  'Sorting': -53529014,
  'Hide': false,
  'UserID': 'Ut i',
  'LastUpdate': '1990-10-01T11:44:56.624Z',
  'CategoryMenuGroup': -31505679,
  'HomeSpecialCategory': false,
  'FilterCategory': true,
  'TemplateCategoryPage': 77953865,
  'DefaultProductsSorting': 35723360,
  'SubcategoryColumnsCategorySpecials': 87180518,
  'ProductColumnsCategorySpecials': -14365567,
  'ProductColumnsCategoryGeneralItems': 27200238,
  'ItemsPerPageCategorySpecialItems': 5936891,
  'ItemsPerPageCategoryGeneralItems': -79854373,
  'DisplayTypeCategorySpecialItems': 30267588,
  'DisplayTypeCategoryGeneralProducts': -22059936,
  'AllowAccess': 'sed pariatur cupidatat',
  'OnFailRedirectTo': 'ipsum ut quis Ut',
  'HideLeftBar': true,
  'HideRightBar': true,
  'HideTopMenu': false,
  'SmartCategories': 66738734,
  'SmartCategoriesSearchKeyword': 'ullamco mollit cupidatat Duis',
  'SmartCategoriesLinkTarget': 'sint ut id',
  'TemplateProductPage': 2009477,
  'ProductColumnsRelatedProducts': -96301429,
  'ProductColumnsUpsellProducts': 12334877,
  'DisplayTypeRelatedItems': 77617180,
  'DisplayTypeUpsellItems': -45598650,
  'OptionSetList': [
    {
      'OptionSetID': 70088967,
      'OptionSetName': 'mollit quis',
      'OptionSorting': 11749573.000524908,
      'OptionRequired': true,
      'OptionType': 'a',
      'OptionURL': 'labore tempor ea',
      'OptionAdditionalInformation': 'cillum Excepteur in dolor',
      'OptionSizeLimit': 50613888,
      'OptionList': [
        {
          'OptionID': -97494152,
          'OptionName': 'pariatur voluptate irure officia',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': 88859978.17521805,
          'OptionPartNumber': 's',
          'OptionSorting': -84965145.30915457,
          'OptionImagePath': 'aliquip off',
          'OptionBundleCatalogId': 3078766,
          'OptionBundleQuantity': 40969279
        },
        {
          'OptionID': 23476575,
          'OptionName': 'voluptate su',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': -49265243.95810627,
          'OptionPartNumber': 'esse nisi ut eiusmod',
          'OptionSorting': 47327456.09600505,
          'OptionImagePath': 'consequat veniam in cupidatat in',
          'OptionBundleCatalogId': -37926045,
          'OptionBundleQuantity': -31843513
        }
      ]
    }
  ],
  'Title': 'sunt laboris',
  'CustomFileName': 'sit sunt amet cupidat',
  'MetaTags': 'sed irure laboris',
  'CategoryHeader': 'cupidatat nostrud ad',
  'CategoryFooter': 'qui proident magna elit',
  'AdditionalKeywords': 'anim dolore cillum consequat',
  'CategoryExternalIdsList': [
    {
      'ID': 45485065,
      'CategoryID': 88550296,
      'ExternalId1': 'dolore fugiat in quis',
      'ExternalIdType': 'sit aliquip'
    },
    {
      'ID': -17542385,
      'CategoryID': -20301673,
      'ExternalId1': 'sint fugiat non pariatur',
      'ExternalIdType': 'ad iru'
    },
    {
      'ID': -35489151,
      'CategoryID': 74393641,
      'ExternalId1': 'pariatur incididunt',
      'ExternalIdType': 'cupidatat'
    }
  ]
};

request.send(JSON.stringify(body));

}

function deleteCategory()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories/{id}');

request.setRequestHeader('Content-Type', 'application/xml');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function createCategoryOption()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories/{categoryid}/Options');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'OptionSetID': 73113723,
  'OptionSetName': 'sit exercitation ad',
  'OptionSorting': 22347082.95848131,
  'OptionRequired': true,
  'OptionType': 'minim ',
  'OptionURL': 'in occaecat qui cillum',
  'OptionAdditionalInformation': 'dolore irure in mollit',
  'OptionSizeLimit': 99512271,
  'OptionList': [
    {
      'OptionID': -59575190,
      'OptionName': 'officia Duis dolor voluptate',
      'OptionSelected': false,
      'OptionHide': true,
      'OptionValue': -59637210.79346147,
      'OptionPartNumber': 'fugiat ut pariatur in',
      'OptionSorting': 45216077.64446229,
      'OptionImagePath': 'adipisicing aute minim culpa',
      'OptionBundleCatalogId': -22107103,
      'OptionBundleQuantity': -63927394
    },
    {
      'OptionID': 44949924,
      'OptionName': 'anim eu',
      'OptionSelected': true,
      'OptionHide': true,
      'OptionValue': -64439189.47241176,
      'OptionPartNumber': 'aliquip sed',
      'OptionSorting': 41958648.282512635,
      'OptionImagePath': 'veniam non esse cupidatat ',
      'OptionBundleCatalogId': 26161628,
      'OptionBundleQuantity': -48029905
    },
    {
      'OptionID': 39880683,
      'OptionName': 'occaecat',
      'OptionSelected': true,
      'OptionHide': true,
      'OptionValue': -92148641.80505575,
      'OptionPartNumber': 'pariatur elit Lorem est ut',
      'OptionSorting': 1191256.1264771223,
      'OptionImagePath': 'sed veniam aute',
      'OptionBundleCatalogId': -30369440,
      'OptionBundleQuantity': -43304317
    }
  ]
};

request.send(JSON.stringify(body));

}

function retrieveCAtegoryOptions()
{
	
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories/{categoryid}/Options?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function updateCategoryptions()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories/{categoryid}/Options');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'OptionSetID': 91548643,
    'OptionSetName': 'Lorem eiusmod laboris et esse',
    'OptionSorting': 14555651.326110512,
    'OptionRequired': false,
    'OptionType': 'labore',
    'OptionURL': 'aliquip enim dolore est',
    'OptionAdditionalInformation': 'ea culpa mollit nulla consectetur',
    'OptionSizeLimit': -48558338,
    'OptionList': [
      {
        'OptionID': -30534891,
        'OptionName': 'voluptate',
        'OptionSelected': false,
        'OptionHide': true,
        'OptionValue': 86260517.9542757,
        'OptionPartNumber': 'nostrud dolor',
        'OptionSorting': 79478325.41066417,
        'OptionImagePath': 'tempor non Ut',
        'OptionBundleCatalogId': 83503176,
        'OptionBundleQuantity': -29280347
      },
      {
        'OptionID': 16775821,
        'OptionName': 'voluptate dolore veniam eiusmod',
        'OptionSelected': true,
        'OptionHide': true,
        'OptionValue': 75184451.61101887,
        'OptionPartNumber': 'laborum ut',
        'OptionSorting': -95051816.13479583,
        'OptionImagePath': 'tempor aliquip',
        'OptionBundleCatalogId': -31296936,
        'OptionBundleQuantity': 82243354
      },
      {
        'OptionID': 73668208,
        'OptionName': 'magna in',
        'OptionSelected': false,
        'OptionHide': true,
        'OptionValue': -77152697.8440896,
        'OptionPartNumber': 'do et eiusmod',
        'OptionSorting': -19973662.292746395,
        'OptionImagePath': 'exercitation',
        'OptionBundleCatalogId': 73994702,
        'OptionBundleQuantity': 62181718
      },
      {
        'OptionID': 77391837,
        'OptionName': 'cillum sit',
        'OptionSelected': false,
        'OptionHide': false,
        'OptionValue': 86061702.87486088,
        'OptionPartNumber': 'sit',
        'OptionSorting': 63454382.71696508,
        'OptionImagePath': 'ut irure pariatur',
        'OptionBundleCatalogId': 82530302,
        'OptionBundleQuantity': -38396374
      }
    ]
  },
  {
    'OptionSetID': 69207447,
    'OptionSetName': 'in qui amet',
    'OptionSorting': 79952394.36658013,
    'OptionRequired': true,
    'OptionType': 'c',
    'OptionURL': 'irure adipisicing',
    'OptionAdditionalInformation': 'ut tempor',
    'OptionSizeLimit': -62258778,
    'OptionList': [
      {
        'OptionID': 89317837,
        'OptionName': 'exercitation Excepteur id',
        'OptionSelected': true,
        'OptionHide': true,
        'OptionValue': 43982727.49820933,
        'OptionPartNumber': 'esse est',
        'OptionSorting': -51448692.578659564,
        'OptionImagePath': 'esse mollit',
        'OptionBundleCatalogId': -83469410,
        'OptionBundleQuantity': 68849121
      }
    ]
  },
  {
    'OptionSetID': 9380065,
    'OptionSetName': 'est consectetur',
    'OptionSorting': 2741226.4664500505,
    'OptionRequired': true,
    'OptionType': 'minim',
    'OptionURL': 'tempor',
    'OptionAdditionalInformation': 'exercitation nulla dolore',
    'OptionSizeLimit': -59175847,
    'OptionList': [
      {
        'OptionID': 75328051,
        'OptionName': 'incididunt Duis',
        'OptionSelected': true,
        'OptionHide': false,
        'OptionValue': -45596444.99724955,
        'OptionPartNumber': 'enim sint deserunt mollit laborum',
        'OptionSorting': -54241323.48295547,
        'OptionImagePath': 'ut adipisicing Excepteur',
        'OptionBundleCatalogId': 3861929,
        'OptionBundleQuantity': -56992808
      }
    ]
  },
  {
    'OptionSetID': 49282889,
    'OptionSetName': 'fugiat velit',
    'OptionSorting': 13914628.45214124,
    'OptionRequired': false,
    'OptionType': 'cupidata',
    'OptionURL': 'magna incididunt Lorem minim',
    'OptionAdditionalInformation': 'dolor nisi enim in',
    'OptionSizeLimit': 16144803,
    'OptionList': [
      {
        'OptionID': 72893323,
        'OptionName': 'occaecat reprehenderit do',
        'OptionSelected': false,
        'OptionHide': true,
        'OptionValue': -65022294.546476014,
        'OptionPartNumber': 'et',
        'OptionSorting': -60222557.263801016,
        'OptionImagePath': 'sunt id',
        'OptionBundleCatalogId': -81847179,
        'OptionBundleQuantity': -55721851
      }
    ]
  }
];

request.send(JSON.stringify(body));

}

function updateSpecificCategoryOption()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories/{categoryid}/Options/{optionsetid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'OptionSetID': 61749609,
  'OptionSetName': 'in ut',
  'OptionSorting': 99748271.1512287,
  'OptionRequired': true,
  'OptionType': '',
  'OptionURL': 'labore do enim',
  'OptionAdditionalInformation': 'sit Ut',
  'OptionSizeLimit': -82871852,
  'OptionList': [
    {
      'OptionID': -18062579,
      'OptionName': 'minim do dolor',
      'OptionSelected': false,
      'OptionHide': false,
      'OptionValue': 46397503.16362211,
      'OptionPartNumber': 'fugiat a',
      'OptionSorting': 14203979.922338039,
      'OptionImagePath': 'sunt cillum',
      'OptionBundleCatalogId': 40637061,
      'OptionBundleQuantity': 47976905
    },
    {
      'OptionID': -16295391,
      'OptionName': 'nisi consequat nostrud irure minim',
      'OptionSelected': false,
      'OptionHide': true,
      'OptionValue': 24691945.605411723,
      'OptionPartNumber': 'dolor consequat sit anim et',
      'OptionSorting': 16855888.216545805,
      'OptionImagePath': 'dolore velit dolor',
      'OptionBundleCatalogId': -39243530,
      'OptionBundleQuantity': -28650322
    },
    {
      'OptionID': -7500509,
      'OptionName': 'reprehenderit esse Lorem',
      'OptionSelected': false,
      'OptionHide': false,
      'OptionValue': -88911676.58292814,
      'OptionPartNumber': '',
      'OptionSorting': 84212378.33072266,
      'OptionImagePath': 'ex tempor laboris',
      'OptionBundleCatalogId': -3108226,
      'OptionBundleQuantity': -30463137
    },
    {
      'OptionID': 17934010,
      'OptionName': 'nisi cupidatat aliqua',
      'OptionSelected': true,
      'OptionHide': true,
      'OptionValue': 16359264.555789024,
      'OptionPartNumber': 'laborum eu Duis molli',
      'OptionSorting': 42528932.61861771,
      'OptionImagePath': 'in et magna laboris',
      'OptionBundleCatalogId': -15747524,
      'OptionBundleQuantity': 74704082
    }
  ]
};

request.send(JSON.stringify(body));

}
function createCRMTicket()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CrmID': -96719196,
  'DateOpened': '1965-10-13T18:57:26.841Z',
  'DateLastAction': '1993-02-20T22:22:18.158Z',
  'Subject': 'aliquip culpa cupida',
  'DepartmentID': -45898072,
  'StatusID': 42907803,
  'CustomerName': 'nulla magna voluptate',
  'CustomerEmail': 'irure dolore nostrud',
  'CustomerPhone': 'reprehenderit irure velit',
  'CustomerIpAddress': 'nisi et eu',
  'OrderID': 62167845,
  'CustomerID': -1683604,
  'ProductId': -50664090,
  'CrmMessageList': [
    {
      'MessageId': -32067752,
      'DateCreated': '1960-01-03T09:31:12.907Z',
      'Message': 'eu aliquip',
      'Sender': -93057008,
      'SenderName': 'consectetur nulla in dolore',
      'SenderEmail': 'sed',
      'CustomerIPAddress': 'i',
      'CrmFileList': [
        {
          'FileId': -62732864,
          'FileName': 'deserunt',
          'DateCreated': '2013-12-25T04:30:44.996Z',
          'IsAdminUploaded': true
        },
        {
          'FileId': -42095705,
          'FileName': 'pariatur cupidatat veniam',
          'DateCreated': '2009-01-31T18:53:32.300Z',
          'IsAdminUploaded': true
        }
      ]
    },
    {
      'MessageId': -93125579,
      'DateCreated': '1961-10-19T22:27:33.227Z',
      'Message': 'mollit non culpa',
      'Sender': -59662916,
      'SenderName': 'tempor cillum elit sit',
      'SenderEmail': 'laboris do ut pariatur irure',
      'CustomerIPAddress': 'ess',
      'CrmFileList': [
        {
          'FileId': 84436169,
          'FileName': 'non qui',
          'DateCreated': '2011-08-24T23:22:47.869Z',
          'IsAdminUploaded': true
        },
        {
          'FileId': 37915868,
          'FileName': 'ea',
          'DateCreated': '2011-01-11T09:38:41.670Z',
          'IsAdminUploaded': false
        },
        {
          'FileId': -82440936,
          'FileName': 'amet in tempor',
          'DateCreated': '1979-03-25T00:26:59.719Z',
          'IsAdminUploaded': true
        },
        {
          'FileId': 86997525,
          'FileName': 'cupidatat cillum sint pariatur',
          'DateCreated': '1967-03-14T19:24:16.226Z',
          'IsAdminUploaded': false
        }
      ]
    },
    {
      'MessageId': -74067042,
      'DateCreated': '1971-05-25T15:16:34.220Z',
      'Message': 'nisi qu',
      'Sender': 71647899,
      'SenderName': 'commodo ',
      'SenderEmail': 'Excepteur',
      'CustomerIPAddress': 'esse nul',
      'CrmFileList': [
        {
          'FileId': 35885510,
          'FileName': 'dolore eu anim',
          'DateCreated': '2004-06-13T10:12:11.684Z',
          'IsAdminUploaded': true
        },
        {
          'FileId': -21259561,
          'FileName': 'proident laboris Lorem sint',
          'DateCreated': '1970-06-20T08:27:33.721Z',
          'IsAdminUploaded': true
        }
      ]
    },
    {
      'MessageId': 44658796,
      'DateCreated': '1953-07-26T23:26:11.335Z',
      'Message': 'ea incididunt mollit id ut',
      'Sender': 723745,
      'SenderName': 'reprehenderit ut',
      'SenderEmail': 'Duis est consequat',
      'CustomerIPAddress': 'dolor venia',
      'CrmFileList': [
        {
          'FileId': -87569586,
          'FileName': 'veniam dolor',
          'DateCreated': '1948-07-13T05:06:01.141Z',
          'IsAdminUploaded': false
        },
        {
          'FileId': 6134085,
          'FileName': 'est proident in qui',
          'DateCreated': '1990-08-16T01:03:44.959Z',
          'IsAdminUploaded': false
        },
        {
          'FileId': 68599238,
          'FileName': 'eu',
          'DateCreated': '1985-05-13T22:17:33.553Z',
          'IsAdminUploaded': true
        }
      ]
    }
  ]
};

request.send(JSON.stringify(body));
}
function retrieveList of CRMTickets()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM?subject=&departmentid=&statusid=&openedstartdate=&openedenddate=&lastactionstartdate=&lastactionenddate=&customername=&customeremail=&customerphone=&customeripaddress=&orderid=&custid=&productid=&limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}

function retrieveCRMById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function updateSpecificCRMTicketById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/department/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'DepartmentId': -99961439,
  'Name': 'adipisicing nulla qui magna enim',
  'Visible': true
};

request.send(JSON.stringify(body));

}

function deleteCRMTicketById()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function createMessageinSpecificTicket()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/{id}/message');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'MessageId': 9725714,
  'DateCreated': '1991-05-24T03:47:48.232Z',
  'Message': 'commodo in sed',
  'Sender': 80134704,
  'SenderName': 'tempor',
  'SenderEmail': 'qui mollit',
  'CustomerIPAddress': 'dolore cupidata',
  'CrmFileList': [
    {
      'FileId': -43806323,
      'FileName': 'elit sed dolore cupidatat enim',
      'DateCreated': '2013-06-16T22:55:49.227Z',
      'IsAdminUploaded': false
    }
  ]
};

request.send(JSON.stringify(body));

}

function retrieveAllMessagesFromCRM()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/{crmid}/message?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function retrieveSpecificCRMMessage()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/{crmid}/message/{msgid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function deleteCRMMesage()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/{crmid}/message/{msgid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveListOfAllCRMDepartments()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/department?limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function updateSpecificCRMDepartmentById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/department/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'DepartmentId': -99961439,
  'Name': 'adipisicing nulla qui magna enim',
  'Visible': true
};

request.send(JSON.stringify(body));

}
function createSavedReply()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/savedreply');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'Id': -19067482,
  'Title': 'amet exercitation',
  'Message': 'nulla commodo Excepteur'
};

request.send(JSON.stringify(body));
}

function retrieveAllSavedReplies()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/savedreply?title=&limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveSpecificReplyById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/savedreply/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function updateSpecificSavedReply()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/savedreply/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'Id': 42533140,
  'Title': 'eu mollit cup',
  'Message': 'dolore est dolor'
};

request.send(JSON.stringify(body));

}
function deleteSavedReply()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/savedreply/{id}');

request.setRequestHeader('Content-Type', 'application/xml');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveAllCRMStatus()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/status?limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveSpecificStatusById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/status/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'Id': 51620653,
  'StatusId': 21695314,
  'StatusName': 'sunt ea Excepteur'
};

request.send(JSON.stringify(body));
}
function updateSpecificCRMStatusById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CRM/status/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'Id': 51620653,
  'StatusId': 21695314,
  'StatusName': 'sunt ea Excepteur'
};

request.send(JSON.stringify(body));

}
function createNewCustomerGroup()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CustomerGroups');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CustomerGroupID': -75462011,
  'Name': 'Excepteur reprehenderit mollit',
  'Description': 'aliquip exer',
  'MinimumOrder': 34158822.957761675,
  'NonTaxable': true,
  'AllowRegistration': false,
  'DisableRewardPoints': true,
  'AutoApprove': false,
  'RegistrationMessage': 'aute enim commodo eiusmod',
  'PriceLevel': -48512740
};

request.send(JSON.stringify(body));
}
function allCustomerGroups()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CustomerGroups?limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function specificCustomerGroupById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CustomerGroups/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateCustomerGroups()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CustomerGroups');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'CustomerGroupID': -16732397,
    'Name': 'dolore cupidatat adipisicing',
    'Description': 'Lorem laboris',
    'MinimumOrder': 2159148.3678348362,
    'NonTaxable': true,
    'AllowRegistration': false,
    'DisableRewardPoints': false,
    'AutoApprove': false,
    'RegistrationMessage': 'aliquip deserunt fugiat ad',
    'PriceLevel': 2897868
  },
  {
    'CustomerGroupID': -60342449,
    'Name': 'enim adipisicing ut ea',
    'Description': 'esse ullamco consectetur',
    'MinimumOrder': -94982155.70143786,
    'NonTaxable': false,
    'AllowRegistration': false,
    'DisableRewardPoints': true,
    'AutoApprove': true,
    'RegistrationMessage': 'sint consequat qui',
    'PriceLevel': -70139602
  },
  {
    'CustomerGroupID': -85007591,
    'Name': 'aute qui occae',
    'Description': 'et magna est aliqua',
    'MinimumOrder': -9184586.049891546,
    'NonTaxable': false,
    'AllowRegistration': false,
    'DisableRewardPoints': false,
    'AutoApprove': true,
    'RegistrationMessage': 'enim esse laboris',
    'PriceLevel': -77983017
  }
];

request.send(JSON.stringify(body));

}

function updateCustomerGroupById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CustomerGroups/{customergroupid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CustomerGroupID': -91220762,
  'Name': 'veniam',
  'Description': 'labore a',
  'MinimumOrder': 94622207.44286153,
  'NonTaxable': true,
  'AllowRegistration': true,
  'DisableRewardPoints': false,
  'AutoApprove': true,
  'RegistrationMessage': 'labore u',
  'PriceLevel': -9304683
};

request.send(JSON.stringify(body));

}

function deleteCustomerGroupById()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CustomerGroups/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createCustomer()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Customers');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CustomerID': 96318450,
  'Email': 'laborum velit aliquip',
  'Password': '',
  'BillingCompany': 'dolore amet cillum',
  'BillingFirstName': 'officia veniam',
  'BillingLastName': 'in nulla tempor',
  'BillingAddress1': 'aliqua sunt adipisicing mollit',
  'BillingAddress2': 'ullamco cill',
  'BillingCity': 'reprehenderit laboris ullamco ',
  'BillingState': 'aute tempor dolor',
  'BillingZipCode': 'es',
  'BillingCountry': 'cupidatat sint qui',
  'BillingPhoneNumber': 'esse fugiat',
  'BillingTaxID': 'proident',
  'ShippingCompany': 'ea in sunt aute',
  'ShippingFirstName': 'fugiat',
  'ShippingLastName': 'ad venia',
  'ShippingAddress1': 'esse sed',
  'ShippingAddress2': 'commodo moll',
  'ShippingCity': 'proident ipsum eiusmod cillum aute',
  'ShippingState': 'commodo aliquip',
  'ShippingZipCode': 'deseru',
  'ShippingCountry': 'ut mollit minim',
  'ShippingPhoneNumber': 'do n',
  'ShippingAddressType': -44788774,
  'CustomerGroupID': 50520008,
  'Enabled': true,
  'MailList': false,
  'NonTaxable': true,
  'DisableBillingSameAsShipping': true,
  'Comments': 'eu',
  'AdditionalField1': 'dolor sed adip',
  'AdditionalField2': 'laboris elit Lorem minim',
  'AdditionalField3': 'Duis ut enim eiusmod',
  'TotalStoreCredit': -15431326.976344898,
  'ResetPassword': true
};

request.send(JSON.stringify(body));

}
function retrieveCustomerListFromCustomerGroup()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/CustomerGroups/{id}/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function retrieveAllCustomers()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}

function retrieveCustomerById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Customers/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function updateListofCustomer()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Customers');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'CustomerID': 64338676,
    'Email': 'amet veniam nulla dolor',
    'Password': 'cupidata',
    'BillingCompany': 'Excepteu',
    'BillingFirstName': 'nisi Excepteur voluptate sunt qui',
    'BillingLastName': 'velit incididunt sunt cupidatat',
    'BillingAddress1': 'laboris nulla consectetur et ut',
    'BillingAddress2': 'es',
    'BillingCity': 'id in',
    'BillingState': 'esse in ullamco',
    'BillingZipCode': 'ut dolor',
    'BillingCountry': 'sed non proident et',
    'BillingPhoneNumber': 'aliqua magna',
    'BillingTaxID': 'eiusmod labore',
    'ShippingCompany': 'sint nostrud',
    'ShippingFirstName': 'aliquip Ut',
    'ShippingLastName': 'ut pariatur elit',
    'ShippingAddress1': 'tempor ullamco consectetur ven',
    'ShippingAddress2': 'elit laborum',
    'ShippingCity': 'in eu dolore',
    'ShippingState': 'elit exercitation est sed',
    'ShippingZipCode': 'aute elit u',
    'ShippingCountry': 'dolore pariatur',
    'ShippingPhoneNumber': 'esse est nulla',
    'ShippingAddressType': -92146158,
    'CustomerGroupID': -9534380,
    'Enabled': true,
    'MailList': true,
    'NonTaxable': true,
    'DisableBillingSameAsShipping': false,
    'Comments': 'reprehenderit id esse',
    'AdditionalField1': 'in reprehenderit',
    'AdditionalField2': 'sit in pariatur magna Ut',
    'AdditionalField3': 'ut nostrud Excepteur',
    'TotalStoreCredit': -53539283.98542496,
    'ResetPassword': true
  },
  {
    'CustomerID': -55733958,
    'Email': 'dolore id adipisicing ',
    'Password': 'magna sint esse',
    'BillingCompany': 'ad',
    'BillingFirstName': 'irure',
    'BillingLastName': 'veniam',
    'BillingAddress1': 'enim proident',
    'BillingAddress2': 'id sunt Excepteur magna',
    'BillingCity': 'Lorem ipsum ea',
    'BillingState': 'incididunt commodo',
    'BillingZipCode': 'ex off',
    'BillingCountry': 'ad laboris mollit am',
    'BillingPhoneNumber': 'dolor ipsum nisi',
    'BillingTaxID': 'consequat',
    'ShippingCompany': 'id irure',
    'ShippingFirstName': 'proident cupidatat',
    'ShippingLastName': 'culpa minim',
    'ShippingAddress1': 'Excepteur ea dolor commodo',
    'ShippingAddress2': 'quis ut eiusmod do',
    'ShippingCity': 'ad in eiusmod incididunt',
    'ShippingState': 'aliquip aliqua',
    'ShippingZipCode': 'do i',
    'ShippingCountry': 'sint Duis in deserunt laboris',
    'ShippingPhoneNumber': 'deserunt esse labore quis',
    'ShippingAddressType': -91255990,
    'CustomerGroupID': 51189974,
    'Enabled': true,
    'MailList': false,
    'NonTaxable': false,
    'DisableBillingSameAsShipping': true,
    'Comments': 'amet in ad',
    'AdditionalField1': 'qui sint quis anim consectetur',
    'AdditionalField2': 'cillum consectetur',
    'AdditionalField3': 'proident reprehenderit sit',
    'TotalStoreCredit': 73592504.18052551,
    'ResetPassword': true
  }
];

request.send(JSON.stringify(body));

}

on updateSpecificCustomerById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Customers/{customerid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CustomerID': 97613232,
  'Email': 'incididunt exercitation in labore',
  'Password': 'Ut ve',
  'BillingCompany': 'id mollit aute',
  'BillingFirstName': 'et magna in e',
  'BillingLastName': 'nulla non anim est',
  'BillingAddress1': 'velit reprehend',
  'BillingAddress2': 'pariatur cupidatat dolore',
  'BillingCity': 'dolor',
  'BillingState': 'fugiat adipisicing',
  'BillingZipCode': 'paria',
  'BillingCountry': 'Lorem consequat laborum',
  'BillingPhoneNumber': 'adipisicing id anim non ut',
  'BillingTaxID': 'eiusmod nisi',
  'ShippingCompany': 'irure',
  'ShippingFirstName': 'ad fugiat',
  'ShippingLastName': 'sunt minim id',
  'ShippingAddress1': 'elit Excepteur',
  'ShippingAddress2': 'adipisicing Excepteur labore',
  'ShippingCity': 'eu',
  'ShippingState': 'et fugiat laborum irure labore',
  'ShippingZipCode': 'ad',
  'ShippingCountry': 'non eu',
  'ShippingPhoneNumber': 'laborum aliquip',
  'ShippingAddressType': -32447465,
  'CustomerGroupID': -83671539,
  'Enabled': false,
  'MailList': true,
  'NonTaxable': false,
  'DisableBillingSameAsShipping': true,
  'Comments': 'dolor quis nostrud aliquip',
  'AdditionalField1': 'proident cillum sed',
  'AdditionalField2': 'ullamco irure consectetur aliquip',
  'AdditionalField3': 'reprehenderit adipisicing ipsum aliqua nulla',
  'TotalStoreCredit': 44268536.64587903,
  'ResetPassword': true
};

request.send(JSON.stringify(body));

}

function deleteCustomer()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Customers/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createDistributor()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Distributors');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'DistributorID': -34424972,
  'CompanyName': 'exercitation quis ad minim',
  'ContactName': 'elit nulla dolor',
  'Address': 'nulla dolore',
  'Address2': 'tempor sunt laboris',
  'City': 'ad voluptate in qui',
  'State': 'nostrud pariatur',
  'Zip': 'exercitation sit pariatur',
  'Country': 'adipisicing Duis nisi',
  'Phone': 'ea dolore ex minim eu',
  'Fax': 'v',
  'Email': 'aliquip ',
  'Comments': 'ullamco ex eiusmod nulla ea',
  'NotifyOnNewOrder': true,
  'NotifyOnNewOrderEmailSubject': 'do adipisicing',
  'NotifyOnNewOrderEmailMessage': 'labore dolore Excepteur ex',
  'UserID': 'deserunt cupidatat consectetur dolor in',
  'LastUpdate': '2016-09-28T17:46:27.136Z',
  'IsDropShipper': true,
  'NotifyOnCancelledOrder': true,
  'NotifyOnCancelledOrderEmailSubject': 'consectetur sint',
  'NotifyOnCancelledOrderEmailMessage': 'dolore voluptate anim commodo',
  'POStyle': 82613922,
  'POEmailNotification': false,
  'POShippingInfo': 'Ut velit mollit in qui',
  'POPaymentInfo': 'cillum mollit Duis',
  'POAdditionalNotes': 'veniam sint quis minim',
  'POEmailSubject': 'adipisicing dolore'
};

request.send(JSON.stringify(body));

}
function retrieveListOfDistributors()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Distributors?limit=&offset=&company=&email=&country=&state=&city=&phone=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveSpecificDistributor()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Distributors/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofDistributors()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Distributors');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'DistributorID': 83893738,
    'CompanyName': 'culpa es',
    'ContactName': 'eiusmod magna dolore consectetur',
    'Address': 'consequat a',
    'Address2': 'anim occaecat eiusmod ut',
    'City': 'ea nostrud cupidatat',
    'State': 'Lorem laboris dolore minim',
    'Zip': 'elit pariatur sed',
    'Country': 'nisi veniam',
    'Phone': 'deserunt ea officia',
    'Fax': 'cillum nisi',
    'Email': 'ut cillum',
    'Comments': 'laborum eiusmod',
    'NotifyOnNewOrder': false,
    'NotifyOnNewOrderEmailSubject': 'incididunt dolor',
    'NotifyOnNewOrderEmailMessage': 'in aliquip',
    'UserID': 'est ut ex quis',
    'LastUpdate': '1990-01-18T12:23:49.693Z',
    'IsDropShipper': true,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'nostrud consectetur in',
    'NotifyOnCancelledOrderEmailMessage': 'in',
    'POStyle': 18585521,
    'POEmailNotification': false,
    'POShippingInfo': 'aliquip anim commodo',
    'POPaymentInfo': 'voluptate irure Lorem',
    'POAdditionalNotes': 'cupidatat ipsum sint dolore',
    'POEmailSubject': 'cillum quis magna minim dolor'
  },
  {
    'DistributorID': -21099663,
    'CompanyName': 'temp',
    'ContactName': 's',
    'Address': 'Ut qui culpa',
    'Address2': 'aute dolor non sed Excepte',
    'City': 'consequat Ut commodo Excepteur minim',
    'State': 'exercitation est sint fugiat deserunt',
    'Zip': 'qui anim',
    'Country': 'reprehenderit occaecat labore par',
    'Phone': 'ipsum adipisicing do',
    'Fax': 'qui',
    'Email': 'minim a',
    'Comments': 'dolore magna irure et',
    'NotifyOnNewOrder': true,
    'NotifyOnNewOrderEmailSubject': 'Duis sit dolore proident laboris',
    'NotifyOnNewOrderEmailMessage': 'in eiusmod qui',
    'UserID': 'culpa proident ut Excepteur velit',
    'LastUpdate': '1997-12-19T20:47:00.731Z',
    'IsDropShipper': true,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'ea cillum',
    'NotifyOnCancelledOrderEmailMessage': 'sit do veniam ut dolore',
    'POStyle': 39565019,
    'POEmailNotification': true,
    'POShippingInfo': 'ullamco ut',
    'POPaymentInfo': 'deserunt Excepteur',
    'POAdditionalNotes': 'amet in',
    'POEmailSubject': 'non consequat'
  },
  {
    'DistributorID': 34481800,
    'CompanyName': 'n',
    'ContactName': 'dolore nisi ',
    'Address': 'nulla reprehende',
    'Address2': 'eiusmod Duis aliqua ex',
    'City': 'occaecat e',
    'State': 'ut aliqua labore re',
    'Zip': 'cillum Duis',
    'Country': 'deserunt ullamco',
    'Phone': '',
    'Fax': 'anim ',
    'Email': 'Duis dolor',
    'Comments': 'non',
    'NotifyOnNewOrder': true,
    'NotifyOnNewOrderEmailSubject': 'sunt ut dolor velit',
    'NotifyOnNewOrderEmailMessage': 'ullamco',
    'UserID': 'amet sed ea',
    'LastUpdate': '1966-10-04T09:08:37.694Z',
    'IsDropShipper': false,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'eu in occaecat consequat',
    'NotifyOnCancelledOrderEmailMessage': 'deserunt adipisicing qui et quis',
    'POStyle': -93510217,
    'POEmailNotification': false,
    'POShippingInfo': 'sint est commodo',
    'POPaymentInfo': 'laboris officia elit labore occaecat',
    'POAdditionalNotes': 'in',
    'POEmailSubject': 'laborum voluptate incididunt'
  },
  {
    'DistributorID': -54174892,
    'CompanyName': 'eiusmod',
    'ContactName': 'sed',
    'Address': 'cillum pariatur',
    'Address2': 'laboris',
    'City': 'ad dolore',
    'State': 'est',
    'Zip': 'ad cupidatat minim dolo',
    'Country': 'Lo',
    'Phone': 'Duis ullamco officia',
    'Fax': 'ut velit ',
    'Email': 'consequat commodo exerc',
    'Comments': 'et nisi esse aliquip',
    'NotifyOnNewOrder': true,
    'NotifyOnNewOrderEmailSubject': 'officia nulla',
    'NotifyOnNewOrderEmailMessage': 'fugiat commodo in id',
    'UserID': 'Duis ex incididunt',
    'LastUpdate': '1945-03-13T00:32:27.317Z',
    'IsDropShipper': true,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'esse ut velit',
    'NotifyOnCancelledOrderEmailMessage': 'ut',
    'POStyle': 2053044,
    'POEmailNotification': true,
    'POShippingInfo': 'eu',
    'POPaymentInfo': 'Ut dolor pariatur',
    'POAdditionalNotes': 'eiusmod esse magna voluptate',
    'POEmailSubject': 'qui fugiat'
  },
  {
    'DistributorID': -91355787,
    'CompanyName': 'eu tempor adipisicing esse in',
    'ContactName': 'irure ut deser',
    'Address': 'dolor mollit labore',
    'Address2': 'aliquip ut in in sint',
    'City': 'aute ',
    'State': '',
    'Zip': 'nostrud aute p',
    'Country': 'dolor consectetur Ut qui',
    'Phone': 'Lorem nulla in ex',
    'Fax': 'cillum consectetur pariatur',
    'Email': 'ad voluptate',
    'Comments': 'labore ut',
    'NotifyOnNewOrder': true,
    'NotifyOnNewOrderEmailSubject': 'sint minim ',
    'NotifyOnNewOrderEmailMessage': 'elit occaecat incididunt nostrud',
    'UserID': 'consectetur',
    'LastUpdate': '1946-10-06T01:34:09.874Z',
    'IsDropShipper': true,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'dolore co',
    'NotifyOnCancelledOrderEmailMessage': 'velit aute magna consectetur cillum',
    'POStyle': 17935422,
    'POEmailNotification': false,
    'POShippingInfo': 'minim enim deserunt',
    'POPaymentInfo': 'aute eu',
    'POAdditionalNotes': 'id Lorem ad',
    'POEmailSubject': 'aliquip eu ut'
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificDistributor()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Distributors/{distributorid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'DistributorID': 56984833,
  'CompanyName': 'u',
  'ContactName': 'dolor pariatur deserunt in',
  'Address': 'mollit ut Ut eiusmod elit',
  'Address2': 'id in ullamco anim',
  'City': 'do tempor amet',
  'State': 'exercitation enim',
  'Zip': 'pro',
  'Country': 'dolor laboris',
  'Phone': 'nostrud',
  'Fax': 'o',
  'Email': 'quis',
  'Comments': 'adipisicing culpa in',
  'NotifyOnNewOrder': true,
  'NotifyOnNewOrderEmailSubject': 'incididunt',
  'NotifyOnNewOrderEmailMessage': 'nostrud aliquip officia',
  'UserID': 'enim consequat culpa eiusmod quis',
  'LastUpdate': '1976-11-11T08:02:17.995Z',
  'IsDropShipper': false,
  'NotifyOnCancelledOrder': false,
  'NotifyOnCancelledOrderEmailSubject': 'commodo pariatur reprehenderit',
  'NotifyOnCancelledOrderEmailMessage': 'in ad',
  'POStyle': -90904862,
  'POEmailNotification': true,
  'POShippingInfo': 'nulla enim minim',
  'POPaymentInfo': 'amet dolore aliqua sunt',
  'POAdditionalNotes': 'irure eu',
  'POEmailSubject': 'occaecat'
};

request.send(JSON.stringify(body));

}
function deleteDistributor()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Distributors/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function createNewFrontendScript()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/FrontendScripts');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'FrontendScriptID': -50863168,
  'Placement': 'Ut sunt',
  'Code': 'sit ipsum',
  'DateCreated': '2016-07-07T18:39:18.507Z',
  'LastUpdate': '1950-07-07T23:58:28.346Z'
};

request.send(JSON.stringify(body));

}
function retieveListOfFrontEndScripts()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/FrontendScripts?limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveSpecificFrontendById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/FrontendScripts/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListOfFrontendScripts()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/FrontendScripts');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'FrontendScriptID': -48056471,
    'Placement': 'of',
    'Code': 'dolor tempor dolore',
    'DateCreated': '1975-07-05T10:54:30.331Z',
    'LastUpdate': '1942-03-27T17:45:37.456Z'
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificFrontEndScriptById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/FrontendScripts/{frontendscriptid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'FrontendScriptID': 72592379,
  'Placement': 'lab',
  'Code': 'est occaecat dolor amet commodo',
  'DateCreated': '1944-03-28T20:19:51.889Z',
  'LastUpdate': '1992-03-13T21:10:07.697Z'
};

request.send(JSON.stringify(body));

}
function deleteFrontendScript()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/FrontendScripts/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createGiftCertificate()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest-dev.3dcart.com/3dCartWebAPI/v2/GiftCertificates');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CertificateCode': '',
  'Amount': 0,
  'Notes': ''
};

request.send(JSON.stringify(body));

}
function retrieveListOfGiftCertificates()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest-dev.3dcart.com/3dCartWebAPI/v2/GiftCertificates?limit=&offset=&countonly=&notetext=&amountfrom=&amountto=&balancefrom=&balanceto=');

request.setRequestHeader('Content-Type', 'application/xml');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retireveSpecifGiftCertificatebyCode()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest-dev.3dcart.com/3dCartWebAPI/v2/GiftCertificates/{certificatecode}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function listOfGiftCertificates()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest-dev.3dcart.com/3dCartWebAPI/v2/GiftCertificates');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'CertificateCode': '',
    'Amount': 0,
    'Notes': ''
  }
];

request.send(JSON.stringify(body));
}
function specificGiftCertificatebyCode()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest-dev.3dcart.com/3dCartWebAPI/v2/GiftCertificates/{certificatecode}');

request.setRequestHeader('Content-Type', 'application/xml');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function deleteGiftCertificate()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest-dev.3dcart.com/3dCartWebAPI/v2/GiftCertificates/{certificatecode}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveListOfAllgiftRegistries()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/GiftRegistries?catalogid=&sku=&datestartcreated=&dateendcreated=&datestartevent=&dateendevent=&datestartexpiration=&dateendexpiration=&limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveSpecificGiftRegistryById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/GiftRegistries/{giftregistryid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveItemsFromSpecificGiftRegistry()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/GiftRegistries/{giftregistryid}/Items?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

}function createManaufacturer()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Manufacturers');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'ManufacturerID': -16446886,
  'ManufacturerName': 'e',
  'Logo': 'quis dese',
  'Sorting': -20672828,
  'Header': 'laboris deserunt in minim mollit',
  'Website': 'reprehenderit proident amet Duis',
  'UserID': 'qui laborum su',
  'LastUpdate': '1982-05-02T09:20:10.518Z',
  'PageTitle': 'magna cupidatat nisi do',
  'MetaTags': 'aliquip consequat ea dolore',
  'RedirectURL': 'consectetur adipisicing Lorem Excepteur',
  'FileName': 'inci'
};

request.send(JSON.stringify(body));

}
function retrieveListOfAllManufacturers(){
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Manufacturers?limit=&offset=&manufacturer=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveSpecificManaufacturerById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Manufacturers/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListOfManufacturers()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Manufacturers');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'ManufacturerID': -5312624,
    'ManufacturerName': 'in',
    'Logo': 'dolore incididunt',
    'Sorting': -56740698,
    'Header': 'nisi tempor ut',
    'Website': 'ad d',
    'UserID': 'nulla exercitation reprehende',
    'LastUpdate': '2003-08-25T01:18:29.858Z',
    'PageTitle': 'dolore occaecat Duis',
    'MetaTags': 'enim veniam',
    'RedirectURL': 'Lorem sint dolore veniam',
    'FileName': 'eu et in amet'
  },
  {
    'ManufacturerID': 86159187,
    'ManufacturerName': 'magna cupidatat Lo',
    'Logo': 'culpa nostrud cupidatat Excepteur',
    'Sorting': 16604071,
    'Header': 'non in nisi minim',
    'Website': 'sint qui in consectetu',
    'UserID': 'U',
    'LastUpdate': '2009-11-22T20:57:29.073Z',
    'PageTitle': 'labore laborum laboris Lorem',
    'MetaTags': 'voluptate eu',
    'RedirectURL': 'laboris Ut et commodo',
    'FileName': 'Lorem veniam Ut velit in'
  },
  {
    'ManufacturerID': -35267962,
    'ManufacturerName': 'officia',
    'Logo': 'sed sunt in nostrud',
    'Sorting': -78508198,
    'Header': 'exercitation',
    'Website': 'in do',
    'UserID': 'aute in',
    'LastUpdate': '1987-06-13T06:59:17.614Z',
    'PageTitle': 'sit commodo sint',
    'MetaTags': 'proident ipsum',
    'RedirectURL': 'dolore ea',
    'FileName': 'in eu consectet'
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificManufacturerById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Manufacturers/{manufacturerid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'ManufacturerID': -24120948,
  'ManufacturerName': 'occaecat exercitation',
  'Logo': 'qui occaecat consequat',
  'Sorting': -83386874,
  'Header': 'pariatur nostrud magna id',
  'Website': 'nostrud irure',
  'UserID': 'Excepteur tempor amet ad',
  'LastUpdate': '2003-05-16T07:00:30.411Z',
  'PageTitle': 'minim',
  'MetaTags': 'adipisicing',
  'RedirectURL': 'eiusmod est Excepteur',
  'FileName': 'reprehenderit laborum'
};

request.send(JSON.stringify(body));

}
function deleteManufacturer()
{
	
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Manufacturers/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createOrder()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders?bypassorderprocessing=&bypassorderemail=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'InvoiceNumberPrefix': 'Lorem Excepteur nostrud deserunt',
  'InvoiceNumber': -98095592,
  'OrderID': -40304878,
  'CustomerID': -81397669,
  'OrderDate': '1970-03-22T03:22:55.390Z',
  'OrderStatusID': -91381633,
  'LastUpdate': '1995-05-26T20:05:22.742Z',
  'UserID': 'sit ex tempor aliqua',
  'SalesPerson': 'eiusmod quis',
  'ContinueURL': 'dolor Ut eu velit',
  'AlternateOrderID': 'Ut anim occaecat tempor',
  'OrderType': 'tempor pariatur in irure',
  'PaymentTokenID': 26386710,
  'BillingFirstName': 'tempor officia dolor',
  'BillingLastName': 'exercitation reprehenderit',
  'BillingCompany': 'minim',
  'BillingAddress': 'eiusmod aute ex eu',
  'BillingAddress2': 'Ut in null',
  'BillingCity': 'exercitati',
  'BillingState': 'esse',
  'BillingZipCode': 'Excepteur dolo',
  'BillingCountry': 'ullamco',
  'BillingPhoneNumber': 'cill',
  'BillingEmail': 'exercitation veniam id adipisicing aliqua',
  'BillingPaymentMethod': 'sit',
  'BillingOnLinePayment': true,
  'BillingPaymentMethodID': 'anim eiusmod',
  'ShipmentList': [
    {
      'ShipmentID': 1752684,
      'ShipmentLastUpdate': '1983-06-06T14:07:53.509Z',
      'ShipmentBoxes': -96083967,
      'ShipmentInternalComment': 'incididunt',
      'ShipmentOrderStatus': 51886048,
      'ShipmentAddress': 'et laboris nisi',
      'ShipmentAddress2': 'Duis ex ad',
      'ShipmentAlias': 'ad occaecat eiusm',
      'ShipmentCity': 'in culpa nisi',
      'ShipmentCompany': 'aliqua et culpa',
      'ShipmentCost': 56707460.54751158,
      'ShipmentCountry': 'aliquip incididunt',
      'ShipmentEmail': 'sunt aliquip',
      'ShipmentFirstName': 'tempor',
      'ShipmentLastName': 'anim',
      'ShipmentMethodID': 90471938,
      'ShipmentMethodName': 'sint ut minim dolor',
      'ShipmentShippedDate': 'ipsum in ullamco',
      'ShipmentPhone': 'dolore non in',
      'ShipmentState': 'commodo ullamco dolore',
      'ShipmentZipCode': 'nu',
      'ShipmentTax': -25960908.738856062,
      'ShipmentWeight': 5084437.24310191,
      'ShipmentTrackingCode': 'consectetur',
      'ShipmentUserID': 'incididunt tempor est',
      'ShipmentNumber': -80236172,
      'ShipmentAddressTypeID': 67960531
    },
    {
      'ShipmentID': -63427414,
      'ShipmentLastUpdate': '1992-04-06T11:18:45.344Z',
      'ShipmentBoxes': 68059346,
      'ShipmentInternalComment': 'est',
      'ShipmentOrderStatus': -4190764,
      'ShipmentAddress': 'proident tempor aute dolore',
      'ShipmentAddress2': 'minim ut',
      'ShipmentAlias': 'elit aute ea',
      'ShipmentCity': 'exercitation ul',
      'ShipmentCompany': 'sed aliqua',
      'ShipmentCost': 57718314.09263611,
      'ShipmentCountry': 'Duis',
      'ShipmentEmail': 'aliqua qui',
      'ShipmentFirstName': 'quis ex irure',
      'ShipmentLastName': 'velit Duis',
      'ShipmentMethodID': 59889185,
      'ShipmentMethodName': 'pariatur',
      'ShipmentShippedDate': 'dolore volup',
      'ShipmentPhone': 'mollit sunt in ad',
      'ShipmentState': 'consequ',
      'ShipmentZipCode': 'id culpa ',
      'ShipmentTax': 52485177.80976471,
      'ShipmentWeight': -93235903.41975643,
      'ShipmentTrackingCode': 'est',
      'ShipmentUserID': 'cillum commodo adipisicing',
      'ShipmentNumber': -21403273,
      'ShipmentAddressTypeID': -77072353
    },
    {
      'ShipmentID': -86088337,
      'ShipmentLastUpdate': '2010-05-01T11:51:14.148Z',
      'ShipmentBoxes': 94987001,
      'ShipmentInternalComment': 'do reprehenderit tempor',
      'ShipmentOrderStatus': -40093460,
      'ShipmentAddress': 'tempor ullamco culpa',
      'ShipmentAddress2': 'adipisicing in qui',
      'ShipmentAlias': 'fugiat',
      'ShipmentCity': 'elit',
      'ShipmentCompany': 'elit commodo ea',
      'ShipmentCost': 38671500.27815187,
      'ShipmentCountry': 'velit do',
      'ShipmentEmail': 'in eu',
      'ShipmentFirstName': 'minim Excepteur occaecat Duis mollit',
      'ShipmentLastName': 'nostrud incididunt labore',
      'ShipmentMethodID': -3982367,
      'ShipmentMethodName': 'sit in pariatur',
      'ShipmentShippedDate': 'magna et',
      'ShipmentPhone': 'Excepteur exercitation',
      'ShipmentState': 'ipsum',
      'ShipmentZipCode': 'sit cillum am',
      'ShipmentTax': -60497629.67957477,
      'ShipmentWeight': 63484530.419611126,
      'ShipmentTrackingCode': 'officia elit',
      'ShipmentUserID': 'sit aliqua magna fu',
      'ShipmentNumber': 65282416,
      'ShipmentAddressTypeID': 58715032
    },
    {
      'ShipmentID': 34897370,
      'ShipmentLastUpdate': '1948-10-20T18:45:57.374Z',
      'ShipmentBoxes': -71825991,
      'ShipmentInternalComment': 'sed labore pariatur',
      'ShipmentOrderStatus': -45595173,
      'ShipmentAddress': 'adipisicing laboris Lorem',
      'ShipmentAddress2': 'cillum',
      'ShipmentAlias': 'la',
      'ShipmentCity': 'laborum id et sunt',
      'ShipmentCompany': 'anim consectetur',
      'ShipmentCost': -20544238.87493995,
      'ShipmentCountry': 'Excepteur laborum',
      'ShipmentEmail': 'ut in',
      'ShipmentFirstName': 'adipisicing',
      'ShipmentLastName': 'deserunt',
      'ShipmentMethodID': 75786700,
      'ShipmentMethodName': 'exercitation ex voluptate',
      'ShipmentShippedDate': 'ipsum cupidatat ullamco co',
      'ShipmentPhone': 'cillum consequat',
      'ShipmentState': 'occaecat sit minim ut',
      'ShipmentZipCode': 'proident',
      'ShipmentTax': -99230142.07594147,
      'ShipmentWeight': 68932933.04883993,
      'ShipmentTrackingCode': 'pariatur',
      'ShipmentUserID': 'incididunt',
      'ShipmentNumber': -82301031,
      'ShipmentAddressTypeID': 91078289
    }
  ],
  'OrderItemList': [
    {
      'CatalogID': 60894033,
      'ItemIndexID': 8940581,
      'ItemID': 'ipsum sit Lorem incididunt veniam',
      'ItemShipmentID': 90429885,
      'ItemQuantity': 38545676.636707425,
      'ItemWarehouseID': -75844229,
      'ItemDescription': 'laborum ullamco qui Duis',
      'ItemUnitPrice': 7332864.85514468,
      'ItemWeight': 78532594.18163317,
      'ItemOptionPrice': 9040214.580906585,
      'ItemAdditionalField1': 'irure esse in',
      'ItemAdditionalField2': 'anim mollit',
      'ItemAdditionalField3': 'dolor laborum est ipsum',
      'ItemPageAdded': 'ex',
      'ItemDateAdded': '1944-08-06T07:02:46.245Z',
      'ItemUnitCost': -20445918.174663186,
      'ItemUnitStock': -69020356.85615249,
      'ItemOptions': 'aliqua commodo ea velit',
      'ItemCatalogIDOptions': 'et dolore amet',
      'ItemSerial': 'esse consectetur amet dolor',
      'ItemImage1': 'aliqua Excepteur quis Duis cillum',
      'ItemImage2': 'commodo sunt amet',
      'ItemImage3': 'i',
      'ItemImage4': 'tempor dolor fugiat laborum',
      'ItemWarehouseLocation': 'et sunt',
      'ItemWarehouseBin': 'dolore officia incididunt enim',
      'ItemWarehouseAisle': 'do',
      'ItemWarehouseCustom': 'voluptate exerc',
      'RecurringOrderFrequency': 36961748
    }
  ],
  'PromotionList': [
    {
      'PromotionName': 'in Duis',
      'Coupon': 'fugiat Excepteur',
      'DiscountAmount': -67050232.12680512
    },
    {
      'PromotionName': 'laboris amet ut est',
      'Coupon': 'aute eu',
      'DiscountAmount': 25544456.708462924
    },
    {
      'PromotionName': 'eu anim enim in',
      'Coupon': 'repreh',
      'DiscountAmount': -15944696.308671132
    },
    {
      'PromotionName': 'quis reprehenderit est elit nostrud',
      'Coupon': 'officia dolore consectetur',
      'DiscountAmount': -59322129.23015689
    }
  ],
  'OrderDiscount': -85875826.91720575,
  'OrderDiscountCoupon': 31012967.357977763,
  'OrderDiscountPromotion': -95417471.32361342,
  'SalesTax': 62339340.5864895,
  'SalesTax2': 88180405.25341377,
  'SalesTax3': 1106703.754718244,
  'OrderAmount': -99165023.00182666,
  'AffiliateCommission': 96287286.64157435,
  'TransactionList': [
    {
      'TransactionIndexID': 84080501,
      'OrderID': 51302541,
      'TransactionID': 'irure D',
      'TransactionDateTime': '2004-07-19T21:49:59.639Z',
      'TransactionType': 'veniam',
      'TransactionMethod': 'ipsum pariatur',
      'TransactionAmount': -70129036.1748308,
      'TransactionApproval': 'consequat minim magna nulla cill',
      'TransactionReference': 'nulla in no',
      'TransactionGatewayID': -2911603,
      'TransactionCVV2': 'enim nisi veniam',
      'TransactionAVS': 'adipisicing magna ipsum',
      'TransactionResponseText': 'est incididunt in sit mollit',
      'TransactionResponseCode': 'ut amet',
      'TransactionCaptured': 31817169
    },
    {
      'TransactionIndexID': -30145553,
      'OrderID': -56900685,
      'TransactionID': 'Lorem ex laborum sin',
      'TransactionDateTime': '1965-02-25T13:08:10.274Z',
      'TransactionType': 'ad qu',
      'TransactionMethod': 'pariatur est in',
      'TransactionAmount': 13618675.776051775,
      'TransactionApproval': 'dolore o',
      'TransactionReference': 'ex in id',
      'TransactionGatewayID': -94468833,
      'TransactionCVV2': 'sed repre',
      'TransactionAVS': 'reprehenderit laborum pariatur aute',
      'TransactionResponseText': 'sed in',
      'TransactionResponseCode': 'tempor sint',
      'TransactionCaptured': -22439734
    }
  ],
  'CardType': 'et laborum in',
  'CardNumber': 'ut deserunt ullamco irure',
  'CardName': 'qui minim sint',
  'CardExpirationMonth': 'n',
  'CardExpirationYear': 'ut culpa',
  'CardIssueNumber': 'velit ex s',
  'CardStartMonth': 'et ut la',
  'CardStartYear': 'u',
  'CardAddress': 'irure laborum Lo',
  'CardVerification': 'incididunt sunt minim cupidatat',
  'RewardPoints': 'Lorem dolor qui sint',
  'QuestionList': [
    {
      'QuestionAnswerIndexID': -24123226,
      'OrderID': -96250052,
      'QuestionID': -1485207,
      'QuestionTitle': 'non officia occaecat consectetur',
      'QuestionAnswer': 'officia quis minim',
      'QuestionType': 'proid',
      'QuestionCheckoutStep': 55890862,
      'QuestionSorting': 83511589,
      'QuestionDiscountGroup': 4525740
    },
    {
      'QuestionAnswerIndexID': 40003641,
      'OrderID': 38553669,
      'QuestionID': -2308377,
      'QuestionTitle': 'mollit dolore adipisicing',
      'QuestionAnswer': 'ex sint aliqua adipisicing',
      'QuestionType': 'amet ',
      'QuestionCheckoutStep': -84952674,
      'QuestionSorting': -65831383,
      'QuestionDiscountGroup': -73406311
    },
    {
      'QuestionAnswerIndexID': 62507312,
      'OrderID': -55784626,
      'QuestionID': 3146323,
      'QuestionTitle': 'fugiat dolore anim',
      'QuestionAnswer': 'et dolor',
      'QuestionType': 'null',
      'QuestionCheckoutStep': -86471225,
      'QuestionSorting': 49847628,
      'QuestionDiscountGroup': 27408253
    }
  ],
  'Referer': 'in esse',
  'IP': 'in est id dol',
  'CustomerComments': 'aliqua in consectetur',
  'InternalComments': 'Excepteur',
  'ExternalComments': 'Lorem ipsum occaecat'
};

request.send(JSON.stringify(body));

}
function retrieveListofOrders()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders?invoicenumber=&invoicenumberstart=&invoicenumberend=&invoiceprefix=&orderstatus=&datestart=&dateend=&limit=&offset=&countonly=&lastupdatestart=&lastupdateend=&billingemail=');

request.setRequestHeader('Content-Type', 'application/xml');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveSpecificOrderById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofOrders(){
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'InvoiceNumberPrefix': 'Ut',
    'InvoiceNumber': 83104027,
    'OrderID': -15607808,
    'CustomerID': 82071088,
    'OrderDate': '1993-08-03T02:32:40.004Z',
    'OrderStatusID': 97698828,
    'LastUpdate': '2006-02-28T08:21:37.186Z',
    'UserID': 'reprehenderit culp',
    'SalesPerson': 'in sed commodo qui nulla',
    'ContinueURL': 'veniam',
    'AlternateOrderID': 'exercitation veniam',
    'OrderType': 'eiusmod amet',
    'PaymentTokenID': 32418761,
    'BillingFirstName': 'officia eiusmod consectetur',
    'BillingLastName': 'quis ex',
    'BillingCompany': 'elit dolore sed et',
    'BillingAddress': 'cupidatat ex sint',
    'BillingAddress2': 'velit magna',
    'BillingCity': 'veniam in velit qui',
    'BillingState': 'labore',
    'BillingZipCode': 'des',
    'BillingCountry': 'elit',
    'BillingPhoneNumber': 'labore',
    'BillingEmail': 'adipisicing ut occaecat',
    'BillingPaymentMethod': 'quis in',
    'BillingOnLinePayment': false,
    'BillingPaymentMethodID': 'i',
    'ShipmentList': [
      {
        'ShipmentID': -78075958,
        'ShipmentLastUpdate': '1942-10-14T20:19:37.092Z',
        'ShipmentBoxes': 65011334,
        'ShipmentInternalComment': 'aliqua veniam ullamco sint',
        'ShipmentOrderStatus': -71563529,
        'ShipmentAddress': 'commodo officia',
        'ShipmentAddress2': 'in amet',
        'ShipmentAlias': 'n',
        'ShipmentCity': 'laboris aute occaecat',
        'ShipmentCompany': 'nostrud officia eiusmod commodo Duis',
        'ShipmentCost': -3202035.8049051464,
        'ShipmentCountry': 'irure Excepteur',
        'ShipmentEmail': 'irure adipisicing',
        'ShipmentFirstName': 'id consequat laborum',
        'ShipmentLastName': 'ut e',
        'ShipmentMethodID': 79175829,
        'ShipmentMethodName': 'labore in sit in',
        'ShipmentShippedDate': 'in anim',
        'ShipmentPhone': 'nostrud minim dolor incididunt',
        'ShipmentState': 'amet fugiat',
        'ShipmentZipCode': 'culpa al',
        'ShipmentTax': -28393502.363460496,
        'ShipmentWeight': -88873979.33485723,
        'ShipmentTrackingCode': 'amet ad',
        'ShipmentUserID': 'quis',
        'ShipmentNumber': 11901978,
        'ShipmentAddressTypeID': 42253599
      }
    ],
    'OrderItemList': [
      {
        'CatalogID': -28651606,
        'ItemIndexID': 83090852,
        'ItemID': 'consequat fugiat Lorem',
        'ItemShipmentID': -90083877,
        'ItemQuantity': 60875740.21351117,
        'ItemWarehouseID': -99867363,
        'ItemDescription': 'officia',
        'ItemUnitPrice': -42778298.01739381,
        'ItemWeight': 4986374.545454323,
        'ItemOptionPrice': 89080537.37249193,
        'ItemAdditionalField1': 'amet nulla Duis',
        'ItemAdditionalField2': 'aute minim',
        'ItemAdditionalField3': 'Duis',
        'ItemPageAdded': 'mollit occaecat cupidatat',
        'ItemDateAdded': '1940-08-17T10:08:04.869Z',
        'ItemUnitCost': 11667913.776530936,
        'ItemUnitStock': -46067145.39317372,
        'ItemOptions': 'elit',
        'ItemCatalogIDOptions': 'fugiat do',
        'ItemSerial': 'nulla aliquip ex dolore',
        'ItemImage1': 'aute in mollit',
        'ItemImage2': 'id ut',
        'ItemImage3': 'eu proident amet culpa incididunt',
        'ItemImage4': 'eu in commodo nisi',
        'ItemWarehouseLocation': 'et est consectetur',
        'ItemWarehouseBin': 'cupidat',
        'ItemWarehouseAisle': 'est laborum ullamco',
        'ItemWarehouseCustom': 'consequat incididunt',
        'RecurringOrderFrequency': 3199902
      },
      {
        'CatalogID': 15921374,
        'ItemIndexID': 14476198,
        'ItemID': 'cillum officia veniam pariatur eu',
        'ItemShipmentID': -47367460,
        'ItemQuantity': -63098856.8744252,
        'ItemWarehouseID': -16666643,
        'ItemDescription': 'eu laboris',
        'ItemUnitPrice': -12270241.866692543,
        'ItemWeight': -3915557.9566720873,
        'ItemOptionPrice': -24960221.306155324,
        'ItemAdditionalField1': 'officia qui',
        'ItemAdditionalField2': 'in',
        'ItemAdditionalField3': 'eu labore culpa incididunt',
        'ItemPageAdded': 'Lorem est fugiat',
        'ItemDateAdded': '2003-08-09T07:46:16.614Z',
        'ItemUnitCost': 92286078.6158121,
        'ItemUnitStock': 59652221.594025254,
        'ItemOptions': 'occaecat officia eu ex',
        'ItemCatalogIDOptions': 'exercitation cupidatat nulla',
        'ItemSerial': 'occaecat am',
        'ItemImage1': 'eiusmod sunt',
        'ItemImage2': 'commodo Excepteur et anim',
        'ItemImage3': 'in Lorem',
        'ItemImage4': 'aliquip pariatur veniam ex',
        'ItemWarehouseLocation': 'id',
        'ItemWarehouseBin': 'nulla quis',
        'ItemWarehouseAisle': 'in ex',
        'ItemWarehouseCustom': 'ipsum voluptate labore nostrud',
        'RecurringOrderFrequency': 54110413
      },
      {
        'CatalogID': 11864595,
        'ItemIndexID': -36833478,
        'ItemID': 'deserunt do sit Excepteur',
        'ItemShipmentID': 46977436,
        'ItemQuantity': 28876713.89939657,
        'ItemWarehouseID': 64155462,
        'ItemDescription': 'anim',
        'ItemUnitPrice': 45257365.6950492,
        'ItemWeight': 39321850.87721458,
        'ItemOptionPrice': 5181424.2715474665,
        'ItemAdditionalField1': 'laboris ad eiusmod esse',
        'ItemAdditionalField2': 'voluptate dese',
        'ItemAdditionalField3': 'nostrud enim dolor in',
        'ItemPageAdded': 'in occaecat incididunt',
        'ItemDateAdded': '1963-12-22T10:25:57.378Z',
        'ItemUnitCost': -66091142.48923112,
        'ItemUnitStock': 25415125.806552738,
        'ItemOptions': 'adipisicing in Duis nisi',
        'ItemCatalogIDOptions': 'sit magna',
        'ItemSerial': 'Duis commodo quis ex amet',
        'ItemImage1': 'tempor',
        'ItemImage2': 'veniam reprehenderit',
        'ItemImage3': 'pariatur Lorem sed',
        'ItemImage4': 'esse ex sit aute',
        'ItemWarehouseLocation': 'esse in deserunt pariatur',
        'ItemWarehouseBin': 'mollit ut consequat eiusmod',
        'ItemWarehouseAisle': 'ad cillum laborum',
        'ItemWarehouseCustom': 'Lorem Excepteur',
        'RecurringOrderFrequency': -86622843
      },
      {
        'CatalogID': 76634955,
        'ItemIndexID': 34733163,
        'ItemID': 'dolore eu voluptate',
        'ItemShipmentID': 74491665,
        'ItemQuantity': 27661617.182304755,
        'ItemWarehouseID': 90285702,
        'ItemDescription': 'qui labore Lorem ullamco',
        'ItemUnitPrice': 7702229.266266242,
        'ItemWeight': -23518046.95963207,
        'ItemOptionPrice': 49726679.17406893,
        'ItemAdditionalField1': 'nostrud in est proident aliquip',
        'ItemAdditionalField2': 'elit ut eiusmod culpa',
        'ItemAdditionalField3': 'laborum sed reprehenderit sit',
        'ItemPageAdded': 'sit cillum fugiat',
        'ItemDateAdded': '1975-10-08T12:26:02.209Z',
        'ItemUnitCost': -4777075.00041382,
        'ItemUnitStock': -50253456.74371886,
        'ItemOptions': 'tempor',
        'ItemCatalogIDOptions': 'amet Duis',
        'ItemSerial': 'in cillum',
        'ItemImage1': 'veniam sunt pariatur proident',
        'ItemImage2': 'deserunt sed',
        'ItemImage3': 'commodo',
        'ItemImage4': 'consectetur amet anim commodo',
        'ItemWarehouseLocation': 'magna laborum elit quis',
        'ItemWarehouseBin': 'fugiat',
        'ItemWarehouseAisle': 'reprehenderit consectetur nulla qui',
        'ItemWarehouseCustom': 'adipisicing tempor magna',
        'RecurringOrderFrequency': -68983054
      },
      {
        'CatalogID': 16917740,
        'ItemIndexID': 86321776,
        'ItemID': 'veniam sint',
        'ItemShipmentID': 17739303,
        'ItemQuantity': 92894173.51749504,
        'ItemWarehouseID': 85600264,
        'ItemDescription': 'ea in laboris',
        'ItemUnitPrice': -79653938.92196673,
        'ItemWeight': -67939239.14787805,
        'ItemOptionPrice': 2090920.0974602848,
        'ItemAdditionalField1': 'qui Lorem eiusmod nos',
        'ItemAdditionalField2': 'est reprehenderit ex officia',
        'ItemAdditionalField3': 'aute Lorem cupidatat',
        'ItemPageAdded': 'aliqua tempor ut ex consequat',
        'ItemDateAdded': '1982-08-17T16:47:51.201Z',
        'ItemUnitCost': 2281180.0468230695,
        'ItemUnitStock': -48560503.73047611,
        'ItemOptions': 'culpa quis aute',
        'ItemCatalogIDOptions': 'dolor voluptate ut',
        'ItemSerial': 'ea nisi',
        'ItemImage1': 'ipsum in ad dolore',
        'ItemImage2': 'consequat cillum ut',
        'ItemImage3': 'nostrud laborum cillum',
        'ItemImage4': 'fugiat cillum eu',
        'ItemWarehouseLocation': 'dolor dolor',
        'ItemWarehouseBin': 'reprehenderit dolor',
        'ItemWarehouseAisle': 'velit ea laboris',
        'ItemWarehouseCustom': 'Duis id Lorem Ut',
        'RecurringOrderFrequency': -31114583
      }
    ],
    'PromotionList': [
      {
        'PromotionName': 'enim aliqua Excepteur veniam adipisicing',
        'Coupon': 'fugiat minim proident',
        'DiscountAmount': -70029374.73241016
      },
      {
        'PromotionName': 'est sit',
        'Coupon': 'd',
        'DiscountAmount': -40896725.71538774
      },
      {
        'PromotionName': 'cupidatat Lorem in',
        'Coupon': 'ex sed nulla',
        'DiscountAmount': -24097548.19948709
      }
    ],
    'OrderDiscount': 1156208.9362741262,
    'OrderDiscountCoupon': 65094121.81107202,
    'OrderDiscountPromotion': 70754790.73573816,
    'SalesTax': -88290995.94985807,
    'SalesTax2': -11764848.19808641,
    'SalesTax3': -90639228.81471935,
    'OrderAmount': 48472560.70102933,
    'AffiliateCommission': 10340193.442917839,
    'TransactionList': [
      {
        'TransactionIndexID': -77409278,
        'OrderID': 32666208,
        'TransactionID': 'veniam aliqua et magna',
        'TransactionDateTime': '1964-12-31T07:56:10.454Z',
        'TransactionType': 'en',
        'TransactionMethod': 'enim minim',
        'TransactionAmount': 80668430.78164113,
        'TransactionApproval': 'aute ',
        'TransactionReference': 'exercitation ullamco in sunt dolore',
        'TransactionGatewayID': 56049395,
        'TransactionCVV2': 'dolore est ea aute',
        'TransactionAVS': 'dolore consectetur',
        'TransactionResponseText': 'ipsum sit quis qui eu',
        'TransactionResponseCode': 'aliquip Lorem',
        'TransactionCaptured': 85201435
      },
      {
        'TransactionIndexID': 28026491,
        'OrderID': -60894901,
        'TransactionID': 'r',
        'TransactionDateTime': '2007-01-12T21:11:07.524Z',
        'TransactionType': 'aliqu',
        'TransactionMethod': 'sint',
        'TransactionAmount': 63900424.925536156,
        'TransactionApproval': 'Ut',
        'TransactionReference': 'proident dolor non',
        'TransactionGatewayID': 98405260,
        'TransactionCVV2': 'sit occaecat sint commodo',
        'TransactionAVS': 'proident aute dolore',
        'TransactionResponseText': 'dolore',
        'TransactionResponseCode': 'fugiat irure ex ut',
        'TransactionCaptured': 38794952
      },
      {
        'TransactionIndexID': -97741438,
        'OrderID': 35145985,
        'TransactionID': 'ad velit esse ull',
        'TransactionDateTime': '1981-02-12T09:18:10.327Z',
        'TransactionType': 'dolor dol',
        'TransactionMethod': 'enim ea consectetur ex',
        'TransactionAmount': -57611914.998164296,
        'TransactionApproval': 'Ut',
        'TransactionReference': 'Ut Duis qui et',
        'TransactionGatewayID': -59109280,
        'TransactionCVV2': 'nostrud adipisicing id sunt ut',
        'TransactionAVS': 'laborum in',
        'TransactionResponseText': 'non',
        'TransactionResponseCode': 'quis ullamco',
        'TransactionCaptured': 15913272
      },
      {
        'TransactionIndexID': -99136467,
        'OrderID': 91090792,
        'TransactionID': 'in irure',
        'TransactionDateTime': '1952-07-28T19:49:46.598Z',
        'TransactionType': 'p',
        'TransactionMethod': 'laboris labore veniam dolore deserunt',
        'TransactionAmount': 18800507.757480964,
        'TransactionApproval': 'pariatur dolore',
        'TransactionReference': 'ex esse veniam et',
        'TransactionGatewayID': 32921817,
        'TransactionCVV2': 'sed con',
        'TransactionAVS': 'veniam id',
        'TransactionResponseText': 'Ut ea sunt',
        'TransactionResponseCode': 'sit aliqua id',
        'TransactionCaptured': -31627562
      },
      {
        'TransactionIndexID': -3457861,
        'OrderID': -956116,
        'TransactionID': 'l',
        'TransactionDateTime': '1960-07-06T23:24:00.521Z',
        'TransactionType': 'consequat ',
        'TransactionMethod': 'non ad ex et',
        'TransactionAmount': 69897002.85957116,
        'TransactionApproval': 'qui anim',
        'TransactionReference': 'labore',
        'TransactionGatewayID': 14330612,
        'TransactionCVV2': 'ex laboris fugiat do',
        'TransactionAVS': 'nulla c',
        'TransactionResponseText': 'eiusmod Duis anim dolor',
        'TransactionResponseCode': 'ullamco tempor',
        'TransactionCaptured': -68578952
      }
    ],
    'CardType': 'mollit sed proident est c',
    'CardNumber': 'sint exerci',
    'CardName': 'ex enim sint m',
    'CardExpirationMonth': 'consec',
    'CardExpirationYear': 'magna fu',
    'CardIssueNumber': 'nostrud l',
    'CardStartMonth': 'cillum',
    'CardStartYear': 'e',
    'CardAddress': 'ut in magna irure do',
    'CardVerification': 'quis',
    'RewardPoints': 'enim nostrud nulla',
    'QuestionList': [
      {
        'QuestionAnswerIndexID': -26907928,
        'OrderID': 36232471,
        'QuestionID': -37335591,
        'QuestionTitle': 'labore',
        'QuestionAnswer': 'id sint non dolore commodo',
        'QuestionType': 'volupt',
        'QuestionCheckoutStep': -22100418,
        'QuestionSorting': 48342732,
        'QuestionDiscountGroup': -84010033
      },
      {
        'QuestionAnswerIndexID': 17679216,
        'OrderID': -57466166,
        'QuestionID': -79726910,
        'QuestionTitle': 'et veniam aute',
        'QuestionAnswer': 'eiusmod dolore minim incididunt',
        'QuestionType': 'ut',
        'QuestionCheckoutStep': 96142775,
        'QuestionSorting': -42968522,
        'QuestionDiscountGroup': 44503078
      },
      {
        'QuestionAnswerIndexID': 73982497,
        'OrderID': -60843408,
        'QuestionID': 75500450,
        'QuestionTitle': 'eu nostrud reprehenderit ut',
        'QuestionAnswer': 'consectetur fugiat irure',
        'QuestionType': 'do',
        'QuestionCheckoutStep': 69556645,
        'QuestionSorting': -32316225,
        'QuestionDiscountGroup': 84190609
      },
      {
        'QuestionAnswerIndexID': 7344569,
        'OrderID': 83657064,
        'QuestionID': -43566552,
        'QuestionTitle': 'reprehenderit sunt',
        'QuestionAnswer': 'eu aliqua non',
        'QuestionType': 'est',
        'QuestionCheckoutStep': -1216062,
        'QuestionSorting': 49294546,
        'QuestionDiscountGroup': 32133139
      }
    ],
    'Referer': 'exercitation',
    'IP': 'ullam',
    'CustomerComments': 'consectetur aliqua',
    'InternalComments': 'in cupidatat consectetur tempor',
    'ExternalComments': 'tempor ad do'
  },
  {
    'InvoiceNumberPrefix': 'irure labore velit',
    'InvoiceNumber': -96466555,
    'OrderID': 28304233,
    'CustomerID': 43616002,
    'OrderDate': '1942-06-02T23:12:44.821Z',
    'OrderStatusID': -63353452,
    'LastUpdate': '1981-05-01T05:08:53.991Z',
    'UserID': 'amet nulla',
    'SalesPerson': 'cupidat',
    'ContinueURL': 'et Excepteur',
    'AlternateOrderID': 'dolore in esse eiusmod',
    'OrderType': 'sed Excepteur',
    'PaymentTokenID': -512606,
    'BillingFirstName': 'ipsum id eni',
    'BillingLastName': 'do Excepteur tempor',
    'BillingCompany': 'proident',
    'BillingAddress': 'non cillum',
    'BillingAddress2': 'ea ut dolor eiusmod',
    'BillingCity': 'voluptate sed Ut velit',
    'BillingState': 'eiusmod minim offic',
    'BillingZipCode': 'culpa com',
    'BillingCountry': 'elit in',
    'BillingPhoneNumber': 'irure ',
    'BillingEmail': 'sunt quis',
    'BillingPaymentMethod': 'elit irure et cupidatat dolor',
    'BillingOnLinePayment': true,
    'BillingPaymentMethodID': 'amet cupidatat commodo',
    'ShipmentList': [
      {
        'ShipmentID': -75534311,
        'ShipmentLastUpdate': '1973-10-03T10:54:53.523Z',
        'ShipmentBoxes': 90215229,
        'ShipmentInternalComment': 'sint dolore nulla proident',
        'ShipmentOrderStatus': -99575648,
        'ShipmentAddress': 'laborum et o',
        'ShipmentAddress2': '',
        'ShipmentAlias': 'in sit enim',
        'ShipmentCity': 'amet',
        'ShipmentCompany': 'minim dolore',
        'ShipmentCost': 98512803.141034,
        'ShipmentCountry': 'Lorem consequat p',
        'ShipmentEmail': 'anim enim ad labore',
        'ShipmentFirstName': 'cillum aute ullamco ut',
        'ShipmentLastName': 'cillum laborum reprehenderit',
        'ShipmentMethodID': -15618641,
        'ShipmentMethodName': 'Duis mollit',
        'ShipmentShippedDate': 'in in sint ea',
        'ShipmentPhone': 'Ut deserunt',
        'ShipmentState': 'laborum cupidatat',
        'ShipmentZipCode': 'mollit dolore',
        'ShipmentTax': 59871905.84280291,
        'ShipmentWeight': -89042580.86603454,
        'ShipmentTrackingCode': 'non sed Lorem dolore elit',
        'ShipmentUserID': 'c',
        'ShipmentNumber': 78364174,
        'ShipmentAddressTypeID': -31016548
      },
      {
        'ShipmentID': -22106488,
        'ShipmentLastUpdate': '1949-01-02T02:13:31.133Z',
        'ShipmentBoxes': -36253277,
        'ShipmentInternalComment': 'sed nostrud',
        'ShipmentOrderStatus': -24735857,
        'ShipmentAddress': 'vel',
        'ShipmentAddress2': 'sed quis ali',
        'ShipmentAlias': 'enim cu',
        'ShipmentCity': 'aliqua a',
        'ShipmentCompany': 'la',
        'ShipmentCost': -43696822.373221524,
        'ShipmentCountry': 'com',
        'ShipmentEmail': 'labore',
        'ShipmentFirstName': 'amet et commodo',
        'ShipmentLastName': 'ullamco Ut sint',
        'ShipmentMethodID': -27802018,
        'ShipmentMethodName': 'Duis nostrud ea ipsum',
        'ShipmentShippedDate': 'quis in',
        'ShipmentPhone': 'exercitation ',
        'ShipmentState': 'cillum consequat non ',
        'ShipmentZipCode': 'veniam',
        'ShipmentTax': 49954024.0418241,
        'ShipmentWeight': 31384069.300759256,
        'ShipmentTrackingCode': 'cupidatat sit commodo',
        'ShipmentUserID': 'exe',
        'ShipmentNumber': -30638364,
        'ShipmentAddressTypeID': -5408865
      },
      {
        'ShipmentID': 66237483,
        'ShipmentLastUpdate': '1977-07-11T21:01:47.554Z',
        'ShipmentBoxes': 36224542,
        'ShipmentInternalComment': 'ullamco enim ea',
        'ShipmentOrderStatus': -64565867,
        'ShipmentAddress': 'ex nulla',
        'ShipmentAddress2': 'ullamco',
        'ShipmentAlias': 'Ut magna e',
        'ShipmentCity': 'laborum',
        'ShipmentCompany': 'nostrud fugiat deserunt',
        'ShipmentCost': -3477024.8302291185,
        'ShipmentCountry': 'aliqua',
        'ShipmentEmail': 'Duis sunt non',
        'ShipmentFirstName': 'qui sed do',
        'ShipmentLastName': 'nulla dolor sint do',
        'ShipmentMethodID': 30769291,
        'ShipmentMethodName': 'minim non ad esse',
        'ShipmentShippedDate': 'ullamco',
        'ShipmentPhone': 'ut enim cillum',
        'ShipmentState': 'do veniam ',
        'ShipmentZipCode': 'ad in eu mollit',
        'ShipmentTax': 65882034.280216575,
        'ShipmentWeight': 37501227.93830988,
        'ShipmentTrackingCode': 'sunt ea',
        'ShipmentUserID': 'Duis re',
        'ShipmentNumber': -75744416,
        'ShipmentAddressTypeID': -27872338
      }
    ],
    'OrderItemList': [
      {
        'CatalogID': -76176859,
        'ItemIndexID': -65233547,
        'ItemID': 'veniam ullamco',
        'ItemShipmentID': 41745052,
        'ItemQuantity': 31099198.318119377,
        'ItemWarehouseID': -84799698,
        'ItemDescription': 'officia eiusmod Duis',
        'ItemUnitPrice': -29909535.877864897,
        'ItemWeight': 33840887.37908,
        'ItemOptionPrice': 48908818.03523821,
        'ItemAdditionalField1': 'in et',
        'ItemAdditionalField2': 'est non consectetur exercitation ea',
        'ItemAdditionalField3': 'incididunt Excepteur amet proident',
        'ItemPageAdded': 'laborum enim reprehenderit',
        'ItemDateAdded': '1959-11-18T13:44:29.752Z',
        'ItemUnitCost': 9519952.951499894,
        'ItemUnitStock': -17132426.511275336,
        'ItemOptions': 'quis velit dolore',
        'ItemCatalogIDOptions': 'adipisicing ipsum enim',
        'ItemSerial': 'Ut eiusmod sunt Duis',
        'ItemImage1': 'reprehenderit nostrud proident Ut',
        'ItemImage2': 'tempor id enim adipisicing',
        'ItemImage3': 'elit culpa',
        'ItemImage4': 'in',
        'ItemWarehouseLocation': 'cupidatat ex anim',
        'ItemWarehouseBin': 'velit exercitation',
        'ItemWarehouseAisle': 'mollit proident',
        'ItemWarehouseCustom': 'occaecat et velit labore',
        'RecurringOrderFrequency': -81496957
      },
      {
        'CatalogID': 31975709,
        'ItemIndexID': 49534992,
        'ItemID': 'nisi adipisicing',
        'ItemShipmentID': 58354111,
        'ItemQuantity': -70400607.51110029,
        'ItemWarehouseID': -89533016,
        'ItemDescription': 'dolor',
        'ItemUnitPrice': -33524205.982506625,
        'ItemWeight': 61165686.99799746,
        'ItemOptionPrice': 573776.9941572547,
        'ItemAdditionalField1': 'laborum pariatur fugiat occaecat',
        'ItemAdditionalField2': 'pariatur sint anim dolore velit',
        'ItemAdditionalField3': 'in eu ullamco',
        'ItemPageAdded': 'ut adipisicing eu magna',
        'ItemDateAdded': '1990-10-18T14:20:06.215Z',
        'ItemUnitCost': 73121691.50320965,
        'ItemUnitStock': 24971439.71137765,
        'ItemOptions': 'culpa sed magna',
        'ItemCatalogIDOptions': 'adipisicing dolore in qui',
        'ItemSerial': 'reprehenderit mo',
        'ItemImage1': 'adipisicing',
        'ItemImage2': 'amet',
        'ItemImage3': 'ad',
        'ItemImage4': 'nostrud sed sit',
        'ItemWarehouseLocation': 'aliqua sunt',
        'ItemWarehouseBin': 'mollit velit',
        'ItemWarehouseAisle': 'anim',
        'ItemWarehouseCustom': 'eu incididunt',
        'RecurringOrderFrequency': -75813641
      }
    ],
    'PromotionList': [
      {
        'PromotionName': 'nisi dolor ex',
        'Coupon': 'in',
        'DiscountAmount': -37234974.81361218
      },
      {
        'PromotionName': 'proident voluptate',
        'Coupon': 'ut l',
        'DiscountAmount': 63560753.51573479
      }
    ],
    'OrderDiscount': -87503431.40555045,
    'OrderDiscountCoupon': 48260123.79651025,
    'OrderDiscountPromotion': -35607797.59766684,
    'SalesTax': 45515686.124405116,
    'SalesTax2': -67639620.6122298,
    'SalesTax3': 92774566.76671466,
    'OrderAmount': -91682538.66174157,
    'AffiliateCommission': 67949431.42881599,
    'TransactionList': [
      {
        'TransactionIndexID': -53059591,
        'OrderID': -19175143,
        'TransactionID': 'qui in repreh',
        'TransactionDateTime': '2009-05-23T10:49:43.191Z',
        'TransactionType': 'qui la',
        'TransactionMethod': 'laboris in',
        'TransactionAmount': -92522334.64465638,
        'TransactionApproval': 'reprehenderit ea id',
        'TransactionReference': 'veniam adipisicing in pariatur',
        'TransactionGatewayID': 82911999,
        'TransactionCVV2': 'ut cupidatat dolor',
        'TransactionAVS': 'Excepteur ad',
        'TransactionResponseText': 'laboris sit cons',
        'TransactionResponseCode': 'enim aute voluptate',
        'TransactionCaptured': 41763721
      },
      {
        'TransactionIndexID': 93384992,
        'OrderID': 60312870,
        'TransactionID': 'officia in laborum',
        'TransactionDateTime': '1970-03-13T04:27:56.345Z',
        'TransactionType': 'irure ',
        'TransactionMethod': 'occaecat mollit consectetur',
        'TransactionAmount': 85282941.26571706,
        'TransactionApproval': 'veniam ',
        'TransactionReference': 'labore',
        'TransactionGatewayID': 94190153,
        'TransactionCVV2': 'Ut',
        'TransactionAVS': 'id nulla ad',
        'TransactionResponseText': 'reprehenderit est',
        'TransactionResponseCode': 'aliquip Excepteur',
        'TransactionCaptured': -3319976
      }
    ],
    'CardType': 'qui',
    'CardNumber': 'quis elit laborum culpa in',
    'CardName': 'non proident ex',
    'CardExpirationMonth': 'elit ci',
    'CardExpirationYear': 'non',
    'CardIssueNumber': 'pariatu',
    'CardStartMonth': 'aliq',
    'CardStartYear': 'anim',
    'CardAddress': 'sit pariatur nisi tempor officia',
    'CardVerification': 'ea dolore minim est consectetur',
    'RewardPoints': 'laboris in eu mollit Ut',
    'QuestionList': [
      {
        'QuestionAnswerIndexID': -88273327,
        'OrderID': 56327171,
        'QuestionID': -60671840,
        'QuestionTitle': 'labore laboris laborum adipisicing',
        'QuestionAnswer': 'ad',
        'QuestionType': 'dolor culp',
        'QuestionCheckoutStep': -65144092,
        'QuestionSorting': -84206885,
        'QuestionDiscountGroup': -67605489
      },
      {
        'QuestionAnswerIndexID': 39962008,
        'OrderID': -43501774,
        'QuestionID': -55025836,
        'QuestionTitle': 'nostrud incididunt',
        'QuestionAnswer': 'in velit',
        'QuestionType': 'Ut',
        'QuestionCheckoutStep': -65427217,
        'QuestionSorting': 45791423,
        'QuestionDiscountGroup': 72812794
      },
      {
        'QuestionAnswerIndexID': 25299399,
        'OrderID': -82937840,
        'QuestionID': -63572106,
        'QuestionTitle': 'enim',
        'QuestionAnswer': 'eu',
        'QuestionType': 'quis adi',
        'QuestionCheckoutStep': 75299816,
        'QuestionSorting': 66325485,
        'QuestionDiscountGroup': 67890177
      }
    ],
    'Referer': 'eiusmod est in ',
    'IP': 'in velit id ',
    'CustomerComments': 'minim ea',
    'InternalComments': 'ipsum',
    'ExternalComments': 'est'
  },
  {
    'InvoiceNumberPrefix': 'elit',
    'InvoiceNumber': 3511871,
    'OrderID': -41080394,
    'CustomerID': 65326804,
    'OrderDate': '1967-04-04T04:13:18.946Z',
    'OrderStatusID': -74432924,
    'LastUpdate': '1980-03-12T10:28:41.909Z',
    'UserID': 'id esse',
    'SalesPerson': 'consectetur sint aliquip',
    'ContinueURL': 'consectetur',
    'AlternateOrderID': 'minim aliqua qui ipsum commodo',
    'OrderType': 'culpa in dolor sunt',
    'PaymentTokenID': -84594309,
    'BillingFirstName': 'cupidatat',
    'BillingLastName': 'sunt adipisicing',
    'BillingCompany': 'culpa est',
    'BillingAddress': 'ex sed',
    'BillingAddress2': 'sint Excepteur quis',
    'BillingCity': 'occaecat',
    'BillingState': 'pariatur',
    'BillingZipCode': 'labore ',
    'BillingCountry': 'ullamco exercit',
    'BillingPhoneNumber': 'magna voluptate est',
    'BillingEmail': 'esse ut non cillum',
    'BillingPaymentMethod': 'mollit',
    'BillingOnLinePayment': false,
    'BillingPaymentMethodID': 'offici',
    'ShipmentList': [
      {
        'ShipmentID': -57655885,
        'ShipmentLastUpdate': '1980-02-29T10:32:23.989Z',
        'ShipmentBoxes': -20336232,
        'ShipmentInternalComment': 'fugiat esse et',
        'ShipmentOrderStatus': 80992361,
        'ShipmentAddress': 'tempor nulla ut veniam',
        'ShipmentAddress2': 'ut sed enim velit',
        'ShipmentAlias': 'eu laborum et dolore officia',
        'ShipmentCity': 'non irure reprehen',
        'ShipmentCompany': 'exercitation',
        'ShipmentCost': 42532560.0295189,
        'ShipmentCountry': 'voluptate tempor',
        'ShipmentEmail': 'culpa deserunt non ad al',
        'ShipmentFirstName': 'non occaecat',
        'ShipmentLastName': 'do commodo nulla magna',
        'ShipmentMethodID': 22822743,
        'ShipmentMethodName': 'aute',
        'ShipmentShippedDate': 'Duis in culpa laboris',
        'ShipmentPhone': 'sint nisi in sunt',
        'ShipmentState': 'esse Lorem ipsum dolor',
        'ShipmentZipCode': 'irure eiusmod ',
        'ShipmentTax': -76312000.4989271,
        'ShipmentWeight': 45238294.84789345,
        'ShipmentTrackingCode': 'reprehenderit ipsum dolore cillum',
        'ShipmentUserID': 'mollit nost',
        'ShipmentNumber': 2536514,
        'ShipmentAddressTypeID': -31769964
      },
      {
        'ShipmentID': -89932487,
        'ShipmentLastUpdate': '2013-10-04T14:32:45.904Z',
        'ShipmentBoxes': 43187426,
        'ShipmentInternalComment': 'est ad Ut',
        'ShipmentOrderStatus': 48055245,
        'ShipmentAddress': 'Lorem qui pariatur reprehenderit ullamco',
        'ShipmentAddress2': 'do voluptate',
        'ShipmentAlias': 'officia Excepteur ipsum',
        'ShipmentCity': 'pariatur in nostrud culpa',
        'ShipmentCompany': 'Duis ut labore',
        'ShipmentCost': 20311634.254693493,
        'ShipmentCountry': 'in qui',
        'ShipmentEmail': 'ipsum dolor consequat',
        'ShipmentFirstName': 'labore ut',
        'ShipmentLastName': 'Excepteur ut',
        'ShipmentMethodID': -93284627,
        'ShipmentMethodName': 'sit',
        'ShipmentShippedDate': 'quis deserunt in consec',
        'ShipmentPhone': 'mollit non do',
        'ShipmentState': '',
        'ShipmentZipCode': 'v',
        'ShipmentTax': 65568556.88255593,
        'ShipmentWeight': 5563196.355855733,
        'ShipmentTrackingCode': 'commodo ipsum ut eiusmod',
        'ShipmentUserID': 'dolore',
        'ShipmentNumber': 4550374,
        'ShipmentAddressTypeID': 90796816
      },
      {
        'ShipmentID': -50515181,
        'ShipmentLastUpdate': '1977-11-12T13:31:44.107Z',
        'ShipmentBoxes': 43053393,
        'ShipmentInternalComment': 'dolor est',
        'ShipmentOrderStatus': 99058941,
        'ShipmentAddress': 'minim fugiat est',
        'ShipmentAddress2': 'irure',
        'ShipmentAlias': 'ulla',
        'ShipmentCity': 'eu dolore',
        'ShipmentCompany': 'in commodo',
        'ShipmentCost': 6997667.812941581,
        'ShipmentCountry': 'irure nisi',
        'ShipmentEmail': 'sint velit',
        'ShipmentFirstName': 'eu',
        'ShipmentLastName': 'aliquip dolor nulla quis',
        'ShipmentMethodID': 55265006,
        'ShipmentMethodName': 'ex pariatur in eiusmod',
        'ShipmentShippedDate': 'anim ame',
        'ShipmentPhone': 'veniam voluptate non adipisicing',
        'ShipmentState': 'in',
        'ShipmentZipCode': 'labore elit sunt',
        'ShipmentTax': 92666407.64775631,
        'ShipmentWeight': 50318748.80327472,
        'ShipmentTrackingCode': 'ut in dolore',
        'ShipmentUserID': 'ex irure officia qui deserunt',
        'ShipmentNumber': -89172064,
        'ShipmentAddressTypeID': -66763595
      },
      {
        'ShipmentID': -80957978,
        'ShipmentLastUpdate': '2014-03-06T11:56:54.705Z',
        'ShipmentBoxes': 27704517,
        'ShipmentInternalComment': 'in ullamco',
        'ShipmentOrderStatus': -14554471,
        'ShipmentAddress': 'reprehenderit',
        'ShipmentAddress2': 'reprehenderit est a',
        'ShipmentAlias': 'dolore ut',
        'ShipmentCity': 'Duis dolore in',
        'ShipmentCompany': 'esse consequat in',
        'ShipmentCost': 46236040.09053874,
        'ShipmentCountry': 'incididunt tempor exercitation c',
        'ShipmentEmail': 'mollit Ut fugiat',
        'ShipmentFirstName': 'et dolor veniam laborum',
        'ShipmentLastName': 'consectetur in',
        'ShipmentMethodID': -63207151,
        'ShipmentMethodName': 'sit esse',
        'ShipmentShippedDate': 'non nisi',
        'ShipmentPhone': 'dolor cillum voluptate ex Excep',
        'ShipmentState': 'laborum irure in id',
        'ShipmentZipCode': 'proident tempor a',
        'ShipmentTax': -52426586.45180453,
        'ShipmentWeight': 71684741.53629437,
        'ShipmentTrackingCode': 'velit veniam tempor occaecat',
        'ShipmentUserID': 'Excepteur mollit',
        'ShipmentNumber': 22174564,
        'ShipmentAddressTypeID': -76566576
      },
      {
        'ShipmentID': 45264546,
        'ShipmentLastUpdate': '1939-02-26T12:31:06.419Z',
        'ShipmentBoxes': 88021797,
        'ShipmentInternalComment': 'irure labore laborum velit reprehe',
        'ShipmentOrderStatus': -13403908,
        'ShipmentAddress': 'voluptate sit dolore',
        'ShipmentAddress2': 'veniam minim aute do Lorem',
        'ShipmentAlias': 'amet tempor est voluptate adipisicing',
        'ShipmentCity': 'occaecat',
        'ShipmentCompany': 'commodo amet et',
        'ShipmentCost': 907170.973614946,
        'ShipmentCountry': 'eiusmod aliquip laboris adipisicing',
        'ShipmentEmail': 'dolore sint',
        'ShipmentFirstName': 'sunt dolore',
        'ShipmentLastName': 'laboris labore i',
        'ShipmentMethodID': -77408056,
        'ShipmentMethodName': 'dolor ad',
        'ShipmentShippedDate': 'laboris in consequat',
        'ShipmentPhone': 'Lorem ut',
        'ShipmentState': 'incididunt',
        'ShipmentZipCode': 'commodo tempor a',
        'ShipmentTax': 85698145.32407984,
        'ShipmentWeight': 58984114.928544015,
        'ShipmentTrackingCode': 'in amet culpa velit aliqua',
        'ShipmentUserID': 'dolore exercitation irure consecte',
        'ShipmentNumber': -41529112,
        'ShipmentAddressTypeID': -34654261
      }
    ],
    'OrderItemList': [
      {
        'CatalogID': 54027729,
        'ItemIndexID': -98003854,
        'ItemID': 'ex voluptate ut ',
        'ItemShipmentID': -27903302,
        'ItemQuantity': -9951701.124734536,
        'ItemWarehouseID': -42220,
        'ItemDescription': 'elit',
        'ItemUnitPrice': -92988571.39427973,
        'ItemWeight': 93680280.66505575,
        'ItemOptionPrice': 51101606.139072716,
        'ItemAdditionalField1': 'dolor',
        'ItemAdditionalField2': 'en',
        'ItemAdditionalField3': 'elit irure nulla Lorem',
        'ItemPageAdded': 'occaecat cillum consectetur',
        'ItemDateAdded': '1965-04-23T12:53:34.274Z',
        'ItemUnitCost': 84908088.82804766,
        'ItemUnitStock': 8249118.302893251,
        'ItemOptions': 'est sed ut aute ipsum',
        'ItemCatalogIDOptions': 'sit ipsum Lorem deserunt non',
        'ItemSerial': 'aliquip aliqua sed',
        'ItemImage1': 'consectetur in',
        'ItemImage2': 'nulla laborum esse',
        'ItemImage3': 'minim veniam labore aliqua',
        'ItemImage4': 'occaecat do consequat incididunt',
        'ItemWarehouseLocation': 'nisi m',
        'ItemWarehouseBin': 'reprehenderit elit',
        'ItemWarehouseAisle': 'Ut proident',
        'ItemWarehouseCustom': 'dolor tempor',
        'RecurringOrderFrequency': -79170535
      },
      {
        'CatalogID': -66875153,
        'ItemIndexID': 26528792,
        'ItemID': 'officia eu',
        'ItemShipmentID': -42862935,
        'ItemQuantity': 63493027.76884037,
        'ItemWarehouseID': 85117044,
        'ItemDescription': 'elit tempor',
        'ItemUnitPrice': 98696226.97168875,
        'ItemWeight': -24293746.55758342,
        'ItemOptionPrice': 54846384.52342567,
        'ItemAdditionalField1': 'sunt fugiat',
        'ItemAdditionalField2': 'Ut sint incididunt sit',
        'ItemAdditionalField3': 'Lorem eiusmod culpa in',
        'ItemPageAdded': 'nulla ipsum deserunt velit',
        'ItemDateAdded': '1977-02-18T13:48:55.289Z',
        'ItemUnitCost': -98370520.9022371,
        'ItemUnitStock': -81786287.20564914,
        'ItemOptions': 'consequat aliquip tempor pariatur',
        'ItemCatalogIDOptions': 'occaecat ea laborum',
        'ItemSerial': 'nulla',
        'ItemImage1': 'dolore sunt ex',
        'ItemImage2': 'exercitation',
        'ItemImage3': 'deserunt esse in occaecat sint',
        'ItemImage4': 'c',
        'ItemWarehouseLocation': 'officia esse Lorem sit est',
        'ItemWarehouseBin': 'anim non ut',
        'ItemWarehouseAisle': 'ut proident qui fugiat',
        'ItemWarehouseCustom': 'pariatur culpa in amet',
        'RecurringOrderFrequency': 60037754
      },
      {
        'CatalogID': -72467428,
        'ItemIndexID': -94840581,
        'ItemID': 'culpa aliquip velit',
        'ItemShipmentID': 94427435,
        'ItemQuantity': 93273963.84646237,
        'ItemWarehouseID': 19357089,
        'ItemDescription': 'dolore Lorem Duis ullamco',
        'ItemUnitPrice': 30976380.943352133,
        'ItemWeight': -11141796.558957353,
        'ItemOptionPrice': 40064481.877669156,
        'ItemAdditionalField1': 'cillum deserunt cupi',
        'ItemAdditionalField2': 'do quis cupidatat',
        'ItemAdditionalField3': 'ea amet eu',
        'ItemPageAdded': 'eu dolore pariatur nisi aliquip',
        'ItemDateAdded': '1957-05-24T22:43:13.677Z',
        'ItemUnitCost': -15045224.179521859,
        'ItemUnitStock': -80133958.25298569,
        'ItemOptions': 'ad nisi',
        'ItemCatalogIDOptions': 'sint laborum in exercitation',
        'ItemSerial': 'ad dolor sit',
        'ItemImage1': 'eu consequat',
        'ItemImage2': 'sed incididunt dolore ut',
        'ItemImage3': 'dolor consectetur',
        'ItemImage4': 'Duis',
        'ItemWarehouseLocation': 'reprehenderit ip',
        'ItemWarehouseBin': 'ex occaecat deserunt',
        'ItemWarehouseAisle': 'Except',
        'ItemWarehouseCustom': 'minim occaecat',
        'RecurringOrderFrequency': 23086447
      }
    ],
    'PromotionList': [
      {
        'PromotionName': 'cupidatat',
        'Coupon': 'esse laboris aute id',
        'DiscountAmount': 6383747.817627013
      },
      {
        'PromotionName': 'dolore ipsum in',
        'Coupon': 'voluptate d',
        'DiscountAmount': -34111350.6125573
      },
      {
        'PromotionName': 'cillum qui',
        'Coupon': 'occaecat ullamco sint c',
        'DiscountAmount': -18813865.89607641
      },
      {
        'PromotionName': 'est in culpa nulla',
        'Coupon': 'dolor tempor et qui non',
        'DiscountAmount': 85872176.8960428
      }
    ],
    'OrderDiscount': 65590759.062390715,
    'OrderDiscountCoupon': 69580913.14815772,
    'OrderDiscountPromotion': -80005645.27731755,
    'SalesTax': -8627321.955712393,
    'SalesTax2': 21540389.726631477,
    'SalesTax3': -81760222.7659179,
    'OrderAmount': 45625094.24915892,
    'AffiliateCommission': 63642984.41745767,
    'TransactionList': [
      {
        'TransactionIndexID': 52214541,
        'OrderID': 43444910,
        'TransactionID': 'laboris officia ipsum incididunt',
        'TransactionDateTime': '1982-07-28T12:10:23.108Z',
        'TransactionType': 'v',
        'TransactionMethod': 'id deserunt',
        'TransactionAmount': 41805713.85004175,
        'TransactionApproval': 'laboris sint voluptate',
        'TransactionReference': 'incididunt in minim deserunt et',
        'TransactionGatewayID': 41368664,
        'TransactionCVV2': 'elit ullamco',
        'TransactionAVS': 'laborum eiusmod pariatur occaecat exercitation',
        'TransactionResponseText': 'dolore est Excepteur',
        'TransactionResponseCode': 'quis aliquip minim dolore labo',
        'TransactionCaptured': 62115855
      },
      {
        'TransactionIndexID': 70915911,
        'OrderID': -29397158,
        'TransactionID': 'in pari',
        'TransactionDateTime': '2013-10-11T11:36:01.883Z',
        'TransactionType': 'Lorem',
        'TransactionMethod': 'quis labore',
        'TransactionAmount': 63713972.441210985,
        'TransactionApproval': 'Ut in Duis',
        'TransactionReference': 'cupidatat enim',
        'TransactionGatewayID': 23620603,
        'TransactionCVV2': 'laboris velit',
        'TransactionAVS': 'esse adipisicing exercitation ut',
        'TransactionResponseText': 'nisi',
        'TransactionResponseCode': 'incididunt',
        'TransactionCaptured': -55095616
      }
    ],
    'CardType': 'Ut nisi nulla',
    'CardNumber': 'amet non dolor id culpa',
    'CardName': 'ea occaecat deserunt',
    'CardExpirationMonth': 'magn',
    'CardExpirationYear': '',
    'CardIssueNumber': 'c',
    'CardStartMonth': '',
    'CardStartYear': 'in Ut cill',
    'CardAddress': 'officia nulla',
    'CardVerification': 'velit pariatur',
    'RewardPoints': 'dolor eu fugiat eiusmod',
    'QuestionList': [
      {
        'QuestionAnswerIndexID': 87442039,
        'OrderID': -99518426,
        'QuestionID': -9046733,
        'QuestionTitle': 'eiusmod inc',
        'QuestionAnswer': 'incididunt et enim voluptate',
        'QuestionType': 'et',
        'QuestionCheckoutStep': -53596664,
        'QuestionSorting': 76296945,
        'QuestionDiscountGroup': -67065558
      },
      {
        'QuestionAnswerIndexID': 55666468,
        'OrderID': 98608807,
        'QuestionID': -66889829,
        'QuestionTitle': 'aliquip esse adipisicing',
        'QuestionAnswer': 'Duis labore qui',
        'QuestionType': 'ani',
        'QuestionCheckoutStep': -97023586,
        'QuestionSorting': 26776687,
        'QuestionDiscountGroup': 26912151
      },
      {
        'QuestionAnswerIndexID': -96691986,
        'OrderID': -87131435,
        'QuestionID': -77425302,
        'QuestionTitle': 'reprehenderit in',
        'QuestionAnswer': 'in',
        'QuestionType': 'dolor ci',
        'QuestionCheckoutStep': 17547138,
        'QuestionSorting': -16528726,
        'QuestionDiscountGroup': 95932684
      },
      {
        'QuestionAnswerIndexID': 90959120,
        'OrderID': 95272366,
        'QuestionID': -29558792,
        'QuestionTitle': 'ad sed mollit venia',
        'QuestionAnswer': 'nostrud adipisicing culp',
        'QuestionType': 'irure la',
        'QuestionCheckoutStep': 67709569,
        'QuestionSorting': 37144696,
        'QuestionDiscountGroup': 63815770
      }
    ],
    'Referer': 'in adipisicing magna tempor',
    'IP': 'elit',
    'CustomerComments': 'sunt amet sed ut',
    'InternalComments': 'ut',
    'ExternalComments': 'amet laborum dolor'
  },
  {
    'InvoiceNumberPrefix': 'cupidatat cillum',
    'InvoiceNumber': 92477144,
    'OrderID': -54042513,
    'CustomerID': -17733074,
    'OrderDate': '1958-12-07T07:55:04.507Z',
    'OrderStatusID': -99999426,
    'LastUpdate': '2015-12-07T17:38:41.166Z',
    'UserID': 'sint ',
    'SalesPerson': 'sint',
    'ContinueURL': 'irure nisi nulla',
    'AlternateOrderID': 'dolore ut enim',
    'OrderType': 'anim fugiat',
    'PaymentTokenID': -58716628,
    'BillingFirstName': 'culpa reprehenderit dolore cillum',
    'BillingLastName': 'et',
    'BillingCompany': 'quis nulla',
    'BillingAddress': 'mollit est minim',
    'BillingAddress2': 'Excepteur qui u',
    'BillingCity': 'dolore in',
    'BillingState': 'ut aliqua',
    'BillingZipCode': 'non u',
    'BillingCountry': 'magna veniam irure deserunt officia',
    'BillingPhoneNumber': 'elit fug',
    'BillingEmail': 'qu',
    'BillingPaymentMethod': 'anim et qui sit incididunt',
    'BillingOnLinePayment': true,
    'BillingPaymentMethodID': 'aute sint elit veniam ex',
    'ShipmentList': [
      {
        'ShipmentID': -62076984,
        'ShipmentLastUpdate': '1940-03-28T02:41:56.300Z',
        'ShipmentBoxes': 46499318,
        'ShipmentInternalComment': 'Duis laboris aliquip sed incididunt',
        'ShipmentOrderStatus': 18609375,
        'ShipmentAddress': 'Duis est ex dolor adipisicing',
        'ShipmentAddress2': 'aute voluptate magna dolore laboris',
        'ShipmentAlias': 'sint ut',
        'ShipmentCity': 'in dolo',
        'ShipmentCompany': 'occaecat in',
        'ShipmentCost': -7069290.034865454,
        'ShipmentCountry': 'deserunt irure Excepteur ',
        'ShipmentEmail': 'officia ani',
        'ShipmentFirstName': 'mollit minim',
        'ShipmentLastName': 'exercitation do',
        'ShipmentMethodID': -51186960,
        'ShipmentMethodName': 'ut culpa',
        'ShipmentShippedDate': 'pariatur fugiat n',
        'ShipmentPhone': 'cupidatat dolore deserunt',
        'ShipmentState': 'lab',
        'ShipmentZipCode': 'vo',
        'ShipmentTax': 61451543.17298585,
        'ShipmentWeight': -40722978.28329443,
        'ShipmentTrackingCode': 'aute est occaecat',
        'ShipmentUserID': 'sint enim ip',
        'ShipmentNumber': -20026151,
        'ShipmentAddressTypeID': -46332553
      }
    ],
    'OrderItemList': [
      {
        'CatalogID': -92210301,
        'ItemIndexID': 73314949,
        'ItemID': 'nisi occaecat',
        'ItemShipmentID': 33908369,
        'ItemQuantity': -48552444.09323749,
        'ItemWarehouseID': 72567927,
        'ItemDescription': 'aliquip do mollit',
        'ItemUnitPrice': 75397266.27934447,
        'ItemWeight': 3106109.6711200178,
        'ItemOptionPrice': 55824990.81109148,
        'ItemAdditionalField1': 'in minim',
        'ItemAdditionalField2': 'dolor consequat in elit',
        'ItemAdditionalField3': 'occaecat',
        'ItemPageAdded': 'cupidatat aliquip do dolore',
        'ItemDateAdded': '1976-02-16T10:10:38.334Z',
        'ItemUnitCost': 85068971.75885269,
        'ItemUnitStock': -80468309.02573161,
        'ItemOptions': 'voluptate adipisicing labore',
        'ItemCatalogIDOptions': 'ad aliqua do',
        'ItemSerial': 'officia cupidatat occaecat',
        'ItemImage1': 'irure',
        'ItemImage2': 'aliquip laboris',
        'ItemImage3': 'u',
        'ItemImage4': 'fugiat non Duis laborum anim',
        'ItemWarehouseLocation': 'Ut do incididunt',
        'ItemWarehouseBin': 'tempor de',
        'ItemWarehouseAisle': 'officia in tempor qui',
        'ItemWarehouseCustom': 'veniam esse qui',
        'RecurringOrderFrequency': -31987263
      },
      {
        'CatalogID': -17656637,
        'ItemIndexID': -69166006,
        'ItemID': 's',
        'ItemShipmentID': -741072,
        'ItemQuantity': 70173437.09483206,
        'ItemWarehouseID': -69458285,
        'ItemDescription': 'adipisicing dolore elit',
        'ItemUnitPrice': -41155910.47759697,
        'ItemWeight': 97090982.15038586,
        'ItemOptionPrice': -23016677.21172072,
        'ItemAdditionalField1': 'velit aute',
        'ItemAdditionalField2': 'Du',
        'ItemAdditionalField3': 'commodo ex',
        'ItemPageAdded': 'sit consectetur qui',
        'ItemDateAdded': '1986-10-24T04:30:08.789Z',
        'ItemUnitCost': 20456671.916045457,
        'ItemUnitStock': 19501469.922965154,
        'ItemOptions': 'irure fugiat in',
        'ItemCatalogIDOptions': 'veniam cillum',
        'ItemSerial': 'fugiat',
        'ItemImage1': 'et sunt dolore',
        'ItemImage2': 'Excepteur nostrud in laboris',
        'ItemImage3': 'nulla dolor aliquip sunt tempor',
        'ItemImage4': 'irure non sit Lore',
        'ItemWarehouseLocation': 'ut ea',
        'ItemWarehouseBin': 'sed anim',
        'ItemWarehouseAisle': 'laboris non voluptate',
        'ItemWarehouseCustom': 'et elit',
        'RecurringOrderFrequency': -5674127
      }
    ],
    'PromotionList': [
      {
        'PromotionName': 'officia in eiusmod',
        'Coupon': 'officia aliquip',
        'DiscountAmount': -49691171.78220928
      },
      {
        'PromotionName': 'nulla officia',
        'Coupon': 'cillu',
        'DiscountAmount': -43699883.42153781
      },
      {
        'PromotionName': 'consequat incididunt aliqua qui',
        'Coupon': 'Ut non magna enim',
        'DiscountAmount': -97540733.05081245
      },
      {
        'PromotionName': 'sit in in dolore',
        'Coupon': 'irure dolore occaecat dolo',
        'DiscountAmount': 41788692.95116642
      },
      {
        'PromotionName': 'consequat sit dolor officia magna',
        'Coupon': 'dolor amet nulla mollit',
        'DiscountAmount': 85654010.36456573
      }
    ],
    'OrderDiscount': -51549056.47356651,
    'OrderDiscountCoupon': -13867467.926399127,
    'OrderDiscountPromotion': -4694454.236185268,
    'SalesTax': 77153734.66736236,
    'SalesTax2': -58670697.40840551,
    'SalesTax3': -34385486.885960326,
    'OrderAmount': 96118457.02192992,
    'AffiliateCommission': 10935405.667224571,
    'TransactionList': [
      {
        'TransactionIndexID': -16222795,
        'OrderID': -71599606,
        'TransactionID': '',
        'TransactionDateTime': '1999-11-26T07:11:56.340Z',
        'TransactionType': 'Lorem al',
        'TransactionMethod': 'velit dolor',
        'TransactionAmount': 80302857.33108813,
        'TransactionApproval': 'in consequat',
        'TransactionReference': 'culpa Lorem adipisicing',
        'TransactionGatewayID': 73736045,
        'TransactionCVV2': 'consec',
        'TransactionAVS': 'commodo',
        'TransactionResponseText': 'Lorem commodo consectetur',
        'TransactionResponseCode': 'enim in tem',
        'TransactionCaptured': 72083940
      },
      {
        'TransactionIndexID': 36588982,
        'OrderID': 34510118,
        'TransactionID': 'culpa paria',
        'TransactionDateTime': '1953-09-01T17:27:28.878Z',
        'TransactionType': 'conse',
        'TransactionMethod': 'occaecat qui',
        'TransactionAmount': -5512703.19462724,
        'TransactionApproval': 'eiusmod in',
        'TransactionReference': 'sint adipisicing',
        'TransactionGatewayID': 66413045,
        'TransactionCVV2': 'in',
        'TransactionAVS': 'proident irure dolore',
        'TransactionResponseText': 'commodo nulla dolore in',
        'TransactionResponseCode': 'aute eiusmod',
        'TransactionCaptured': 16381170
      },
      {
        'TransactionIndexID': -53092159,
        'OrderID': 55152738,
        'TransactionID': 'anim dolore',
        'TransactionDateTime': '2015-12-11T13:28:47.260Z',
        'TransactionType': 'occaecat c',
        'TransactionMethod': 'cupid',
        'TransactionAmount': 30000059.48280701,
        'TransactionApproval': 'Excepte',
        'TransactionReference': 'in eu qui laborum',
        'TransactionGatewayID': -54675243,
        'TransactionCVV2': 'reprehenderit fugiat adipisicing anim sed',
        'TransactionAVS': 'esse in eiusmod nostrud',
        'TransactionResponseText': 'enim tempor labore nisi',
        'TransactionResponseCode': 'esse laboris',
        'TransactionCaptured': 86786886
      },
      {
        'TransactionIndexID': -69464449,
        'OrderID': 43265326,
        'TransactionID': 'aliquip Duis i',
        'TransactionDateTime': '1952-08-23T00:01:24.661Z',
        'TransactionType': 'sunt d',
        'TransactionMethod': 'sint amet in fugiat',
        'TransactionAmount': -86846582.38700363,
        'TransactionApproval': 'enim adipisicing consequat irure labore',
        'TransactionReference': 'id',
        'TransactionGatewayID': 4873989,
        'TransactionCVV2': 'ipsum et dolore commodo',
        'TransactionAVS': 'ullamco enim',
        'TransactionResponseText': 'pariatur eu sint fugiat',
        'TransactionResponseCode': 'dolor sunt in',
        'TransactionCaptured': -45012546
      },
      {
        'TransactionIndexID': -44554747,
        'OrderID': -43577249,
        'TransactionID': 'voluptate esse',
        'TransactionDateTime': '1991-05-25T09:16:30.040Z',
        'TransactionType': 'quis es',
        'TransactionMethod': 'dolore',
        'TransactionAmount': 70408663.62661058,
        'TransactionApproval': 'sint anim',
        'TransactionReference': 'in adipisicing nostrud commodo',
        'TransactionGatewayID': -33507885,
        'TransactionCVV2': 'pariat',
        'TransactionAVS': 'sed est occaecat non',
        'TransactionResponseText': 'enim cupidatat',
        'TransactionResponseCode': 'ut mollit dolor conse',
        'TransactionCaptured': -77983438
      }
    ],
    'CardType': 'eiusmod labore sint a',
    'CardNumber': 'anim sed aliquip proident',
    'CardName': 'adipisicing in',
    'CardExpirationMonth': 'sint ex',
    'CardExpirationYear': 'Ut qu',
    'CardIssueNumber': 'ex',
    'CardStartMonth': 'cupidat',
    'CardStartYear': 'fu',
    'CardAddress': 'Excepteur velit',
    'CardVerification': 'pariatur',
    'RewardPoints': 'in',
    'QuestionList': [
      {
        'QuestionAnswerIndexID': 91553239,
        'OrderID': 11974863,
        'QuestionID': -26011567,
        'QuestionTitle': 'par',
        'QuestionAnswer': 'magna ut',
        'QuestionType': 'in dolore ',
        'QuestionCheckoutStep': 35485531,
        'QuestionSorting': -10384250,
        'QuestionDiscountGroup': -80301135
      },
      {
        'QuestionAnswerIndexID': 13550554,
        'OrderID': -36952673,
        'QuestionID': -72523456,
        'QuestionTitle': 'minim',
        'QuestionAnswer': 'proident nisi',
        'QuestionType': 'sed',
        'QuestionCheckoutStep': -78360800,
        'QuestionSorting': -28018721,
        'QuestionDiscountGroup': -54191726
      },
      {
        'QuestionAnswerIndexID': -1393590,
        'OrderID': 34131353,
        'QuestionID': 62619365,
        'QuestionTitle': 'reprehenderit',
        'QuestionAnswer': 'ipsum',
        'QuestionType': 'est ',
        'QuestionCheckoutStep': -44743506,
        'QuestionSorting': 7812165,
        'QuestionDiscountGroup': -43835500
      },
      {
        'QuestionAnswerIndexID': 76038125,
        'OrderID': -35645361,
        'QuestionID': -72115760,
        'QuestionTitle': 'voluptate exercitation laboris',
        'QuestionAnswer': 'commodo',
        'QuestionType': 'incid',
        'QuestionCheckoutStep': 15636323,
        'QuestionSorting': -55692084,
        'QuestionDiscountGroup': 69476329
      }
    ],
    'Referer': 'Ut ut',
    'IP': 'quis sunt',
    'CustomerComments': 'pariatur fugiat qui ut',
    'InternalComments': 'velit dolore ex nostrud',
    'ExternalComments': 'ullamco enim in'
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificOrderById()
{
	ar request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'InvoiceNumberPrefix': 'ut nisi',
  'InvoiceNumber': 49354586,
  'OrderID': 52008168,
  'CustomerID': 53395780,
  'OrderDate': '2009-08-01T09:34:57.272Z',
  'OrderStatusID': 86306888,
  'LastUpdate': '2015-01-02T01:33:06.231Z',
  'UserID': 'irure dolore consequ',
  'SalesPerson': 'venia',
  'ContinueURL': 'incididunt laboris ut aliqua',
  'AlternateOrderID': 'magna ut in',
  'OrderType': 'ut ad elit eu',
  'PaymentTokenID': 52231298,
  'BillingFirstName': 'ut sed',
  'BillingLastName': 'v',
  'BillingCompany': 'enim aliqua sit',
  'BillingAddress': 'et aute voluptate cillum sint',
  'BillingAddress2': 'nisi minim',
  'BillingCity': 'ad ex sit ve',
  'BillingState': 'enim sed veniam',
  'BillingZipCode': 'nisi id ven',
  'BillingCountry': 'irure',
  'BillingPhoneNumber': 'aute exercitation ali',
  'BillingEmail': 'eiusmod ',
  'BillingPaymentMethod': 'aliquip',
  'BillingOnLinePayment': false,
  'BillingPaymentMethodID': 'incididunt qui',
  'ShipmentList': [
    {
      'ShipmentID': 3346331,
      'ShipmentLastUpdate': '1979-12-19T13:00:29.713Z',
      'ShipmentBoxes': 60251433,
      'ShipmentInternalComment': 'non en',
      'ShipmentOrderStatus': 11822790,
      'ShipmentAddress': 'officia Duis esse',
      'ShipmentAddress2': 'Except',
      'ShipmentAlias': 'officia incididunt commodo',
      'ShipmentCity': 'ullamco ea Ex',
      'ShipmentCompany': 'do exercitation ut ut',
      'ShipmentCost': 91721256.44802535,
      'ShipmentCountry': 'dolore veniam ani',
      'ShipmentEmail': 'ut Duis nisi',
      'ShipmentFirstName': 'officia reprehenderi',
      'ShipmentLastName': 'deserunt dolore Ut laborum',
      'ShipmentMethodID': 51942148,
      'ShipmentMethodName': 'dolor id quis',
      'ShipmentShippedDate': 'fug',
      'ShipmentPhone': 'consectetur enim tempor',
      'ShipmentState': 'ut dolore conseq',
      'ShipmentZipCode': 'deser',
      'ShipmentTax': 58022427.846358,
      'ShipmentWeight': -67256530.37355594,
      'ShipmentTrackingCode': 'p',
      'ShipmentUserID': 'do',
      'ShipmentNumber': 4896140,
      'ShipmentAddressTypeID': -26724305
    },
    {
      'ShipmentID': 81646968,
      'ShipmentLastUpdate': '1964-07-11T20:13:39.509Z',
      'ShipmentBoxes': -69490591,
      'ShipmentInternalComment': 'magna ea laborum occaecat',
      'ShipmentOrderStatus': -73823783,
      'ShipmentAddress': 'voluptate do in',
      'ShipmentAddress2': 'cillum in',
      'ShipmentAlias': 'laborum ut elit min',
      'ShipmentCity': 'ex proident lab',
      'ShipmentCompany': 'culpa quis esse',
      'ShipmentCost': -60281542.0722274,
      'ShipmentCountry': 'ut ipsum',
      'ShipmentEmail': 'sit nulla cupidatat est labore',
      'ShipmentFirstName': 'sint eiusmod Excepteur consectetur',
      'ShipmentLastName': 'ullamco sit nostrud ',
      'ShipmentMethodID': 33985308,
      'ShipmentMethodName': 'deserunt irure t',
      'ShipmentShippedDate': 'esse labore labo',
      'ShipmentPhone': 'pariatur',
      'ShipmentState': 'Lorem',
      'ShipmentZipCode': 'quis id laborum',
      'ShipmentTax': 26825906.53533344,
      'ShipmentWeight': 92125919.6777648,
      'ShipmentTrackingCode': 'conseq',
      'ShipmentUserID': 'ex sint',
      'ShipmentNumber': -64743039,
      'ShipmentAddressTypeID': 23355690
    }
  ],
  'OrderItemList': [
    {
      'CatalogID': -83444491,
      'ItemIndexID': 93627056,
      'ItemID': 'mollit cillum proident sit aute',
      'ItemShipmentID': 69613711,
      'ItemQuantity': 80560995.1640541,
      'ItemWarehouseID': 81976453,
      'ItemDescription': 'nostrud culpa aute esse',
      'ItemUnitPrice': -36493945.72869733,
      'ItemWeight': -29012366.90303825,
      'ItemOptionPrice': -71411640.92579864,
      'ItemAdditionalField1': 'dolore commodo id sint',
      'ItemAdditionalField2': 'adipisicing magna',
      'ItemAdditionalField3': 'esse id in',
      'ItemPageAdded': 'culpa ea sunt',
      'ItemDateAdded': '1938-11-14T23:56:30.085Z',
      'ItemUnitCost': 78064204.65259859,
      'ItemUnitStock': -23471338.793139383,
      'ItemOptions': 'tempor',
      'ItemCatalogIDOptions': 'non ad sit',
      'ItemSerial': 'Excepteur irure ut enim',
      'ItemImage1': 'ea ad cupid',
      'ItemImage2': 'reprehenderit officia',
      'ItemImage3': 'exercitation tempor',
      'ItemImage4': 'non exercitation',
      'ItemWarehouseLocation': 'ad occaecat sit dolore',
      'ItemWarehouseBin': 'cupidatat mollit Lorem sed labore',
      'ItemWarehouseAisle': 'sunt laboris in',
      'ItemWarehouseCustom': 'Duis',
      'RecurringOrderFrequency': -67066683
    },
    {
      'CatalogID': 62361385,
      'ItemIndexID': -83057522,
      'ItemID': 'mollit eiusmod',
      'ItemShipmentID': -65951493,
      'ItemQuantity': 77397149.45815015,
      'ItemWarehouseID': 37939857,
      'ItemDescription': 'tempor dolor consectetur',
      'ItemUnitPrice': -65916995.376535945,
      'ItemWeight': -5190484.484991625,
      'ItemOptionPrice': -81774787.11960791,
      'ItemAdditionalField1': 'ut ad sint non minim',
      'ItemAdditionalField2': 'adipisicing cupidatat veniam dolore id',
      'ItemAdditionalField3': 'anim laboris',
      'ItemPageAdded': 'qui id',
      'ItemDateAdded': '1951-06-26T18:00:20.934Z',
      'ItemUnitCost': 51274024.10073972,
      'ItemUnitStock': -40561168.727826536,
      'ItemOptions': 'dolore elit laboris',
      'ItemCatalogIDOptions': 'Excepteur id',
      'ItemSerial': 'ipsum amet',
      'ItemImage1': 'deserunt in commodo aliqua sit',
      'ItemImage2': 'ad nulla dolore',
      'ItemImage3': 'dolor laboris ipsum',
      'ItemImage4': 'sed Excepteur',
      'ItemWarehouseLocation': 'dolore',
      'ItemWarehouseBin': 'elit pariatur qui',
      'ItemWarehouseAisle': 'Lorem qui cillum',
      'ItemWarehouseCustom': 'sunt',
      'RecurringOrderFrequency': -83266972
    },
    {
      'CatalogID': 3643687,
      'ItemIndexID': 32321515,
      'ItemID': 'minim consectetur',
      'ItemShipmentID': 8603764,
      'ItemQuantity': -69965588.64699107,
      'ItemWarehouseID': 72721031,
      'ItemDescription': 'anim aute eu',
      'ItemUnitPrice': -3886227.5397531837,
      'ItemWeight': 70190125.10208043,
      'ItemOptionPrice': -75515804.46816918,
      'ItemAdditionalField1': 'velit esse dolore Lorem pariatur',
      'ItemAdditionalField2': 'officia Ut',
      'ItemAdditionalField3': 'ut est nisi',
      'ItemPageAdded': 'sunt eiusmod est',
      'ItemDateAdded': '2016-06-17T03:57:35.495Z',
      'ItemUnitCost': 75277642.95174065,
      'ItemUnitStock': -62732862.536818154,
      'ItemOptions': 'ex qui nulla consectetur',
      'ItemCatalogIDOptions': 'Excepteur quis exercitation',
      'ItemSerial': 'est',
      'ItemImage1': 'do',
      'ItemImage2': 'Lorem exercitation',
      'ItemImage3': 'esse laborum sed dolore ullamco',
      'ItemImage4': 'occaecat',
      'ItemWarehouseLocation': 'est dolore Excepteur veniam officia',
      'ItemWarehouseBin': 'aliquip dolor',
      'ItemWarehouseAisle': 'sunt cupidatat Excepteur minim',
      'ItemWarehouseCustom': 'consequat',
      'RecurringOrderFrequency': 81154494
    },
    {
      'CatalogID': -75704141,
      'ItemIndexID': -41683007,
      'ItemID': 'ut exercita',
      'ItemShipmentID': 65695666,
      'ItemQuantity': 5111110.431957096,
      'ItemWarehouseID': 45064972,
      'ItemDescription': 'id fugiat commodo esse dolore',
      'ItemUnitPrice': 71025790.39173499,
      'ItemWeight': -64614348.62978894,
      'ItemOptionPrice': -48554107.77758879,
      'ItemAdditionalField1': 'cillum enim aliqua',
      'ItemAdditionalField2': 'nisi sunt',
      'ItemAdditionalField3': 'aliqua la',
      'ItemPageAdded': 'minim reprehenderit eiusmod',
      'ItemDateAdded': '1960-09-02T18:30:07.708Z',
      'ItemUnitCost': 80547474.61091542,
      'ItemUnitStock': 12444962.755019963,
      'ItemOptions': 'adipisicing labo',
      'ItemCatalogIDOptions': 'sint dolor est',
      'ItemSerial': 'eiusmod p',
      'ItemImage1': 'et nisi in aute pariatur',
      'ItemImage2': 'labore commodo',
      'ItemImage3': 'magna aute sint sit ullamco',
      'ItemImage4': 'Exc',
      'ItemWarehouseLocation': 'dolor dolore eu',
      'ItemWarehouseBin': 'occaecat sunt velit Duis',
      'ItemWarehouseAisle': 'cupidatat dolor ut',
      'ItemWarehouseCustom': 'irure nisi ',
      'RecurringOrderFrequency': -77519726
    }
  ],
  'PromotionList': [
    {
      'PromotionName': 'dolor sed quis',
      'Coupon': 'velit pariatur',
      'DiscountAmount': 98350966.21630806
    },
    {
      'PromotionName': 'dolore',
      'Coupon': 'ea',
      'DiscountAmount': 25558069.186760068
    }
  ],
  'OrderDiscount': 20562611.376469642,
  'OrderDiscountCoupon': 61638626.291883856,
  'OrderDiscountPromotion': -73601120.88524643,
  'SalesTax': -80496212.33948682,
  'SalesTax2': 67260235.80489877,
  'SalesTax3': 72134245.17540115,
  'OrderAmount': 44825937.91130945,
  'AffiliateCommission': 80975674.47433493,
  'TransactionList': [
    {
      'TransactionIndexID': -84514992,
      'OrderID': 98806387,
      'TransactionID': 'consequat velit elit',
      'TransactionDateTime': '1975-09-30T03:00:05.050Z',
      'TransactionType': 'est',
      'TransactionMethod': 'eu velit Duis',
      'TransactionAmount': -75207337.5820919,
      'TransactionApproval': 'dolore ad aute',
      'TransactionReference': 'ex in ',
      'TransactionGatewayID': 67052219,
      'TransactionCVV2': 'do ad sed voluptate',
      'TransactionAVS': 'consectetur',
      'TransactionResponseText': 'veniam elit',
      'TransactionResponseCode': 'quis in culpa ipsum',
      'TransactionCaptured': -7969267
    },
    {
      'TransactionIndexID': -80660677,
      'OrderID': -367067,
      'TransactionID': 'anim id fugiat consequat',
      'TransactionDateTime': '2004-10-23T13:40:44.027Z',
      'TransactionType': 'ex est ',
      'TransactionMethod': 'in',
      'TransactionAmount': -25055763.75652878,
      'TransactionApproval': 'in occaecat',
      'TransactionReference': 'fugiat Excepteur velit',
      'TransactionGatewayID': -34918910,
      'TransactionCVV2': 'tempor deserunt ullamco Duis sed',
      'TransactionAVS': 'pro',
      'TransactionResponseText': 'mollit nostrud amet dolore est',
      'TransactionResponseCode': 'aliquip cupidat',
      'TransactionCaptured': -76648465
    },
    {
      'TransactionIndexID': -28382407,
      'OrderID': 1945266,
      'TransactionID': 'culpa laboris aliqua ',
      'TransactionDateTime': '1980-07-02T01:37:36.164Z',
      'TransactionType': 'co',
      'TransactionMethod': 'occaecat amet velit',
      'TransactionAmount': 43676736.02267629,
      'TransactionApproval': 'elit non',
      'TransactionReference': 'cillum ut aute',
      'TransactionGatewayID': -88652452,
      'TransactionCVV2': 'sed aliquip elit Lorem',
      'TransactionAVS': 'ea anim magna in',
      'TransactionResponseText': 'minim eu dolor consectetur consequat',
      'TransactionResponseCode': '',
      'TransactionCaptured': -68039609
    }
  ],
  'CardType': 'reprehenderit laboris',
  'CardNumber': 'esse dolor Lorem velit aliquip',
  'CardName': 'mollit',
  'CardExpirationMonth': 'fugiat ni',
  'CardExpirationYear': 'aute ',
  'CardIssueNumber': 'velit',
  'CardStartMonth': 'au',
  'CardStartYear': 'aliqua ',
  'CardAddress': 'Lorem consequat aliquip',
  'CardVerification': 'tempor deserunt adipisicing la',
  'RewardPoints': 'laboris',
  'QuestionList': [
    {
      'QuestionAnswerIndexID': -1094622,
      'OrderID': -23492472,
      'QuestionID': 11144714,
      'QuestionTitle': 'dolore aliqua ullamco qui anim',
      'QuestionAnswer': 'cillum',
      'QuestionType': 'in Lorem l',
      'QuestionCheckoutStep': 10372928,
      'QuestionSorting': 15472033,
      'QuestionDiscountGroup': 147684
    }
  ],
  'Referer': 'mollit in',
  'IP': 'Ut aliquip Dui',
  'CustomerComments': 'ad Lorem do',
  'InternalComments': 'consectetur dolor',
  'ExternalComments': 'ut voluptate aliqui'
};

request.send(JSON.stringify(body));
}
function createNewIteminSpecificOrder(){
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Items');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CatalogID': -88848270,
  'ItemIndexID': 32225043,
  'ItemID': 'ipsum sed adipisicing',
  'ItemShipmentID': -85868136,
  'ItemQuantity': -29332463.44848834,
  'ItemWarehouseID': -40139193,
  'ItemDescription': 'Lorem sit',
  'ItemUnitPrice': 29563590.04158902,
  'ItemWeight': 8810368.258405805,
  'ItemOptionPrice': -82794783.15712333,
  'ItemAdditionalField1': 'pariatur magna in veniam',
  'ItemAdditionalField2': 'sit amet dolore enim',
  'ItemAdditionalField3': 'et ex mollit incididunt',
  'ItemPageAdded': 'et magna Ut',
  'ItemDateAdded': '1952-02-12T00:37:18.037Z',
  'ItemUnitCost': -17127929.321981966,
  'ItemUnitStock': 11801632.107536301,
  'ItemOptions': 'amet dolore eiusmod aliqua',
  'ItemCatalogIDOptions': 'officia molli',
  'ItemSerial': 'dolore Lorem amet sint ad',
  'ItemImage1': 'dolore pariatur anim',
  'ItemImage2': 'laborum esse ex Excepteur',
  'ItemImage3': 'Excepteur adipisicing',
  'ItemImage4': 'mollit reprehenderit non',
  'ItemWarehouseLocation': 'eu',
  'ItemWarehouseBin': 'proident elit',
  'ItemWarehouseAisle': 'exercitation ullamco ipsum Lorem',
  'ItemWarehouseCustom': 'culpa eiusmod do ',
  'RecurringOrderFrequency': 30679498
};

request.send(JSON.stringify(body));

}

function retrieveListofItemsFromOrder(){
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Items?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofItemsInOrder(){
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Items');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'CatalogID': 64637444,
    'ItemIndexID': -87717434,
    'ItemID': 'amet nisi irure officia',
    'ItemShipmentID': 53739994,
    'ItemQuantity': 60185193.57010418,
    'ItemWarehouseID': 96286698,
    'ItemDescription': 'sed labore occaecat in proident',
    'ItemUnitPrice': -43545086.09416552,
    'ItemWeight': -6707336.453793421,
    'ItemOptionPrice': 35773459.14646822,
    'ItemAdditionalField1': 'ad aliqua ipsum Duis',
    'ItemAdditionalField2': 'quis eiusmod',
    'ItemAdditionalField3': 'sit Lorem',
    'ItemPageAdded': 'labore id',
    'ItemDateAdded': '1950-10-21T02:06:56.062Z',
    'ItemUnitCost': -35530990.6595974,
    'ItemUnitStock': 37351299.82963544,
    'ItemOptions': 'aute aliquip nulla',
    'ItemCatalogIDOptions': 'elit ea sit amet',
    'ItemSerial': 'sunt aliquip cillum dolor',
    'ItemImage1': 'esse Ut',
    'ItemImage2': 'veniam',
    'ItemImage3': 'dolor irure sunt occaecat nulla',
    'ItemImage4': 'anim deserunt ex Duis',
    'ItemWarehouseLocation': 'exercitation Duis',
    'ItemWarehouseBin': 'incididunt occaecat',
    'ItemWarehouseAisle': 'non irure eiusmod magna',
    'ItemWarehouseCustom': 'cupidatat enim ullamco qui',
    'RecurringOrderFrequency': 59130251
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificItemById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Items/{itemindexid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'CatalogID': -91213677,
  'ItemIndexID': 13322514,
  'ItemID': 'reprehenderit sint e',
  'ItemShipmentID': -19223902,
  'ItemQuantity': 56048422.14753413,
  'ItemWarehouseID': 25314069,
  'ItemDescription': 'labore eiusmod sunt amet dolore',
  'ItemUnitPrice': -4465328.010513142,
  'ItemWeight': 4731514.068942562,
  'ItemOptionPrice': 92116086.26052913,
  'ItemAdditionalField1': 'ex ullamco consequat qui culpa',
  'ItemAdditionalField2': 'adipisicing ',
  'ItemAdditionalField3': 'amet deserunt',
  'ItemPageAdded': 'ut ut minim',
  'ItemDateAdded': '1972-07-07T22:35:09.935Z',
  'ItemUnitCost': 67785048.72146338,
  'ItemUnitStock': 75413615.76059526,
  'ItemOptions': 'mollit',
  'ItemCatalogIDOptions': 'deserunt irure',
  'ItemSerial': 'est amet id commodo',
  'ItemImage1': 'Ut incididunt nostrud',
  'ItemImage2': 'irure',
  'ItemImage3': 'esse aliquip mollit',
  'ItemImage4': 'minim ullamco labore Duis',
  'ItemWarehouseLocation': 'veniam est',
  'ItemWarehouseBin': 'deserunt est Lorem',
  'ItemWarehouseAisle': 'pariatur ipsum cup',
  'ItemWarehouseCustom': 'ut laboris sint veniam',
  'RecurringOrderFrequency': -83153217
};

request.send(JSON.stringify(body));

}
function createShipmentInOrder()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Shipments');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'ShipmentID': -43440853,
  'ShipmentLastUpdate': '1997-01-04T07:01:20.276Z',
  'ShipmentBoxes': 72880886,
  'ShipmentInternalComment': 'exercitation nisi incididunt',
  'ShipmentOrderStatus': 99661290,
  'ShipmentAddress': 'proident nulla officia tempor quis',
  'ShipmentAddress2': 'Duis aute reprehenderit',
  'ShipmentAlias': 'anim est',
  'ShipmentCity': 'deserunt in',
  'ShipmentCompany': 'sunt dolor Duis eu',
  'ShipmentCost': -52520834.81890133,
  'ShipmentCountry': 'amet reprehenderit magna irure',
  'ShipmentEmail': 'eu nostrud',
  'ShipmentFirstName': 'mollit sunt dolore',
  'ShipmentLastName': 'veniam aliquip Ut',
  'ShipmentMethodID': 98441999,
  'ShipmentMethodName': 'adipisicing in',
  'ShipmentShippedDate': 'in occaecat',
  'ShipmentPhone': 'adipisicing in ipsum elit',
  'ShipmentState': 'est pariatur',
  'ShipmentZipCode': 'reprehe',
  'ShipmentTax': 35847357.34678438,
  'ShipmentWeight': 65726560.72019413,
  'ShipmentTrackingCode': 'Duis',
  'ShipmentUserID': 'Lorem sit dol',
  'ShipmentNumber': -67488374,
  'ShipmentAddressTypeID': 12459649
};

request.send(JSON.stringify(body));

}
function retrieveListofShipments(){
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Shipments?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofShipments(){
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Shipments');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'ShipmentID': -19447326,
    'ShipmentLastUpdate': '1947-04-18T00:59:05.295Z',
    'ShipmentBoxes': -96214947,
    'ShipmentInternalComment': 'in et ex dolor',
    'ShipmentOrderStatus': 37372049,
    'ShipmentAddress': 'consectetur nostrud officia labore',
    'ShipmentAddress2': 'la',
    'ShipmentAlias': 'exercitation ut fugiat',
    'ShipmentCity': 'fugiat laborum mollit sit volu',
    'ShipmentCompany': 'incididunt nostrud laborum',
    'ShipmentCost': 15547550.848397404,
    'ShipmentCountry': 'occaecat irure commodo cupidatat',
    'ShipmentEmail': 'Duis adipisicing',
    'ShipmentFirstName': 'cupidatat dolor id mollit',
    'ShipmentLastName': 'Ut qui Excepteur sed',
    'ShipmentMethodID': -322806,
    'ShipmentMethodName': 'ea non consequat commodo cillum',
    'ShipmentShippedDate': 'eu veniam labore ut',
    'ShipmentPhone': 'anim non',
    'ShipmentState': 'enim consectetur',
    'ShipmentZipCode': 'magna proiden',
    'ShipmentTax': -6523330.859146535,
    'ShipmentWeight': 46749485.94422439,
    'ShipmentTrackingCode': 'laboris ea',
    'ShipmentUserID': 'v',
    'ShipmentNumber': -39113569,
    'ShipmentAddressTypeID': -97457554
  },
  {
    'ShipmentID': -80537847,
    'ShipmentLastUpdate': '2007-04-19T21:27:42.220Z',
    'ShipmentBoxes': 68576793,
    'ShipmentInternalComment': 'tempor ad',
    'ShipmentOrderStatus': -36830539,
    'ShipmentAddress': 'reprehenderit',
    'ShipmentAddress2': 'eiusmod sint ea Duis',
    'ShipmentAlias': 'L',
    'ShipmentCity': 'culpa occaecat est dolor',
    'ShipmentCompany': 'eiusmod',
    'ShipmentCost': 16184424.402596861,
    'ShipmentCountry': 'enim reprehenderit',
    'ShipmentEmail': 'consectetur dolor commodo et',
    'ShipmentFirstName': 'eu tempor commodo amet adipisicing',
    'ShipmentLastName': 'eu amet tempor ullamco fugiat',
    'ShipmentMethodID': 64883750,
    'ShipmentMethodName': 'deserunt officia aliqua',
    'ShipmentShippedDate': 'magna deserunt aliqua',
    'ShipmentPhone': 'ut laboris ',
    'ShipmentState': '',
    'ShipmentZipCode': 'ali',
    'ShipmentTax': -5163938.933504358,
    'ShipmentWeight': -59677168.76135199,
    'ShipmentTrackingCode': 'qui consequat',
    'ShipmentUserID': 'et ',
    'ShipmentNumber': -6002248,
    'ShipmentAddressTypeID': 82952633
  },
  {
    'ShipmentID': -19370830,
    'ShipmentLastUpdate': '1945-01-08T06:02:12.204Z',
    'ShipmentBoxes': 40226002,
    'ShipmentInternalComment': 'ea laboris',
    'ShipmentOrderStatus': -74183717,
    'ShipmentAddress': 'in enim dolore cillum',
    'ShipmentAddress2': 'dol',
    'ShipmentAlias': 'quis',
    'ShipmentCity': 'ipsum no',
    'ShipmentCompany': 'elit enim et exercitation',
    'ShipmentCost': -65062559.15034398,
    'ShipmentCountry': 'ex',
    'ShipmentEmail': 'enim exercitation',
    'ShipmentFirstName': 'laboris irure',
    'ShipmentLastName': 'anim adipisicing',
    'ShipmentMethodID': 69525870,
    'ShipmentMethodName': 'eu quis labore',
    'ShipmentShippedDate': 'in aliqua eiusmod nisi ad',
    'ShipmentPhone': 'fugiat',
    'ShipmentState': 'non laboris',
    'ShipmentZipCode': 'nu',
    'ShipmentTax': -98145597.98245144,
    'ShipmentWeight': 31536003.191501737,
    'ShipmentTrackingCode': 'dolor pariatu',
    'ShipmentUserID': 'ut est',
    'ShipmentNumber': -48940960,
    'ShipmentAddressTypeID': -86183872
  },
  {
    'ShipmentID': 60321511,
    'ShipmentLastUpdate': '1953-03-08T13:12:28.198Z',
    'ShipmentBoxes': 64860262,
    'ShipmentInternalComment': 'Lorem',
    'ShipmentOrderStatus': -50392696,
    'ShipmentAddress': 'ipsum labore ea',
    'ShipmentAddress2': 'proident adipisicing sint',
    'ShipmentAlias': 'Lorem cillum',
    'ShipmentCity': 'in',
    'ShipmentCompany': 'esse nisi eiusmod elit',
    'ShipmentCost': -94817374.3224098,
    'ShipmentCountry': 'pariatur dolor anim consequat',
    'ShipmentEmail': 'aliqua',
    'ShipmentFirstName': 'la',
    'ShipmentLastName': 'fugiat',
    'ShipmentMethodID': -62558635,
    'ShipmentMethodName': 'pariatur',
    'ShipmentShippedDate': 'in eiusmod ',
    'ShipmentPhone': 'veniam mollit nisi consectetur',
    'ShipmentState': 'aliquip Duis in nostrud',
    'ShipmentZipCode': 'cillum sint s',
    'ShipmentTax': -66148665.954272486,
    'ShipmentWeight': 73588535.49477616,
    'ShipmentTrackingCode': 'mollit deserunt voluptate',
    'ShipmentUserID': 'in irure',
    'ShipmentNumber': -75937655,
    'ShipmentAddressTypeID': 64743588
  },
  {
    'ShipmentID': 16178377,
    'ShipmentLastUpdate': '1949-07-09T13:19:17.366Z',
    'ShipmentBoxes': 90153941,
    'ShipmentInternalComment': 'nisi Duis quis exercitation',
    'ShipmentOrderStatus': 45087091,
    'ShipmentAddress': 'exercitati',
    'ShipmentAddress2': 'laboris',
    'ShipmentAlias': 'non ipsum',
    'ShipmentCity': 'adipisicing',
    'ShipmentCompany': 'amet exercitation',
    'ShipmentCost': -72739278.89625877,
    'ShipmentCountry': 'ipsum es',
    'ShipmentEmail': 'dolor nostrud est et enim',
    'ShipmentFirstName': 'est tempor non aute d',
    'ShipmentLastName': 'minim',
    'ShipmentMethodID': 99555729,
    'ShipmentMethodName': 'in in',
    'ShipmentShippedDate': 'non cillum commod',
    'ShipmentPhone': 'sit aliqua ullamco exercitati',
    'ShipmentState': 'exercitation',
    'ShipmentZipCode': 'est mollit',
    'ShipmentTax': -64705691.29747408,
    'ShipmentWeight': 5974074.775382295,
    'ShipmentTrackingCode': 'ex veniam',
    'ShipmentUserID': 'Ut dolor occaecat repr',
    'ShipmentNumber': 83785594,
    'ShipmentAddressTypeID': -32563425
  }
];

request.send(JSON.stringify(body));
}
function updateSpecificShipmentById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Shipments/{shipmentid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'ShipmentID': 66673649,
  'ShipmentLastUpdate': '1943-12-17T23:32:33.710Z',
  'ShipmentBoxes': -85331896,
  'ShipmentInternalComment': 'nisi quis Ut',
  'ShipmentOrderStatus': -25512355,
  'ShipmentAddress': 'Excepteur in voluptate',
  'ShipmentAddress2': 'mollit',
  'ShipmentAlias': 'eiusmod laborum laboris',
  'ShipmentCity': 'ad adipisicing consequat mollit',
  'ShipmentCompany': 'proident ad',
  'ShipmentCost': -39545720.607319266,
  'ShipmentCountry': 'ea sit dolore',
  'ShipmentEmail': 'Duis aute fugiat',
  'ShipmentFirstName': 'tempor veniam quis dolore',
  'ShipmentLastName': 'quis reprehenderit nulla',
  'ShipmentMethodID': 62861510,
  'ShipmentMethodName': 'fugiat irure',
  'ShipmentShippedDate': 'in ut',
  'ShipmentPhone': 'aliquip esse',
  'ShipmentState': 'enim exercitation Ut et',
  'ShipmentZipCode': 'est Ut a',
  'ShipmentTax': -85016617.29515657,
  'ShipmentWeight': 20847343.49483557,
  'ShipmentTrackingCode': 'elit qui sint laborum in',
  'ShipmentUserID': 'tempor do enim',
  'ShipmentNumber': 37599811,
  'ShipmentAddressTypeID': 65824691
};

request.send(JSON.stringify(body));

}
function createTransactionInOrder()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Transactions');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'TransactionIndexID': 62402389,
  'OrderID': -60245923,
  'TransactionID': 'id Excepteur et',
  'TransactionDateTime': '1985-06-16T01:47:51.107Z',
  'TransactionType': 'q',
  'TransactionMethod': 'eiusmod culpa',
  'TransactionAmount': 96737334.38516226,
  'TransactionApproval': 'in',
  'TransactionReference': 'ullamco adipisicing irure commodo',
  'TransactionGatewayID': 76363722,
  'TransactionCVV2': 'deserunt sunt dolor',
  'TransactionAVS': 'tempor irure nulla',
  'TransactionResponseText': 'tempor non m',
  'TransactionResponseCode': 'sed',
  'TransactionCaptured': 2317668
};

request.send(JSON.stringify(body));

}

function retrieveListofTransactions()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Transactions?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofTransactions()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Transactions');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'TransactionIndexID': 70336267,
    'OrderID': 12633145,
    'TransactionID': 'occaecat mollit',
    'TransactionDateTime': '1938-10-18T10:47:30.616Z',
    'TransactionType': 'reprehende',
    'TransactionMethod': 'ullamco incididunt',
    'TransactionAmount': -14569579.00325571,
    'TransactionApproval': 'est Lorem',
    'TransactionReference': 'commodo deserunt sunt dolor',
    'TransactionGatewayID': -66753244,
    'TransactionCVV2': 'incididunt dolor elit consequat',
    'TransactionAVS': 'laborum eu ex',
    'TransactionResponseText': 'Ut irure in dolore',
    'TransactionResponseCode': 'sunt',
    'TransactionCaptured': -58986521
  },
  {
    'TransactionIndexID': -49217030,
    'OrderID': -47164908,
    'TransactionID': 'exercitation veniam ut labore',
    'TransactionDateTime': '1946-10-11T01:45:32.971Z',
    'TransactionType': 'veniam',
    'TransactionMethod': 'Excepteur et ad ex',
    'TransactionAmount': -49882557.033504196,
    'TransactionApproval': 'labore commodo',
    'TransactionReference': 'culpa labore',
    'TransactionGatewayID': -52471951,
    'TransactionCVV2': 'Lorem magna proident nisi aliquip',
    'TransactionAVS': 'in mollit fugiat Duis cupidatat',
    'TransactionResponseText': 'tempor',
    'TransactionResponseCode': 'pariatur sunt',
    'TransactionCaptured': 38296857
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificTransaction()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Transactions/{transactionindexid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'TransactionIndexID': 23527803,
  'OrderID': 62940506,
  'TransactionID': 'qui of',
  'TransactionDateTime': '1963-04-29T13:35:11.681Z',
  'TransactionType': 'dolor',
  'TransactionMethod': 'cillum',
  'TransactionAmount': 63984951.03529495,
  'TransactionApproval': 'cillum consectetur ex',
  'TransactionReference': 'ullamco',
  'TransactionGatewayID': 34624017,
  'TransactionCVV2': 'laborum eiusmod ex ad',
  'TransactionAVS': 'in dolore deserunt esse',
  'TransactionResponseText': 'culpa in eiusmod est',
  'TransactionResponseCode': 'sint ut cupidatat',
  'TransactionCaptured': 69947567
};

request.send(JSON.stringify(body));

}
function createOrderQuestion()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Questions');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'QuestionAnswerIndexID': 90228360,
  'OrderID': -21765798,
  'QuestionID': -66276798,
  'QuestionTitle': 'dolore sed irure exercitation ut',
  'QuestionAnswer': 'ipsum laborum aute',
  'QuestionType': 'reprehen',
  'QuestionCheckoutStep': -51846949,
  'QuestionSorting': 37136667,
  'QuestionDiscountGroup': -18833721
};

request.send(JSON.stringify(body));

}
function retrieveListofQuestions()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Questions?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofQuestions()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Questions?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateSpecificQuestion()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Orders/{orderid}/Questions/{questionanswerindexid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'QuestionAnswerIndexID': -67288218,
  'OrderID': -4872374,
  'QuestionID': -11647740,
  'QuestionTitle': 'ullamco velit id laborum in',
  'QuestionAnswer': 'eu sunt aute velit',
  'QuestionType': 'ut cil',
  'QuestionCheckoutStep': -13972083,
  'QuestionSorting': -4083984,
  'QuestionDiscountGroup': 60327414
};

request.send(JSON.stringify(body));

}
function retrieveListofOrderStatus()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/OrderStatus?limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveSpecificOrderStatusById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/OrderStatus/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createPaymentToken()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/PaymentTokens');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'PaymentTokenID': -58914564,
  'CustomerID': -40647657,
  'OrderID': 14857998,
  'CustomerProfileID': 'non magna',
  'PaymentProfileID': 'in occaecat labore consequat',
  'CardLast4': -56901638,
  'CardExpMonth': -58633376,
  'CardExpYear': 29669257,
  'BillingPaymentMethodID': 68433439,
  'LastUpdate': '1987-09-27T20:30:15.838Z',
  'GatewayName': 'labor',
  'GatewayID': 2756726
};

request.send(JSON.stringify(body));
}
function retrieveListofPaymentTokens()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/PaymentTokens?limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveSpecificPaymentTokebyId()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/PaymentTokens/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofPaymenttokens()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/PaymentTokens');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'PaymentTokenID': 17816051,
    'CustomerID': 49497818,
    'OrderID': -50559992,
    'CustomerProfileID': 'amet adipisicing sit',
    'PaymentProfileID': 'velit commodo nostrud quis elit',
    'CardLast4': -48719931,
    'CardExpMonth': -34642676,
    'CardExpYear': -85376219,
    'BillingPaymentMethodID': 56801308,
    'LastUpdate': '1980-03-17T12:27:54.637Z',
    'GatewayName': 'exercitation do ullamco',
    'GatewayID': -7914764
  },
  {
    'PaymentTokenID': 27211024,
    'CustomerID': 56298965,
    'OrderID': 18671837,
    'CustomerProfileID': 'tempor mollit et ut eu',
    'PaymentProfileID': 'id in',
    'CardLast4': 1665606,
    'CardExpMonth': -95879477,
    'CardExpYear': -40651874,
    'BillingPaymentMethodID': 60205769,
    'LastUpdate': '1962-01-07T02:55:51.497Z',
    'GatewayName': 'pariatur commodo ',
    'GatewayID': 39802226
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificPaymenttokenById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/PaymentTokens/{paymenttokenid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'PaymentTokenID': -38013142,
  'CustomerID': 48730608,
  'OrderID': 72245007,
  'CustomerProfileID': 'est fugiat nisi sint ',
  'PaymentProfileID': 'do deserunt ma',
  'CardLast4': 90653397,
  'CardExpMonth': -29381953,
  'CardExpYear': -88288300,
  'BillingPaymentMethodID': -92152947,
  'LastUpdate': '1953-05-09T23:37:14.153Z',
  'GatewayName': 'cillum',
  'GatewayID': 98226985
};

request.send(JSON.stringify(body));

}
function deleteSpecificPaymentTokenbyId()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/PaymentTokens/{id}');

request.setRequestHeader('Content-Type', 'application/xml');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createProduct()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'SKUInfo': {
    'CatalogID': 5549196,
    'SKU': 'dolore occaecat',
    'Name': 'ad officia reprehenderit',
    'Cost': -18128193.441653237,
    'Price': -12795496.485453308,
    'Currency': 'aute cillum incididunt reprehenderit',
    'RetailPrice': -85064725.10132354,
    'SalePrice': 4346297.001677439,
    'OnSale': true,
    'Stock': -9294195.30395341
  },
  'MFGID': 'labore in laborum anim aliqua',
  'ShortDescription': 'in mollit',
  'ManufacturerID': -93434278,
  'ManufacturerName': 'magna sit id non',
  'DistributorList': [
    {
      'DistributorID': 73796011,
      'DistributorName': 'culpa Lorem tempor',
      'DistributorItemCost': -30000679.212933123,
      'DistributorItemID': '',
      'DistributorStockID': 'sit sunt'
    },
    {
      'DistributorID': 65749597,
      'DistributorName': 'ut in sit in est',
      'DistributorItemCost': 59802814.13794315,
      'DistributorItemID': 'ut',
      'DistributorStockID': 'anim elit'
    },
    {
      'DistributorID': 67615115,
      'DistributorName': 'in deserunt nos',
      'DistributorItemCost': -5776140.381086051,
      'DistributorItemID': 'id incididunt velit',
      'DistributorStockID': 'esse Duis laboris id mag'
    },
    {
      'DistributorID': 73091730,
      'DistributorName': 'ut laborum sint',
      'DistributorItemCost': 63208139.29649508,
      'DistributorItemID': 'sit nostru',
      'DistributorStockID': ''
    }
  ],
  'LastUpdate': '1964-12-13T13:30:50.688Z',
  'UserID': 'e',
  'GTIN': 'anim pariatur',
  'CategoryList': [
    {
      'CategoryID': 25813126,
      'CategoryName': 'voluptate est sint'
    }
  ],
  'ExternalIdsList': [
    {
      'ID': 29177988,
      'AdvancedOptionSufix': 'nostrud',
      'ExternalId1': 'anim',
      'ExternalId2': 'in ea',
      'ExternalIdType': 'in aliqua'
    },
    {
      'ID': 29386574,
      'AdvancedOptionSufix': 'dolor inc',
      'ExternalId1': 'adipisici',
      'ExternalId2': 'quis in occaecat',
      'ExternalIdType': 'repr'
    },
    {
      'ID': 73611044,
      'AdvancedOptionSufix': 'laboris',
      'ExternalId1': 'irure non amet',
      'ExternalId2': 'nostrud in',
      'ExternalIdType': 'a'
    },
    {
      'ID': 18470631,
      'AdvancedOptionSufix': 'ex dolore cupidatat',
      'ExternalId1': 'voluptate dolore',
      'ExternalId2': 'eiusmod',
      'ExternalIdType': 'qui cup'
    },
    {
      'ID': -58285467,
      'AdvancedOptionSufix': 'occae',
      'ExternalId1': 'et nostrud qui enim',
      'ExternalId2': 've',
      'ExternalIdType': 'conseq'
    }
  ],
  'CategoryExternalIdsList': [
    {
      'ID': -88729174,
      'CategoryID': 19969439,
      'ExternalId1': 'pariatur',
      'ExternalIdType': 'consectetur eu'
    },
    {
      'ID': 6827252,
      'CategoryID': -21147158,
      'ExternalId1': 'quis mollit ad voluptate nul',
      'ExternalIdType': 'ullamco aute'
    }
  ],
  'NonTaxable': false,
  'NotForSale': false,
  'Hide': true,
  'GiftCertificate': true,
  'HomeSpecial': true,
  'CategorySpecial': false,
  'NonSearchable': true,
  'GiftWrapItem': true,
  'ShipCost': 46055464.42598286,
  'Weight': 56622458.94856936,
  'Height': 39066038.03513399,
  'Width': -89917587.21531373,
  'Depth': 24223234.719419777,
  'SelfShip': true,
  'FreeShipping': false,
  'RewardPoints': -31229290,
  'RedeemPoints': 50604682,
  'DisableRewards': false,
  'StockAlert': 70440709,
  'ReorderQuantity': -4915645,
  'InStockMessage': 'irure qui dolor',
  'OutOfStockMessage': 'deserunt labore',
  'BackOrderMessage': 'repr',
  'InventoryControl': 42231344,
  'WarehouseLocation': 'labore',
  'WarehouseBin': 'elit ut',
  'WarehouseAisle': 'ullamco',
  'WarehouseCustom': 'dolore minim dolore labore',
  'Description': 'ex ipsum',
  'Keywords': 'nisi aliqua do dolore',
  'ExtraField1': 'aliquip occaecat',
  'ExtraField2': 'in Ut culpa',
  'ExtraField3': 'amet fugiat ad velit minim',
  'ExtraField4': 'adipisicing Excepteur i',
  'ExtraField5': 'veniam eu',
  'ExtraField6': 'incididunt Lorem dolore',
  'ExtraField7': 'qui nisi sint',
  'ExtraField8': 'non commodo nisi ut',
  'ExtraField9': 'Ut',
  'ExtraField10': 'culpa sit proident',
  'ExtraField11': 'nulla do ad',
  'ExtraField12': 'aute',
  'ExtraField13': 'dolore',
  'FeatureList': [
    {
      'FeatureID': -80732131,
      'FeatureTitle': 'tempor',
      'FeatureDescription': 'consectetur id'
    },
    {
      'FeatureID': -64719241,
      'FeatureTitle': 'sed aute anim',
      'FeatureDescription': 'aliqua labore Lorem dolore laboris'
    }
  ],
  'PluginList': {},
  'SampleEnable': false,
  'SampleName': 'consequat mollit cillum',
  'SampleSKUPrefix': 'elit do',
  'SamplePrice': 52647107.36979863,
  'SampleWeight': -39993658.90971256,
  'ReviewAverage': -84993379.01474324,
  'ReviewCount': -29309690,
  'MainImageFile': 'fugiat esse consectetur minim dolore',
  'MainImageCaption': 'in esse',
  'ThumbnailFile': 'deserunt labore',
  'MediaFile': 'dolore sunt',
  'AdditionalImageFile2': 'qui magna voluptate eu dolore',
  'AdditionalImageCaption2': 'pariatur esse Duis et occaecat',
  'AdditionalImageFile3': 'cupidatat officia anim irure',
  'AdditionalImageCaption3': 'dese',
  'AdditionalImageFile4': 'magna anim aliqua',
  'AdditionalImageCaption4': 'sed',
  'ImageGalleryList': [
    {
      'ImageGalleryID': 93947868,
      'ImageGalleryFile': 'ipsum ull',
      'ImageGalleryCaption': 'fugiat Lorem elit',
      'ImageGallerySorting': 46014781
    },
    {
      'ImageGalleryID': -27694772,
      'ImageGalleryFile': 'Duis amet pariatur',
      'ImageGalleryCaption': 'nostrud mollit ad',
      'ImageGallerySorting': 78691755
    }
  ],
  'OptionSetList': [
    {
      'OptionSetID': -69646334,
      'OptionSetName': 'reprehenderit in do',
      'OptionSorting': 92270875.2891916,
      'OptionRequired': false,
      'OptionType': 'ut',
      'OptionURL': 'amet',
      'OptionAdditionalInformation': 'labore sit nulla sint',
      'OptionSizeLimit': 36794527,
      'OptionList': [
        {
          'OptionID': 80228796,
          'OptionName': 'et',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': 55623049.8987332,
          'OptionPartNumber': 'veniam laboris dolor',
          'OptionSorting': -74392566.58937156,
          'OptionImagePath': 'voluptate officia ex',
          'OptionBundleCatalogId': 10158804,
          'OptionBundleQuantity': -90825041
        },
        {
          'OptionID': -45446246,
          'OptionName': 'eu Duis nisi culpa',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': 14593052.83329311,
          'OptionPartNumber': 'dolor quis labore sed',
          'OptionSorting': 28915023.612949178,
          'OptionImagePath': 'aute in',
          'OptionBundleCatalogId': -10332725,
          'OptionBundleQuantity': -64422940
        },
        {
          'OptionID': 76220317,
          'OptionName': 'dolore occaecat',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 81824817.61989307,
          'OptionPartNumber': 'cillum pariat',
          'OptionSorting': -49748803.67471037,
          'OptionImagePath': 'eu',
          'OptionBundleCatalogId': -92912523,
          'OptionBundleQuantity': -51165587
        },
        {
          'OptionID': 93721851,
          'OptionName': 'qui in',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': -50322378.31519586,
          'OptionPartNumber': 'non adipis',
          'OptionSorting': -91328384.81549959,
          'OptionImagePath': 'in reprehenderit ad dol',
          'OptionBundleCatalogId': -79304784,
          'OptionBundleQuantity': -63553726
        }
      ]
    },
    {
      'OptionSetID': -35572675,
      'OptionSetName': 'amet sed aliqua ullamco',
      'OptionSorting': 99700339.09028658,
      'OptionRequired': false,
      'OptionType': 'Ex',
      'OptionURL': 'officia eu',
      'OptionAdditionalInformation': 'ullamco est voluptate Ut in',
      'OptionSizeLimit': 55369931,
      'OptionList': [
        {
          'OptionID': 13148668,
          'OptionName': 'ea nostrud',
          'OptionSelected': true,
          'OptionHide': true,
          'OptionValue': -16631925.454355657,
          'OptionPartNumber': 'ali',
          'OptionSorting': 54900867.54881421,
          'OptionImagePath': 'dolor magna',
          'OptionBundleCatalogId': -50460761,
          'OptionBundleQuantity': 31123265
        },
        {
          'OptionID': -23701556,
          'OptionName': 'Excepteur aliqua',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': 80544652.12607923,
          'OptionPartNumber': 'officia dolor sint fugiat',
          'OptionSorting': 57703487.021828085,
          'OptionImagePath': 'do mollit',
          'OptionBundleCatalogId': -25664217,
          'OptionBundleQuantity': 54667003
        }
      ]
    },
    {
      'OptionSetID': 51838031,
      'OptionSetName': 'magna ad fugiat ex exerci',
      'OptionSorting': -14619305.27911593,
      'OptionRequired': false,
      'OptionType': 'Duis sun',
      'OptionURL': 'occaecat Duis',
      'OptionAdditionalInformation': 'elit mollit',
      'OptionSizeLimit': 27273001,
      'OptionList': [
        {
          'OptionID': -29052683,
          'OptionName': 'in',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 23357387.488409027,
          'OptionPartNumber': 'Duis ipsum reprehenderit minim',
          'OptionSorting': -21419531.206009164,
          'OptionImagePath': 'proident dolor',
          'OptionBundleCatalogId': -45693313,
          'OptionBundleQuantity': 50527721
        },
        {
          'OptionID': 34411609,
          'OptionName': 'anim elit ut',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': -72458641.55404288,
          'OptionPartNumber': 'in',
          'OptionSorting': -97197595.95417297,
          'OptionImagePath': 'temp',
          'OptionBundleCatalogId': -95889149,
          'OptionBundleQuantity': 70695356
        },
        {
          'OptionID': 79374564,
          'OptionName': 'commodo magna laborum reprehenderit',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': 77296505.63058707,
          'OptionPartNumber': 'adipisicing',
          'OptionSorting': -60879486.36640106,
          'OptionImagePath': 'adipis',
          'OptionBundleCatalogId': 69711902,
          'OptionBundleQuantity': 79341092
        },
        {
          'OptionID': -89976635,
          'OptionName': 'voluptate Excepteur velit anim labore',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 84938596.4000287,
          'OptionPartNumber': 'labore sed in',
          'OptionSorting': 72345152.10477185,
          'OptionImagePath': 'labore irure',
          'OptionBundleCatalogId': -35456939,
          'OptionBundleQuantity': 76322969
        },
        {
          'OptionID': 83860928,
          'OptionName': 'elit pariatur nostrud',
          'OptionSelected': true,
          'OptionHide': true,
          'OptionValue': -20602419.857833937,
          'OptionPartNumber': 'in ipsum co',
          'OptionSorting': 38738756.258484125,
          'OptionImagePath': 'anim proident',
          'OptionBundleCatalogId': -72068641,
          'OptionBundleQuantity': 88579345
        }
      ]
    },
    {
      'OptionSetID': 4271602,
      'OptionSetName': 'cupidatat veniam consequat irure',
      'OptionSorting': -14739479.974589825,
      'OptionRequired': true,
      'OptionType': 'dolor',
      'OptionURL': 'ullamco ut',
      'OptionAdditionalInformation': 'dolore exercitation adipisicing',
      'OptionSizeLimit': 17919262,
      'OptionList': [
        {
          'OptionID': -81112253,
          'OptionName': 'tempor mollit non anim',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': 60977280.72535828,
          'OptionPartNumber': 'consequat et id tempor',
          'OptionSorting': -25409869.928072527,
          'OptionImagePath': 'officia ad non proident',
          'OptionBundleCatalogId': -31107751,
          'OptionBundleQuantity': -19845982
        },
        {
          'OptionID': -93858758,
          'OptionName': 'est',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': -10270598.928671107,
          'OptionPartNumber': 'Lorem proident dolor nisi',
          'OptionSorting': 68113055.15652534,
          'OptionImagePath': 'in enim',
          'OptionBundleCatalogId': 24942271,
          'OptionBundleQuantity': -52934623
        }
      ]
    }
  ],
  'AdvancedOptionList': [
    {
      'AdvancedOptionCode': 'id ut',
      'AdvancedOptionSufix': 'minim deserunt velit ad',
      'AdvancedOptionName': 'velit anim',
      'AdvancedOptionCost': 39084681.60161328,
      'AdvancedOptionStock': 34222726,
      'AdvancedOptionWeight': -88006732.64687298,
      'AdvancedOptionPrice': -88239040.15319215,
      'AdvancedOptionGTIN': 'cupidatat magna et'
    }
  ],
  'RelatedProductList': [
    {
      'RelatedIndexID': 27968629,
      'RelatedProductID': -95525200,
      'RelatedProductSorting': 85427066
    },
    {
      'RelatedIndexID': 15656045,
      'RelatedProductID': 52941563,
      'RelatedProductSorting': -41967109
    },
    {
      'RelatedIndexID': -89150145,
      'RelatedProductID': -4937041,
      'RelatedProductSorting': -48278087
    },
    {
      'RelatedIndexID': 918987,
      'RelatedProductID': -51817314,
      'RelatedProductSorting': 73219839
    }
  ],
  'UpSellingItemList': [
    {
      'UpSellingIndexID': 18218798,
      'UpSellingItemID': -3621930,
      'UpSellingItemSorting': 76454676
    },
    {
      'UpSellingIndexID': -67777224,
      'UpSellingItemID': -54042324,
      'UpSellingItemSorting': 3363291
    },
    {
      'UpSellingIndexID': 77578887,
      'UpSellingItemID': -57428973,
      'UpSellingItemSorting': -95864799
    },
    {
      'UpSellingIndexID': 83383775,
      'UpSellingItemID': 57368463,
      'UpSellingItemSorting': 25004901
    }
  ],
  'DiscountList': [
    {
      'DiscountID': 74384927,
      'DiscountPriceLevel': 67653514,
      'DiscountLowbound': -12290631,
      'DiscountUpbound': 94279777,
      'DiscountPrice': 73940160.9020344,
      'DiscountPercentage': false
    },
    {
      'DiscountID': -63898723,
      'DiscountPriceLevel': -17197711,
      'DiscountLowbound': -92759546,
      'DiscountUpbound': -29938018,
      'DiscountPrice': 81190229.41320094,
      'DiscountPercentage': true
    }
  ],
  'DoNotUseCategoryOptions': false,
  'DateCreated': '1978-08-01T07:11:34.147Z',
  'ListingTemplateID': -72972336,
  'ListingTemplateName': 'consequat pariatur qui',
  'LoginRequiredOptionID': -68205568,
  'LoginRequiredOptionName': 'dolor anim sed amet consectetur',
  'LoginRequiredOptionRedirectTo': 'ex ut commodo non',
  'AllowAccessCustomerGroupID': 89982562,
  'AllowAccessCustomerGroupName': 'ea anim',
  'RMAMaxPeriod': 'velit aliquip',
  'CanonicalUrl': 'enim et aliqua',
  'TaxCode': '{`Zt',
  'DisplayText': 'eu incididunt est sint',
  'MinimumQuantity': 69571765.83819914,
  'MaximumQuantity': 74826307.09530026,
  'AllowOnlyMultiples': false,
  'AllowFractionalQuantity': true,
  'QuantityOptions': 'esse non incididunt aliquip',
  'GroupOptionsForQuantityPricing': false,
  'ApplyQuantityDiscountToOptions': true,
  'EnableMakeAnOfferFeature': false,
  'MinimumAcceptableOffer': 'irure ',
  'PriceLevel1': 95063005.54670578,
  'PriceLevel1Hide': true,
  'PriceLevel2': 37967218.97883853,
  'PriceLevel2Hide': false,
  'PriceLevel3': 52483464.42231068,
  'PriceLevel3Hide': false,
  'PriceLevel4': 50607069.99263239,
  'PriceLevel4Hide': true,
  'PriceLevel5': -24448642.54785566,
  'PriceLevel5Hide': false,
  'PriceLevel6': -78375262.60727637,
  'PriceLevel6Hide': false,
  'PriceLevel7': 590307.7130752504,
  'PriceLevel7Hide': false,
  'PriceLevel8': 52722533.036241174,
  'PriceLevel8Hide': true,
  'PriceLevel9': -1128578.2064807117,
  'PriceLevel9Hide': false,
  'PriceLevel10': 72821811.21485594,
  'PriceLevel10Hide': false,
  'BuyButtonLink': 'veniam non Ut',
  'ProductLink': 'minim incididunt et esse',
  'Title': 'consectetur dolore',
  'CustomFileName': 'qui dolore veniam mollit ad',
  'RedirectLink': 'fugiat dolore proident',
  'MetaTags': 'aute Excepteur sed',
  'SpecialInstructions': 'enim',
  'AssignKey': true,
  'ReUseKeys': true,
  'SerialList': [
    {
      'SerialID': -406765,
      'SerialUses': 81297686,
      'SerialCode': 'in officia sed'
    }
  ],
  'EProductList': [
    {
      'FileNumber': 8788339,
      'FilePath': 'consequat ut dolore'
    },
    {
      'FileNumber': 31017703,
      'FilePath': 'mollit nostrud aliquip'
    }
  ]
};

request.send(JSON.stringify(body));

}
function retrieveListOfProducts()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveSpecificProductsById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}');

request.setRequestHeader('Content-Type', 'application/xml');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function  updateListofProducts()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'SKUInfo': {
      'CatalogID': 47304819,
      'SKU': 'sit',
      'Name': 'in irure sed anim ut',
      'Cost': -97938774.16442451,
      'Price': -19308940.197771385,
      'Currency': 'sunt fugiat ex i',
      'RetailPrice': 77722221.0081538,
      'SalePrice': -91789207.28786238,
      'OnSale': false,
      'Stock': -45038952.78911698
    },
    'MFGID': 'com',
    'ShortDescription': 'in',
    'ManufacturerID': 61799392,
    'ManufacturerName': 'do ea consectetur Exce',
    'DistributorList': [
      {
        'DistributorID': 20469110,
        'DistributorName': 'velit sed e',
        'DistributorItemCost': 61921348.935050964,
        'DistributorItemID': 'minim sint',
        'DistributorStockID': 'dolor magna aliquip'
      },
      {
        'DistributorID': -21653005,
        'DistributorName': 'culpa Lorem in officia',
        'DistributorItemCost': -1545864.7590813637,
        'DistributorItemID': 'proident',
        'DistributorStockID': 'sunt laboris'
      },
      {
        'DistributorID': 33690478,
        'DistributorName': 'velit enim',
        'DistributorItemCost': -96117790.00715286,
        'DistributorItemID': 'veniam incididunt',
        'DistributorStockID': 'Excepteur dolor'
      }
    ],
    'LastUpdate': '1986-07-09T01:36:17.605Z',
    'UserID': 'et est Excepteur Duis',
    'GTIN': 'elit non',
    'CategoryList': [
      {
        'CategoryID': -65000395,
        'CategoryName': 'laborum'
      },
      {
        'CategoryID': 43936084,
        'CategoryName': 'id amet anim consectetur'
      },
      {
        'CategoryID': 79598330,
        'CategoryName': 'pariatur dolor'
      },
      {
        'CategoryID': 54105968,
        'CategoryName': 'in dolor mollit'
      }
    ],
    'ExternalIdsList': [
      {
        'ID': -46777171,
        'AdvancedOptionSufix': 'fugiat aliqua',
        'ExternalId1': 'dolor elit',
        'ExternalId2': 'nulla pariatur laboris',
        'ExternalIdType': 'eu ut ullamco '
      },
      {
        'ID': 98426633,
        'AdvancedOptionSufix': 'cillum exercitation',
        'ExternalId1': 'enim officia',
        'ExternalId2': 'm',
        'ExternalIdType': 'qui tempor cupidat'
      },
      {
        'ID': -36788101,
        'AdvancedOptionSufix': 'ipsum eu exercitation laboris i',
        'ExternalId1': 'sed',
        'ExternalId2': 'sed in ',
        'ExternalIdType': 'in qui'
      },
      {
        'ID': -82163709,
        'AdvancedOptionSufix': 'ut',
        'ExternalId1': 'cillum sit',
        'ExternalId2': 'mollit velit',
        'ExternalIdType': 'est dolor id'
      }
    ],
    'CategoryExternalIdsList': [
      {
        'ID': -85258393,
        'CategoryID': -96929120,
        'ExternalId1': 'incididunt occaecat quis deseru',
        'ExternalIdType': 'aliquip irure est cupidatat'
      },
      {
        'ID': 53549560,
        'CategoryID': 37858692,
        'ExternalId1': 'proident aliquip',
        'ExternalIdType': 'adipisicing non'
      }
    ],
    'NonTaxable': false,
    'NotForSale': true,
    'Hide': false,
    'GiftCertificate': true,
    'HomeSpecial': true,
    'CategorySpecial': false,
    'NonSearchable': true,
    'GiftWrapItem': false,
    'ShipCost': 35944853.68285248,
    'Weight': -97533207.15121979,
    'Height': -11564221.075311482,
    'Width': -8044259.455038056,
    'Depth': 70870765.80208012,
    'SelfShip': false,
    'FreeShipping': true,
    'RewardPoints': 83597752,
    'RedeemPoints': -56180334,
    'DisableRewards': false,
    'StockAlert': 72736229,
    'ReorderQuantity': 74401951,
    'InStockMessage': 'velit in',
    'OutOfStockMessage': 'nulla dolore sunt',
    'BackOrderMessage': 'sint nulla',
    'InventoryControl': 35497330,
    'WarehouseLocation': 'reprehenderit ad voluptate',
    'WarehouseBin': 'eu',
    'WarehouseAisle': 'minim esse est mollit',
    'WarehouseCustom': 'Excepteur culpa fugiat sit',
    'Description': 'ad irure',
    'Keywords': 'eiusmod esse',
    'ExtraField1': 'voluptate sit',
    'ExtraField2': 'qui cupidatat Ut id',
    'ExtraField3': 'velit amet occaecat',
    'ExtraField4': 'Ut',
    'ExtraField5': 'sunt exercitation',
    'ExtraField6': 'in',
    'ExtraField7': 'pariatur Excepteur sint eu',
    'ExtraField8': 'nisi nulla Ut',
    'ExtraField9': 'ipsum Excepteur',
    'ExtraField10': 'laboris incididunt eu sit in',
    'ExtraField11': 'eiusmod',
    'ExtraField12': 'laboris Duis',
    'ExtraField13': 'ea ',
    'FeatureList': [
      {
        'FeatureID': 82968211,
        'FeatureTitle': 'ipsum est tempor nisi',
        'FeatureDescription': 'amet pariatur dolor'
      },
      {
        'FeatureID': 68248391,
        'FeatureTitle': 'et pariatur fugiat cillum',
        'FeatureDescription': 'ea'
      }
    ],
    'PluginList': {},
    'SampleEnable': true,
    'SampleName': 'ex non tempor',
    'SampleSKUPrefix': 'repr',
    'SamplePrice': -27179100.023684114,
    'SampleWeight': -29559413.62695022,
    'ReviewAverage': 33004892.57644981,
    'ReviewCount': 76223069,
    'MainImageFile': 'enim sed occaecat',
    'MainImageCaption': 'irure eu ut',
    'ThumbnailFile': 'ullamco officia',
    'MediaFile': 'sint nostrud qui ut',
    'AdditionalImageFile2': 'fugiat nisi commodo enim',
    'AdditionalImageCaption2': 'pariatur labore ex',
    'AdditionalImageFile3': 'elit velit tempor consectetur',
    'AdditionalImageCaption3': 'elit veniam',
    'AdditionalImageFile4': 'enim consectetur aliquip officia',
    'AdditionalImageCaption4': 'sint ullamco fugiat',
    'ImageGalleryList': [
      {
        'ImageGalleryID': 73225027,
        'ImageGalleryFile': 'nisi laborum non',
        'ImageGalleryCaption': 'consectetur velit eiusmod anim dolor',
        'ImageGallerySorting': -45493104
      },
      {
        'ImageGalleryID': 39367279,
        'ImageGalleryFile': 'irure dolore',
        'ImageGalleryCaption': 'aliqua',
        'ImageGallerySorting': -82773561
      },
      {
        'ImageGalleryID': -54690210,
        'ImageGalleryFile': 'anim',
        'ImageGalleryCaption': 'eiusmod aliquip',
        'ImageGallerySorting': -252749
      },
      {
        'ImageGalleryID': 85899281,
        'ImageGalleryFile': 'qui',
        'ImageGalleryCaption': 'sint esse sunt',
        'ImageGallerySorting': -54507490
      },
      {
        'ImageGalleryID': -11430832,
        'ImageGalleryFile': 'mollit',
        'ImageGalleryCaption': 'commodo',
        'ImageGallerySorting': -46967746
      }
    ],
    'OptionSetList': [
      {
        'OptionSetID': -9624336,
        'OptionSetName': 'consequat proident eu incididunt',
        'OptionSorting': -9808248.400129706,
        'OptionRequired': false,
        'OptionType': 'Exc',
        'OptionURL': 'ea dolor occaecat',
        'OptionAdditionalInformation': 'deserunt ut voluptate et mollit',
        'OptionSizeLimit': -18996324,
        'OptionList': [
          {
            'OptionID': 87282590,
            'OptionName': 'mollit aliquip',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -12060218.372790128,
            'OptionPartNumber': 'aliqua ips',
            'OptionSorting': -32514387.407670587,
            'OptionImagePath': 'nostrud occaecat irure',
            'OptionBundleCatalogId': 16327524,
            'OptionBundleQuantity': 28975242
          },
          {
            'OptionID': 475400,
            'OptionName': 'ut',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 83910541.85383081,
            'OptionPartNumber': 'esse laboru',
            'OptionSorting': 88206012.13601771,
            'OptionImagePath': 'officia',
            'OptionBundleCatalogId': -6805126,
            'OptionBundleQuantity': -43361767
          },
          {
            'OptionID': -73158279,
            'OptionName': 'pariatur sed cillum',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': -89539917.62366292,
            'OptionPartNumber': 'ut aliqua ',
            'OptionSorting': -47434682.94448014,
            'OptionImagePath': 'laboris eiusmod',
            'OptionBundleCatalogId': 90406534,
            'OptionBundleQuantity': 13728910
          },
          {
            'OptionID': -39519118,
            'OptionName': 'ut sint et minim',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -17640884.76984167,
            'OptionPartNumber': 'in deserunt',
            'OptionSorting': 79008974.74911499,
            'OptionImagePath': 'Duis',
            'OptionBundleCatalogId': -74248708,
            'OptionBundleQuantity': 97842795
          }
        ]
      },
      {
        'OptionSetID': -37136621,
        'OptionSetName': 'veniam fugiat reprehenderit',
        'OptionSorting': 80738285.39448038,
        'OptionRequired': false,
        'OptionType': 'aute eu i',
        'OptionURL': 'adipisicing i',
        'OptionAdditionalInformation': 'ex nostrud Excepteur consectetur',
        'OptionSizeLimit': -99358398,
        'OptionList': [
          {
            'OptionID': 34643498,
            'OptionName': 'dolor nulla',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 97871116.83652219,
            'OptionPartNumber': 'ullamco laboris elit cupidatat',
            'OptionSorting': 31393458.93006493,
            'OptionImagePath': 'Excepteur labore',
            'OptionBundleCatalogId': 24089819,
            'OptionBundleQuantity': -80810366
          },
          {
            'OptionID': 37369915,
            'OptionName': 'qui non',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 49353300.31605053,
            'OptionPartNumber': 'adipisicing quis',
            'OptionSorting': 15253242.1074235,
            'OptionImagePath': 'anim',
            'OptionBundleCatalogId': -31012804,
            'OptionBundleQuantity': -86144201
          },
          {
            'OptionID': -64201947,
            'OptionName': 'sint esse Ut',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -32075611.034620404,
            'OptionPartNumber': 'reprehenderit ipsum nostrud',
            'OptionSorting': -2708774.7805151045,
            'OptionImagePath': 'id aute',
            'OptionBundleCatalogId': 89473872,
            'OptionBundleQuantity': -19240771
          }
        ]
      }
    ],
    'AdvancedOptionList': [
      {
        'AdvancedOptionCode': 'voluptate la',
        'AdvancedOptionSufix': 'quis nisi',
        'AdvancedOptionName': 'consectetur do',
        'AdvancedOptionCost': 36654762.40428376,
        'AdvancedOptionStock': 52733638,
        'AdvancedOptionWeight': -92384859.73339032,
        'AdvancedOptionPrice': 85948294.02011198,
        'AdvancedOptionGTIN': 'dolore et'
      },
      {
        'AdvancedOptionCode': 'sint consectetur',
        'AdvancedOptionSufix': 'commodo non',
        'AdvancedOptionName': 'est eu',
        'AdvancedOptionCost': 7453902.233112946,
        'AdvancedOptionStock': 88061865,
        'AdvancedOptionWeight': 15100909.592037976,
        'AdvancedOptionPrice': -27256367.278723776,
        'AdvancedOptionGTIN': 'labo'
      },
      {
        'AdvancedOptionCode': 'aliqu',
        'AdvancedOptionSufix': 'voluptate amet',
        'AdvancedOptionName': 'commodo sunt consequat labore cupidatat',
        'AdvancedOptionCost': 93864947.77447405,
        'AdvancedOptionStock': -87583096,
        'AdvancedOptionWeight': 21015250.938407615,
        'AdvancedOptionPrice': 17804155.96021396,
        'AdvancedOptionGTIN': 'in sit eli'
      },
      {
        'AdvancedOptionCode': 'consequat',
        'AdvancedOptionSufix': 'dolor velit fug',
        'AdvancedOptionName': 'consequat voluptate in sint Duis',
        'AdvancedOptionCost': -96896867.88687326,
        'AdvancedOptionStock': 70730686,
        'AdvancedOptionWeight': 99350180.27173644,
        'AdvancedOptionPrice': -12327205.738661647,
        'AdvancedOptionGTIN': 'eu'
      }
    ],
    'RelatedProductList': [
      {
        'RelatedIndexID': 7914273,
        'RelatedProductID': -10905146,
        'RelatedProductSorting': -99089034
      },
      {
        'RelatedIndexID': 98383610,
        'RelatedProductID': 8022252,
        'RelatedProductSorting': 85397571
      },
      {
        'RelatedIndexID': -39864225,
        'RelatedProductID': 76405654,
        'RelatedProductSorting': -38517086
      },
      {
        'RelatedIndexID': 57951962,
        'RelatedProductID': 82027999,
        'RelatedProductSorting': 60097275
      }
    ],
    'UpSellingItemList': [
      {
        'UpSellingIndexID': 37307100,
        'UpSellingItemID': -40114798,
        'UpSellingItemSorting': 36318634
      },
      {
        'UpSellingIndexID': 56308994,
        'UpSellingItemID': 23071822,
        'UpSellingItemSorting': -86539862
      },
      {
        'UpSellingIndexID': 13566320,
        'UpSellingItemID': 46448962,
        'UpSellingItemSorting': 64691287
      }
    ],
    'DiscountList': [
      {
        'DiscountID': 39183742,
        'DiscountPriceLevel': -81057729,
        'DiscountLowbound': 88708537,
        'DiscountUpbound': 71442268,
        'DiscountPrice': -68102701.20644853,
        'DiscountPercentage': true
      },
      {
        'DiscountID': 3596885,
        'DiscountPriceLevel': 59329106,
        'DiscountLowbound': -19843696,
        'DiscountUpbound': -24618467,
        'DiscountPrice': -46716080.31146715,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -1252425,
        'DiscountPriceLevel': 20417200,
        'DiscountLowbound': -36272691,
        'DiscountUpbound': 4526400,
        'DiscountPrice': -13250497.523399085,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -99036139,
        'DiscountPriceLevel': 38199781,
        'DiscountLowbound': -80780328,
        'DiscountUpbound': 88361664,
        'DiscountPrice': 81759711.02704805,
        'DiscountPercentage': true
      }
    ],
    'DoNotUseCategoryOptions': false,
    'DateCreated': '1981-09-29T10:48:56.323Z',
    'ListingTemplateID': -20025977,
    'ListingTemplateName': 'sunt do',
    'LoginRequiredOptionID': 93583030,
    'LoginRequiredOptionName': 'incididunt esse nostrud aute tempor',
    'LoginRequiredOptionRedirectTo': 'Ut incididunt aute reprehenderit',
    'AllowAccessCustomerGroupID': 83409844,
    'AllowAccessCustomerGroupName': 'ad e',
    'RMAMaxPeriod': 'ut in dolore',
    'CanonicalUrl': 'qui exercitation proident quis',
    'TaxCode': '4J&1',
    'DisplayText': 'aute exercitation',
    'MinimumQuantity': 32058877.899328217,
    'MaximumQuantity': -19802612.263509363,
    'AllowOnlyMultiples': true,
    'AllowFractionalQuantity': true,
    'QuantityOptions': 'consequat do',
    'GroupOptionsForQuantityPricing': true,
    'ApplyQuantityDiscountToOptions': false,
    'EnableMakeAnOfferFeature': false,
    'MinimumAcceptableOffer': 'veniam ',
    'PriceLevel1': 33399962.301205695,
    'PriceLevel1Hide': true,
    'PriceLevel2': 7201972.0762171745,
    'PriceLevel2Hide': false,
    'PriceLevel3': 77807049.55846933,
    'PriceLevel3Hide': false,
    'PriceLevel4': -1854646.1847341806,
    'PriceLevel4Hide': false,
    'PriceLevel5': 75840968.22909757,
    'PriceLevel5Hide': true,
    'PriceLevel6': 64639845.64240083,
    'PriceLevel6Hide': true,
    'PriceLevel7': 79181315.25480124,
    'PriceLevel7Hide': true,
    'PriceLevel8': 52452235.10862818,
    'PriceLevel8Hide': true,
    'PriceLevel9': -76940505.06579728,
    'PriceLevel9Hide': false,
    'PriceLevel10': -56420089.399086714,
    'PriceLevel10Hide': false,
    'BuyButtonLink': 'eiusmod culpa amet',
    'ProductLink': 'voluptate in proident ex',
    'Title': 'aliqua',
    'CustomFileName': 'est exercitation qui',
    'RedirectLink': 'id nulla',
    'MetaTags': 'minim sint tempor',
    'SpecialInstructions': 'in',
    'AssignKey': false,
    'ReUseKeys': true,
    'SerialList': [
      {
        'SerialID': 90225710,
        'SerialUses': -36178625,
        'SerialCode': 'elit commodo mollit laborum nisi'
      },
      {
        'SerialID': 86584458,
        'SerialUses': -97955402,
        'SerialCode': 'ullamco proident anim'
      }
    ],
    'EProductList': [
      {
        'FileNumber': -60891947,
        'FilePath': 'incididunt aliqua ullam'
      },
      {
        'FileNumber': -47359106,
        'FilePath': 'elit'
      }
    ]
  },
  {
    'SKUInfo': {
      'CatalogID': -98658905,
      'SKU': 'laboris adipisicing do labore anim',
      'Name': 'nostrud',
      'Cost': 53417859.54914796,
      'Price': 59922160.548855126,
      'Currency': 'dolor magna non',
      'RetailPrice': 94980000.97377393,
      'SalePrice': -10563017.016969085,
      'OnSale': false,
      'Stock': -97487235.70759799
    },
    'MFGID': 'dolor veniam eiusmo',
    'ShortDescription': 'aute quis ipsum sunt velit',
    'ManufacturerID': 21770651,
    'ManufacturerName': 'non laborum aute',
    'DistributorList': [
      {
        'DistributorID': 46626039,
        'DistributorName': 'in do d',
        'DistributorItemCost': 30895244.423885822,
        'DistributorItemID': 'exercitation sed',
        'DistributorStockID': 'nisi aliquip sunt laborum'
      },
      {
        'DistributorID': 24362096,
        'DistributorName': 'ame',
        'DistributorItemCost': -38810198.55567498,
        'DistributorItemID': 'ipsum ea dolor anim Duis',
        'DistributorStockID': ''
      },
      {
        'DistributorID': -18100188,
        'DistributorName': 'do Lorem',
        'DistributorItemCost': 23206450.310608506,
        'DistributorItemID': 'qui',
        'DistributorStockID': 'ut elit esse aliqua'
      },
      {
        'DistributorID': 340092,
        'DistributorName': 'eu veniam ',
        'DistributorItemCost': -19013104.016615137,
        'DistributorItemID': 'commodo officia Duis',
        'DistributorStockID': 'sint consectetur'
      }
    ],
    'LastUpdate': '1939-04-21T14:45:02.420Z',
    'UserID': 'dolore amet adipisicing',
    'GTIN': 'in elit',
    'CategoryList': [
      {
        'CategoryID': -87697757,
        'CategoryName': 'magna'
      }
    ],
    'ExternalIdsList': [
      {
        'ID': 61694905,
        'AdvancedOptionSufix': 'dolore reprehenderit',
        'ExternalId1': 'eiusmod pro',
        'ExternalId2': 'officia ea in fugiat',
        'ExternalIdType': 'labore'
      },
      {
        'ID': -99964792,
        'AdvancedOptionSufix': 'cillum do ea id ullamco',
        'ExternalId1': 'laborum exercitation consequat',
        'ExternalId2': 'Ut in ipsum',
        'ExternalIdType': 'irure qui'
      }
    ],
    'CategoryExternalIdsList': [
      {
        'ID': -52785366,
        'CategoryID': -57320157,
        'ExternalId1': 'laborum',
        'ExternalIdType': 'in'
      },
      {
        'ID': -30319590,
        'CategoryID': 1362631,
        'ExternalId1': 'aliquip a',
        'ExternalIdType': 'in in'
      },
      {
        'ID': 63511377,
        'CategoryID': -5840475,
        'ExternalId1': 'deserunt nostrud amet',
        'ExternalIdType': 'laborum'
      },
      {
        'ID': -33837317,
        'CategoryID': -41878663,
        'ExternalId1': 'in dolore',
        'ExternalIdType': 'fugiat'
      }
    ],
    'NonTaxable': false,
    'NotForSale': true,
    'Hide': false,
    'GiftCertificate': false,
    'HomeSpecial': false,
    'CategorySpecial': true,
    'NonSearchable': false,
    'GiftWrapItem': false,
    'ShipCost': -10600618.88195625,
    'Weight': 9078899.138909474,
    'Height': 90581515.30256867,
    'Width': -65099120.80518912,
    'Depth': -37041066.496863805,
    'SelfShip': false,
    'FreeShipping': true,
    'RewardPoints': -70051161,
    'RedeemPoints': -58808522,
    'DisableRewards': true,
    'StockAlert': -69829261,
    'ReorderQuantity': -96137020,
    'InStockMessage': 'tempor cillum in cupidatat fugiat',
    'OutOfStockMessage': 'enim reprehe',
    'BackOrderMessage': 'aliquip ut',
    'InventoryControl': 11713086,
    'WarehouseLocation': 'Duis in ipsum incididunt quis',
    'WarehouseBin': 'irure ea eiusmod non',
    'WarehouseAisle': 'ad do dolor',
    'WarehouseCustom': 'aliqua ut',
    'Description': 'non in',
    'Keywords': 'eiusmod Duis',
    'ExtraField1': 'qui in',
    'ExtraField2': 'Lorem eiusmod ipsum veniam',
    'ExtraField3': 'dolor anim officia',
    'ExtraField4': 'id non',
    'ExtraField5': 'sunt est culpa',
    'ExtraField6': 'deserunt',
    'ExtraField7': 'tempor aliqua occaecat',
    'ExtraField8': 'non magna',
    'ExtraField9': 'qui Excepteur anim et',
    'ExtraField10': 'dolore velit officia nostrud',
    'ExtraField11': 'id dolor ad aliquip anim',
    'ExtraField12': 'nisi ex tempor Lorem ad',
    'ExtraField13': 'quis eu',
    'FeatureList': [
      {
        'FeatureID': 87529955,
        'FeatureTitle': 'anim ad magna nisi',
        'FeatureDescription': 'ea officia'
      },
      {
        'FeatureID': 81554410,
        'FeatureTitle': 'nulla et mollit officia',
        'FeatureDescription': 'magna cupidatat'
      },
      {
        'FeatureID': 5586242,
        'FeatureTitle': 'commodo Dui',
        'FeatureDescription': 'ad sint labor'
      },
      {
        'FeatureID': -60816330,
        'FeatureTitle': 'in sit',
        'FeatureDescription': 'deserunt ex officia'
      },
      {
        'FeatureID': 78416131,
        'FeatureTitle': 'nostrud e',
        'FeatureDescription': 'eu esse est'
      }
    ],
    'PluginList': {},
    'SampleEnable': false,
    'SampleName': 'aliquip',
    'SampleSKUPrefix': 'pariatur ipsum nul',
    'SamplePrice': 80699384.93821168,
    'SampleWeight': 4785012.020898357,
    'ReviewAverage': 95477025.2272993,
    'ReviewCount': 95870152,
    'MainImageFile': 'et Excepteur nisi veniam',
    'MainImageCaption': 'ullamco fugiat ut deserunt voluptate',
    'ThumbnailFile': 'id nostrud velit anim',
    'MediaFile': 'do pariatur',
    'AdditionalImageFile2': 'tempor officia et cillum culpa',
    'AdditionalImageCaption2': 'in cupidatat laboris',
    'AdditionalImageFile3': 'do velit sit',
    'AdditionalImageCaption3': 'id velit veniam commodo',
    'AdditionalImageFile4': 'Lorem velit irure ipsum',
    'AdditionalImageCaption4': 'aliqua esse Ut',
    'ImageGalleryList': [
      {
        'ImageGalleryID': 93937587,
        'ImageGalleryFile': 'in nostrud ea pariatur',
        'ImageGalleryCaption': 'non in sed',
        'ImageGallerySorting': -51770181
      },
      {
        'ImageGalleryID': -22954681,
        'ImageGalleryFile': 'velit ea sit pariatur laboris',
        'ImageGalleryCaption': 'dolor consectetur qui laborum aliquip',
        'ImageGallerySorting': 42307409
      },
      {
        'ImageGalleryID': -25994028,
        'ImageGalleryFile': 'fugiat ad occaecat est nulla',
        'ImageGalleryCaption': 'esse eu',
        'ImageGallerySorting': -51360544
      },
      {
        'ImageGalleryID': 32372760,
        'ImageGalleryFile': 'ullamco et commodo laboris eiusmod',
        'ImageGalleryCaption': 'anim pariatur et eiusmod exercitation',
        'ImageGallerySorting': -83300590
      }
    ],
    'OptionSetList': [
      {
        'OptionSetID': -466228,
        'OptionSetName': 'aliquip',
        'OptionSorting': 37945764.24949825,
        'OptionRequired': false,
        'OptionType': 'magna ',
        'OptionURL': 'deserunt in Ut nulla',
        'OptionAdditionalInformation': 'laborum voluptate commodo ea culpa',
        'OptionSizeLimit': 4283943,
        'OptionList': [
          {
            'OptionID': 29303264,
            'OptionName': 'Excepteur id in enim',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 13304673.223948479,
            'OptionPartNumber': 'ali',
            'OptionSorting': -63838303.48048631,
            'OptionImagePath': 'non enim dolore in',
            'OptionBundleCatalogId': 25770767,
            'OptionBundleQuantity': 12412268
          },
          {
            'OptionID': 75563384,
            'OptionName': 'ex nulla dolor occaecat',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 852019.9370655864,
            'OptionPartNumber': 'dolor sit eiusmod aliqua',
            'OptionSorting': -37982405.085194506,
            'OptionImagePath': 'dolor in deserunt',
            'OptionBundleCatalogId': 24869787,
            'OptionBundleQuantity': -98542646
          },
          {
            'OptionID': -22272186,
            'OptionName': 'id do reprehenderit dolor amet',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 79663952.06483364,
            'OptionPartNumber': 'aliqua fugiat e',
            'OptionSorting': -40107189.78465731,
            'OptionImagePath': 'quis',
            'OptionBundleCatalogId': -42224169,
            'OptionBundleQuantity': 703629
          }
        ]
      },
      {
        'OptionSetID': 93573354,
        'OptionSetName': 'ad cillum commodo',
        'OptionSorting': -93473490.53289488,
        'OptionRequired': true,
        'OptionType': 'id et',
        'OptionURL': '',
        'OptionAdditionalInformation': 'consectetur dolore aute sunt enim',
        'OptionSizeLimit': 3586086,
        'OptionList': [
          {
            'OptionID': -10786285,
            'OptionName': 'proident ut',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 80565059.66213942,
            'OptionPartNumber': 'amet Excepteur velit in',
            'OptionSorting': 51428883.92332715,
            'OptionImagePath': 'in sunt',
            'OptionBundleCatalogId': 29334422,
            'OptionBundleQuantity': -51797951
          },
          {
            'OptionID': 55609478,
            'OptionName': 'et dolore officia reprehenderit',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -63095179.26375223,
            'OptionPartNumber': 'adip',
            'OptionSorting': -89150980.70153004,
            'OptionImagePath': 'occaecat Lorem nostrud',
            'OptionBundleCatalogId': -22960812,
            'OptionBundleQuantity': -50540835
          },
          {
            'OptionID': 65321063,
            'OptionName': 'laboris ut elit enim',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': -25481317.488593146,
            'OptionPartNumber': 'non',
            'OptionSorting': -95498798.2094933,
            'OptionImagePath': 'aliquip in',
            'OptionBundleCatalogId': 33703905,
            'OptionBundleQuantity': 98422047
          },
          {
            'OptionID': -70012900,
            'OptionName': 'et elit aliquip ut',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 17078962.84011601,
            'OptionPartNumber': 'c',
            'OptionSorting': 33122421.1957673,
            'OptionImagePath': 'in ea sunt fugiat',
            'OptionBundleCatalogId': -67317924,
            'OptionBundleQuantity': 79159913
          }
        ]
      }
    ],
    'AdvancedOptionList': [
      {
        'AdvancedOptionCode': 'sunt dolor voluptat',
        'AdvancedOptionSufix': 'laboris v',
        'AdvancedOptionName': 'ea esse laborum labore ut',
        'AdvancedOptionCost': 55848112.98952207,
        'AdvancedOptionStock': 76156695,
        'AdvancedOptionWeight': 9164328.298772201,
        'AdvancedOptionPrice': 9651999.837504506,
        'AdvancedOptionGTIN': 'ad adipisicing dolor veniam deserunt'
      },
      {
        'AdvancedOptionCode': 'consequ',
        'AdvancedOptionSufix': 'in',
        'AdvancedOptionName': 'officia Lorem',
        'AdvancedOptionCost': 90640319.11127093,
        'AdvancedOptionStock': 54338452,
        'AdvancedOptionWeight': -15511710.312378526,
        'AdvancedOptionPrice': 64611024.67730898,
        'AdvancedOptionGTIN': 'nos'
      }
    ],
    'RelatedProductList': [
      {
        'RelatedIndexID': 89414775,
        'RelatedProductID': 85888512,
        'RelatedProductSorting': 15102358
      },
      {
        'RelatedIndexID': 75748404,
        'RelatedProductID': -31477001,
        'RelatedProductSorting': 72772785
      }
    ],
    'UpSellingItemList': [
      {
        'UpSellingIndexID': 47506021,
        'UpSellingItemID': -52234227,
        'UpSellingItemSorting': 92257498
      },
      {
        'UpSellingIndexID': 93107884,
        'UpSellingItemID': -57007053,
        'UpSellingItemSorting': -78009068
      },
      {
        'UpSellingIndexID': -31045693,
        'UpSellingItemID': 12785595,
        'UpSellingItemSorting': -6069558
      },
      {
        'UpSellingIndexID': 55302721,
        'UpSellingItemID': 36582168,
        'UpSellingItemSorting': -64383910
      },
      {
        'UpSellingIndexID': 94922078,
        'UpSellingItemID': -37166988,
        'UpSellingItemSorting': -16684608
      }
    ],
    'DiscountList': [
      {
        'DiscountID': 53775141,
        'DiscountPriceLevel': -6484243,
        'DiscountLowbound': 43653873,
        'DiscountUpbound': -65085012,
        'DiscountPrice': 24062429.59205392,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -15169325,
        'DiscountPriceLevel': -74223319,
        'DiscountLowbound': 23171948,
        'DiscountUpbound': -34063601,
        'DiscountPrice': 39205151.21132815,
        'DiscountPercentage': true
      },
      {
        'DiscountID': -37826793,
        'DiscountPriceLevel': 78170938,
        'DiscountLowbound': 71711506,
        'DiscountUpbound': -82649015,
        'DiscountPrice': 12960969.719267726,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -73536759,
        'DiscountPriceLevel': 72907212,
        'DiscountLowbound': 40221238,
        'DiscountUpbound': 42828439,
        'DiscountPrice': -52482288.167259924,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -20626471,
        'DiscountPriceLevel': 75290069,
        'DiscountLowbound': -33070102,
        'DiscountUpbound': -7140768,
        'DiscountPrice': -89612018.10301942,
        'DiscountPercentage': false
      }
    ],
    'DoNotUseCategoryOptions': false,
    'DateCreated': '1940-11-09T08:06:28.312Z',
    'ListingTemplateID': 99219440,
    'ListingTemplateName': 'exercitation dolore in deserunt',
    'LoginRequiredOptionID': -59374108,
    'LoginRequiredOptionName': 'velit culpa occaecat',
    'LoginRequiredOptionRedirectTo': 'nisi in',
    'AllowAccessCustomerGroupID': 56625779,
    'AllowAccessCustomerGroupName': 'cillum nulla qui',
    'RMAMaxPeriod': 'occaecat voluptate incididun',
    'CanonicalUrl': 'nostrud proident aliqua',
    'TaxCode': '.R#',
    'DisplayText': 'Duis eu consectetur proide',
    'MinimumQuantity': -86395086.43804161,
    'MaximumQuantity': -83848114.48124045,
    'AllowOnlyMultiples': false,
    'AllowFractionalQuantity': true,
    'QuantityOptions': 'quis nostrud mollit nulla cillum',
    'GroupOptionsForQuantityPricing': false,
    'ApplyQuantityDiscountToOptions': false,
    'EnableMakeAnOfferFeature': true,
    'MinimumAcceptableOffer': 'occ',
    'PriceLevel1': -76113886.60931867,
    'PriceLevel1Hide': false,
    'PriceLevel2': -2685019.806964606,
    'PriceLevel2Hide': true,
    'PriceLevel3': 27555636.37172766,
    'PriceLevel3Hide': false,
    'PriceLevel4': -32466343.359107345,
    'PriceLevel4Hide': false,
    'PriceLevel5': -35533768.53624486,
    'PriceLevel5Hide': true,
    'PriceLevel6': -49754764.17288869,
    'PriceLevel6Hide': true,
    'PriceLevel7': -99144164.53978108,
    'PriceLevel7Hide': true,
    'PriceLevel8': 55966055.8681418,
    'PriceLevel8Hide': false,
    'PriceLevel9': -88768331.34491347,
    'PriceLevel9Hide': true,
    'PriceLevel10': 84988986.90436819,
    'PriceLevel10Hide': true,
    'BuyButtonLink': 'ea est',
    'ProductLink': 'dolor ad exercitation',
    'Title': 'laboris dolor reprehenderit cillum ipsum',
    'CustomFileName': 'amet',
    'RedirectLink': 'laborum pariatur ullamco deserunt',
    'MetaTags': 'incididunt eu tempor',
    'SpecialInstructions': 'ea Ut nulla',
    'AssignKey': true,
    'ReUseKeys': true,
    'SerialList': [
      {
        'SerialID': 22829981,
        'SerialUses': -51941719,
        'SerialCode': 'ullamco labore cupidatat'
      }
    ],
    'EProductList': [
      {
        'FileNumber': 9395245,
        'FilePath': 'labore'
      },
      {
        'FileNumber': 90816224,
        'FilePath': 'voluptate Excepteur veniam in tempor'
      }
    ]
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificProductsById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'SKUInfo': {
    'CatalogID': 53430377,
    'SKU': 'adipisicing reprehenderit consectetur ut aute',
    'Name': 'aute nostrud',
    'Cost': 72975781.36366543,
    'Price': 27990481.795528367,
    'Currency': 'minim sit exercitation',
    'RetailPrice': 55871731.56949267,
    'SalePrice': -58277497.51034395,
    'OnSale': false,
    'Stock': 84553874.45930165
  },
  'MFGID': 'ad ipsum consequat',
  'ShortDescription': 'in nulla exercitation repre',
  'ManufacturerID': 97336733,
  'ManufacturerName': 'et pariatur sunt dolor',
  'DistributorList': [
    {
      'DistributorID': 36746855,
      'DistributorName': 'exercitati',
      'DistributorItemCost': 80086779.07145098,
      'DistributorItemID': 'a',
      'DistributorStockID': 'laboris dolor nu'
    },
    {
      'DistributorID': 53438661,
      'DistributorName': 'veniam consectetur aute',
      'DistributorItemCost': -2045013.3467487097,
      'DistributorItemID': 'et commodo dolore non',
      'DistributorStockID': 'Duis dolor irure'
    }
  ],
  'LastUpdate': '1973-02-20T12:44:10.049Z',
  'UserID': 'commodo',
  'GTIN': 'adipisicing dolore ',
  'CategoryList': [
    {
      'CategoryID': -39731715,
      'CategoryName': 'ea'
    },
    {
      'CategoryID': 49643563,
      'CategoryName': 'irure adipisicing'
    },
    {
      'CategoryID': -13633446,
      'CategoryName': 'irure Ut quis'
    }
  ],
  'ExternalIdsList': [
    {
      'ID': -10424970,
      'AdvancedOptionSufix': 'proident in Lorem ut occaec',
      'ExternalId1': 'ex eu',
      'ExternalId2': 'quis enim',
      'ExternalIdType': 'exercitat'
    }
  ],
  'CategoryExternalIdsList': [
    {
      'ID': 44074511,
      'CategoryID': 48249566,
      'ExternalId1': 'esse eiusmod exercitation',
      'ExternalIdType': 'ut laboris nostrud'
    },
    {
      'ID': 57582755,
      'CategoryID': 59838543,
      'ExternalId1': 'mollit in',
      'ExternalIdType': 'dolor'
    }
  ],
  'NonTaxable': true,
  'NotForSale': false,
  'Hide': true,
  'GiftCertificate': true,
  'HomeSpecial': true,
  'CategorySpecial': false,
  'NonSearchable': false,
  'GiftWrapItem': true,
  'ShipCost': 6024793.697447434,
  'Weight': -2525536.41808939,
  'Height': 36049126.78142339,
  'Width': 90826802.05280727,
  'Depth': -88202316.63542596,
  'SelfShip': false,
  'FreeShipping': true,
  'RewardPoints': -13509021,
  'RedeemPoints': 386609,
  'DisableRewards': true,
  'StockAlert': -23054374,
  'ReorderQuantity': 24889835,
  'InStockMessage': 'dolore eiusmod fugiat voluptate',
  'OutOfStockMessage': 'incididunt reprehenderit anim est',
  'BackOrderMessage': 'labore',
  'InventoryControl': -82090968,
  'WarehouseLocation': 'et quis',
  'WarehouseBin': 'ipsum Lorem',
  'WarehouseAisle': 'quis ea dolore ut',
  'WarehouseCustom': 'ullamco cupidatat consequat consectetur',
  'Description': 'pariatur ex in quis do',
  'Keywords': 'et eu Ut',
  'ExtraField1': 'consequat tempor ex',
  'ExtraField2': 'sed est dolore',
  'ExtraField3': 'cupidatat aute aliqua voluptate',
  'ExtraField4': 'et dolor pariatur nisi veniam',
  'ExtraField5': 'ut laboris aute',
  'ExtraField6': 'Duis est',
  'ExtraField7': 'veniam qui',
  'ExtraField8': 'ad consectetur',
  'ExtraField9': 'Ut veniam',
  'ExtraField10': 'sit aute quis magna eiusmod',
  'ExtraField11': 'aliqua eu consequat',
  'ExtraField12': 'velit magna esse fugiat laborum',
  'ExtraField13': 'cupidatat Ut tempor aliqua',
  'FeatureList': [
    {
      'FeatureID': -13232624,
      'FeatureTitle': 'ut',
      'FeatureDescription': 'anim velit ullamco ad am'
    }
  ],
  'PluginList': {},
  'SampleEnable': false,
  'SampleName': 'eiusmod',
  'SampleSKUPrefix': 'non ea sed',
  'SamplePrice': -90390627.95033704,
  'SampleWeight': 30033912.057703644,
  'ReviewAverage': -2305013.478265837,
  'ReviewCount': -27761823,
  'MainImageFile': 'pariatur Ut officia v',
  'MainImageCaption': 'enim',
  'ThumbnailFile': 'dolor aliqua ut',
  'MediaFile': 'cupidatat',
  'AdditionalImageFile2': 'tempor',
  'AdditionalImageCaption2': 'veniam',
  'AdditionalImageFile3': 'sint Ut Lorem in',
  'AdditionalImageCaption3': 'minim nostrud consequat aliquip',
  'AdditionalImageFile4': 'ullamco',
  'AdditionalImageCaption4': 'sed ad',
  'ImageGalleryList': [
    {
      'ImageGalleryID': 29564791,
      'ImageGalleryFile': 'dolore ut',
      'ImageGalleryCaption': 'in proident esse',
      'ImageGallerySorting': 59376616
    },
    {
      'ImageGalleryID': -82246367,
      'ImageGalleryFile': 'mollit aliquip commod',
      'ImageGalleryCaption': 'veniam',
      'ImageGallerySorting': -41995661
    },
    {
      'ImageGalleryID': 12421427,
      'ImageGalleryFile': 'irure',
      'ImageGalleryCaption': 'in non commodo veniam proident',
      'ImageGallerySorting': 88043996
    },
    {
      'ImageGalleryID': -79841788,
      'ImageGalleryFile': 'Ut',
      'ImageGalleryCaption': 'laborum deserunt',
      'ImageGallerySorting': 23551499
    }
  ],
  'OptionSetList': [
    {
      'OptionSetID': -10703979,
      'OptionSetName': 'exercitation',
      'OptionSorting': 66543507.60461685,
      'OptionRequired': true,
      'OptionType': 'Lorem',
      'OptionURL': 'mollit in irure Lorem',
      'OptionAdditionalInformation': 'elit in qui',
      'OptionSizeLimit': 20334747,
      'OptionList': [
        {
          'OptionID': 92847604,
          'OptionName': 'fugiat velit mollit Duis',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 58192670.16976896,
          'OptionPartNumber': 'cupidatat of',
          'OptionSorting': 90509710.66144401,
          'OptionImagePath': 'et dol',
          'OptionBundleCatalogId': 85858126,
          'OptionBundleQuantity': 70946808
        },
        {
          'OptionID': -76943455,
          'OptionName': 'ut magna',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': -48582362.07679134,
          'OptionPartNumber': 'in fugiat ipsum',
          'OptionSorting': 68996553.1048452,
          'OptionImagePath': 'sint',
          'OptionBundleCatalogId': 9269710,
          'OptionBundleQuantity': -67955981
        },
        {
          'OptionID': 18099502,
          'OptionName': 'Excepteur dolore consequat',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': -7443025.00906451,
          'OptionPartNumber': 'laboris consectetur',
          'OptionSorting': 65580203.23112324,
          'OptionImagePath': 'id aliqua irure in',
          'OptionBundleCatalogId': 42612860,
          'OptionBundleQuantity': -114117
        },
        {
          'OptionID': 18740259,
          'OptionName': 'consequat in adipisicing laboris',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': 70493531.2192486,
          'OptionPartNumber': 'id',
          'OptionSorting': -821927.6079335809,
          'OptionImagePath': 'aliqua aute ut dolor sit',
          'OptionBundleCatalogId': 64757144,
          'OptionBundleQuantity': -83473689
        }
      ]
    }
  ],
  'AdvancedOptionList': [
    {
      'AdvancedOptionCode': 'est',
      'AdvancedOptionSufix': 'ipsum consectetur pariatur Ut',
      'AdvancedOptionName': 'qui est esse Ut',
      'AdvancedOptionCost': -10883921.368071541,
      'AdvancedOptionStock': -5744372,
      'AdvancedOptionWeight': -18422768.233305573,
      'AdvancedOptionPrice': -30775166.63925782,
      'AdvancedOptionGTIN': 'in'
    },
    {
      'AdvancedOptionCode': 'officia aute Lorem pariat',
      'AdvancedOptionSufix': 'enim Lorem occaecat in',
      'AdvancedOptionName': 'est proident reprehenderit enim',
      'AdvancedOptionCost': 46798051.43079755,
      'AdvancedOptionStock': -39369621,
      'AdvancedOptionWeight': 2847264.0829848945,
      'AdvancedOptionPrice': -96777067.28962487,
      'AdvancedOptionGTIN': 've'
    },
    {
      'AdvancedOptionCode': 'in tempor consequat',
      'AdvancedOptionSufix': 'incididunt ipsum',
      'AdvancedOptionName': 'Excepteur Duis reprehenderit',
      'AdvancedOptionCost': -52364324.39140644,
      'AdvancedOptionStock': -78748064,
      'AdvancedOptionWeight': -82442390.51808347,
      'AdvancedOptionPrice': -97888315.35563841,
      'AdvancedOptionGTIN': 'mollit adipisicing Excepteu'
    },
    {
      'AdvancedOptionCode': 'in ullamco eu ad',
      'AdvancedOptionSufix': 'nulla eu',
      'AdvancedOptionName': 'voluptate irure occaecat quis nisi',
      'AdvancedOptionCost': 26005642.69812748,
      'AdvancedOptionStock': 85842242,
      'AdvancedOptionWeight': 45071485.33939445,
      'AdvancedOptionPrice': 17382079.04131031,
      'AdvancedOptionGTIN': 'irure quis'
    },
    {
      'AdvancedOptionCode': 'mollit eiusmod nostrud',
      'AdvancedOptionSufix': 'ut non',
      'AdvancedOptionName': 'of',
      'AdvancedOptionCost': -97248859.12104893,
      'AdvancedOptionStock': -15246903,
      'AdvancedOptionWeight': -92647194.51222731,
      'AdvancedOptionPrice': 48699514.82852018,
      'AdvancedOptionGTIN': 'tempor est aliquip voluptate'
    }
  ],
  'RelatedProductList': [
    {
      'RelatedIndexID': 10877627,
      'RelatedProductID': 95629732,
      'RelatedProductSorting': -69395077
    },
    {
      'RelatedIndexID': -65305293,
      'RelatedProductID': 79749951,
      'RelatedProductSorting': -61523488
    },
    {
      'RelatedIndexID': 94517534,
      'RelatedProductID': 82285026,
      'RelatedProductSorting': -31192985
    }
  ],
  'UpSellingItemList': [
    {
      'UpSellingIndexID': -45719889,
      'UpSellingItemID': 61864508,
      'UpSellingItemSorting': -93406759
    },
    {
      'UpSellingIndexID': 80201924,
      'UpSellingItemID': -60066401,
      'UpSellingItemSorting': -21985361
    },
    {
      'UpSellingIndexID': -70485574,
      'UpSellingItemID': -15324678,
      'UpSellingItemSorting': 10362384
    },
    {
      'UpSellingIndexID': -67636748,
      'UpSellingItemID': -81207976,
      'UpSellingItemSorting': 73473369
    },
    {
      'UpSellingIndexID': -42909612,
      'UpSellingItemID': -65500247,
      'UpSellingItemSorting': 97456034
    }
  ],
  'DiscountList': [
    {
      'DiscountID': -90142911,
      'DiscountPriceLevel': -23554282,
      'DiscountLowbound': 39191682,
      'DiscountUpbound': -69854312,
      'DiscountPrice': -81818293.17180069,
      'DiscountPercentage': true
    },
    {
      'DiscountID': 71938356,
      'DiscountPriceLevel': 43370180,
      'DiscountLowbound': 26908932,
      'DiscountUpbound': -45170455,
      'DiscountPrice': 1978781.539260149,
      'DiscountPercentage': true
    },
    {
      'DiscountID': -76957879,
      'DiscountPriceLevel': -54966076,
      'DiscountLowbound': -69206267,
      'DiscountUpbound': 52548335,
      'DiscountPrice': 54241565.32605839,
      'DiscountPercentage': false
    },
    {
      'DiscountID': -87302291,
      'DiscountPriceLevel': 31937405,
      'DiscountLowbound': -50008247,
      'DiscountUpbound': -55554687,
      'DiscountPrice': -39550181.63200883,
      'DiscountPercentage': true
    },
    {
      'DiscountID': 62708468,
      'DiscountPriceLevel': -45293155,
      'DiscountLowbound': -8613400,
      'DiscountUpbound': -81237464,
      'DiscountPrice': 79393330.96652365,
      'DiscountPercentage': false
    }
  ],
  'DoNotUseCategoryOptions': false,
  'DateCreated': '1973-04-13T07:25:35.444Z',
  'ListingTemplateID': 32273201,
  'ListingTemplateName': 'aute tempor quis ex ',
  'LoginRequiredOptionID': 65504481,
  'LoginRequiredOptionName': 'consectetur eu laboris reprehenderit',
  'LoginRequiredOptionRedirectTo': 'proident',
  'AllowAccessCustomerGroupID': -19973569,
  'AllowAccessCustomerGroupName': 'enim dolore ad proident',
  'RMAMaxPeriod': 'paria',
  'CanonicalUrl': 'ea veniam amet',
  'TaxCode': 'q`9(s8',
  'DisplayText': 'deserunt aliquip proident esse',
  'MinimumQuantity': -8542744.726029202,
  'MaximumQuantity': -96025651.24411346,
  'AllowOnlyMultiples': true,
  'AllowFractionalQuantity': true,
  'QuantityOptions': 'sint ad proident ut laboris',
  'GroupOptionsForQuantityPricing': false,
  'ApplyQuantityDiscountToOptions': false,
  'EnableMakeAnOfferFeature': false,
  'MinimumAcceptableOffer': 'ut ',
  'PriceLevel1': 65411422.50055501,
  'PriceLevel1Hide': false,
  'PriceLevel2': 46424553.52736002,
  'PriceLevel2Hide': false,
  'PriceLevel3': -99070313.950136,
  'PriceLevel3Hide': true,
  'PriceLevel4': -76719270.34783548,
  'PriceLevel4Hide': true,
  'PriceLevel5': 20152754.00776644,
  'PriceLevel5Hide': false,
  'PriceLevel6': 9750838.195950747,
  'PriceLevel6Hide': false,
  'PriceLevel7': -32855842.837624267,
  'PriceLevel7Hide': true,
  'PriceLevel8': 62730428.06406516,
  'PriceLevel8Hide': false,
  'PriceLevel9': -43868142.31773304,
  'PriceLevel9Hide': false,
  'PriceLevel10': 30134372.364892453,
  'PriceLevel10Hide': true,
  'BuyButtonLink': 'nulla esse sint tempor',
  'ProductLink': 'non occaecat officia',
  'Title': 'in dolore',
  'CustomFileName': 'sint adipisicing consectetur commodo',
  'RedirectLink': 'ullamco eu sit officia',
  'MetaTags': 'cupidatat deserunt mollit',
  'SpecialInstructions': 'voluptate aliqua Lorem',
  'AssignKey': false,
  'ReUseKeys': true,
  'SerialList': [
    {
      'SerialID': -8725466,
      'SerialUses': -30885336,
      'SerialCode': 'id Ut'
    },
    {
      'SerialID': 83193544,
      'SerialUses': 47038811,
      'SerialCode': 'in id esse'
    },
    {
      'SerialID': -82758751,
      'SerialUses': 29080949,
      'SerialCode': 'deserunt fugiat ullamco anim aute'
    },
    {
      'SerialID': -32087560,
      'SerialUses': 45223921,
      'SerialCode': 'et culpa'
    },
    {
      'SerialID': 10718131,
      'SerialUses': 57813828,
      'SerialCode': 'nostrud laboris'
    }
  ],
  'EProductList': [
    {
      'FileNumber': -35806385,
      'FilePath': 'culpa n'
    },
    {
      'FileNumber': 49531231,
      'FilePath': 'sunt eu amet conse'
    },
    {
      'FileNumber': -7255798,
      'FilePath': 'enim tempor'
    },
    {
      'FileNumber': -88625375,
      'FilePath': 'est'
    }
  ]
};

request.send(JSON.stringify(body));

}
function deleteSpecificProduct()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveListofProductsFromSpecificCategory()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Categories/{categoryid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveListodProductsFromSpecificDistributor()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Distributors/{distributorid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveListofProductsFromSpecificManufacturer()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Manufacturers/{manufacturerid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveAdvancedOptionsFromSpecificProduct(){
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/AdvancedOptions?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function updateListofAdvancedOptions()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/AdvancedOptions');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'AdvancedOptionCode': 'laboris',
    'AdvancedOptionSufix': 'magna et tempo',
    'AdvancedOptionName': 'labore Excepteur ipsum',
    'AdvancedOptionCost': 19412121.02316548,
    'AdvancedOptionStock': 41646972,
    'AdvancedOptionWeight': 84507957.28856435,
    'AdvancedOptionPrice': 19553737.318848535,
    'AdvancedOptionGTIN': 'labore officia sed dolor'
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificAdvancedOptionById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/AdvancedOptions/{advancedoptioncode}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'AdvancedOptionCode': 'in ipsum',
  'AdvancedOptionSufix': 'culpa voluptate',
  'AdvancedOptionName': 'aliquip in reprehenderit',
  'AdvancedOptionCost': 36862359.07975793,
  'AdvancedOptionStock': 45126002,
  'AdvancedOptionWeight': -380028.7652761638,
  'AdvancedOptionPrice': -55164456.6270276,
  'AdvancedOptionGTIN': 'tempor laborum'
};

request.send(JSON.stringify(body));

}
function retrieveListOfCategoriesFromSpecificProduct()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Categories?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createDiscount()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Discount');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'DiscountID': -60996578,
  'DiscountPriceLevel': 98846947,
  'DiscountLowbound': -8205870,
  'DiscountUpbound': 97520382,
  'DiscountPrice': 34517558.279682964,
  'DiscountPercentage': false
};

request.send(JSON.stringify(body));

}
function retrieveListofDiscountFromSpecificProduct()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Discount?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofProductDiscount()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Discount');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'DiscountID': 12268266,
    'DiscountPriceLevel': -63409485,
    'DiscountLowbound': -64613614,
    'DiscountUpbound': 74300784,
    'DiscountPrice': -35325071.044415735,
    'DiscountPercentage': true
  },
  {
    'DiscountID': -40581614,
    'DiscountPriceLevel': 11098818,
    'DiscountLowbound': 39991322,
    'DiscountUpbound': 99939903,
    'DiscountPrice': -45636922.19380786,
    'DiscountPercentage': false
  },
  {
    'DiscountID': 15386054,
    'DiscountPriceLevel': 60361828,
    'DiscountLowbound': 92842752,
    'DiscountUpbound': -47834392,
    'DiscountPrice': -33316346.769740775,
    'DiscountPercentage': true
  },
  {
    'DiscountID': 38255093,
    'DiscountPriceLevel': -62260238,
    'DiscountLowbound': -93784356,
    'DiscountUpbound': -83572273,
    'DiscountPrice': 53451596.090922266,
    'DiscountPercentage': true
  },
  {
    'DiscountID': -96803687,
    'DiscountPriceLevel': 77777939,
    'DiscountLowbound': 71421992,
    'DiscountUpbound': 29829495,
    'DiscountPrice': 33005085.719253153,
    'DiscountPercentage': true
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificDiscountById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Discount/{discountid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'DiscountID': -13267609,
  'DiscountPriceLevel': 82926126,
  'DiscountLowbound': -12286958,
  'DiscountUpbound': 499268,
  'DiscountPrice': 3808919.3722110987,
  'DiscountPercentage': false
};

request.send(JSON.stringify(body));

}
function updateListofDistributorsFromSpecificProduct(){
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Distributors?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function createEProduct()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/EProducts');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'FileNumber': -44314627,
  'FilePath': 'sunt tempor commodo'
};

request.send(JSON.stringify(body));

}
function retrieveListofeProductfromSpecificProduct()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/EProducts?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofeProductsFromSpecificProduct()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/EProducts');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'FileNumber': -20716207,
    'FilePath': 'cupidatat L'
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificeProductById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/EProducts/{filenumber}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'FileNumber': -95697835,
  'FilePath': 'qui mollit'
};

request.send(JSON.stringify(body));
}
function createProductFeature()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Features');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'FeatureID': 2620309,
  'FeatureTitle': 'labore Lorem',
  'FeatureDescription': 'dolor dolore consectetur'
};

request.send(JSON.stringify(body));

}
function retrieveListofFeaturesFromSpecificeProduct()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Features?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
functon updateListofFEaturesFromSpecificProduct()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Features');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'FeatureID': 23031826,
    'FeatureTitle': 'esse in Duis aliqua',
    'FeatureDescription': 'velit laborum anim nulla'
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificFeatureById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Features/{featureid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'FeatureID': 42753319,
  'FeatureTitle': 'magna au',
  'FeatureDescription': 'eiusmod laboris veniam'
};

request.send(JSON.stringify(body));

}
function createAnImage()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Images');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'ImageGalleryID': -19238644,
  'ImageGalleryFile': 'officia commodo amet',
  'ImageGalleryCaption': 'aliquip incididunt ut',
  'ImageGallerySorting': 13128082
};

request.send(JSON.stringify(body));

}
function retrieveListofImages()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Images?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function updateListOfImages()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Images');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'ImageGalleryID': 23973525,
    'ImageGalleryFile': 'et ipsum pariatur Lorem quis',
    'ImageGalleryCaption': 'aute Lorem in incididunt',
    'ImageGallerySorting': -49174226
  },
  {
    'ImageGalleryID': -50519949,
    'ImageGalleryFile': 'dolore ad',
    'ImageGalleryCaption': 'do ut laboris',
    'ImageGallerySorting': -57131342
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificImageById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Images/{imagegalleryid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'ImageGalleryID': 45690021,
  'ImageGalleryFile': 'nostrud ut qui eiusmod',
  'ImageGalleryCaption': 'do in consectetur',
  'ImageGallerySorting': -51969841
};

request.send(JSON.stringify(body));

}
function createNewProductoption()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Options');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'OptionSetID': -59267007,
  'OptionSetName': 'dolor sit',
  'OptionSorting': -57619884.65519599,
  'OptionRequired': true,
  'OptionType': 'des',
  'OptionURL': 'consequat ex laboris do',
  'OptionAdditionalInformation': 'ut ad',
  'OptionSizeLimit': -83493786,
  'OptionList': [
    {
      'OptionID': 53326616,
      'OptionName': 'ipsum cillum ut eu',
      'OptionSelected': false,
      'OptionHide': false,
      'OptionValue': -62903540.1561886,
      'OptionPartNumber': 'minim',
      'OptionSorting': -83740842.9792911,
      'OptionImagePath': 'occaecat ad nulla in',
      'OptionBundleCatalogId': -66271775,
      'OptionBundleQuantity': -23257468
    }
  ]
};

request.send(JSON.stringify(body));
}
functon retrieveListOfProductOptions()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Options?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function updateListofProductOptions()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Options');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'OptionSetID': 73092398,
    'OptionSetName': 'pariatur commodo',
    'OptionSorting': 38778178.74964449,
    'OptionRequired': false,
    'OptionType': 'ea d',
    'OptionURL': 'cillum dolor esse',
    'OptionAdditionalInformation': 'dolore ut',
    'OptionSizeLimit': -44285574,
    'OptionList': [
      {
        'OptionID': 86592820,
        'OptionName': 'consequat sint tempor',
        'OptionSelected': true,
        'OptionHide': false,
        'OptionValue': -37931083.796003364,
        'OptionPartNumber': 'eu consectetur m',
        'OptionSorting': 97355047.59456632,
        'OptionImagePath': 'deserunt',
        'OptionBundleCatalogId': -65705558,
        'OptionBundleQuantity': 22960988
      },
      {
        'OptionID': 54287270,
        'OptionName': 'labore fugiat',
        'OptionSelected': false,
        'OptionHide': false,
        'OptionValue': 88806147.04916638,
        'OptionPartNumber': 'nisi ut laboris',
        'OptionSorting': -748587.8484460711,
        'OptionImagePath': 'Ut laboris ips',
        'OptionBundleCatalogId': 9961091,
        'OptionBundleQuantity': -13789398
      }
    ]
  },
  {
    'OptionSetID': 68199220,
    'OptionSetName': 'consequat pariatur ut amet laboris',
    'OptionSorting': -16604964.237249792,
    'OptionRequired': false,
    'OptionType': 'dolor Ut',
    'OptionURL': 'dolor laborum ut',
    'OptionAdditionalInformation': 'elit aute dolore nisi',
    'OptionSizeLimit': -46580983,
    'OptionList': [
      {
        'OptionID': 13767319,
        'OptionName': 'culpa reprehenderit nostrud',
        'OptionSelected': true,
        'OptionHide': false,
        'OptionValue': 6076360.897456512,
        'OptionPartNumber': 'qui ex',
        'OptionSorting': 63780753.02396014,
        'OptionImagePath': 'sed proident',
        'OptionBundleCatalogId': -86727429,
        'OptionBundleQuantity': 8182989
      }
    ]
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificProductOptionById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Options/{optionsetid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'OptionSetID': -89825483,
  'OptionSetName': 'Excepteur adipisicing ut culpa',
  'OptionSorting': 51718076.13121575,
  'OptionRequired': false,
  'OptionType': 'ven',
  'OptionURL': 'enim eiusmod aliqua amet',
  'OptionAdditionalInformation': 'eiusmod',
  'OptionSizeLimit': 88365074,
  'OptionList': [
    {
      'OptionID': -54535239,
      'OptionName': 'sunt ullamco officia mollit',
      'OptionSelected': true,
      'OptionHide': false,
      'OptionValue': 88804865.94286183,
      'OptionPartNumber': 'consequat a',
      'OptionSorting': -55825003.3112766,
      'OptionImagePath': 'do',
      'OptionBundleCatalogId': 50494724,
      'OptionBundleQuantity': 64081584
    },
    {
      'OptionID': 74864459,
      'OptionName': 'velit nulla et in',
      'OptionSelected': true,
      'OptionHide': true,
      'OptionValue': -49468016.93903953,
      'OptionPartNumber': 'nostr',
      'OptionSorting': 38639847.30815068,
      'OptionImagePath': 'id mollit',
      'OptionBundleCatalogId': -15655906,
      'OptionBundleQuantity': 33463493
    },
    {
      'OptionID': 25722927,
      'OptionName': 'laboris',
      'OptionSelected': false,
      'OptionHide': true,
      'OptionValue': 4514854.642595798,
      'OptionPartNumber': 'pariatur in laborum ut',
      'OptionSorting': 74858496.7309125,
      'OptionImagePath': 'Excepteur laborum',
      'OptionBundleCatalogId': -45167745,
      'OptionBundleQuantity': 1223065
    },
    {
      'OptionID': 71957835,
      'OptionName': 'culpa dolore occaecat ullamco proident',
      'OptionSelected': false,
      'OptionHide': true,
      'OptionValue': -46982636.986776516,
      'OptionPartNumber': 'commodo Ut',
      'OptionSorting': 86798911.90782931,
      'OptionImagePath': 'in et',
      'OptionBundleCatalogId': 32805010,
      'OptionBundleQuantity': -92259311
    }
  ]
};

request.send(JSON.stringify(body));

}
function createNewRelatedProduct()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Related');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'RelatedIndexID': -39662551,
  'RelatedProductID': 60523116,
  'RelatedProductSorting': -60137428
};

request.send(JSON.stringify(body));
}
function retrieveListofRelatedProducts()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Related?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function updateListofReplatedProducts()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Related');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'RelatedIndexID': 17592088,
    'RelatedProductID': 76864329,
    'RelatedProductSorting': -50852388
  },
  {
    'RelatedIndexID': -23745217,
    'RelatedProductID': 23570353,
    'RelatedProductSorting': 58398508
  },
  {
    'RelatedIndexID': 94823493,
    'RelatedProductID': -74953246,
    'RelatedProductSorting': -86505765
  },
  {
    'RelatedIndexID': 46789088,
    'RelatedProductID': -70849213,
    'RelatedProductSorting': -74242301
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificRelatedProductbyId()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Related/{relatedindexid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'RelatedIndexID': 44766185,
  'RelatedProductID': -25716565,
  'RelatedProductSorting': 52470975
};

request.send(JSON.stringify(body));

}
function createNewProductSerial()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Serials');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'SerialID': 38395066,
  'SerialUses': 37377177,
  'SerialCode': 'anim ut eiusmod'
};

request.send(JSON.stringify(body));

}
function retrieListOfProductSerials()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Serials?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function updateListofProductSerials()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Serials');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'SerialID': 40064968,
    'SerialUses': 43048347,
    'SerialCode': 'elit in id'
  },
  {
    'SerialID': 89187483,
    'SerialUses': 30534277,
    'SerialCode': 'enim aliqua'
  },
  {
    'SerialID': 3327119,
    'SerialUses': 90353066,
    'SerialCode': 'in ullamco dolore'
  },
  {
    'SerialID': -41350835,
    'SerialUses': 5810252,
    'SerialCode': 'mollit minim'
  },
  {
    'SerialID': 40520107,
    'SerialUses': 74521676,
    'SerialCode': 'Lorem ut'
  }
];

request.send(JSON.stringify(body));

}
function updateSpecifcProductSerialById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/Serials/{serialid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'SerialID': 91746631,
  'SerialUses': -98034734,
  'SerialCode': 'nisi dolore'
};

request.send(JSON.stringify(body));
}
function createNewUpselProduct()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/UpSelling');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'UpSellingIndexID': -13799368,
  'UpSellingItemID': -58083440,
  'UpSellingItemSorting': -68415871
};

request.send(JSON.stringify(body));
}
function retrieveListofUpsellProducts()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/UpSelling?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofUpsellProdcts()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/UpSelling');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'UpSellingIndexID': -41249289,
    'UpSellingItemID': -59703831,
    'UpSellingItemSorting': 49401527
  },
  {
    'UpSellingIndexID': 88596059,
    'UpSellingItemID': 99266083,
    'UpSellingItemSorting': 61714446
  },
  {
    'UpSellingIndexID': -93843069,
    'UpSellingItemID': 92440678,
    'UpSellingItemSorting': -54297201
  },
  {
    'UpSellingIndexID': -90562263,
    'UpSellingItemID': -59038675,
    'UpSellingItemSorting': -64618281
  }
];

request.send(JSON.stringify(body));

}
function updateSpecificUpsellProductById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/UpSelling/{upsellingindexid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'UpSellingIndexID': -36079282,
  'UpSellingItemID': 60450793,
  'UpSellingItemSorting': 5651050
};

request.send(JSON.stringify(body));
}
function retrieveListofProductskuInfo()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Products/{catalogid}/skuinfo?limit=&offset=&countonly=&sku=&name=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function createNewPromotion()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Promotions');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'PromotionID': -70787818,
  'PromotionName': 'eiusmod',
  'PromotionDescription': 'Excepteur',
  'PromotionStart': '2013-11-21T16:57:36.470Z',
  'PromotionEnd': '1966-02-07T19:44:57.551Z',
  'PromotionEnabled': -48977457,
  'PromotionByAmount': 95378417,
  'PromotionCheckByAmount': -3391469,
  'PromotionByQuantity': 708639,
  'PromotionCheckByQuantity': 23328625,
  'PromotionByProduct': 47625638,
  'PromotionByCategory': 'deserunt magna',
  'PromotionAmount': 9603639.536042824,
  'PromotionPercentage': -11525999,
  'PromotionPerItem': -65657023,
  'PromotionCategory': 'exercitation voluptate',
  'PromotionProduct': 'ut magna cupidatat consectetur enim',
  'PromotionFreeShipping': -97692873,
  'PromotionFreeProduct': 'non proident enim',
  'PromotionProduct1ID': -53727638,
  'PromotionProduct1Quantity': -38839433,
  'PromotionProduct2ID': 91208453,
  'PromotionProduct2Quantity': 95555978,
  'PromotionProduct3ID': 71971243,
  'PromotionProduct3Quantity': 12919219,
  'PromotionProductID': -73896769,
  'PromotionProduct4Quantity': 50535562,
  'PromotionCoupon': 'ad aute dolor labori',
  'PromotionUses': 59575711,
  'PromotionMaxUses': -81845375,
  'PromotionUsesPerCustomer': -80194178,
  'PromotionGroupID': 'commodo amet',
  'PromotionUserid': 'incididunt qui pariatur Lorem consequat',
  'PromotionLastUpdate': '2006-04-29T21:41:46.227Z',
  'PromotionByAmount2': -30343131.984041616,
  'PromotionByQuantity2': -65282190.00438376,
  'PromotionCountry': 'non',
  'PromotionState': 'ex mollit enim',
  'PromotionNonStackable': 15683072,
  'PromotionRulesRetailPrice': 71773203,
  'PromotionExcludeManufacturers': 'nisi est',
  'PromotionFreeProductPrice': 41976805.558638155,
  'PromotionExcludePreorder': -8814193,
  'PromotionExcludeSpecialOrder': -15211039,
  'PromotionShippingDiscount': 86752738.00580907,
  'PromotionShippingOptions': 'anim eiusmod commodo consectetur',
  'PromotionRecurringOrders': -47265290,
  'PromotionBonusRewardPoints': -36420340
};

request.send(JSON.stringify(body));
}
function retrieveListofPromotions()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Promotions?limit=&offset=&promotion=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function specificPromotionById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Promotions/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateListofPromotions()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Promotions');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'PromotionID': 84572412,
    'PromotionName': 'elit in',
    'PromotionDescription': 'Lorem est',
    'PromotionStart': '1950-12-02T01:32:15.220Z',
    'PromotionEnd': '1959-01-10T12:18:15.038Z',
    'PromotionEnabled': -35660845,
    'PromotionByAmount': 26669668,
    'PromotionCheckByAmount': -74782611,
    'PromotionByQuantity': 22504432,
    'PromotionCheckByQuantity': 76295897,
    'PromotionByProduct': -50076430,
    'PromotionByCategory': 'labore ullamco',
    'PromotionAmount': 15103856.59193471,
    'PromotionPercentage': 71417322,
    'PromotionPerItem': -65625281,
    'PromotionCategory': 'dolor exercitation sed',
    'PromotionProduct': 'Lorem in',
    'PromotionFreeShipping': 53159455,
    'PromotionFreeProduct': 'anim non eu consequat nulla',
    'PromotionProduct1ID': 5942376,
    'PromotionProduct1Quantity': 47745793,
    'PromotionProduct2ID': 41831401,
    'PromotionProduct2Quantity': -80699639,
    'PromotionProduct3ID': -77164807,
    'PromotionProduct3Quantity': -72305912,
    'PromotionProductID': -53250736,
    'PromotionProduct4Quantity': -52355130,
    'PromotionCoupon': 'dolor magna ullamco',
    'PromotionUses': 18973047,
    'PromotionMaxUses': 51450993,
    'PromotionUsesPerCustomer': 46304025,
    'PromotionGroupID': 'id deserunt',
    'PromotionUserid': 'ven',
    'PromotionLastUpdate': '2012-05-30T15:54:58.862Z',
    'PromotionByAmount2': -35764254.194169,
    'PromotionByQuantity2': -78237712.51277041,
    'PromotionCountry': 'elit',
    'PromotionState': 'ut nostrud ',
    'PromotionNonStackable': -37258610,
    'PromotionRulesRetailPrice': 99619775,
    'PromotionExcludeManufacturers': 'cillum enim',
    'PromotionFreeProductPrice': -68363447.47887653,
    'PromotionExcludePreorder': 23571173,
    'PromotionExcludeSpecialOrder': -66715078,
    'PromotionShippingDiscount': 74516226.95270962,
    'PromotionShippingOptions': 'ad sint cupidatat',
    'PromotionRecurringOrders': 62285238,
    'PromotionBonusRewardPoints': -13055592
  }
];

request.send(JSON.stringify(body));

}

function updateSpecificPromotionById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Promotions/{promotionid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'PromotionID': -88250652,
  'PromotionName': 'et Ut',
  'PromotionDescription': 'commodo',
  'PromotionStart': '1991-01-10T03:51:19.996Z',
  'PromotionEnd': '1956-05-27T13:59:18.111Z',
  'PromotionEnabled': 25188756,
  'PromotionByAmount': -87519770,
  'PromotionCheckByAmount': -15661393,
  'PromotionByQuantity': 3452045,
  'PromotionCheckByQuantity': -20433887,
  'PromotionByProduct': 3288101,
  'PromotionByCategory': 'reprehenderit incididunt eiusmod aut',
  'PromotionAmount': 90683940.57204324,
  'PromotionPercentage': -107843,
  'PromotionPerItem': 68938184,
  'PromotionCategory': 'enim fugiat reprehenderit deserunt',
  'PromotionProduct': 'in et Duis',
  'PromotionFreeShipping': 91514275,
  'PromotionFreeProduct': 'eu non laboris',
  'PromotionProduct1ID': 46827571,
  'PromotionProduct1Quantity': 1409895,
  'PromotionProduct2ID': -64989936,
  'PromotionProduct2Quantity': 58521560,
  'PromotionProduct3ID': 19002524,
  'PromotionProduct3Quantity': -55845408,
  'PromotionProductID': -3563333,
  'PromotionProduct4Quantity': -14299322,
  'PromotionCoupon': 'ut',
  'PromotionUses': 4887254,
  'PromotionMaxUses': 95543148,
  'PromotionUsesPerCustomer': -47256991,
  'PromotionGroupID': 'laborum',
  'PromotionUserid': 'ut in ',
  'PromotionLastUpdate': '1966-01-07T08:45:54.777Z',
  'PromotionByAmount2': 45018990.85761097,
  'PromotionByQuantity2': 75990726.78788522,
  'PromotionCountry': 'voluptate et in anim veli',
  'PromotionState': 'non aliqua',
  'PromotionNonStackable': -23144645,
  'PromotionRulesRetailPrice': 4021593,
  'PromotionExcludeManufacturers': 'dolore quis',
  'PromotionFreeProductPrice': 7831999.10927932,
  'PromotionExcludePreorder': -18402265,
  'PromotionExcludeSpecialOrder': 20306855,
  'PromotionShippingDiscount': 36634009.71140364,
  'PromotionShippingOptions': 'fugiat',
  'PromotionRecurringOrders': 52987786,
  'PromotionBonusRewardPoints': -43965248
};

request.send(JSON.stringify(body));
}
function deletePromotion()
{
	var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Promotions/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}

function retrieveListofRMS()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/RMA?rmastatusid=&rmareasonid=&rmamethodid=&catalogid=&sku=&datestart=&dateend=&limit=&offset=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveSpecificRMSById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/RMA/{rmaid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveListofItemsFromSpecificRMA()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/RMA/{rmaid}/Items?limit=&offset=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function retrieveStoreSettings()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/StoreSettings');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function updateStoreSettings()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/StoreSettings');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'StoreInformation': {
    'StoreName': 'eiusmod sed consequat in',
    'StoreSlogan': 'voluptate eu dolore ut pariatur',
    'StoreLogo': 'minim ex',
    'StoreEmail': 'sunt quis aute dolore',
    'StoreURL': 'minim',
    'StoreSecureURL': 'non'
  },
  'MerchantInformation': {
    'Company': 'non Ut culpa',
    'Address1': 'culpa exercitatio',
    'Address2': 'consequat eu',
    'City': 'amet irure',
    'State': 'ex sunt',
    'Country': 'anim sit ipsum Ut eli',
    'ZipCode': 'pariatur irure Duis',
    'Phone': 'aute elit',
    'AlternatePhone': 'exercitation ali',
    'Fax': 'incididunt qui',
    'InvoiceLogo': 'non tempor minim enim',
    'InvoiceTerms': 'consequat est dolor co'
  },
  'StoreStandards': {
    'StoreTimeZone': 'et ex in laborum ea',
    'CurrencySymbol': 'velit i',
    'DecimalPlacesOnPrice': 'magna minim velit laboris r',
    'CurrencyCode': ''
  }
};

request.send(JSON.stringify(body));
}
function createNewWebHook()
{
	var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Webhooks');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'Name': 'ex ',
  'Url': 'ex nostrud',
  'EventType': 19757695,
  'Enabled': false,
  'Format': 'cupidatat aliquip in '
};

request.send(JSON.stringify(body));
}
function retrieveListofWebHooks()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Webhooks?limit=&offset=&name=&url=&enabled=&format=&datecreatedstart=&datecreatedend=&dateupdatedstart=&dateupdatedend=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveSpecificWebhookById()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Webhooks/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
function updateSpecificWebHookById()
{
	var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Webhooks/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'Id': -45814576,
  'Name': 'mollit ullamco magna qui velit',
  'Url': 'cupidatat labore',
  'Enabled': true,
  'Format': 'et ut proident minim deserunt'
};

request.send(JSON.stringify(body));

}
function deleteWebHook()
{
	ar request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Webhooks/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}
function retrieveListofWebHookEvents()
{
	var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v2/Webhooks/Events?limit=&offset=&name=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

}
