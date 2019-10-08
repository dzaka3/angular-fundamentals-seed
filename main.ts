function shoppingList(){
 this.groceries = [];
}

shoppingList.prototype.addItem = function (item) {
  this.groceries = this.groceries.concat([item]);
};

var mylist = shoppingList();

mylist.addItem('banana');

console.log(mylist.groceries);
