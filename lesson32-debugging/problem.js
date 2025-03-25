class ShoppingCart {
  constructor() {
    this.items = []; // Initialize an empty cart
  }

  addItem(item, quantity) {
    if (item && quantity > 0) {
      this.items.push({name: item, quantity}); // Add valid items to the cart
    } else {
      console.error("Invalid item details provided.");
    }
  }

  removeItem(itemName) {
    const index = this.items.findIndex((i) => i.name === itemName);
    if (index !== -1) {
      this.items.splice(index, 1); // Remove item if found
    } else {
      console.log(`Attempted to remove ${itemName}: Item not found.`);
    }
  }

  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    // Calculate the total price of the items in the cart
  }

  checkout(paymentAmount) {
    const total = this.getTotalPrice();
    if (paymentAmount < total) {
      console.log("Insufficient amount provided.");
      return false; // Checkout fails if the payment is insufficient
    }

    this.items = []; // Clear cart after successful checkout
    console.log("Checkout successful!");
    return true; // Checkout succeeds
  }

  printReceipt() {
    if (this.items.length === 0) {
      console.log("No items to show. Cart is empty."); // Handle empty cart
    } else {
      this.items.forEach((item) => {
        console.log(
          `${item.quantity}x ${item.name} - $${item.quantity}`
        );
      });
    }
    console.log(`Total: $${this.getTotalPrice().toFixed(2)}`);
    // Print each item's details and the total cost
  }

  getItems() {
    return this.items;
  }

  updateQuantity(item, quantity) {
    const currentIdx = this.items.findIndex(i => i.name === item)
    this.items[currentIdx] = {...this.items[currentIdx], quantity}
  }
}

// Usage example
const cart = new ShoppingCart();
cart.addItem("Apple", 2);
cart.removeItem("Apple")

cart.printReceipt()
cart.checkout(1)

module.exports = ShoppingCart;
