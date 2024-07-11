describe("Supermarket", () => {
  it("prints receipt with total 0 when shopping cart is empty", () => {
    //arrange
    const register = new Register();
    //action
    const receipt = register.checkout();
    //assert
    expect(receipt).toBe("Total: £0");
  });

  class Register {
    checkout(): string {
      return "Total: £0";
    }
  }
});
