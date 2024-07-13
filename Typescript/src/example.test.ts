describe("Supermarket", () => {
  it("prints receipt with total 0 when shopping cart is empty", () => {
    //arrange
    const register = new Register();
    //action
    const receipt = register.checkout();
    //assert
    expect(receipt).toBe("Total: £0");
  });

  it("prints receipt with one item and price when shopping cart has 1 item and adding the total", () => {
    const register = new Register();
    register.addProduct("Rice", 1.99);
    const receipt = register.checkout();
    expect(receipt).toBe("Rice: £1.99/nTotal: £1.99");
  });

  it("prints receipt with multiple items and prices, adding the total", () => {
    const register = new Register();
    register.addProduct("Rice", 1.99);
    register.addProduct("Tomatoes", 0.99);
    register.addProduct("Toothpaste", 1.79);
    const receipt = register.checkout();
    expect(receipt).toBe(
      "Rice: £1.99/nTomatoes: £0.99/nToothpaste: £1.79/nTotal: £4.77"
    );
  });

  it("prints receipt with one item that has a 10% discount", () => {
    const register = new Register();
    register.addProduct("Rice", 1.99);
    register.applyDiscount(1.99, 10);
    const receipt = register.checkout();
    expect(receipt).toBe("Rice: £1.79/nTotal: £1.79");
  });
});

class Register {
  items: { product: string; price: number }[];

  constructor() {
    this.items = [];
  }

  addProduct(product, price) {
    this.items.push({ product, price });
  }

  applyDiscount(productPrice: number, discount: number) {
    const item = this.items.find((item) => item.price === productPrice);
    if (item) {
      item.price = parseFloat((productPrice - (productPrice * discount) / 100).toFixed(2));
    }
  }

  checkout() {
    if (this.items.length === 0) {
      return "Total: £0";
    } else {
      let total = this.items.reduce((acc, item) => acc + item.price, 0);
      let receipt = "";
      this.items.forEach((items) => {
        receipt += `${items.product}: £${items.price}/n`;
      });
      receipt = `${receipt}Total: £${total.toFixed(2)}`;
      return receipt;
    }
  }
}
