

describe("Supermarket", () => {
  it("prints receipt with total 0 when shopping cart is empty", () => {
    //arrange
    const register = new Register();
    //action
    const receipt = register.checkout();
    //assert
    expect(receipt).toBe("Total: £0");
  });

  it("prints receipt with one product and price when shopping cart has 1 item", () => {
    const register = new Register();
    register.addProduct("Rice", 1.99);
    const receipt = register.checkout();
    expect(receipt).toBe("Rice: £1.99");
  });

  class Register {
    items: { product: string; price: number }[];

    constructor() {
      this.items = [];
    }

    addProduct(product, price) {
      this.items.push({ product, price });
    }

    checkout() {
      if (this.items.length === 0) {
        return "Total: £0";
      } else {
        return `${this.items[0].product}: £${this.items[0].price}`;
      }
    }
  }
});
