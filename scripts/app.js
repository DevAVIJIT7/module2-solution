(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
	  .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    ;
      
  
  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var buy = this;
    
    buy.toBuyItems = ShoppingListCheckOffService.getToBuy();

    buy.removeAndAddtoBought = function (index) {
      ShoppingListCheckOffService.removeAndAddtoBought(index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;

    bought.toBoughtItems = ShoppingListCheckOffService.getToBought();
  }  

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [{name: 'Cookies', quantity: 5}, {name: 'Biscuit', quantity: 10},
                      {name: 'Apples', quantity: 8}, {name: 'Burger', quantity: 2},
                      {name: 'Sauce', quantity: 2}, {name: 'Ice-cream', quantity: 5}];

    var toBoughtItems = [];

    service.removeAndAddtoBought = function (itemIndex) {
      var item = toBuyItems.splice(itemIndex, 1);
      toBoughtItems.push(item[0]);
    };

    service.getToBuy = function () {
      return toBuyItems;
    };

    service.getToBought = function () {
      return toBoughtItems;
    };

  }  	

})();

/*(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

})();
*/