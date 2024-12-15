const Mock = {
  cart: [],
  
  addToCart(item) {
    const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
  },

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  },
};

export default Mock;
